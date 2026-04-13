import { create } from 'zustand';

interface AuthState {
    token: string | null;
    user: any | null;
    isAuthenticated: boolean;
    setAuth: (token: string, user: any) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem('access_token'),
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    isAuthenticated: !!localStorage.getItem('access_token'),

    setAuth: (token, user) => {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        set({ token, user, isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        set({ token: null, user: null, isAuthenticated: false });
    },
}));

export default useAuthStore;
