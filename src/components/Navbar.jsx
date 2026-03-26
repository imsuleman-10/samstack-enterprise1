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

  // Logic: Handle Scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic: Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      {/* FIXED POSITION: Use 'fixed' instead of 'sticky' for absolute control.
          TRANSITION: Smooth height and background change on scroll.
      */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex items-center justify-between px-6 md:px-16 ${
        scrolled 
          ? 'h-16 bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'h-24 bg-transparent border-b border-transparent'
      }`}>
        
        {/* Branding - The Neon Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 logo-neon-hover bg-black">
            <img src={logo} alt="Logo" className="h-full w-full object-contain opacity-100" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-white">
            Samstack<span className="text-blue-500 italic">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link 
                  to={link.path} 
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-blue-600/20"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[150] text-white p-2"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-blue-500 transition-all ${isOpen ? 'opacity-0' : 'w-3/4'}`} />
            <span className={`h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[140] flex flex-col justify-center px-10 transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="space-y-8">
            <p className="text-blue-500 text-[10px] font-bold tracking-[0.5em] uppercase">Navigation</p>
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-10">
               <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-blue-500 border-b-2 border-blue-500 pb-2"
              >
                Let's Talk →
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content jump because of 'fixed' navbar */}
      <div className="h-24 w-full" />
    </>
  );
};

export default Navbar;
