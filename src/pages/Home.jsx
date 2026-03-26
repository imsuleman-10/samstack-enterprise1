import React from 'react';
import web from '../assets/Web Systems.png'
import lahore from '../assets/lahore.jpg'
import laptop from '../assets/laptop.avif'
import fast from '../assets/fast.avif'
import Earth from '../assets/Earth.jpeg'


const Home = () => {
  return (
    <div className="w-full bg-[#020202]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Professional Hero Image Layer */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src={Earth}
            alt="Abstract Tech" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Based in Lahore, Serving the Globe
          </div>
          
          <h1 className="text-[clamp(2.5rem,7.5vw,6rem)] font-black leading-[0.85] tracking-tighter mb-8 italic text-white">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              DIGITAL ENGINES.
            </span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Samstack Techs is a high-performance development agency. We engineer scalable digital infrastructures that transform business logic into competitive advantages.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500">
              Launch Project
            </button>
            <button className="px-10 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all duration-500">
              Our Stack
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid: Strategic Capabilities */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
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

            {/* Mockup visible by default (opacity-70) */}
            <div className="mt-16 relative h-64 w-full rounded-t-2xl border-t border-x border-white/10 overflow-hidden">
               <img 
                src={web}
                alt="System UI" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>
          </div>

          {/* Core Optimization */}
          <div className="md:col-span-4 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden group">
            <div className="text-5xl font-thin text-blue-500/50 italic z-10">01</div>
            <div className="z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Performance First</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Core Web Vitals are our baseline. We deliver sub-second load times for maximum conversion.
              </p>
            </div>
            {/* Image visible by default (opacity-20) */}
            <img 
              src={fast}
              className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-90 transition-opacity duration-500" 
              alt="Code"
            />
          </div>

          {/* Tech Stack - Added Background Image */}
          <div className="md:col-span-4 relative bg-[#0a0a0a00] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-white/20 transition-all overflow-hidden group">
            <img 
              src={laptop} 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 grayscale-50 transition-all duration-700" 
              alt="Tech Background"
            />
            <div className="relative z-10 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mt-20 text-white">Modern Tech Stacks</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">React // Next.js // Node</p>
            </div>
          </div>

          {/* Lahore Pride - Background visible by default (opacity-40) */}
          {/* Lahore Pride - Optimized & High Performance */}
          <div className="md:col-span-8 bg-[#001530] border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group">
            
            {/* The Background Image */}
            <img 
              src={lahore}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              alt="Lahore Tech Hub"
              loading="lazy"
            />
            
            {/* Gradient Overlay (Replaces mix-blend-overlay for speed) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-[#020202]/80" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Lahore Hub</h3>
              <p className="text-blue-200/60 text-sm max-w-xs font-medium mt-2 leading-relaxed">
                Combining South Asian technical agility with Silicon Valley standards.
              </p>
            </div>

            {/* Background Text Accent */}
            <div className="absolute -right-8 -bottom-12 text-[12rem] font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors duration-700">
              LHR
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
