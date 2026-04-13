from django.contrib import admin
from .models import Service, Barber, Appointment

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'duracion_minutos')
    search_fields = ('nombre',)

@admin.register(Barber)
class BarberAdmin(admin.ModelAdmin):
    list_display = ('user', 'especialidad')
    search_fields = ('user__email', 'especialidad')

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'fecha_hora', 'cliente', 'barbero', 'estado', 'get_total_price')
    list_filter = ('estado', 'barbero', 'fecha_hora')
    search_fields = ('cliente__email', 'cliente__username', 'barbero__user__email', 'barbero__user__first_name')
    date_hierarchy = 'fecha_hora'
    filter_horizontal = ('servicios',) # Para manejar ManyToMany mejor
    readonly_fields = ('created_at', 'updated_at') if hasattr(Appointment, 'created_at') else []
    
    actions = ['make_completed', 'make_cancelled']

    @admin.display(description='Precio Total')
    def get_total_price(self, obj):
        return sum(s.precio for s in obj.servicios.all())

    @admin.action(description='Marcar turnos como COMPLETADOS')
    def make_completed(self, request, queryset):
        updated = queryset.update(estado='completado')
        self.message_user(request, f'{updated} turnos han sido marcados como completados.')

    @admin.action(description='Marcar turnos como CANCELADOS')
    def make_cancelled(self, request, queryset):
        updated = queryset.update(estado='cancelado')
        self.message_user(request, f'{updated} turnos han sido marcados como cancelados.')
