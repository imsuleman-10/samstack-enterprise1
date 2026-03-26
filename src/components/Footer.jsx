import React from 'react';

const Footer = () => {
  return (
    /* h-20: Fixed height for layout consistency (matches Navbar).
       w-full: Ensures it spans the entire width.
       border-t: Subtle separation from the main content.
       static: Default positioning (not fixed, not absolute).
    */
    <footer className="h-20 w-full border-t border-white/[0.05] bg-[#020202] px-6 md:px-10 flex items-center justify-between shrink-0">
      
      {/* 1. Status & Branding */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-600 font-bold hidden sm:inline">
            Systems Operational
          </span>
        </div>
        <div className="text-[9px] tracking-[0.3em] uppercase text-gray-600 font-bold">
          © 2026 SAMSTACK TECHNOLOGY GROUP
        </div>
      </div>

      {/* 2. Navigation / Social Links */}
      <nav className="flex gap-6 md:gap-8 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
         <a 
           href="https://github.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="hover:text-blue-500 transition-colors duration-200"
         >
           GitHub
         </a>
         <a 
           href="https://linkedin.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="hover:text-blue-500 transition-colors duration-200"
         >
           LinkedIn
         </a>
         <a 
           href="https://instagram.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="hover:text-blue-500 transition-colors duration-200"
         >
           Instagram
         </a>
      </nav>
      
    </footer>
  );
};

export default Footer;
