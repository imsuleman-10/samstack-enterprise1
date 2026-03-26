import React from 'react';
import { Link } from 'react-router-dom'; // Added Link for navigation
import web from '../assets/Web Systems.png';
import lahore from '../assets/lahore.jpg';
import laptop from '../assets/laptop.avif';
import fast from '../assets/fast.avif';
import Earth from '../assets/Earth.jpeg';

const Home = () => {
  return (
    <div className="w-full bg-[#020202]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Professional Hero Image Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={Earth}
            alt="Global Tech Network" 
            className="w-full h-full object-cover scale-110 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
        </div>

        {/* Dynamic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none animate-pulse" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-10 transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Based in Lahore, Serving the Globe
          </div>
          
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter mb-8 italic text-white">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
              DIGITAL ENGINES.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-12 px-4">
            Samstack Techs is a high-performance development agency. We engineer scalable digital infrastructures that transform business logic into competitive advantages.
          </p>

          {/* Hero Action Area */}
<div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
  
  {/* Primary Button: The "Magnetic Shine" */}
  <Link 
    to="/contact" 
    className="group relative px-12 py-5 bg-white overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
  >
    {/* Animated Shine Overlay */}
    <div className="absolute inset-0 z-0 w-full h-full transition-transform duration-1000 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-[-25deg]" />
    
    <span className="relative z-10 text-black font-black uppercase text-[11px] tracking-[0.25em] flex items-center gap-3">
      Launch Project
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </span>
  </Link>

  {/* Secondary Button: The "Glass Ghost" */}
  <a 
    href="#capabilities" 
    className="group relative px-12 py-5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:border-white/40 active:scale-95 flex items-center justify-center"
  >
    {/* Hover Fill Effect */}
    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    
    <span className="relative z-10 text-white font-bold uppercase text-[11px] tracking-[0.25em]">
      Our Stack
    </span>
  </a>
</div>
        </div>
      </section>

      {/* Bento Grid: Strategic Capabilities */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 md:px-10 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Enterprise Solutions */}
          <div className="md:col-span-8 group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[80px] group-hover:bg-blue-600/10 transition-all" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4 tracking-tight text-white">Enterprise Web Systems</h3>
              <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                Architecting secure, cloud-native platforms with 99.9% uptime. We prioritize technical debt reduction and future-proof scaling.
              </p>
            </div>

            <div className="mt-16 relative h-64 w-full rounded-t-2xl border-t border-x border-white/10 overflow-hidden">
               <img 
                src={web}
                alt="System UI" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>
          </div>

          {/* Performance Card */}
          <div className="md:col-span-4 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden group">
            <div className="text-5xl font-thin text-blue-500/50 italic z-10">01</div>
            <div className="z-10 mt-20">
              <h3 className="text-xl font-bold mb-2 text-white">Performance First</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Core Web Vitals are our baseline. We deliver sub-second load times for maximum conversion.
              </p>
            </div>
            <img 
              src={fast}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
              alt="Performance Metrics"
            />
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-4 relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all overflow-hidden group">
            <img 
              src={laptop} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700" 
              alt="Tech Background"
            />
            <div className="relative z-10 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mt-20 text-white">Modern Tech Stacks</h3>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] mt-2">React // Next.js // Node</p>
            </div>
          </div>

          {/* Lahore Hub Card */}
          <div className="md:col-span-8 bg-[#001530] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group">
            <img 
              src={lahore}
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700" 
              alt="Lahore Tech Hub"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202] to-transparent" />

            <div className="relative z-10 flex flex-col justify-center h-full">
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">Lahore Hub</h3>
              <p className="text-gray-400 text-sm max-w-xs font-medium mt-4 leading-relaxed">
                Combining South Asian technical agility with Silicon Valley standards.
              </p>
            </div>

            <div className="absolute -right-8 -bottom-12 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none">
              LHR
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
