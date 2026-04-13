import pytest
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

User = get_user_model()

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def create_user():
    def make_user(**kwargs):
        return User.objects.create_user(**kwargs)
    return make_user

@pytest.mark.django_db
class TestAuthentication:
    
    def test_custom_user_creation(self, create_user):
        """Test creating a custom user with specific fields"""
        user = create_user(
            username='julian_voss',
            email='julian@theatelier.com',
            password='strongpassword123',
            telefono='+1234567890',
            es_barbero=True
        )
        assert user.email == 'julian@theatelier.com'
        assert user.es_barbero is True
        assert user.telefono == '+1234567890'
        assert user.check_password('strongpassword123') is True

    def test_registration_endpoint(self, api_client):
        """Test API endpoint for user registration via dj-rest-auth"""
        url = reverse('rest_register')
        data = {
            'username': 'newclient',
            'email': 'client@theatelier.com',
            'password': 'SecureClientPassword2023!',
            'password1': 'SecureClientPassword2023!',
            'password2': 'SecureClientPassword2023!' 
        }
        response = api_client.post(url, data, format='json')
        assert response.status_code == status.HTTP_201_CREATED
        assert 'access' in response.data or 'access_token' in response.data or response.cookies.get('my-app-auth')
        
        user_exists = User.objects.filter(email='client@theatelier.com').exists()
        assert user_exists is True

    def test_login_and_jwt_generation(self, api_client, create_user):
        """Test that login returns correct JWT cookies or tokens"""
        # Creacion de un usuario de prueba
        user = create_user(
            username='testlogin',
            email='login@theatelier.com',
            password='LoginPassword123!'
        )
        from allauth.account.models import EmailAddress
        EmailAddress.objects.create(user=user, email=user.email, primary=True, verified=True)
        
        url = reverse('rest_login')
        data = {
            'email': 'login@theatelier.com',
            'password': 'LoginPassword123!'
        }
        
        response = api_client.post(url, data, format='json')
        print("DEBUG RESPONSE DATA:", response.data)
        assert response.status_code == status.HTTP_200_OK
        
        # Validar si JWT_AUTH_COOKIE de simple jwt retorna cookies
        has_access = 'access' in response.data or response.cookies.get('my-app-auth')
        assert has_access
