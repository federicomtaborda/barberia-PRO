import axios from 'axios';
import { paths } from '../types/schema';

// Esta base URL vendría de un archivo .env (.env.local, .env.production)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para agregar token JWT
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
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
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            // Podríamos disparar un evento o usar el store aquí si fuera necesario
        }
        return Promise.reject(error);
    }
);

// Definición de tipos convenientes basados en el esquema
type Service = paths['/api/servicios/']['get']['responses'][200]['content']['application/json'];
type Barber = paths['/api/barberos/']['get']['responses'][200]['content']['application/json'];
type AppointmentCreate = paths['/api/turnos/']['post']['requestBody']['content']['application/json'];

// Llamadas API Tipadas
export const bookingService = {
    // Auth
    login: (credentials: any) => api.post('/auth/login/', credentials),
    register: (userData: any) => api.post('/auth/registration/', userData),
    
    // Core
    getServices: () => api.get<Service>('/servicios/'),
    getBarbers: () => api.get<Barber>('/barberos/'),
    createAppointment: (bookingData: AppointmentCreate) => api.post('/turnos/', bookingData),
    getAppointments: () => api.get('/turnos/'),
    getDisponibilidad: (barbero_id: number, fecha: string) => 
        api.get('/turnos/disponibilidad/', { params: { barbero_id, fecha } })
};

export default api;
