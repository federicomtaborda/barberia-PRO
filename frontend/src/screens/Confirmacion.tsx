import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBookingStore from '../store/useBookingStore';
import { bookingService } from '../api';
import { toast } from '../components/Toast';

const Confirmacion = () => {
    const navigate = useNavigate();
    const { 
        selectedServicesIds, 
        selectedBarberId, 
        selectedDate, 
        selectedTime, 
        getTotalAmount,
        allBarbers,
        allServices,
        resetBooking
    } = useBookingStore();

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (selectedServicesIds.length === 0 || !selectedBarberId || !selectedDate || !selectedTime) {
            navigate('/seleccion');
        }
    }, [selectedServicesIds, selectedBarberId, selectedDate, selectedTime, navigate]);

    // Computed detailed data
    const totalAmount = getTotalAmount();
    const barber = allBarbers.find(b => b.id === selectedBarberId);
    
    // Services details
    const selectedServices = allServices.filter(s => selectedServicesIds.includes(s.id));
    const primaryService = selectedServices[0];

    const totalDuration = selectedServices.reduce((total, s) => {
        return total + (s ? s.duracion_minutos : 0);
    }, 0);

    const handleConfirm = async () => {
        if (!selectedBarberId || !selectedDate || !selectedTime || selectedServicesIds.length === 0) return;

        setIsSubmitting(true);
        try {
            // Prepare data for Django
            // Note: Currently Appointment model handles ONE service. 
            // If the user selected multiple, we might need to adjust backend or just send the first one.
            // Based on backend models.py, Appointment has 'servicio' as ForeignKey (singular).
            
            const dateStr = selectedDate.dateObj.toISOString().split('T')[0];
            const dateTimeStr = `${dateStr}T${selectedTime}:00`;

            const bookingData = {
                barbero: selectedBarberId,
                servicios: selectedServicesIds, // Sending the full array of selected services
                fecha_hora: dateTimeStr,
            };

            await bookingService.createAppointment(bookingData);
            
            toast.success('¡Tu sesión en el Atelier está confirmada!');
            resetBooking();
            setTimeout(() => navigate('/perfil'), 2000);
        } catch (err) {
            console.error("Error confirming appointment:", err);
            toast.error('No pudimos confirmar tu turno. Por favor intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-background min-h-screen">
            <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto animate-fade-in font-['Manrope']">
                {/* Header de Confirmación */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-[#F2CA50]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-[#F2CA50] font-label text-xs tracking-[0.2em] uppercase font-bold">Paso 3 de 3: Revisión Final</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
                        CONFIRMA TU<br /><span className="text-[#F2CA50] italic">SESIÓN</span>
                    </h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-body">
                        Verifica los detalles de tu ritual de excelencia antes de asegurar tu silla en el atelier.
                    </p>
                </header>

                {/* Resumen del Servicio */}
                <div className="bg-surface-container-low rounded-2xl p-6 mb-8 border border-white/5 shadow-2xl overflow-hidden relative group">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 group">
                            <img 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                                alt="Service Details" 
                                src={primaryService?.imagen_url || "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop"} 
                            />
                        </div>
                        <div className="flex flex-col justify-center flex-1 text-center md:text-left">
                            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-1">
                                {primaryService ? primaryService.nombre : 'Servicio Reservado'} {selectedServicesIds.length > 1 && `(+${selectedServicesIds.length - 1} más)`}
                            </h2>
                            <p className="text-[#F2CA50] font-label text-[10px] uppercase tracking-[0.2em] mb-4">Maestro: {barber ? barber.nombre_completo : 'Especialista'}</p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <span className="bg-surface-bright/50 px-4 py-1.5 rounded-full text-[10px] font-bold text-on-surface tracking-widest uppercase border border-white/5">{totalDuration} MIN</span>
                                <span className="bg-[#F2CA50]/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-[#F2CA50] tracking-widest uppercase border border-[#F2CA50]/20">${totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detalles de la Cita */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-[#F2CA50] text-xl">calendar_month</span>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Fecha Seleccionada</span>
                        </div>
                        <p className="font-headline text-xl font-bold text-on-surface">
                            {selectedDate ? `${selectedDate.dayName}, ${selectedDate.dayNumber} de ${selectedDate.month}` : 'Cargando...'}
                        </p>
                        <p className="text-on-surface-variant text-sm mt-1">Garantía de Excelencia</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-[#F2CA50] text-xl">schedule</span>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Hora de Llegada</span>
                        </div>
                        <p className="font-headline text-xl font-bold text-on-surface">{selectedTime || 'Cargando...'}</p>
                        <p className="text-on-surface-variant text-sm mt-1">Puntualidad Requerida</p>
                    </div>
                </div>

                {/* Acciones Finales */}
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={handleConfirm}
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-2xl bg-[#F2CA50] text-neutral-950 font-headline font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#F2CA50]/20 uppercase disabled:opacity-50"
                    >
                        {isSubmitting ? 'Confirmando...' : 'Confirmar Reserva'}
                    </button>
                    <button 
                        onClick={() => navigate('/calendario')}
                        disabled={isSubmitting}
                        className="w-full py-4 text-on-surface-variant font-label text-xs font-bold uppercase tracking-[0.2em] hover:text-on-surface transition-colors"
                    >
                        Modificar Cita
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Confirmacion;
