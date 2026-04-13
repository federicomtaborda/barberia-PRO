import axios from 'axios';
import useBookingStore from '../store/useBookingStore';

// Esta base URL vendría de un archivo .env (.env.local, .env.production)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para agregar token JWT en el futuro
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Interceptor de errores genéricos (ej: caducidad de token)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('No autorizado, redirigir a Login');
            // useAuthStore.getState().logout()
        }
        return Promise.reject(error);
    }
);

// Ejemplo de llamadas API para el Agente de Turnos
export const bookingService = {
    getServices: () => api.get('/services'),
    getBarbers: () => api.get('/barbers'),
    createAppointment: (bookingData) => api.post('/appointments', bookingData)
};

export default api;
