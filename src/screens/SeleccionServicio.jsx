import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ChromaticImage from '../components/ChromaticImage';
import useBookingStore from '../store/useBookingStore';

const servicesData = [
  {
    id: 's1',
    name: 'Classic Cut',
    price: 45,
    duration: 45, // in minutes
    description: 'A precision-based haircut tailored to your head shape. Includes a refreshing wash, artisanal scalp massage, and expert styling with our signature products.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9e0FAwbINTPTgrRDO-Wo-_YPxJnFd9FIOfNrmZxvKYuY0QEUQClRr8fOB2uHoc8nH-3qjj1HBMn5y0VUGpaK-41tmpNhUVzl1VnxOB2iVhERfY9HSWf6-E9rzfRm4FZzi_007zDFCTWcjgAIZPFU_pcS8mDtNh49xCslEtDjLNnYT4cx2CMdyOxw-AI7kTfLx6L9YSDgXSWJgE1QlWXTIZ-waZe1pZfLqL2LKL8-Ho3W9PaQgkk7FljJwf7NdMf4P3qQS5C0bVS29',
    imageAlt: 'close-up of a sharp classic haircut with clean fade and textured top in a moody luxury barbershop'
  },
  {
    id: 's2',
    name: 'Royal Beard Trim',
    price: 35,
    duration: 30,
    description: 'The ultimate grooming experience for your beard. Sculpting, hot towel treatment, and straight-razor detailing finished with premium oils.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGokrtG6loFpj7C5YlDmcttnTIfJQGaZyHDKX0njHIXXRcRK0D8jCUGTe6Ngrc6a2SREouiDNcmfEh3vBgcbgnDezGOwT2LzdVY7GJUQMjP3VpOQznN3ncmJCdY-hp4eqxek8YQnw08cfLrzsy6tkfi9hhoi7mcXtGU9_y1w4CWw8rEqeo3I0_rnjFXf6SDAljm7rqWJKF-pSVuQ-Cx-D7vsMCPy9Sqp33_CmLsk45hvVnKuI8Il-Jk8rVO8pYxyMU_DcZJxdhu6U',
    imageAlt: 'close-up of a professional beard trim using a straight razor with steam and luxury shaving cream'
  },
  {
    id: 's3',
    name: 'Facial Treatment',
    price: 55,
    duration: 50,
    description: "Deep pore cleansing, exfoliation, and hydration mask designed specifically for men's skin. Includes a neck and shoulder tension release.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5r-QWSLFV3SecTAIXzz_vNH2rkQxUV0scysJ_4xT7guItJyUiauYJapeJB2pdAF_zotYi4imE7k6P5oTXt98WI6D63-4RTvluQgXVRyneGCm0qNt3smXsRQ2FX_nPqLHg8P3Q2KyjgL_SkU41O65gdINrkJJWv43pWSzYzPE5Gx5eE13BLlmR_84iVSZR_8p_u3-mmgG8K14Hv_xV5SPJ2StKpZ6e_0oSGyfM2bMXf3lX9AUvn8bOD3erzW4wGWTn6G2rQgnpXK1',
    imageAlt: 'top view of a customer receiving a luxury facial treatment with warm towels and high-end skincare products'
  }
];

const SeleccionServicio = () => {
    const navigate = useNavigate();
    const { 
        selectedServicesIds, 
        toggleService, 
        getTotalAmount 
    } = useBookingStore();

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
                        Select Your <span className="text-[#F2CA50]">Craft</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
                        Precision meets artistry. Choose the treatment that defines your character.
                    </p>
                </section>
                
                {/* Services Bento/List Layout */}
                <div className="space-y-6">
                    {servicesData.map((service) => {
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
                                            src={service.image} 
                                            alt={service.name}
                                            forceColor={isSelected}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className={`font-headline text-2xl font-semibold tracking-tight transition-colors ${isSelected ? 'text-[#F2CA50]' : 'text-on-surface'}`}>
                                                {service.name}
                                            </h3>
                                            <span className={`font-headline text-xl font-bold ${isSelected ? 'text-[#F2CA50]' : 'text-on-surface-variant'}`}>
                                                ${service.price}
                                            </span>
                                        </div>
                                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed max-w-prose">
                                            {service.description}
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
                                                {isSelected ? 'Selected' : 'Select Service'}
                                            </button>
                                            <span className="text-[10px] tracking-widest uppercase text-on-surface-variant/40 font-medium whitespace-nowrap">
                                                {service.duration} Minutes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
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
                        ${totalAmount}.00
                    </p>
                </div>
                <button 
                    onClick={handleContinue}
                    disabled={selectedServicesIds.length === 0}
                    className="bg-[#F2CA50] text-neutral-950 px-8 py-3 rounded-xl font-bold font-label uppercase tracking-widest text-xs transition-all duration-400 active:scale-95 shadow-lg shadow-[#F2CA50]/20 hover:bg-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Reservar Turno
                </button>
            </div>

        </div>
    );
};

export default SeleccionServicio;
