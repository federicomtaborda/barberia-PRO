import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ChromaticImage from '../components/ChromaticImage';

const services = [
  {
    id: 1,
    title: 'Corte The Atelier',
    price: '$65',
    description: 'Corte de precisión adaptado a tu estructura ósea y estilo de vida.',
    tag: 'Exclusivo',
    icon: 'content_cut',
    image: '/assets/corte_premium.png'
  },
  {
    id: 2,
    title: 'Esculpido de Barba',
    price: '$45',
    description: 'Recorte estratégico y delineado con toalla caliente.',
    icon: 'content_cut',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnHXnGSgodsbL3EzxEkXkbHU0b6B6_hu_FLtncooSaCzq-os6uPOZv2E3U_0JDu9UBDJ6JPDXpS-F76FZJmwi8QpxxjWTeN_O_4bJWUNcbCD2NpgjLB5AKS7rqxpsY1bOybms2r5ODWWazIRqJS4prRRgqu4gylcNQMNN_kAPEeMlFPIi_M1_N_ATveG2E75aMSJCbEwpDlNDREd5ekMnvaOgxv_SmMq5H2eY3oVBxxBKDhDEQa1C9DpVEUxqYt2pN2LbWmFVc6tBq'
  },
  {
    id: 3,
    title: 'El Afeitado Real',
    price: '$55',
    description: 'Tratamiento en múltiples etapas con navaja.',
    icon: 'flare',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCcg3MqcVRz4agxQ4WCI_Mcdm3OC0UaaO4dileahmzmPNHe0LFO5R9ypxAPVcpM1Orstr61lh9izqmSFWIgLiLUfwL3vziTchSR3SbcHvkk8svy4Rr5HRevQXYv4WtRBgVJMnhcFeGrXQV3r4c1gHdx9Gnvg_CCeiF04_yOAWRc1uao65ecnfUdOf9SzVxkPiX0umJgTb03VwlQa_0SarnaLpoz1ksm3RJgeFtmr1rTd94kssbI3d6GXPTwTC_k7k6GTeCr12iBkU_'
  },
  {
    id: 4,
    title: 'Ritual Completo',
    price: '$100',
    description: 'Corte exclusivo + mascarilla y masaje facial.',
    tag: 'Más Popular',
    icon: 'spa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvviz-ddkvoOy0Pw9c0UbRc7Li3J6koGao-8E1mcVs5gM8_5SCnDLDOGXmqQt91p2n88WrZD1wbftuKSfY_Grn4KMLwCYv2UiUQdHULufOu2RA1BcR5mncrJHjVNZlzDf1TNcC7qghBWPDd0sF6YPqaOCJZ_AOxjHWFASazbMSGw5ay-zGH36rLx-IiTNDDpSmR14HJQa6qmup_TC28Fgjd43g4uNICYfyx8YyVY2Cz7080s9QRr8K44ICOF5Cs7GpiQhcSx-c8QIN'
  },
];

const LandingPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <main className="pb-16 md:pb-24">
        <Hero />

        {/* Services Section */}
        <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4 border-b border-outline-variant/10 pb-8 uppercase">
            <div>
              <h2 className="text-sm font-label tracking-[0.3em] text-primary mb-4 italic">La Selección</h2>
              <h3 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
                EXPERIENCIAS<br/>CURADAS
              </h3>
            </div>
            <p className="text-on-surface-variant text-sm md:text-base font-body italic max-w-xs text-right lowercase first-letter:uppercase">
              Cada servicio incluye consulta, lavado exclusivo y acabado artesanal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to="/seleccion"
                className={`
                    group relative overflow-hidden bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between min-h-[350px] inner-shadow-outline-variant-15 transition-all duration-500 hover:scale-[1.01]
                    ${index === 0 ? 'md:col-span-8' : (index === 3 ? 'md:col-span-8' : 'md:col-span-4')}
                `}
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 overflow-hidden">
                    <ChromaticImage 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="relative z-10">
                  {service.tag && (
                    <span className="inline-block px-4 py-1 rounded-full border border-outline-variant/30 text-[10px] uppercase tracking-widest text-primary font-label mb-4 backdrop-blur-md font-bold">
                      {service.tag}
                    </span>
                  )}
                  <h4 className="text-3xl md:text-4xl font-headline font-bold mb-4 uppercase">{service.title}</h4>
                  <p className="text-on-surface-variant text-base font-body max-w-sm">{service.description}</p>
                </div>
                <div className="relative z-10 flex justify-between items-center pt-8 border-t border-white/5">
                  <span className="text-2xl font-headline font-bold text-primary">{service.price}</span>
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-950 transition-all">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-24 bg-surface-container-low/30 overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 group bg-surface-container-high">
                  <ChromaticImage 
                    alt="Julian Vance" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKzXbpI3ZAG_1qY2ZHAXqwepzsHS7EYM8jM_RL9eHTbD35OsL4aLGO7YULqMQ-BLw1e3SSqpRDad34tAkgVDNOnO4gJcfXhwLNEyAkcV43qPgspIv4kWOkKjU_0yRR2O5Ps4n4gRN-NN6qxbac8Z5-TH_CGiEXwt4xSH-42o_L_5nRpFWeiU7q7NmcoPFfgQ3ltEj6-vzm9i1gY2t6PZPDlsT1GqXoK6k6GzSp4HgBn-3bK9ewFJaBEuMwHRVzHEh-cTEYue01rbS" 
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-2xl z-20 backdrop-blur-3xl border border-primary/20 flex flex-col p-10 justify-center">
                  <span className="text-primary text-6xl font-headline font-bold tracking-tighter">15+</span>
                  <span className="text-on-surface font-label uppercase tracking-widest text-xs mt-2 font-bold leading-tight">Años de Maestría Artesanal</span>
                </div>
              </div>
              <div>
                <span className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-4 block">The Founder</span>
                <h3 className="text-5xl font-headline font-bold text-on-surface mb-8 tracking-tighter uppercase">JULIAN VANCE</h3>
                <p className="text-on-surface-variant font-body text-xl leading-relaxed mb-10 italic">"La barbería no es moda, es arquitectura sobre el rostro."</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <div>
                      <h5 className="font-headline font-bold text-on-surface text-lg uppercase tracking-tight">Estructura & Rostro</h5>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Personalización basada en morfología ósea facial.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl">content_cut</span>
                    <div>
                      <h5 className="font-headline font-bold text-on-surface text-lg uppercase tracking-tight">Herramientas Japonesas</h5>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Uso de acero forjado a mano para el corte perfecto.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Studio & Location Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="h-[400px] lg:h-auto group overflow-hidden">
                    <img 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105" 
                      alt="The Atelier Interior" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxP8PMxooGJxnsx0Hywmc3H4vkOVqIIZM9j6PaHC7_DQXyr1SMklg73MWDOk4a8PWaTtC36gAXwJSGTpvn4Mb1DLGbrpEEWL7vfnaosatjIBrfVrgK17iQy2ZDeXIlPg8RBrUgvEmcinYd38bdg9rAEFY-PtPcPq7IyH9_f5HDPTr3tUgT_TpXV02mTjWTT51ydHEx-sVHN8hrLgyQqsjZ7l49qKVWZ0ucVAy7b9RvfJoOk0E2qhezQyD5dOFNPMnXXPrmUXFs5hqx" 
                    />
                </div>
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <span className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-4 block">Ubicación</span>
                    <h3 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter uppercase font-headline">EL SANTUARIO</h3>
                    <p className="text-on-surface-variant font-body mb-8 text-lg">Calle de la Disciplina 12, Distrito de la Imagen, Ciudad Capital.</p>
                    <div className="space-y-6 mb-10">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group">
                            <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50">
                                <span className="material-symbols-outlined">map</span>
                            </span>
                            <span className="font-label text-sm uppercase tracking-widest font-bold">Cómo llegar con Google Maps</span>
                        </a>
                        <div className="flex items-center gap-4 text-on-surface group">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">call</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Reserva Directa</p>
                                <p className="font-headline text-lg">+34 900 123 456</p>
                            </div>
                        </div>
                    </div>
                    {/* Social Stats */}
                    <div className="flex gap-8 pt-8 border-t border-white/5">
                        <a href="#" className="flex flex-col group">
                            <span className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">INSTAGRAM</span>
                            <span className="text-xs text-on-surface-variant font-label tracking-widest uppercase">@the_atelier</span>
                        </a>
                        <a href="#" className="flex flex-col group">
                            <span className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">FACEBOOK</span>
                            <span className="text-xs text-on-surface-variant font-label tracking-widest uppercase">The Atelier Club</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Newsletter / Circle CTA */}
        <section className="px-6 pb-24">
            <div className="max-w-4xl mx-auto bg-surface-container-highest rounded-3xl p-12 text-center relative overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 editorial-gradient"></div>
                <h2 className="text-4xl font-headline font-bold mb-4 tracking-tighter uppercase font-headline">Únete al Círculo Interno</h2>
                <p className="text-on-surface-variant mb-10 max-w-md mx-auto font-body text-base italic">Acceso prioritario y rituales exclusivos para miembros del club.</p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input className="flex-1 bg-background border border-outline-variant/20 rounded-xl px-6 py-4 text-on-surface focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-neutral-700 font-body" placeholder="Email del caballero" type="email"/>
                    <button className="editorial-gradient text-neutral-950 font-headline font-bold px-8 py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">SUSCRIBIRSE</button>
                </form>
            </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-all duration-300 z-40 active:scale-90 border border-white/10 shadow-2xl md:left-auto md:right-32"
          aria-label="Volver arriba"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      )}

      {/* Global Footer Credits */}
      <footer className="px-6 py-12 border-t border-white/5 text-center bg-black/50">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.5em] font-label">The Atelier © 2026 • Rituals of Precision</p>
          <p className="mt-4 text-[10px] text-neutral-700 font-label tracking-widest uppercase">Lunes - Sábado: 9:00 - 21:00 • Madrid, SPAIN</p>
      </footer>
    </div>
  );
};

export default LandingPage;