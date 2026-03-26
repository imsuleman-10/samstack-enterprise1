import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="h-20 w-full border-b border-white/[0.05] bg-[#020202]/80 backdrop-blur-xl sticky top-0 z-50 px-6 md:px-10 flex items-center justify-between">
      {/* Branding */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="h-12 w-12 bg-gradient-to-br  rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-105 transition-transform">
          <img  src={logo} alt="Logo" className="h-12 w-12 rounded-2xl" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase text-white">
          Samstack<span className="text-blue-500 italic">.</span>
        </span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white uppercase transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
        >
          Start a Project
        </Link>
      </div>

      {/* Mobile Icon Placeholder */}
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;