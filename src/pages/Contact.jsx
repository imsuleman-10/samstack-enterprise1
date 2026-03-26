import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-[#020202] py-20" style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-20">
        
        {/* Left Side: Info Hub */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Project Inquiry</h2>
            <h1 className="text-6xl font-black tracking-tighter text-white mb-8">
              START THE <br />ENGINE.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-sm">
              Ready to scale? Fill out the form or reach us via our technical support channels.
            </p>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-black mb-1">Global HQ</p>
                <p className="text-white text-lg font-medium group-hover:text-blue-500 transition-colors">Lahore, Pakistan</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-black mb-1">Direct Communication</p>
                <p className="text-white text-lg font-medium group-hover:text-blue-500 transition-colors">samstacktechs@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Response Status */}
          <div className="mt-20 p-6 border border-white/5 bg-white/[0.02] rounded-2xl inline-flex items-center gap-4 max-w-xs">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Average response time: 4 Hours
            </p>
          </div>
        </div>

        {/* Right Side: Consultation Form */}
        <div className="lg:col-span-7">
          <form className="bg-[#0a0a0a] border border-white/[0.05] p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            {/* Form Glow Effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#111] border border-white/5 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-[#111] border border-white/5 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all" />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
              <textarea rows="5" placeholder="Tell us about your project requirements..." className="w-full bg-[#111] border border-white/5 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"></textarea>
            </div>

            <button className="group w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-4">
              Send Inquiry
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;