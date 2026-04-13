import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Corte The Atelier',
    price: '$65',
    description: 'Corte de precisión adaptado a tu estructura ósea y estilo de vida.',
    tag: 'Exclusivo',
    icon: 'content_cut',
  },
  {
    id: 2,
    title: 'Esculpido de Barba',
    price: '$45',
    description: 'Recorte estratégico y delineado con toalla caliente.',
    icon: 'content_cut',
  },
  {
    id: 3,
    title: 'El Afeitado Real',
    price: '$55',
    description: 'Tratamiento en múltiples etapas con navaja.',
    icon: 'flare',
  },
  {
    id: 4,
    title: 'Ritual Completo',
    price: '$100',
    description: 'Corte exclusivo + mascarilla y masaje facial.',
    tag: 'Más Popular',
    icon: 'spa',
  },
];

const LandingPage = () => {
  return (
    <>
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-none tracking-tighter mb-6 text-on-surface">
              ESTILO<br/>
              <span className="text-primary italic">ARTESANAL</span><br/>
              DE PRECISIÓN.
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant max-w-xl mb-10 font-body">
              Más que un corte de pelo. Un ritual de excelencia para el caballero moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calendario" className="editorial-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base tracking-tight hover:brightness-110 transition-all flex items-center justify-center gap-2">
                RESERVAR AHORA
                <span className="material-symbols-outlined">calendar_today</span>
              </Link>
              <Link to="/seleccion" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-base tracking-tight hover:bg-surface-bright transition-all">
                VER SERVICIOS
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4">
            <div>
              <h2 className="text-sm font-label tracking-[0.3em] text-primary uppercase mb-4">La Selección</h2>
              <h3 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
                EXPERIENCIAS<br/>CURADAS
              </h3>
            </div>
            <p className="text-on-surface-variant text-sm md:text-base font-body italic">
              Cada servicio incluye consulta y acabado artesanal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div key={service.id} className={`
                bg-surface-container-low rounded-xl p-6 flex flex-col justify-between
                min-h-[280px] md:min-h-[320px] inner-shadow-outline-variant-15
                ${service.id === 1 ? 'md:col-span-2 lg:col-span-2' : ''}
                ${service.id === 4 ? 'md:col-span-2 lg:col-span-2' : ''}
              `}>
                <div>
                  {service.tag && (
                    <span className="inline-block px-3 py-1 rounded-full border border-outline-variant text-[10px] uppercase tracking-widest text-on-surface-variant font-label mb-3">
                      {service.tag}
                    </span>
                  )}
                  <h4 className="text-xl md:text-2xl font-headline font-bold mb-2">{service.title}</h4>
                  <p className="text-on-surface-variant text-sm font-body">{service.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl md:text-2xl font-headline font-bold text-primary">{service.price}</span>
                  <span className="material-symbols-outlined text-on-surface-variant">{service.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 md:py-24 bg-surface-container-low/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-xl overflow-hidden bg-surface-container-high">
                  <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                    <span className="material-symbols-outlined text-9xl text-neutral-600">content_cut</span>
                  </div>
                </div>
                <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-xl border border-primary/20 flex flex-col p-6 justify-center">
                  <span className="text-primary text-4xl font-headline font-bold">15+</span>
                  <span className="text-on-surface font-label uppercase tracking-widest text-xs mt-1">Años</span>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-sm font-label tracking-[0.3em] text-primary uppercase mb-4">El Maestro</h2>
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">
                  JULIAN VANCE
                </h3>
                <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed mb-6">
                  Fundador de The Atelier. Más de una década perfeccionando la intersección entre barbería clásica y geometría moderna.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">verified</span>
                    <div>
                      <h5 className="font-headline font-bold text-on-surface">Enfoque de Precisión</h5>
                      <p className="text-sm text-on-surface-variant">Degradados texturizados y modelado de barba.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">content_cut</span>
                    <div>
                      <h5 className="font-headline font-bold text-on-surface">Herramientas Artesanales</h5>
                      <p className="text-sm text-on-surface-variant">Acero japonés afilado a medida.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-2 bg-neutral-950/80 backdrop-blur-lg rounded-t-2xl z-50 md:hidden">
        <Link className="flex flex-col items-center justify-center text-primary scale-110" to="/">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>home_max</span>
          <span className="text-[10px] uppercase tracking-widest">Inicio</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-neutral-500" to="/seleccion">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>content_cut</span>
          <span className="text-[10px] uppercase tracking-widest">Servicios</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-neutral-500" to="/calendario">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>calendar_today</span>
          <span className="text-[10px] uppercase tracking-widest">Horarios</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-neutral-500" to="/login">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>person</span>
          <span className="text-[10px] uppercase tracking-widest">Cuenta</span>
        </Link>
      </nav>

      {/* Floating FAB */}
      <Link to="/calendario" className="fixed bottom-20 right-6 w-14 h-14 rounded-full editorial-gradient text-on-primary shadow-2xl z-40 flex items-center justify-center md:hidden active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
      </Link>
    </>
  );
};

export default LandingPage;