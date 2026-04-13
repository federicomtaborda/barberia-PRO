from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError
from django.utils import timezone
from datetime import timedelta
from django.core.validators import MinValueValidator, MaxValueValidator

User = settings.AUTH_USER_MODEL

class Barber(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='barber_profile')
    biografia = models.TextField(blank=True, null=True)
    especialidad = models.CharField(max_length=150, help_text="Ej: Fade, Tijera Crásica, Barbas")
    foto_url = models.URLField(max_length=500, blank=True, null=True)

    class Meta:
        verbose_name = 'Barbero'
        verbose_name_plural = 'Barberos'

    def __str__(self):
        return self.user.get_full_name() or self.user.email

class Service(models.Model):
    nombre = models.CharField(max_length=150)
    descripcion = models.TextField(blank=True, null=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    duracion_minutos = models.PositiveIntegerField(help_text="Duración estimada del servicio")
    imagen_url = models.URLField(max_length=500, blank=True, null=True)

    class Meta:
        verbose_name = 'Servicio'
        verbose_name_plural = 'Servicios'

    def __str__(self):
        return f"{self.nombre} - ${self.precio} ({self.duracion_minutos} min)"

class Appointment(models.Model):
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('confirmado', 'Confirmado'),
        ('completado', 'Completado'),
        ('cancelado', 'Cancelado'),
    ]

    cliente = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments_as_client')
    barbero = models.ForeignKey(Barber, on_delete=models.CASCADE, related_name='appointments_as_barber')
    servicios = models.ManyToManyField(Service, related_name='appointments')
    fecha_hora = models.DateTimeField()
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='pendiente')
    
    # Nuevos campos solicitados:
    notas_sesion = models.TextField(blank=True, null=True, help_text="Detalles técnicos de la atención. Solo lectura para cliente o staff.")
    calificacion_cliente = models.IntegerField(blank=True, null=True, validators=[MinValueValidator(1), MaxValueValidator(5)], help_text="Calificación del 1 al 5")

    class Meta:
        verbose_name = 'Turno'
        verbose_name_plural = 'Turnos'

    def clean(self):
        super().clean()
        
        # Validación de turnos superpuestos
        if self.fecha_hora and self.barbero:
            # Duración total de los servicios para calcular el fin estimado.
            # Nota: En M2M, si es nuevo (sin pk), self.servicios.all() está vacío.
            # En ese caso asumimos una duración estándar o la manejamos en el serializer.
            duracion = 30
            if self.pk:
                duracion = sum(s.duracion_minutos for s in self.servicios.all()) or 30

            tiempo_fin_estimado = self.fecha_hora + timedelta(minutes=duracion)

            # Turnos existentes del barbero para la misma fecha (ignorando cancelados)
            turnos_barbero = Appointment.objects.filter(
                barbero=self.barbero
            ).exclude(estado='cancelado').prefetch_related('servicios')

            # Si es una actualización (tiene PK), se excluye a si mismo de la comprobación
            if self.pk:
                turnos_barbero = turnos_barbero.exclude(pk=self.pk)

            for turno in turnos_barbero:
                turno_inicio = turno.fecha_hora
                # Calcular duración del turno existente
                duracion_turno = sum(s.duracion_minutos for s in turno.servicios.all()) or 30
                turno_fin = turno_inicio + timedelta(minutes=duracion_turno)
                
                # Chequea si los rangos de tiempo se cruzan
                if self.fecha_hora < turno_fin and tiempo_fin_estimado > turno_inicio:
                    raise ValidationError({
                        'fecha_hora': f"Este barbero ya tiene una cita asignada que se superpone: {turno_inicio.strftime('%H:%M')}"
                    })

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.cliente} con {self.barbero} - {self.fecha_hora.strftime('%d/%m/%Y %H:%M')}"
