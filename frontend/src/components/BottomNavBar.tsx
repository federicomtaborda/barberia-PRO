import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavBar = () => {
  const location = useLocation();

  // No mostrar en login ni registro
  const hideOnPaths = ['/login', '/registro'];
  if (hideOnPaths.includes(location.pathname)) {
    return null;
  }

  const navLinks = [
    { name: 'Inicio', path: '/', icon: 'home' },
    { name: 'Servicios', path: '/seleccion', icon: 'content_cut' },
    { name: 'Turnos', path: '/calendario', icon: 'calendar_today' },
    { name: 'Portfolio', path: '/portfolio', icon: 'photo_library' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-2 bg-neutral-950/80 backdrop-blur-lg rounded-t-2xl z-50 md:hidden border-t border-white/5">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-500 hover:text-white'}`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: isActive ? "'FILL' 1" : " 'FILL' 0" }}>
                {link.icon}
              </span>
              <span className="text-[10px] uppercase tracking-widest mt-1 font-['Manrope']">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Floating Action Button (FAB) - Reservar */}
      {location.pathname !== '/calendario' && (
        <Link
          to="/calendario"
          className="fixed bottom-20 right-6 w-14 h-14 rounded-full editorial-gradient text-on-primary shadow-[0_8px_32px_rgba(242,202,80,0.3)] z-40 flex items-center justify-center md:hidden active:scale-95 transition-transform"
          aria-label="Reservar turno"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            add
          </span>
        </Link>
      )}
    </>
  );
};

export default BottomNavBar;
