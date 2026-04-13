import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/seleccion' },
    { name: 'Horarios', path: '/calendario' },
    { name: 'Cuenta', path: '/login' },
  ];

  const extendedLinks = [
    { name: 'Inicio', path: '/', icon: 'home' },
    { name: 'Servicios', path: '/seleccion', icon: 'content_cut' },
    { name: 'Horarios', path: '/calendario', icon: 'calendar_today' },
    { name: 'Portfolio', path: '/portfolio', icon: 'photo_library' },
    { name: 'Cuenta', path: '/login', icon: 'person' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/60 backdrop-blur-md flex justify-between items-center px-6 py-4 inner-shadow-outline-variant-15">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex items-center justify-center p-2 -ml-2 rounded-lg text-[#F2CA50] hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2CA50]/50 active:scale-95"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#F2CA50] uppercase font-['Space_Grotesk'] hover:opacity-80 transition-opacity">
            THE ATELIER
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                className={`${isActive ? 'text-[#F2CA50]' : 'text-neutral-400'} font-['Manrope'] text-sm tracking-widest uppercase hover:text-[#D4AF37] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#F2CA50] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left ${isActive ? 'after:scale-x-100' : ''}`}
                to={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Profile Image / Initials */}
        <Link to="/perfil" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/20 hover:scale-105 hover:border-[#F2CA50]/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2CA50]/50">
          <img alt="Logotipo de la Barbería" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-aLsGXB6YS_eVW0Jzm686bXAZs1Oc4UNGZfcAQBlJIVmprlqPXHpzq0I0vTew4q86V22fQBrZ824khCX7rvgFBOjRKZWqxIbWbFq1abWKkogByNAuav20kVNZOL5_c0oviiNUhLuoiKVce4q9qzKpELb32CThpCgTBuWndJSc_pFY6YSTxf6JYos1w0OqyugjYWF1jr1Udf75_OG54NcrbrAOloMgHTVlyR4zJ8OkSDd_7CWOiOOWsJMPEStwvBA_vaPqd1EYZ7I"/>
        </Link>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <div 
          className={`absolute top-0 left-0 w-[280px] h-full bg-neutral-950 border-r border-neutral-800 p-6 flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold tracking-tighter text-[#F2CA50] uppercase font-['Space_Grotesk']">
              THE ATELIER
            </span>
            <button onClick={closeMenu} className="p-2 -mr-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-[#F2CA50]/50" aria-label="Cerrar menú">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <nav className="flex flex-col gap-2 flex-grow overflow-y-auto pr-2 pb-20 custom-scrollbar">
            {extendedLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  onClick={closeMenu} 
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-['Manrope'] tracking-widest uppercase text-sm ${isActive ? 'bg-neutral-800/80 text-[#F2CA50] font-bold' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white hover:translate-x-1'}`}
                  to={link.path}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'text-[#F2CA50]' : 'text-neutral-500'}`}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-neutral-800">
            <p className="text-xs text-neutral-500 font-body text-center">
              © {new Date().getFullYear()} The Atelier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
