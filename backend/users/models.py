from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # En AllAuth preferimos que el login sea por email
    email = models.EmailField(unique=True, max_length=255)
    telefono = models.CharField(max_length=20, blank=True, null=True, help_text="Teléfono de contacto del usuario")
    es_barbero = models.BooleanField(default=False, help_text="True si este usuario es un profesional Barber de The Atelier")

    def __str__(self):
        return f"{self.email} - {'Barber' if self.es_barbero else 'Client'}"
