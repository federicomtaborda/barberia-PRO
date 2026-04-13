import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChromaticImage from '../components/ChromaticImage';
import useBookingStore from '../store/useBookingStore';
import { bookingService } from '../api';
import { components } from '../types/schema';

type Service = components['schemas']['Service'];

const SeleccionServicio = () => {
    const navigate = useNavigate();
    const { 
        selectedServicesIds, 
        toggleService, 
        getTotalAmount,
        setAllServices
    } = useBookingStore();

    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await bookingService.getServices();
                const data = (res.data as any).results || res.data;
                setServices(data);
                setAllServices(data); // Sync with store for calculations
            } catch (err) {
                console.error("Error fetching services:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, [setAllServices]);

    const totalAmount = getTotalAmount();

    const handleContinue = () => {
        if (selectedServicesIds.length > 0) {
            navigate('/calendario');
        }
    };

    return (
        <div className="relative min-h-screen bg-background">
            <main className="pt-24 pb-48 px-6 max-w-4xl mx-auto">
                {/* Header Section */}
                <section className="mb-12">
                    <span className="text-[#F2CA50] font-label text-xs tracking-[0.3em] uppercase mb-2 block">Step 01</span>
                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface leading-none mb-4">
                        Selecciona tu <span className="text-[#F2CA50]">Tratamiento</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
                        Precisión y arte se encuentran. Elige el servicio que define tu estilo.
                    </p>
                </section>
                
                {/* Services List */}
                {loading ? (
                    <div className="flex justify-center p-12 text-[#F2CA50]">Cargando carta de servicios...</div>
                ) : (
                    <div className="space-y-6">
                        {services.map((service) => {
                            const isSelected = selectedServicesIds.includes(service.id);
                            
                            return (
                                <div 
                                    key={service.id}
                                    onClick={() => toggleService(service.id)}
                                    className={`group relative rounded-xl p-6 transition-all duration-400 ease-out inner-shadow-outline-variant-15 cursor-pointer 
                                        ${isSelected 
                                            ? 'bg-surface-variant border-2 border-[#F2CA50]' 
                                            : 'bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest hover:border-[#F2CA50]/30'
                                        }`}
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className={`w-full md:w-32 h-32 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest transition-transform duration-700 ${isSelected ? 'scale-105 shadow-xl' : ''}`}>
                                            <ChromaticImage 
                                                src={service.imagen_url || ''} 
                                                alt={service.nombre}
                                                forceColor={isSelected}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-headline text-2xl font-semibold tracking-tight transition-colors ${isSelected ? 'text-[#F2CA50]' : 'text-on-surface'}`}>
                                                    {service.nombre}
                                                </h3>
                                                <span className={`font-headline text-xl font-bold ${isSelected ? 'text-[#F2CA50]' : 'text-on-surface-variant'}`}>
                                                    ${service.precio}
                                                </span>
                                            </div>
                                            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed max-w-prose">
                                                {service.descripcion}
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <button 
                                                    className={`text-[10px] tracking-widest uppercase font-bold flex items-center gap-1 transition-colors
                                                        ${isSelected ? 'text-[#F2CA50]' : 'text-on-surface-variant group-hover:text-[#F2CA50]'}`
                                                    }
                                                >
                                                    <span 
                                                        className="material-symbols-outlined text-xs" 
                                                        style={isSelected ? { fontVariationSettings: "'FILL' 1" } : {}}
                                                    >
                                                        {isSelected ? 'check_circle' : 'add_circle'}
                                                    </span>
                                                    {isSelected ? 'Seleccionado' : 'Añadir Servicio'}
                                                </button>
                                                <span className="text-[10px] tracking-widest uppercase text-on-surface-variant/40 font-medium whitespace-nowrap">
                                                    {service.duracion_minutos} Minutos
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            {/* Sticky Summary Bar */}
            <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-xl bg-neutral-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center justify-between border transition-all duration-500 z-40
                ${selectedServicesIds.length > 0 ? 'translate-y-0 opacity-100 border-[#F2CA50]/30' : 'translate-y-10 opacity-0 pointer-events-none border-outline-variant/20'}
            `}>
                <div>
                    <p className="text-[10px] tracking-widest text-on-surface-variant uppercase mb-1">
                        {selectedServicesIds.length} {selectedServicesIds.length === 1 ? 'Servicio' : 'Servicios'}
                    </p>
                    <p className="font-headline text-2xl font-bold text-[#F2CA50]">
                        ${totalAmount.toFixed(2)}
                    </p>
                </div>
                <button 
                    onClick={handleContinue}
                    disabled={selectedServicesIds.length === 0}
                    className="bg-[#F2CA50] text-neutral-950 px-8 py-3 rounded-xl font-bold font-label uppercase tracking-widest text-xs transition-all duration-400 active:scale-95 shadow-lg shadow-[#F2CA50]/20 hover:bg-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Continuar al Calendario
                </button>
            </div>
        </div>
    );
};

export default SeleccionServicio;
