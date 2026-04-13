import React from 'react';
import { Link } from 'react-router-dom';

const Perfil = () => {
  return (
    <>
      
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
{/* Hero Profile Section */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-primary font-headline tracking-widest uppercase text-xs font-bold mb-2 block">Bienvenido de nuevo</span>
<h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none text-on-surface">Julian Voss</h2>
<div className="flex items-center gap-3 mt-4">
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">Miembro Gold</span>
<span className="text-on-surface-variant text-sm font-medium">Desde Enero 2023</span>
</div>
</div>
<div className="flex flex-col items-start md:items-end gap-2">
<p className="text-on-surface-variant text-sm uppercase tracking-widest font-semibold">Próxima Cita</p>
<div className="bg-surface-container-high p-4 rounded-xl flex items-center gap-4 border border-outline-variant/10 shadow-xl">
<div className="bg-primary text-on-primary w-12 h-12 rounded-lg flex flex-col items-center justify-center">
<span className="text-xs font-bold leading-none">DIC</span>
<span className="text-xl font-extrabold leading-none">12</span>
</div>
<div>
<p className="font-headline font-bold text-on-surface">Corte &amp; Barba Premium</p>
<p className="text-on-surface-variant text-xs">10:00 AM • Con Marco Rossi</p>
</div>
</div>
</div>
</div>
</section>
{/* Bento Grid Dashboard */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Preferencias del Cliente (Left Col) */}
<div className="md:col-span-1 space-y-6">
<div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/5 shadow-inner">
<h3 className="text-xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">id_card</span>
                        Perfil del Atelier
                    </h3>
<div className="space-y-6">
<div>
<label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block mb-3">Estilo Preferido</label>
<div className="flex flex-wrap gap-2">
<span className="bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-primary/20">Classic Fade</span>
<span className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-full text-xs font-medium border border-outline-variant/20">Textured Crop</span>
</div>
</div>
<div>
<label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block mb-3">Servicio de Café</label>
<div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/10">
<span className="material-symbols-outlined text-primary-container">coffee</span>
<div>
<p className="text-sm font-bold text-on-surface">Double Espresso</p>
<p className="text-[10px] text-on-surface-variant uppercase">Sin azúcar • Caliente</p>
</div>
</div>
</div>
<div>
<label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block mb-3">Artisans Favoritos</label>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional male barber with tattoos working in a modern luxury barbershop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8SJCVxbt0KCM75CvcFlHk4SFOHBdeg9ZCSmlwi35-3dGeQxB58ZWMtCiLwlPj2WxrwDgc-QD3104EfAllHctCopzE_V-diqP_bEfzKvzgV-OtTXwMLgJK1j8A9if8HusCM2rCC-3J5AYpcebaHeBTQER3xvPiUPo53j8L9klmOX6De79dFvCdgZ2_-0SVKBGkredGCF4rUJFYb_eqtIw1ZxW_C3Hqqsgudj7gWELA8RYD__SpJYrhlxFfRKmN7uVzDwJIwRlvbJVz"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface-container-low overflow-hidden">
<img className="w-full h-full object-cover" data-alt="portrait of a confident female stylist in a minimalist modern salon environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT5ePqdh7VgQYHoLmXVuKuMshJth4PUvMEcXQyeaQjbdiF9io_y5b6zdrsTjbTmaAgBGiMt2gHeePNoN-YKdxNPRcdMoytzBAx5pmcCgTFrZN2Rl5rVdt-OshWnZwbOM1Wei0opcK8Ud0d-raC-CXsxklTw1AL1uaIF55i_XHEV1DjFb8I4ifRr2yyscEH-3Vp4Rda4_4rMRw33B-BCaNQRe-u7ZMx10LmFIJxmlhSO1feyet78yzhn_Rz8U2AHZYoTs5Z_bYU7tGR"/>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold text-primary">
                                    +2
                                </div>
</div>
</div>
</div>
</div>
{/* Loyalty Status Card */}
<div className="bg-gradient-to-br from-primary-container to-on-primary-fixed-variant p-1 rounded-3xl shadow-2xl">
<div className="bg-neutral-950 p-8 rounded-[1.35rem] h-full">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
<span className="text-primary font-headline font-bold text-2xl">840 pts</span>
</div>
<h4 className="text-lg font-headline font-bold text-on-surface mb-2">Club Elite</h4>
<p className="text-on-surface-variant text-sm mb-6">Te faltan 160 puntos para el siguiente nivel de beneficios exclusivos.</p>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[84%] rounded-full shadow-[0_0_12px_rgba(242,202,80,0.5)]"></div>
</div>
</div>
</div>
</div>
{/* Historial de Cortes (Middle/Right Col) */}
<div className="md:col-span-2 space-y-6">
<div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/5">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-headline font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                            Historial de Look
                        </h3>
<button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Ver todo</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{/* History Item 1 */}
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-container-highest border border-outline-variant/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="close-up of a professional modern fade haircut with clean lines and detailed styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBwSIK1lidMaCXUwADcv1uOHJpLAazDtJ9-4KSXMIFgLqMB3gv6O0d-7T8enedtKYazfFanyHRoKVxIqAJ5syL6GYg63FHGwlWxL3W-F2ewHBVHHmlLiErBrqnRyHplgQLFjS_2xwFTJjbgJNS74eRTgb7WXzxzB9NM-7sNFMHlaShk6fT3gxxiSmQuXS1ATZEzka84Qbj1AWjh1_1zhboN20g6DOaVpd5BcfABWL-1hJns0k_KXE3ssrttyi-VJNDlj-oFqv177Ly"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
<span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">15 Nov, 2023</span>
<h4 className="text-on-surface font-headline font-bold text-lg">Executive Fade</h4>
<p className="text-on-surface-variant text-xs">Por Marco Rossi</p>
</div>
</div>
{/* History Item 2 */}
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-container-highest border border-outline-variant/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="gentleman with a perfectly trimmed beard and side-parted hairstyle in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5r1rwl0ZK0bUbZlAw5Rss0FEXeut5dBwG3t4TshyxiTvXXHWvF3gXRk7g8Vbu54OT2OuhaUfqE04-ItPTd_OqPFjdSOzNH23csmOFm2NX8QYwVqnXEkf9wFEM6W1nYoZzB5BYSxDSavSeM0rLGlqdqPunkZtYa1uagPW72YdBa5Fckrc5uaFlKYEb2bi1V_KhG7515p9TpszwegE39LZc-8wbs2vgbofAhxJtCx6HSWhvY2ChAnw2WJhpyBbVylZq8ecVtshNonp_"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
<span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">22 Oct, 2023</span>
<h4 className="text-on-surface font-headline font-bold text-lg">Beard Sculpt &amp; Trim</h4>
<p className="text-on-surface-variant text-xs">Por Elena Vance</p>
</div>
</div>
</div>
{/* Timeline Notes */}
<div className="mt-8 space-y-4">
<label className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold block">Notas del Artisan</label>
<div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-primary/40 italic">
<p className="text-on-surface-variant text-sm leading-relaxed">
                                "Para la próxima visita, recomendamos un tratamiento de hidratación profunda para la barba. El crecimiento lateral es denso, mantendremos el degradado bajo para acentuar la mandíbula."
                            </p>
<p className="text-on-surface text-xs font-bold mt-3 not-italic">— Marco Rossi</p>
</div>
</div>
</div>
{/* Interactive CTA Section */}
<div className="grid grid-cols-2 gap-4">
<button className="bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 border border-outline-variant/10 text-on-surface group">
<span className="material-symbols-outlined text-primary-container text-3xl group-hover:scale-110 transition-transform">calendar_month</span>
<span className="font-headline font-bold tracking-tight uppercase text-xs">Repetir Corte</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 border border-outline-variant/10 text-on-surface group">
<span className="material-symbols-outlined text-primary-container text-3xl group-hover:scale-110 transition-transform">shopping_bag</span>
<span className="font-headline font-bold tracking-tight uppercase text-xs">Mis Productos</span>
</button>
</div>
</div>
</div>
</main>


    </>
  );
};

export default Perfil;
