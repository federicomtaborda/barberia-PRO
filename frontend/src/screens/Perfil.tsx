import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { bookingService } from '../api';
import useAuthStore from '../store/useAuthStore';

const Perfil = () => {
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useAuthStore();
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Initial check and fetch
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await bookingService.getAppointments();
                const data = response.data.results || response.data;
                setAppointments(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Calcular próxima cita
    const nextAppointment = appointments
        .filter(app => app.estado === 'pendiente' || app.estado === 'confirmado')
        .sort((a, b) => new Date(a.fecha_hora).getTime() - new Date(b.fecha_hora).getTime())[0];

    // Historial (completados)
    const history = appointments
        .filter(app => app.estado === 'completado' || app.estado === 'pagado')
        .sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime());

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('es-AR', { month: 'short' }).toUpperCase(),
            full: date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
        };
    };

    const userDisplayName = user?.username || user?.email?.split('@')[0] || 'Cliente';

    return (
        <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Hero Profile Section */}
            <section className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-primary font-headline tracking-widest uppercase text-xs font-bold mb-2 block">Bienvenido de nuevo</span>
                        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none text-on-surface capitalize">
                            {userDisplayName}
                        </h2>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">Miembro Atelier</span>
                            <span className="text-on-surface-variant text-sm font-medium">{user?.email}</span>
                        </div>
                    </div>
                    
                    {nextAppointment ? (
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold">Próxima Cita</p>
                            <div className="bg-neutral-900 p-4 rounded-xl flex items-center gap-4 border border-white/5 shadow-2xl">
                                <div className="bg-[#F2CA50] text-neutral-950 w-12 h-12 rounded-lg flex flex-col items-center justify-center">
                                    <span className="text-[10px] font-bold leading-none">{formatDate(nextAppointment.fecha_hora).month}</span>
                                    <span className="text-xl font-black leading-none">{formatDate(nextAppointment.fecha_hora).day}</span>
                                </div>
                                <div>
                                    <p className="font-headline font-bold text-on-surface uppercase tracking-tight">{nextAppointment.servicio_nombre}</p>
                                    <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">
                                        {new Date(nextAppointment.fecha_hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Artisan: {nextAppointment.barbero_nombre}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-start md:items-end">
                             <Link 
                                to="/seleccion"
                                className="bg-[#F2CA50] text-neutral-950 px-6 py-3 rounded-xl font-headline font-bold text-xs tracking-widest uppercase active:scale-95 transition-all"
                            >
                                Reservar Turno
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Bento Grid Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Datos de contacto (Left Col) */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-neutral-900/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2 uppercase tracking-tight">
                            <span className="material-symbols-outlined text-[#F2CA50]">account_circle</span>
                            Datos de Cuenta
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block mb-2">Email de contacto</label>
                                <p className="text-on-surface font-body text-sm font-semibold">{user?.email}</p>
                            </div>
                            <div>
                                <label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block mb-2">Teléfono</label>
                                <p className="text-on-surface font-body text-sm font-semibold">{user?.telefono || 'No especificado'}</p>
                            </div>
                            <div className="pt-4">
                                <button 
                                    onClick={handleLogout}
                                    className="w-full py-3 rounded-xl border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-500/5 transition-all"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Loyalty Status Placeholder */}
                    <div className="bg-gradient-to-br from-[#F2CA50]/20 to-neutral-900 p-[1px] rounded-3xl overflow-hidden">
                        <div className="bg-neutral-950 p-8 rounded-[1.35rem] h-full">
                            <div className="flex justify-between items-start mb-4">
                                <span className="material-symbols-outlined text-[#F2CA50] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <span className="text-[#F2CA50] font-headline font-bold text-2xl">Premium</span>
                            </div>
                            <h4 className="text-sm font-headline font-bold text-on-surface mb-2 uppercase tracking-widest">Nivel de Cliente</h4>
                            <p className="text-on-surface-variant text-xs mb-4">Acceso prioritario a barberos senior y eventos exclusivos del Atelier.</p>
                        </div>
                    </div>
                </div>

                {/* Historial de Cortes (Middle/Right Col) */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-neutral-900/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 min-h-[400px]">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-headline font-bold text-on-surface flex items-center gap-2 uppercase tracking-tight">
                                <span className="material-symbols-outlined text-[#F2CA50]">history</span>
                                Mi Historial
                            </h3>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center h-48">
                                <div className="w-8 h-8 border-4 border-[#F2CA50]/20 border-t-[#F2CA50] rounded-full animate-spin"></div>
                            </div>
                        ) : history.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {history.map((item) => (
                                    <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-5 hover:border-[#F2CA50]/30 transition-all">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <span className="text-[10px] text-[#F2CA50] font-bold uppercase tracking-widest">
                                                    {formatDate(item.fecha_hora).full}
                                                </span>
                                                <span className="material-symbols-outlined text-neutral-600 text-sm">verified</span>
                                            </div>
                                            <div>
                                                <h4 className="text-on-surface font-headline font-bold text-lg uppercase tracking-tight">{item.servicio_nombre}</h4>
                                                <p className="text-on-surface-variant text-xs mt-1">Sesión con <b>{item.barbero_nombre}</b></p>
                                            </div>
                                            <div className="mt-2 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#F2CA50]">
                                                <span>Finalizado</span>
                                                <span>$ {item.precio_cobrado}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                                <span className="material-symbols-outlined text-neutral-700 text-5xl">content_cut</span>
                                <div className="space-y-1">
                                    <p className="text-on-surface font-headline font-bold uppercase">Sin registros aún</p>
                                    <p className="text-on-surface-variant text-sm max-w-[240px]">Tus sesiones completadas aparecerán aquí para que puedas repetir tus estilos favoritos.</p>
                                </div>
                            </div>
                        )}

                        {/* Recent Notes Display */}
                        {history.some(h => h.notas_sesion) && (
                            <div className="mt-8 space-y-4">
                                <label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block">Últimas Notas del Artisan</label>
                                <div className="bg-neutral-950 p-6 rounded-2xl border-l-4 border-[#F2CA50]/40 italic">
                                    <p className="text-on-surface-variant text-sm leading-relaxed">
                                        "{history.find(h => h.notas_sesion)?.notas_sesion}"
                                    </p>
                                    <p className="text-on-surface text-xs font-bold mt-3 not-italic">— {history.find(h => h.notas_sesion)?.barbero_nombre}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Action */}
                    <Link 
                        to="/seleccion"
                        className="bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 p-8 rounded-3xl flex items-center justify-between border border-white/5 text-on-surface group shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-[#F2CA50]/10 rounded-full flex items-center justify-center text-[#F2CA50]">
                                <span className="material-symbols-outlined text-3xl">add_task</span>
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-xl uppercase tracking-tight">Programar Nueva Visita</h4>
                                <p className="text-on-surface-variant text-sm">Elige tu barbero y servicio para tu próxima experiencia.</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-[#F2CA50] group-hover:translate-x-2 transition-transform">arrow_forward_ios</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Perfil;
