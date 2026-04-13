from rest_framework import serializers
from django.contrib.auth import get_user_model
from core.models import Barber, Service, Appointment
from django.utils import timezone

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'telefono', 'es_barbero']

class BarberSerializer(serializers.ModelSerializer):
    nombre_completo = serializers.SerializerMethodField()

    class Meta:
        model = Barber
        fields = ['id', 'nombre_completo', 'biografia', 'especialidad', 'foto_url']

    def get_nombre_completo(self, obj):
        return str(obj)

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class DetailedHistorySerializer(serializers.ModelSerializer):
    """
    Serializador enriquecido para el historial del perfil del cliente.
    """
    barbero_nombre = serializers.SerializerMethodField()
    servicio_nombre = serializers.SerializerMethodField()
    precio_cobrado = serializers.SerializerMethodField()
    servicios_detalles = ServiceSerializer(source='servicios', many=True, read_only=True)

    class Meta:
        model = Appointment
        fields = ['id', 'fecha_hora', 'servicio_nombre', 'precio_cobrado', 'barbero_nombre', 'notas_sesion', 'estado', 'calificacion_cliente', 'servicios_detalles']

    def get_barbero_nombre(self, obj):
        return str(obj.barbero)

    def get_servicio_nombre(self, obj):
        servicios = obj.servicios.all()
        if not servicios:
            return "Sin servicio"
        if len(servicios) == 1:
            return servicios[0].nombre
        return f"{servicios[0].nombre} (+{len(servicios)-1} más)"

    def get_precio_cobrado(self, obj):
        return sum(s.precio for s in obj.servicios.all())

class AppointmentWriteSerializer(serializers.ModelSerializer):
    # Usamos primary_key_related_field o similar para recibir los IDs de servicios
    servicios = serializers.PrimaryKeyRelatedField(many=True, queryset=Service.objects.all())

    class Meta:
        model = Appointment
        fields = ['barbero', 'servicios', 'fecha_hora', 'notas_sesion', 'calificacion_cliente']

    def validate(self, data):
        fecha_hora = data.get('fecha_hora')
        if fecha_hora and fecha_hora < timezone.now():
            raise serializers.ValidationError({"fecha_hora": "No puedes reservar un turno en el pasado."})
        
        if not data.get('servicios'):
            raise serializers.ValidationError({"servicios": "Debes seleccionar al menos un servicio."})

        return data

    def create(self, validated_data):
        servicios = validated_data.pop('servicios')
        # El cliente es inyectado por el ViewSet antes de guardar
        # pero aquí en create, validated_data ya debería tener 'cliente' si se pasó correctamente
        
        instance = Appointment.objects.create(**validated_data)
        instance.servicios.set(servicios)
        
        # Opcional: Llamar a clean() requiere que la instancia ya tenga servicios para validar duración real.
        # Pero clean() lo llamamos usualmente antes de save.
        # Para M2M es mejor validar en el Serializer.
        return instance
