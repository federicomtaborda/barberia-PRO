import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registro = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
    navigate('/');
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Visual Side: Editorial Impact */}
        <section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-surface-container-lowest group">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out contrast-125 opacity-60" 
              alt="Artisanal tools" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDla6ZV-S3SxuQSOIyEIDy8jmh-o-BfX_XUeXhnaZqIwZPwaDE_7XKyUvnXm-6fjmh5Ro5ogLQDfPf0KLbdkp7Uxn36cp8bhEjjIyfMPrQNFw6zmahoeGFn_rUMmXiW7PiulLrLwRO1p-vS4B6S5VqFe7QU2MW1e9heaoqK9azdq6Ey_NJ_q5EHvYzdajnaO9eTuXjYThRMVqXAoVjCisawYYl4M3Oh-HTHZfoe-MjL_xtuczhk-ddlo9az1jwayoqmtBdqwJ1JNsFW" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="relative z-20 flex flex-col justify-end p-16 space-y-6">
            <div className="inline-block border-l-2 border-primary pl-6">
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-on-surface uppercase leading-none">
                The <br /> <span className="text-primary italic">Atelier</span><br/> Experience
              </h2>
            </div>
            <p className="max-w-md text-on-surface-variant text-lg leading-relaxed font-body">
              Más que un corte, es una declaración de intenciones. Accede a la red más exclusiva de maestros artesanos de la imagen.
            </p>
          </div>
        </section>

        {/* Registration Side */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20">
          <div className="w-full max-w-md space-y-10 animate-fade-in">
            {/* Brand Anchor */}
            <div className="text-center md:text-left">
              <Link to="/" className="inline-flex items-center gap-3 active:scale-95 transition-transform group">
                <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">content_cut</span>
                <span className="font-headline text-primary font-bold tracking-tighter text-2xl uppercase">THE ATELIER</span>
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight uppercase">Crear Cuenta</h3>
              <p className="text-on-surface-variant text-sm font-body">Únete al círculo exclusivo de caballeros de The Atelier.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Nombre completo</label>
                <input 
                  className="w-full h-14 px-5 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-on-surface font-body transition-all outline-none placeholder-neutral-700" 
                  placeholder="Tu nombre" 
                  type="text" 
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Email</label>
                <input 
                  className="w-full h-14 px-5 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-on-surface font-body transition-all outline-none placeholder-neutral-700" 
                  placeholder="email@ejemplo.com" 
                  type="email" 
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Contraseña</label>
                <input 
                  className="w-full h-14 px-5 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-on-surface font-body transition-all outline-none placeholder-neutral-700" 
                  placeholder="••••••••" 
                  type="password" 
                  required
                />
              </div>

              {/* Actions */}
              <div className="space-y-6 pt-4">
                <button 
                  className="w-full h-14 editorial-gradient text-on-primary font-headline font-bold text-lg rounded-xl tracking-tight shadow-xl shadow-primary/20 active:scale-95 hover:brightness-110 transition-all duration-400 cursor-pointer" 
                  type="submit"
                >
                  REGISTRARSE
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-outline-variant/10"></div>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">O</span>
                  <div className="flex-1 h-px bg-outline-variant/10"></div>
                </div>

                <button 
                  className="w-full h-14 flex items-center justify-center gap-3 bg-white/5 border border-white/5 text-on-surface font-body font-semibold rounded-xl active:scale-95 hover:bg-white/10 transition-all duration-400 group cursor-pointer" 
                  type="button"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continuar con Google
                </button>
              </div>
            </form>

            <footer className="text-center pt-8">
              <p className="text-on-surface-variant text-sm font-body">
                ¿Ya tienes cuenta?{' '}
                <Link className="text-primary font-bold hover:underline underline-offset-4 transition-all ml-1" to="/login">Iniciar sesión</Link>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Registro;
