import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Background Image with advanced overlays */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Hands of a master barber"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvviz-ddkvoOy0Pw9c0UbRc7Li3J6koGao-8E1mcVs5gM8_5SCnDLDOGXmqQt91p2n88WrZD1wbftuKSfY_Grn4KMLwCYv2UiUQdHULufOu2RA1BcR5mncrJHjVNZlzDf1TNcC7qghBWPDd0sF6YPqaOCJZ_AOxjHWFASazbMSGw5ay-zGH36rLx-IiTNDDpSmR14HJQa6qmup_TC28Fgjd43g4uNICYfyx8YyVY2Cz7080s9QRr8K44ICOF5Cs7GpiQhcSx-c8QIN"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6 text-on-surface">
          ESTILO<br />
          <span className="text-primary italic">ARTESANAL</span><br />
          DE PRECISIÓN.
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 font-body leading-relaxed">
          Más que un corte de pelo. Un ritual de excelencia diseñado para el caballero moderno que valora la precisión arquitectónica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/calendario" className="editorial-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
            RESERVAR AHORA
            <span className="material-symbols-outlined">calendar_today</span>
          </Link>
          <Link to="/seleccion" className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-xl font-headline font-bold text-lg tracking-tight hover:bg-surface-bright active:scale-95 transition-all text-center border border-outline-variant/20">
            VER SERVICIOS
          </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute right-[-5%] bottom-20 w-1/3 aspect-square bg-surface-container-low rounded-xl transform rotate-3 inner-shadow-outline-variant-15 overflow-hidden group">
        <img
          alt="Artisanal tools"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcg3MqcVRz4agxQ4WCI_Mcdm3OC0UaaO4dileahmzmPNHe0LFO5R9ypxAPVcpM1Orstr61lh9izqmSFWIgLiLUfwL3vziTchSR3SbcHvkk8svy4Rr5HRevQXYv4WtRBgVJMnhcFeGrXQV3r4c1gHdx9Gnvg_CCeiF04_yOAWRc1uao65ecnfUdOf9SzVxkPiX0umJgTb03VwlQa_0SarnaLpoz1ksm3RJgeFtmr1rTd94kssbI3d6GXPTwTC_k7k6GTeCr12iBkU_"
        />
      </div>
    </section>
  );
};

export default Hero;
