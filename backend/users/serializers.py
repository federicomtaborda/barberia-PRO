from rest_framework import serializers
from django.contrib.auth import get_user_model
from dj_rest_auth.registration.serializers import RegisterSerializer

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'telefono', 'es_barbero')
        read_only_fields = ('id', 'es_barbero')

class RegisterSerializer(RegisterSerializer):
    telefono = serializers.CharField(required=False)
    es_barbero = serializers.BooleanField(default=False)

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['telefono'] = self.validated_data.get('telefono', '')
        data['es_barbero'] = self.validated_data.get('es_barbero', False)
        return data

    def save(self, request):
        user = super().save(request)
        user.telefono = self.cleaned_data.get('telefono')
        user.es_barbero = self.cleaned_data.get('es_barbero')
        user.save()
        return user
