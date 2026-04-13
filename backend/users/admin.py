from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'username', 'telefono', 'es_barbero', 'is_staff']
    fieldsets = UserAdmin.fieldsets + (
        ('Información de Atelier', {'fields': ('telefono', 'es_barbero')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Información de Atelier', {'fields': ('telefono', 'es_barbero')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
