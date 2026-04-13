import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <>
      
<main className="min-h-screen flex flex-col md:flex-row">
{/* Visual Side: Editorial Impact */}
<section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0 opacity-60">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="close-up of a master barber's tools on a dark textured leather surface with dramatic warm cinematic lighting and shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDla6ZV-S3SxuQSOIyEIDy8jmh-o-BfX_XUeXhnaZqIwZPwaDE_7XKyUvnXm-6fjmh5Ro5ogLQDfPf0KLbdkp7Uxn36cp8bhEjjIyfMPrQNFw6zmahoeGFn_rUMmXiW7PiulLrLwRO1p-vS4B6S5VqFe7QU2MW1e9heaoqK9azdq6Ey_NJ_q5EHvYzdajnaO9eTuXjYThRMVqXAoVjCisawYYl4M3Oh-HTHZfoe-MjL_xtuczhk-ddlo9az1jwayoqmtBdqwJ1JNsFW"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
<div className="relative z-20 flex flex-col justify-end p-16 space-y-6">
<div className="inline-block border-l-2 border-primary pl-6">
<h2 className="font-headline text-5xl font-bold tracking-tighter text-on-surface uppercase leading-none">
                        The <br/> <span className="text-primary">Atelier</span> Experience
                    </h2>
</div>
<p className="max-w-md text-on-surface-variant text-lg leading-relaxed">
                    Más que un corte, es una declaración de intenciones. Accede a la red más exclusiva de maestros artesanos de la imagen.
                </p>
</div>
</section>
{/* Registration Side: Task Focus */}
<section className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface min-h-screen">
<div className="w-full max-w-md space-y-10">
{/* Branding Header */}
{/* Registration Form */}
<form className="space-y-6">
<div className="grid grid-cols-1 gap-5">
{/* Full Name */}
<div className="group space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Nombre completo</label>
<div className="relative flex items-center bg-surface-container-lowest rounded-xl inner-shadow-outline-variant-15 overflow-hidden transition-all duration-300 focus-within:bg-surface-container-low group-focus-within:ring-1 ring-primary/20">
<span className="material-symbols-outlined absolute left-4 text-outline text-xl">person</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-0" placeholder="Tu nombre" type="text"/>
</div>
</div>
{/* Email */}
<div className="group space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Email</label>
<div className="relative flex items-center bg-surface-container-lowest rounded-xl inner-shadow-outline-variant-15 overflow-hidden transition-all duration-300 focus-within:bg-surface-container-low group-focus-within:ring-1 ring-primary/20">
<span className="material-symbols-outlined absolute left-4 text-outline text-xl">mail</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-0" placeholder="email@ejemplo.com" type="email"/>
</div>
</div>
{/* Phone */}
<div className="group space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Teléfono</label>
<div className="relative flex items-center bg-surface-container-lowest rounded-xl inner-shadow-outline-variant-15 overflow-hidden transition-all duration-300 focus-within:bg-surface-container-low group-focus-within:ring-1 ring-primary/20">
<span className="material-symbols-outlined absolute left-4 text-outline text-xl">call</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-0" placeholder="+34 000 000 000" type="tel"/>
</div>
</div>
{/* Password */}
<div className="group space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Contraseña</label>
<div className="relative flex items-center bg-surface-container-lowest rounded-xl inner-shadow-outline-variant-15 overflow-hidden transition-all duration-300 focus-within:bg-surface-container-low group-focus-within:ring-1 ring-primary/20">
<span className="material-symbols-outlined absolute left-4 text-outline text-xl">lock</span>
<input className="w-full bg-transparent border-none py-4 pl-12 pr-12 text-on-surface placeholder:text-outline-variant focus:ring-0" placeholder="••••••••" type="password"/>
<span className="material-symbols-outlined absolute right-4 text-outline text-xl cursor-pointer hover:text-primary">visibility</span>
</div>
</div>
</div>
{/* Actions */}
<div className="space-y-4 pt-4">
<button className="w-full py-4 px-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-400 active:scale-[0.98]" type="submit">
                            CREAR CUENTA
                        </button>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="flex-shrink mx-4 text-xs font-bold uppercase text-outline tracking-widest">o</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>
<button className="w-full py-4 px-6 rounded-xl bg-surface-container-highest text-on-surface font-bold text-sm tracking-widest uppercase hover:bg-surface-bright transition-all duration-400 flex items-center justify-center space-x-3 inner-shadow-outline-variant-15" type="button">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
</svg>
<span>Registrarse con Google</span>
</button>
</div>
</form>
{/* Footer Link */}
<footer className="text-center pt-8">
<p className="text-on-surface-variant text-sm">
                        ¿Ya tienes cuenta? 
                        <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1 transition-all" to="/">Iniciar sesión</Link>
</p>
</footer>
</div>
</section>
</main>

    </>
  );
};

export default Registro;
