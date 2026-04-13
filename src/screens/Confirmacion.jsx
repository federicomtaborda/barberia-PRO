import React from 'react';
import { Link } from 'react-router-dom';

const Confirmacion = () => {
  return (
    <>
      
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
{/* Confirmation Hero Section */}
<section className="mb-12">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-tertiary-container font-headline text-sm tracking-widest uppercase">Paso 3 de 3: Revisión</span>
</div>
<h1 className="font-headline text-5xl font-bold tracking-tighter text-on-background mb-6 leading-none">Confirma tu<br/><span className="text-primary">Cita</span></h1>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-md">Por favor, verifica los detalles de tu sesión antes de asegurar tu silla en el atelier.</p>
</section>
{/* The Artisan Card (Service Summary) */}
<div className="bg-surface-container-low rounded-xl p-6 mb-8 inner-shadow-outline-variant-15 overflow-hidden relative">
<div className="flex flex-col md:flex-row gap-6">
<div className="w-full md:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close up of a premium grooming service with professional tools on a dark textured surface with golden lighting accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4uwkbFhq76ZbkBykoR6DLcjeVbHfcAzcir5X4lKi7PmW1gIbJtZr5a38NpEYc52RtVyVum60MJniOa34G56wugVhZk69suDFcZ3Ati54vbMHp0o-ev8aVzfGsClH0_1U21zBNb_VsrYP4hfPW17YDPSiu-zyGcFU9z6aAVFmjttT0JAyXFNFsE2I7v6hudnLNT91aZFMLYobU1PJK9S7REa3uDg4UBZQx8b93NNaFwjyAEH8T3UUxHmjT-lzgF85zReixGf-3jyH"/>
</div>
<div className="flex flex-col justify-center">
<h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-1">Corte Ejecutivo Signature</h2>
<p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mb-4">Maestro Barbero: Julian Vance</p>
<div className="flex gap-4">
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wider uppercase">45 Minutos</span>
<span className="bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-on-background tracking-wider uppercase">$75.00</span>
</div>
</div>
</div>
</div>
{/* Appointment Timeline / Schedule Box */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
<div className="bg-surface-container-low p-6 rounded-xl inner-shadow-outline-variant-15">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container">calendar_today</span>
<span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Fecha Seleccionada</span>
</div>
<p className="font-headline text-xl font-medium text-on-background">24 de Octubre, 2023</p>
<p className="text-on-surface-variant text-sm">Martes por la Mañana</p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl inner-shadow-outline-variant-15">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container">schedule</span>
<span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Hora de Llegada</span>
</div>
<p className="font-headline text-xl font-medium text-on-background">10:30 AM</p>
<p className="text-on-surface-variant text-sm">GMT-5 Hora del Este</p>
</div>
</div>
{/* Note / Personalization Well */}
<div className="bg-surface-container-lowest p-6 rounded-xl mb-12 border border-outline-variant/10">
<h3 className="text-on-surface font-headline text-sm font-bold uppercase tracking-widest mb-4">Solicitudes Adicionales</h3>
<p className="text-on-surface-variant italic font-body text-md leading-relaxed">"Preferencia por la silla junto a la ventana si está disponible. Busco un ligero desvanecido a los lados."</p>
</div>
{/* Transactional Actions */}
<div className="flex flex-col gap-4">
<button className="w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-400 shadow-xl shadow-primary/10">
                Confirmar Reserva
            </button>
<button className="w-full py-4 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-background transition-colors duration-400">
                Modificar Cita
            </button>
</div>
</main>
{/* BottomNavBar Navigation Shell */}
<nav className="bg-neutral-950/80 backdrop-blur-lg fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 rounded-t-2xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
<Link className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400" to="/">
<span className="material-symbols-outlined mb-1">home_max</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Inicio</span>
</Link>
<Link className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400" to="/seleccion">
<span className="material-symbols-outlined mb-1">content_cut</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Servicios</span>
</Link>
<Link className="flex flex-col items-center justify-center text-[#F2CA50] scale-110" to="/">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Agenda</span>
</Link>
<Link className="flex flex-col items-center justify-center text-neutral-500 hover:text-neutral-200 transition-all duration-400" to="/login">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Manrope'] text-[10px] uppercase tracking-widest">Cuenta</span>
</Link>
</nav>

    </>
  );
};

export default Confirmacion;
