from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils.dateparse import parse_date
from datetime import datetime, timedelta
import pytz

from .models import Barber, Service, Appointment
from .serializers import (
    BarberSerializer, 
    ServiceSerializer, 
    DetailedHistorySerializer, 
    AppointmentWriteSerializer
)

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)

class ServiceViewSet(viewsets.ModelViewSet):
    """
    Solo lectura para usuarios, CRUD para admin.
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsAdminOrReadOnly]

class BarberViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Solo lectura para mostrar el portfolio.
    """
    queryset = Barber.objects.all()
    serializer_class = BarberSerializer
    permission_classes = [permissions.AllowAny]

from drf_spectacular.utils import extend_schema, inline_serializer
from rest_framework import serializers

class AppointmentViewSet(viewsets.ModelViewSet):
    """
    El usuario solo ve sus propios turnos y puede crearlos.
    """
    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return DetailedHistorySerializer
        return AppointmentWriteSerializer

    def get_queryset(self):
        # Los administradores/empleados ven todo los turnos, clientes solo los suyos.
        if self.request.user.is_staff or getattr(self.request.user, 'es_barbero', False):
            return Appointment.objects.all().order_by('-fecha_hora').prefetch_related('servicios')
        return Appointment.objects.filter(cliente=self.request.user).order_by('-fecha_hora').prefetch_related('servicios')

    def perform_create(self, serializer):
        serializer.save(cliente=self.request.user)

    @extend_schema(
        responses={200: inline_serializer(
            name='DisponibilidadRes',
            fields={
                'fecha': serializers.DateField(),
                'barbero_id': serializers.IntegerField(),
                'disponibles': serializers.ListField(child=serializers.CharField())
            }
        )}
    )
    @action(detail=False, methods=['get'])
    def disponibilidad(self, request):
        """
        Calcula rangos de tiempo disponibles en un día laboral (9 a 18 por ejemplo).
        Recibe 'barbero_id' y 'fecha' en el query.
        """
        barbero_id = request.query_params.get('barbero_id')
        fecha_str = request.query_params.get('fecha')

        if not barbero_id or not fecha_str:
            return Response({"detail": "Se requiere barbero_id y fecha."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            fecha_buscada = parse_date(fecha_str) # Ej: 2023-11-20
            if not fecha_buscada:
                raise ValueError
        except ValueError:
            return Response({"detail": "Formato de fecha inválido. Use YYYY-MM-DD."}, status=status.HTTP_400_BAD_REQUEST)

        from django.conf import settings
        # Horarios base: de 9 AM a 6 PM
        tz = pytz.timezone(settings.TIME_ZONE) if hasattr(settings, 'TIME_ZONE') else pytz.UTC
        inicio_dia = datetime.combine(fecha_buscada, datetime.min.time()).replace(hour=9)
        fin_dia = datetime.combine(fecha_buscada, datetime.min.time()).replace(hour=18)
        
        turnos_ocupados = Appointment.objects.filter(
            barbero_id=barbero_id,
            fecha_hora__date=fecha_buscada
        ).exclude(estado='cancelado').order_by('fecha_hora').prefetch_related('servicios')

        # Generar slots de 30 minutos
        slots_disponibles = []
        actual = inicio_dia
        ahora = datetime.now(tz)

        while actual < fin_dia:
            slot_inicio = actual
            slot_fin = actual + timedelta(minutes=30)
            
            # Localizar slot_inicio para comparación si es necesario
            slot_inicio_aware = tz.localize(slot_inicio) if slot_inicio.tzinfo is None else slot_inicio

            # Si es hoy, ignorar horarios pasados
            if fecha_buscada == ahora.date() and slot_inicio_aware < ahora:
                actual = slot_fin
                continue
            
            # Verificar si este slot choca con algún turno ocupado
            ocupado = False
            for t in turnos_ocupados:
                # El slot está ocupado si se solapa con el turno
                turno_inicio = t.fecha_hora
                # Duración total del turno (suma de servicios)
                duracion_total = sum(s.duracion_minutos for s in t.servicios.all()) or 30
                turno_fin = turno_inicio + timedelta(minutes=duracion_total)
                
                # tz aware comparison if needed
                if slot_inicio.tzinfo is None and turno_inicio.tzinfo:
                    slot_inicio_cmp = tz.localize(slot_inicio)
                    slot_fin_cmp = tz.localize(slot_fin)
                else:
                    slot_inicio_cmp = slot_inicio
                    slot_fin_cmp = slot_fin

                if slot_inicio_cmp < turno_fin and slot_fin_cmp > turno_inicio:
                    ocupado = True
                    break
            
            if not ocupado:
                slots_disponibles.append(actual.strftime('%H:%M'))
            
            actual = slot_fin

        return Response({
            "fecha": fecha_str,
            "barbero_id": barbero_id,
            "disponibles": slots_disponibles
        })

    @action(detail=True, methods=['patch'], permission_classes=[permissions.IsAdminUser])
    def calificar_estado_notas(self, request, pk=None):
        """
        PATCH param: 'notas_sesion' o 'estado'. Solo Admins o Staff.
        """
        turno = self.get_object()
        allowed_fields = ['notas_sesion', 'estado']
        updated = False

        for field in allowed_fields:
            if field in request.data:
                setattr(turno, field, request.data[field])
                updated = True
        
        if updated:
            turno.save()
            return Response({"status": "Actualizado correctamente"})
        
        return Response({"detail": "No se enviaron campos válidos."}, status=status.HTTP_400_BAD_REQUEST)
