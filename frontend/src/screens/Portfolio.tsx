import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/* Hero Section */}
<section className="mb-20">
<h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-6">Mestros del <br/><span className="text-primary italic">Detalle</span></h2>
<p className="max-w-xl text-on-surface-variant body-lg leading-relaxed">Curamos una selección de los mejores artesanos del país. Cada corte es una obra de arte, cada sesión una experiencia de lujo diseñada solo para usted.</p>
</section>
{/* Artisans Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Featured Barber Card (Large) */}
<div className="md:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-80"></div>
<img alt="Master Barber" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up of a master barber with tattoos precisely trimming a beard, warm moody lighting, high contrast aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTH9nETx_h3pJTLVpll6Ypi_NuAoXkdi7VuRTgc5SbtDcMs8UY11WW7L3TEUiPGSYYYJraPYY_Zn9SsMmAZsehdNc76DPVUP1P8KAsbxD6TfoaYjoXa2gH261WNcQnlEFjvHq-8E__XmImL4Kirr1LfFbn-5WCs9Re39YqQtlpwj8TyykPVhrPX_xlzNNaZLCYU1GjNbEIIy7kOTUyVVZ4vtluTRsG94QM6C1Y-dMqbwG9YdE0sUbf78Y3han-m7aCxvWMLbeuU-5E"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full flex flex-col md:flex-row justify-between items-end">
<div>
<span className="text-tertiary-container font-label text-xs tracking-widest uppercase mb-2 block">ARTESANO PRINCIPAL</span>
<h3 className="text-4xl font-headline font-bold text-on-surface mb-2">Julian Voss</h3>
<p className="text-on-surface-variant font-body">Especialista en degradados clásicos y afeitado tradicional con navaja.</p>
</div>
<button className="mt-6 md:mt-0 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold tracking-tight hover:brightness-110 transition-all flex items-center gap-2">
                        Reservar con Julian
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Specialist Card */}
<div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/10">
<div>
<div className="w-16 h-16 rounded-2xl overflow-hidden mb-6">
<img alt="Barber profile" className="w-full h-full object-cover" data-alt="Portait of a focused barber with glasses, modern studio background, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPNe5bhZnNpfElhUng5FQaYIjH4-HDRKxObnw1hNn_6Q0t1ceWTdweEIJNVdkyb_LitwyHHDxlHvr0E8MTjovpK_6yPZowAEM3kuo8rvGwj74GhsAh8PQRlsPTGvR9DbDh25FBaRvNAltgxhh2GebPFyywra_isIqBsJ-10kd6uVHzZC5cifg2C2F3kqEtQiNbspOZ4l8WMCtkCvqicBEvyB-tqhq0ls08jkni_-ClOuEdMoFbdv0C_YPbsG3KFkL3rL-KdaK4Kqn_"/>
</div>
<h3 className="text-2xl font-headline font-semibold text-on-surface mb-2">Sofia Mendez</h3>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Maestra en texturizado y diseño de barbas arquitectónicas. 12 años de experiencia internacional.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-[10px] uppercase tracking-widest rounded-full border border-outline-variant/20">TEXTURAS</span>
<span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-[10px] uppercase tracking-widest rounded-full border border-outline-variant/20">DISEÑO</span>
</div>
</div>
<button className="w-full py-4 rounded-xl font-bold bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-colors border border-outline-variant/20">
                    Ver Portafolio
                </button>
</div>
{/* Work Gallery - Editorial Style */}
<div className="md:col-span-12 mt-12">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl font-headline font-bold">Galería de <span className="text-primary">Excelencia</span></h2>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:border-primary transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:border-primary transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-10">
{/* Gallery Item 1 */}
<div className="flex-none w-80 group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Barber work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="High-end fade haircut on a male model, black background, cinematic lighting showing hair texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEX6_I7SjtFwlSusXsDCkuie-N2OV_k6mmCrUHnjx-pzlfg3DJl2r4hlayvizfJXQcq3EvNWV2bbnMxMubXqIXOYtKUubCt5nIJ6NDn4anL4QZedTVmfEV_fhmi6RRz_knQAZ9fA7IzgvHv7pAqGEgixWYD4j1I9cL1EC4AJjPneOiBNSaukJw-y3k9_n7D5SPDLQdu_XJTBWE4qVZn3Qmc3qSW3FdMwV4rl2EddytDesvQTctHplwJTgvgwW59C7Idud9vmJA832V"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-on-primary" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<h4 className="font-headline font-bold text-lg">The Modern Pompadour</h4>
<p className="text-on-surface-variant text-sm">Por Julian Voss</p>
</div>
{/* Gallery Item 2 */}
<div className="flex-none w-80 group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Barber work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Detailed beard grooming session, macro shot, steam in the air, golden glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIizYINP1_oFiPyZSrhbyPpjhycdCIBNQcti7Ocqpajk31Ky7cvZAW7pPzxWDJnUQkWU9CMJFVSYA7_P3r-NA4jOp6qwclqgkiKgjxf-2lvyN7OhOlzKwfQWFnZZYiNz6Ezqee0prjD90IG6vlT1Qxc28Lnbg5iXAFMbBD1bAyxi9LXUC8RTOHCJG4-GDzClg3UdcOQorLdIKDV65bCZmElzwcxc61GbHHHC5RaAT9k_T37BrM59mV4Rj7ylkV2q7hM1PDgKWhur2x"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-on-primary" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<h4 className="font-headline font-bold text-lg">Sculpted Beard Design</h4>
<p className="text-on-surface-variant text-sm">Por Sofia Mendez</p>
</div>
{/* Gallery Item 3 */}
<div className="flex-none w-80 group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Barber work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sharp side part and tapered sides haircut, monochrome style, high fashion aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dRuyMCVGzyRBtFY4J-4i7HKGEDs8NG3EZTXqzWlsXwNwYxIsPBMtoYFLzR_FhfXBE4neJf5J8ygnWwreXOlr84bIcmbFSFwxQKniMvOnXCB5GH-v04yyGUCT91psoPVnWjNxQISzUkNRxwrbmp6Clw99ziGZ-k5JMkGiuONsEsh5-CtPMoaAzwA7OXyrHQ-khEjXPmGxe9mX3fhjoPDoGQU-m3IBo6dDLSaPnBT8AKIedGh4f6-lRb9mjg0_XzieI3RC9pSog18P"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-on-primary" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<h4 className="font-headline font-bold text-lg">Executive Side Part</h4>
<p className="text-on-surface-variant text-sm">Por Marco Rossi</p>
</div>
{/* Gallery Item 4 */}
<div className="flex-none w-80 group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Barber work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Natural curls styling and line-up, bright professional studio lighting, urban style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX0YAqXs2gcomO2rFs6MCQSPGfEakwuu_HntyGSgVa1Tpoh6Gqiwfnsk2JEBniGAjH-P14KOPDtKspO3X3HEwoG2dnvXFJIm5mdtPZtEjLs6ScQKEpXYjQ05xWA1NpHxGK5nDOhw8WCWoqUpchyGaH3zIyW-JXET4rWBUrzA4FS4vXVdgIvaDMXC_zk7jRirLESc4Hhe149KXr3Gvd5AyNJ_PXWUON4vxZIeBL0S2brzgAqpvZWTj6sw4d0O1m57icIbv14-jHFVUi"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-on-primary" data-icon="zoom_in">zoom_in</span>
</div>
</div>
<h4 className="font-headline font-bold text-lg">Natural Texture Flow</h4>
<p className="text-on-surface-variant text-sm">Por Julian Voss</p>
</div>
</div>
</div>
{/* Third Artisan Card (Horizontal) */}
<div className="md:col-span-12 bg-surface-container-low rounded-3xl p-1 md:p-2 flex flex-col md:flex-row items-center border border-outline-variant/10 overflow-hidden">
<div className="w-full md:w-1/3 h-64 md:h-80 overflow-hidden">
<img alt="Marco Rossi" className="w-full h-full object-cover" data-alt="Italian master barber in a white coat, classic barbershop tools in background, elegant mood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClPrbVxg-Gf6E_bevJ888c_-tl7e9BXM0SwpJKscraKmgMa1E4oj55uqX5vPB4ou_0IX8hXCzeaH4t0dQpvRTpSKbEa9IqRPm8FVCNi_UimfvWGX4y-s5luPQJPgwQtZZMBRAEOfsOI8zyOi9JDpRva9r_Pu16dkkNwovv2aR9wOg93jrfEJSbYPa3kBDfFV8TIOP-SgZFW6JSJGz-u56JEsa8SaJgks8-4QZaAAvd86ofPXF3LvqbmsKfO4TeZbNS8blbYs_a5kSv"/>
</div>
<div className="p-8 md:p-12 flex-1">
<div className="flex items-center gap-2 text-tertiary-fixed mb-4">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label text-xs uppercase tracking-widest">Maestro Reservado</span>
</div>
<h3 className="text-4xl font-headline font-bold mb-4">Marco Rossi</h3>
<p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">Especialista en técnicas italianas clásicas y cuidado capilar premium. Marco cree que un corte de pelo es la tarjeta de presentación de un caballero.</p>
<div className="flex gap-4">
<button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary-fixed">Reservar Ahora</button>
<button className="px-8 py-3 rounded-xl border border-outline-variant font-bold text-on-surface hover:bg-surface-container-high transition-colors">Portafolio Completo</button>
</div>
</div>
</div>
</div>
</main>

{/* NavigationDrawer (Mobile Only Sidebar Logic Placeholder) */}
<aside className="hidden fixed top-0 left-0 h-full w-80 bg-neutral-950 z-[60] flex flex-col py-8 rounded-r-3xl transition-transform duration-500 -translate-x-full">
<div className="px-8 mb-10 flex flex-col items-start">
<div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
<img alt="Client Profile Picture" className="w-full h-full object-cover" data-alt="Stylish man portrait, profile picture for user dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd96F4i4OQHmTrt3x-XLnt-TNobCnDAw04Nh79zc_WD5pZmdfJKchFFO1f_Jy2xU4h6n6qDL6YkXPItQuaxyUX1M8ntjCYI7Lu6mnCj2VVgquz1u50Oynokh4VmD33TcJXMPoBQ73K5e51j46kUkES-hvdvCk8LUw6EB3U9Xv51yXvOZmGfuhrHZmwhUdtZPVsP_G-eG5JT3MGP-Dt-VHL9JjaaxUISugmWCQnb-UPjvxjV2_8U4j6cSDnsadlXIhUcETOAHf2PmX6"/>
</div>
<h4 className="font-headline font-medium text-amber-400 text-lg">Julian Voss</h4>
<p className="text-neutral-400 text-sm">Gold Member</p>
<p className="text-xs text-neutral-500 mt-1">Next: Dec 12, 10:00 AM</p>
</div>
<nav className="flex flex-col">
<Link className="flex items-center gap-4 px-8 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-amber-200 transition-all font-headline font-medium" to="/">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> My Dashboard
            </Link>
<Link className="flex items-center gap-4 px-8 py-4 text-amber-400 bg-neutral-900 font-bold border-l-4 border-amber-500 font-headline font-medium" to="/">
<span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span> Loyalty Status
            </Link>
<Link className="flex items-center gap-4 px-8 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-amber-200 transition-all font-headline font-medium" to="/">
<span className="material-symbols-outlined" data-icon="groups">groups</span> Artisans
            </Link>
<Link className="flex items-center gap-4 px-8 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-amber-200 transition-all font-headline font-medium" to="/">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span> Book Now
            </Link>
<Link className="flex items-center gap-4 px-8 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-amber-200 transition-all font-headline font-medium mt-auto" to="/">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span> Support
            </Link>
</nav>
</aside>

    </>
  );
};

export default Portfolio;
