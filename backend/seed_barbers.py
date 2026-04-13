import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'barberia_pro.settings')
django.setup()

from django.contrib.auth import get_user_model
from core.models import Barber

User = get_user_model()

def seed_barbers():
    barbers_data = [
        {
            'username': 'marco_barbiere',
            'first_name': 'Marco',
            'last_name': 'Barbiere',
            'email': 'marco@theatelier.pro',
            'especialidad': 'Maestro de la Navaja & Old School',
            'biografia': 'Más de 15 años de experiencia en barbería clásica italiana.',
            'foto_url': 'https://images.unsplash.com/photo-1593702275677-f916c8c7604d?q=80&w=1470&auto=format&fit=crop'
        },
        {
            'username': 'luca_styler',
            'first_name': 'Luca',
            'last_name': 'Styler',
            'email': 'luca@theatelier.pro',
            'especialidad': 'Fade & Contemporary Cuts',
            'biografia': 'Especialista en degradados modernos y tendencias urbanas.',
            'foto_url': 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=1470&auto=format&fit=crop'
        }
    ]

    for data in barbers_data:
        user, created = User.objects.get_or_create(
            username=data['username'],
            defaults={
                'email': data['email'],
                'first_name': data['first_name'],
                'last_name': data['last_name'],
                'es_barbero': True
            }
        )
        if created:
            user.set_password('Atelier2026!')
            user.save()
            print(f"Created user {user.username}")
        
        barber, b_created = Barber.objects.get_or_create(
            user=user,
            defaults={
                'especialidad': data['especialidad'],
                'biografia': data['biografia'],
                'foto_url': data['foto_url']
            }
        )
        if b_created:
            print(f"Created barber profile for {user.get_full_name()}")
        else:
            print(f"Barber profile for {user.get_full_name()} already exists")

if __name__ == "__main__":
    seed_barbers()
