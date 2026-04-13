import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useBookingStore from '../store/useBookingStore';

const Confirmacion = () => {
    const navigate = useNavigate();
    const { 
        selectedServicesIds, 
        selectedBarberId, 
        selectedDate, 
        selectedTime, 
        getTotalAmount,
        getAvailableBarbers,
        getAvailableServices
    } = useBookingStore();

    useEffect(() => {
        if (selectedServicesIds.length === 0 || !selectedBarberId || !selectedDate || !selectedTime) {
            navigate('/seleccion');
        }
    }, [selectedServicesIds, selectedBarberId, selectedDate, selectedTime, navigate]);

    // Computed detailed data
    const totalAmount = getTotalAmount();
    const barber = getAvailableBarbers().find(b => b.id === selectedBarberId);
    
    // For simplicity, showing the first selected service as the primary one, 
    // real implementations might loop through all.
    const primaryService = getAvailableServices().find(s => s.id === selectedServicesIds[0]);

    const totalDuration = selectedServicesIds.reduce((total, id) => {
        const s = getAvailableServices().find(srv => srv.id === id);
        return total + (s ? s.duration : 0);
    }, 0);

    const handleConfirm = () => {
        // En un escenario real, aquí se llamaría a la API
        alert('¡Turno confirmado con éxito!');
        navigate('/');
    };

    return (
        <div className="bg-background min-h-screen">
            <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto animate-fade-in font-['Manrope']">
                {/* Header de Confirmación */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-primary font-label text-xs tracking-[0.2em] uppercase font-bold">Paso 3 de 3: Revisión Final</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 leading-none">
                        CONFIRMA TU<br /><span className="text-primary italic">SESIÓN</span>
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
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4uwkbFhq76ZbkBykoR6DLcjeVbHfcAzcir5X4lKi7PmW1gIbJtZr5a38NpEYc52RtVyVum60MJniOa34G56wugVhZk69suDFcZ3Ati54vbMHp0o-ev8aVzfGsClH0_1U21zBNb_VsrYP4hfPW17YDPSiu-zyGcFU9z6aAVFmjttT0JAyXFNFsE2I7v6hudnLNT91aZFMLYobU1PJK9S7REa3uDg4UBZQx8b93NNaFwjyAEH8T3UUxHmjT-lzgF85zReixGf-3jyH" 
                            />
                        </div>
                        <div className="flex flex-col justify-center flex-1 text-center md:text-left">
                            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-1">
                                {primaryService ? primaryService.name : 'Servicio Reservado'} {selectedServicesIds.length > 1 && `(+${selectedServicesIds.length - 1} más)`}
                            </h2>
                            <p className="text-primary font-label text-[10px] uppercase tracking-[0.2em] mb-4">Maestro: {barber ? barber.name : 'Desconocido'}</p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <span className="bg-surface-bright/50 px-4 py-1.5 rounded-full text-[10px] font-bold text-on-surface tracking-widest uppercase border border-white/5">{totalDuration} MIN</span>
                                <span className="bg-primary/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase border border-primary/20">${totalAmount}.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detalles de la Cita */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Fecha Seleccionada</span>
                        </div>
                        <p className="font-headline text-xl font-bold text-on-surface">
                            {selectedDate ? `${selectedDate.dayName}, ${selectedDate.dayNumber} de ${selectedDate.month}` : 'Cargando...'}
                        </p>
                        <p className="text-on-surface-variant text-sm mt-1">Temporada de Otoño 2023</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Hora de Llegada</span>
                        </div>
                        <p className="font-headline text-xl font-bold text-on-surface">{selectedTime || 'Cargando...'}</p>
                        <p className="text-on-surface-variant text-sm mt-1">Puntualidad Requerida</p>
                    </div>
                </div>

                {/* Notas Adicionales */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl mb-12 border border-outline-variant/10 italic text-on-surface-variant font-body">
                    <p className="leading-relaxed">"Preferencia por la silla junto a la ventana. El cliente busca un desvanecido medio con acabado a navaja."</p>
                </div>

                {/* Acciones Finales */}
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={handleConfirm}
                        className="w-full py-5 rounded-2xl editorial-gradient text-on-primary font-headline font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20 uppercase"
                    >
                        Confirmar Reserva
                    </button>
                    <button 
                        onClick={() => navigate('/calendario')}
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
