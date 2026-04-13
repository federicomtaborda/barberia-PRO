import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center lg:justify-end overflow-hidden bg-background">
      {/* Ambient Background Image (Left Side for Desktop) */}
      <div className="absolute inset-0 w-full h-full lg:w-3/5 lg:left-0 z-0 group">
        <img 
          className="w-full h-full object-cover opacity-30 lg:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out" 
          alt="Luxury Barber Station" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxP8PMxooGJxnsx0Hywmc3H4vkOVqIIZM9j6PaHC7_DQXyr1SMklg73MWDOk4a8PWaTtC36gAXwJSGTpvn4Mb1DLGbrpEEWL7vfnaosatjIBrfVrgK17iQy2ZDeXIlPg8RBrUgvEmcinYd38bdg9rAEFY-PtPcPq7IyH9_f5HDPTr3tUgT_TpXV02mTjWTT51ydHEx-sVHN8hrLgyQqsjZ7l49qKVWZ0ucVAy7b9RvfJoOk0E2qhezQyD5dOFNPMnXXPrmUXFs5hqx"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background"></div>
      </div>

      {/* Content Canvas */}
      <main className="relative z-10 w-full max-w-xl px-8 lg:px-20 flex flex-col justify-center min-h-screen animate-fade-in font-['Manrope']">
        {/* Brand Anchor */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-3 active:scale-95 transition-transform group">
            <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">content_cut</span>
            <span className="font-headline text-primary font-bold tracking-tighter text-2xl uppercase">THE ATELIER</span>
          </Link>
        </div>

        {/* Login Form Box */}
        <section className="space-y-8 bg-surface-container-low/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 editorial-gradient opacity-30"></div>

          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight uppercase">Iniciar Sesión</h2>
            <p className="text-on-surface-variant text-sm">Ingresa tus credenciales para acceder al club exclusivo.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input Group */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-primary tracking-[0.2em] uppercase" htmlFor="email">Email</label>
              <input
                className="w-full h-14 px-5 bg-background border border-outline-variant/20 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-on-surface font-body transition-all outline-none placeholder-neutral-700"
                id="email"
                placeholder="tu@email.com"
                type="email"
                required
              />
            </div>

            {/* Password Input Group */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] font-bold text-primary tracking-[0.2em] uppercase" htmlFor="password">Contraseña</label>
                <Link className="text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-tighter" to="/">¿OLVIDASTE TU CONTRASEÑA?</Link>
              </div>
              <input
                className="w-full h-14 px-5 bg-background border border-outline-variant/20 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-on-surface font-body transition-all outline-none placeholder-neutral-700"
                id="password"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>

            {/* Primary CTA (CORREGIDO) */}
            <div className="pt-4">
              <button
                className="w-full h-14 editorial-gradient text-on-primary font-headline font-bold text-lg rounded-xl tracking-tight shadow-xl shadow-primary/20 active:scale-95 hover:brightness-110 transition-all duration-400 cursor-pointer"
                type="submit"
              >
                INGRESAR
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-outline-variant/10"></div>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">O continúa con</span>
            <div className="flex-1 h-px bg-outline-variant/10"></div>
          </div>

          {/* Google Auth Button */}
          <button className="w-full h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/5 text-on-surface font-body font-semibold rounded-xl active:scale-95 hover:bg-white/10 transition-all duration-400 group cursor-pointer">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google Login
          </button>
        </section>

        {/* Footer Link */}
        <footer className="mt-12 text-center">
          <p className="text-on-surface-variant font-body text-sm">
            ¿Nuevo en el club?{' '}
            <Link className="text-primary font-bold hover:underline decoration-primary/30 underline-offset-4" to="/registro">Crea tu cuenta aquí</Link>
          </p>
        </footer>
      </main>

      {/* Decorative Text */}
      <div className="hidden lg:block absolute bottom-12 left-12 z-10 opacity-20">
        <div className="flex items-center gap-4 text-primary font-headline font-light tracking-[0.5em] uppercase text-xs">
          <span>Heritage</span>
          <span className="w-8 h-px bg-primary"></span>
          <span>Craftsmanship</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
