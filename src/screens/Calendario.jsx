import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const barbers = [
    { id: 1, name: 'Julian Vance', title: 'Master Barber', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvKzXbpI3ZAG_1qY2ZHAXqwepzsHS7EYM8jM_RL9eHTbD35OsL4aLGO7YULqMQ-BLw1e3SSqpRDad34tAkgVDNOnO4gJcfXhwLNEyAkcV43qPgspIv4kWOkKjU_0yRR2O5Ps4n4gRN-NN6qxbac8Z5-TH_CGiEXwt4xSH-42o_L_5nRpFWeiU7q7NmcoPFfgQ3ltEj6-vzm9i1gY2t6PZPDlsT1GqXoK6k6GzSp4HgBn-3bK9ewFJaBEuMwHRVzHEh-cTEYue01rbS' },
    { id: 2, name: 'Marcus Sterling', title: 'Senior Stylist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7-aLsGXB6YS_eVW0Jzm686bXAZs1Oc4UNGZfcAQBlJIVmprlqPXHpzq0I0vTew4q86V22fQBrZ824khCX7rvgFBOjRKZWqxIbWbFq1abWKkogByNAuav20kVNZOL5_c0oviiNUhLuoiKVce4q9qzKpELb32CThpCgTBuWndJSc_pFY6YSTxf6JYos1w0OqyugjYWF1jr1Udf75_OG54NcrbrAOloMgHTVlyR4zJ8OkSDd_7CWOiOOWsJMPEStwvBA_vaPqd1EYZ7I' },
];

const availableTimeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:30 PM', '04:00 PM', '05:00 PM'
];

// Helper to get dates for the week
const getNextDays = (days) => {
    const dates = [];
    const today = new Date();
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    for (let i = 0; i < days; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        // skip sundays for barber shop maybe? Let's assume open every day for now
        dates.push({
            dateObj: nextDate,
            dayName: i === 0 ? 'Hoy' : dayNames[nextDate.getDay()],
            dayNumber: nextDate.getDate(),
            month: monthNames[nextDate.getMonth()]
        });
    }
    return dates;
};

const Calendario = () => {
    const [selectedBarber, setSelectedBarber] = useState(barbers[0].id);
    const [selectedDate, setSelectedDate] = useState(getNextDays(7)[0]);
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate();

    const dates = getNextDays(14);

    const handleContinue = () => {
        if (selectedDate && selectedTime && selectedBarber) {
            navigate('/confirmacion');
        }
    };

    return (
        <div className="relative min-h-screen bg-background">
            <main className="pt-24 pb-48 px-6 max-w-4xl mx-auto">
                <section className="mb-12">
                    <span className="text-[#F2CA50] font-label text-xs tracking-[0.3em] uppercase mb-2 block">Step 02</span>
                    <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface leading-none mb-4">
                        Programa tu <span className="text-[#F2CA50]">Cita</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
                        Selecciona el artista de tu elección y encuentra el horario perfecto para tu ritual.
                    </p>
                </section>

                <div className="space-y-12">
                    {/* Barber Selection */}
                    <section>
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#F2CA50]">content_cut</span>
                            Elige a tu Maestro
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {barbers.map(barber => (
                                <div 
                                    key={barber.id}
                                    onClick={() => setSelectedBarber(barber.id)}
                                    className={`group relative rounded-xl p-4 transition-all duration-400 ease-out cursor-pointer flex items-center gap-4 inner-shadow-outline-variant-15
                                        ${selectedBarber === barber.id 
                                            ? 'bg-surface-variant border-2 border-[#F2CA50]' 
                                            : 'bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest hover:border-[#F2CA50]/30'
                                        }`}
                                >
                                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#F2CA50]/20">
                                        <img src={barber.image} alt={barber.name} className={`w-full h-full object-cover transition-all duration-500 ${selectedBarber === barber.id ? 'grayscale-0' : 'grayscale'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-bold text-lg text-on-surface">{barber.name}</h4>
                                        <p className="text-xs text-[#F2CA50] font-label tracking-widest uppercase">{barber.title}</p>
                                    </div>
                                    {selectedBarber === barber.id && (
                                        <span className="material-symbols-outlined text-[#F2CA50] absolute right-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Date Selection */}
                    <section>
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#F2CA50]">calendar_month</span>
                            Selecciona la Fecha
                        </h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
                            {dates.map((d, index) => {
                                const isSelected = selectedDate.dayNumber === d.dayNumber && selectedDate.month === d.month;
                                return (
                                    <div 
                                        key={index}
                                        onClick={() => { setSelectedDate(d); setSelectedTime(null); }} // Reset time when day changes
                                        className={`snap-center shrink-0 w-24 h-32 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border-2 inner-shadow-outline-variant-15
                                            ${isSelected 
                                                ? 'bg-[#F2CA50] text-neutral-950 border-[#F2CA50] scale-105 shadow-[0_0_20px_rgba(242,202,80,0.2)]' 
                                                : 'bg-surface-container-low text-on-surface-variant border-transparent hover:bg-surface-container-highest hover:border-[#F2CA50]/30'
                                            }`}
                                    >
                                        <span className={`text-xs font-label uppercase tracking-widest mb-2 ${isSelected ? 'text-neutral-800' : 'text-neutral-500'}`}>{d.month}</span>
                                        <span className={`text-3xl font-headline font-bold mb-1 ${isSelected ? 'text-neutral-950' : 'text-on-surface'}`}>{d.dayNumber}</span>
                                        <span className={`text-sm font-label font-semibold ${isSelected ? 'text-neutral-800' : 'text-neutral-400'}`}>{d.dayName}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Time Selection */}
                    <section>
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#F2CA50]">schedule</span>
                            Selecciona el Horario
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {availableTimeSlots.map((time) => (
                                <div 
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-4 rounded-xl text-center cursor-pointer font-bold font-headline transition-all duration-300 border-2 inner-shadow-outline-variant-15 hover:-translate-y-1
                                        ${selectedTime === time 
                                            ? 'bg-surface-variant border-[#F2CA50] text-[#F2CA50] shadow-[0_4px_20px_rgba(242,202,80,0.15)]' 
                                            : 'bg-surface-container-low text-on-surface-variant border-transparent hover:border-[#F2CA50]/30 hover:text-white'
                                        }`}
                                >
                                    {time}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* Sticky Summary Bar */}
            <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-xl bg-neutral-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center justify-between border transition-all duration-500 z-40
                ${selectedTime && selectedDate ? 'translate-y-0 opacity-100 border-[#F2CA50]/30' : 'translate-y-10 opacity-0 pointer-events-none border-outline-variant/20'}
            `}>
                <div className="flex flex-col">
                    <p className="text-[10px] tracking-widest text-[#F2CA50] uppercase mb-1 font-bold">Resumen de Cita</p>
                    <p className="font-headline text-xl font-bold text-white flex items-center gap-2">
                        {selectedDate.dayName} {selectedDate.dayNumber} {selectedDate.month} 
                        <span className="text-neutral-500 font-normal">|</span> 
                        {selectedTime}
                    </p>
                </div>
                <button 
                    onClick={handleContinue}
                    disabled={!selectedTime}
                    className="bg-[#F2CA50] text-neutral-950 px-8 py-3 rounded-xl font-bold font-label uppercase tracking-widest text-xs transition-all duration-400 active:scale-95 shadow-lg shadow-[#F2CA50]/20 hover:bg-[#D4AF37]"
                >
                    Confirmar
                </button>
            </div>
            
            {/* Bottom Navigation Shell for Mobile Layout matching */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-neutral-950/80 backdrop-blur-lg rounded-t-2xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] md:hidden">
                <Link to="/" className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400">
                    <span className="material-symbols-outlined mb-1">home_max</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Inicio</span>
                </Link>
                <Link to="/seleccion" className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400">
                    <span className="material-symbols-outlined mb-1">content_cut</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Servicios</span>
                </Link>
                <Link to="/calendario" className="flex flex-col items-center justify-center text-[#F2CA50] scale-110 group">
                    <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Horarios</span>
                </Link>
                <Link to="/login" className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400">
                    <span className="material-symbols-outlined mb-1">person</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Cuenta</span>
                </Link>
            </nav>
        </div>
    );
};

export default Calendario;
