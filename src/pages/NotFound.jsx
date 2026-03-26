import React from 'react';

const NotFound = () => {
  return (
    /* height: calc(100vh - 160px) ensures NO overflow. 
       Adjust 160px to match your specific Nav + Footer height.
    */
    <div className="relative w-full bg-[#030303] flex items-center justify-center overflow-hidden" 
         style={{ height: 'calc(100vh - 160px)', minHeight: '500px' }}>
      
      {/* 1. Background "Glow" - Fixed, not following cursor */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />

      {/* 2. Content & Character Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Animated Character (Floating subtly) */}
        <div className="animate-bounce-slow mb-8">
          <svg width="180" height="180" viewBox="0 0 200 200" className="drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <defs>
              <linearGradient id="charGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="60" r="32" fill="url(#charGrad)" />
            <path d="M70 100 Q100 110 130 100 L145 190 H55 L70 100" fill="url(#charGrad)" />
            <circle cx="92" cy="58" r="3" fill="#000" />
            <circle cx="108" cy="58" r="3" fill="#000" />
            <path d="M90 75 Q100 80 110 75" stroke="#000" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 uppercase tracking-widest">
            404 | Page Not Found
          </h2>
          <p className="text-gray-500 max-w-sm mx-auto text-lg font-light leading-relaxed">
            The link is broken, or the page has moved into the deep void.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a 
            href="/" 
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Go Back Home
          </a>
          <button 
            onClick={() => window.history.back()}
            className="px-10 py-4 border border-white/10 text-gray-400 font-medium rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Previous Page
          </button>
        </div>
      </div>

      {/* 3. Subtle Particle Background (Static revealed) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;