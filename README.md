# Backend de Barbería PRO

## Entorno Virtual

```bash
# Crear entorno virtual
python3 -m venv venv

# Activar
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Instalar dependencias
pip install django djangorestframework djangorestframework-simplejwt dj-rest-auth django-allauth django-cors-headers pytest pytest-django google-auth

# Generar requirements.txt
pip freeze > requirements.txt
```

## Estructura del Proyecto

```
backend/
├── manage.py
├── barberia_pro/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── users/
│   ├── __init__.py
│   ├── models.py
│   ├── apps.py
│   ├── admin.py
│   └── tests/
│       └── __init__.py
├── core/
│   ├── __init__.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── apps.py
└── requirements.txt
```

## Ejecución

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

## Tests

```bash
pytest
```