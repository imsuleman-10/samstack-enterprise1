import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll strictly when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent iOS bounce effect when locked
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* --- DESKTOP & HEADER BAR --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-500 ${
          scrolled
            ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className={`flex items-center justify-between px-6 md:px-16 mx-auto max-w-[1440px] transition-all duration-500 ease-in-out ${scrolled ? 'h-20' : 'h-28'}`}>
          
          {/* Branding */}
          <Link to="/" className="flex items-center gap-3 group relative z-[510]">
            <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-white/10 bg-black shadow-[0_0_15px_rgba(50,120,230,0.9)] group-hover:shadow-[0_0_25px_rgba(50,130,246,9)] transition-all duration-500">
              <img src={logo} alt="Samstack Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white transition-colors duration-300">
              Samstack<span className="text-blue-500 italic">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group py-2">
                  <Link
                    to={link.path}
                    className={`text-[12px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ease-out ${
                      location.pathname === link.path 
                        ? 'w-full shadow-[0_0_12px_#3b82f6]' 
                        : 'w-0 group-hover:w-full group-hover:shadow-[0_0_12px_#3b82f6]'
                    }`}
                  />
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="relative overflow-hidden group bg-blue-600/10 border border-blue-500/50 text-blue-400 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 h-full w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle (Visible only when menu is closed) */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden relative z-[510] p-2 flex flex-col justify-center items-center gap-[6px] w-12 h-12 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Open Menu"
          >
            <span className="block w-8 h-[2px] bg-white rounded-full" />
            <span className="block w-6 h-[2px] bg-blue-500 rounded-full self-end" />
            <span className="block w-8 h-[2px] bg-white rounded-full" />
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN TAKEOVER MENU --- */}
      <div
        className={`fixed inset-0 h-[100dvh] w-full bg-[#050505]/98 backdrop-blur-3xl z-[9999] flex flex-col justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Subtle Cyber Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-6 p-4 text-white hover:text-blue-500 transition-colors z-[10000]"
          aria-label="Close Menu"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute block w-8 h-[2px] bg-current rotate-45" />
            <span className="absolute block w-8 h-[2px] bg-current -rotate-45" />
          </div>
        </button>

        <div className="relative z-10 space-y-8 flex flex-col w-full">
          <p className="text-blue-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 opacity-60">
            Menu
          </p>
          
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-5xl font-black uppercase tracking-tighter transition-all duration-500 ${
                location.pathname === link.path
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 translate-x-4'
                  : 'text-white/80 hover:text-white hover:translate-x-4'
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 100 + 200}ms` : '0ms',
                transform: isOpen ? (location.pathname === link.path ? 'translateX(16px)' : 'translateX(0)') : 'translateX(-40px)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <div 
            className="pt-12 mt-8 border-t border-white/10"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 100 + 300}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(40px)',
              opacity: isOpen ? 1 : 0,
              transitionProperty: 'transform, opacity'
            }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center text-2xl font-bold text-white group"
            >
              Start a Project 
              <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28 w-full bg-transparent" />
    </>
  );
};

export default Navbar;
