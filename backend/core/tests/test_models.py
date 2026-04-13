import pytest
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.core.exceptions import ValidationError
from datetime import timedelta
from core.models import Barber, Service, Appointment

User = get_user_model()

@pytest.fixture
def base_data():
    cliente = User.objects.create_user(username='cliente1', email='cli@b.com', password='pwd')
    barber_user = User.objects.create_user(username='barber1', email='barber@b.com', password='pwd', es_barbero=True)
    barber = Barber.objects.create(user=barber_user, especialidad='Master Barber')
    service = Service.objects.create(nombre='Corte Clásico', precio=45.0, duracion_minutos=45)
    return {
        'cliente': cliente,
        'barbero': barber,
        'servicio': service
    }

@pytest.mark.django_db
class TestAppointmentModels:
    def test_appointment_creation(self, base_data):
        now = timezone.now() + timedelta(days=1)
        turno = Appointment.objects.create(
            cliente=base_data['cliente'],
            barbero=base_data['barbero'],
            servicio=base_data['servicio'],
            fecha_hora=now
        )
        assert Appointment.objects.count() == 1
        assert turno.estado == 'pendiente'

    def test_overlapping_appointments_rejected(self, base_data):
        now = timezone.now() + timedelta(days=1)
        
        # Turno 1: 10:00 -> 10:45
        _ = Appointment.objects.create(
            cliente=base_data['cliente'],
            barbero=base_data['barbero'],
            servicio=base_data['servicio'],
            fecha_hora=now
        )

        # Turno 2: Si intento añadir otro turno a las 10:20 (se solapa)
        solapado_time = now + timedelta(minutes=20)
        
        turno_invalido = Appointment(
            cliente=base_data['cliente'],
            barbero=base_data['barbero'],
            servicio=base_data['servicio'],
            fecha_hora=solapado_time
        )
        with pytest.raises(ValidationError) as exc_info:
            turno_invalido.save()
        
        assert "superpone" in str(exc_info.value)
