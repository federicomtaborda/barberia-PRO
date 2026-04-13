import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      
<div className="relative min-h-screen flex items-center justify-center lg:justify-end overflow-hidden">
{/* Ambient Background Image (Left Side for Desktop) */}
<div className="absolute inset-0 w-full h-full lg:w-3/5 lg:left-0 z-0">
<img className="w-full h-full object-cover opacity-40 lg:opacity-70 grayscale hover:grayscale-0 transition-all duration-1000" data-alt="Close-up of a high-end barber station with vintage leather chair and gold-accented grooming tools in a moody atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxP8PMxooGJxnsx0Hywmc3H4vkOVqIIZM9j6PaHC7_DQXyr1SMklg73MWDOk4a8PWaTtC36gAXwJSGTpvn4Mb1DLGbrpEEWL7vfnaosatjIBrfVrgK17iQy2ZDeXIlPg8RBrUgvEmcinYd38bdg9rAEFY-PtPcPq7IyH9_f5HDPTr3tUgT_TpXV02mTjWTT51ydHEx-sVHN8hrLgyQqsjZ7l49qKVWZ0ucVAy7b9RvfJoOk0E2qhezQyD5dOFNPMnXXPrmUXFs5hqx"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 lg:bg-gradient-to-r lg:from-transparent lg:to-surface to-surface"></div>
</div>
{/* Content Canvas */}
<main className="relative z-10 w-full max-w-xl px-6 lg:px-24 flex flex-col justify-center h-screen">
{/* Brand Anchor */}
<div className="mb-12">
<span className="font-headline text-primary font-bold tracking-tighter text-2xl uppercase">THE ATELIER</span>
</div>
{/* Login Header */}
{/* Login Form */}
<section className="space-y-6">
<form className="space-y-4" onsubmit="return false;">
{/* Email Input Group */}
<div className="space-y-2">
<label className="block text-sm font-label font-medium text-primary tracking-wide uppercase" htmlFor="email">Email</label>
<div className="relative group">
<input className="w-full h-14 px-4 bg-surface-container-lowest border-none rounded-xl focus:ring-0 focus:bg-surface-container-high text-on-surface font-body transition-colors duration-400 placeholder-on-surface-variant/30" id="email" placeholder="tu@email.com" type="email"/>
<div className="absolute inset-0 rounded-xl pointer-events-none inner-shadow-outline-variant-15"></div>
</div>
</div>
{/* Password Input Group */}
<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="block text-sm font-label font-medium text-primary tracking-wide uppercase" htmlFor="password">Contraseña</label>
<Link className="text-xs font-label text-on-surface-variant hover:text-primary transition-colors" to="/">¿Olvidaste tu contraseña?</Link>
</div>
<div className="relative group">
<input className="w-full h-14 px-4 bg-surface-container-lowest border-none rounded-xl focus:ring-0 focus:bg-surface-container-high text-on-surface font-body transition-colors duration-400 placeholder-on-surface-variant/30" id="password" placeholder="••••••••" type="password"/>
<div className="absolute inset-0 rounded-xl pointer-events-none inner-shadow-outline-variant-15"></div>
</div>
</div>
{/* Primary CTA */}
<div className="pt-4">
<button className="w-full h-14 bg-artisan-gradient text-on-primary font-headline font-bold text-lg rounded-xl tracking-tight shadow-lg shadow-primary/10 active:scale-95 transition-all duration-400" type="submit">
                            INICIAR SESIÓN
                        </button>
</div>
</form>
{/* Divider */}
<div className="flex items-center gap-4 py-2">
<div className="flex-1 h-px bg-outline-variant/20"></div>
<span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">o continúa con</span>
<div className="flex-1 h-px bg-outline-variant/20"></div>
</div>
{/* Secondary Auth */}
<button className="w-full h-14 flex items-center justify-center gap-3 bg-surface-container-highest text-on-surface font-body font-semibold rounded-xl active:scale-95 transition-all duration-400 group">
<svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
</svg>
                    Continuar con Google
                </button>
</section>
{/* Footer Link */}
<footer className="mt-12 text-center">
<p className="text-on-surface-variant font-body">
                    ¿Nuevo en el club? 
                    <Link className="text-primary font-bold hover:underline decoration-primary/30 underline-offset-4 transition-all" to="/">Crear cuenta</Link>
</p>
</footer>
</main>
{/* Decorative Floating Accent */}
<div className="hidden lg:block absolute bottom-12 left-12 z-10">
<div className="flex items-center gap-4 text-primary/30 font-headline font-light tracking-[0.5em] uppercase text-xs">
<span>Precision</span>
<span className="w-8 h-px bg-primary/20"></span>
<span>Artistry</span>
<span className="w-8 h-px bg-primary/20"></span>
<span>Heritage</span>
</div>
</div>
</div>

    </>
  );
};

export default Login;
