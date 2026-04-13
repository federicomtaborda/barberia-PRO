"""WSGI config for Barbería PRO project."""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'barberia_pro.settings')
application = get_wsgi_application()