from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, BarberViewSet, AppointmentViewSet

router = DefaultRouter()
router.register(r'servicios', ServiceViewSet, basename='servicio')
router.register(r'barberos', BarberViewSet, basename='barbero')
router.register(r'turnos', AppointmentViewSet, basename='turno')

urlpatterns = [
    path('', include(router.urls)),
]
