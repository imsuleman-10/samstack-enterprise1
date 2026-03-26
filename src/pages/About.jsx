import React from 'react';

const About = () => {
  const values = [
    { title: "Client Focused", desc: "Your growth metrics are our primary success indicator." },
    { title: "Modern Design", desc: "Pixel-perfect aesthetics backed by psychological UX." },
    { title: "Scalability", desc: "Code built to handle 100 users or 100 million." },
    { title: "Full Support", desc: "Continuous deployment and 24/7 infrastructure monitoring." }
  ];

  return (
    <div className="w-full bg-[#020202] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">The Engine Room</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Engineering the <br />Future of Commerce.
          </h1>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        {/* Narrative Section */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <p className="text-2xl text-gray-300 leading-snug font-medium">
              Samstack Techs was founded on a simple premise: technical excellence should never be a bottleneck for business growth.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Based in the heart of Lahore, we operate as a boutique technology group. We don't take every project; we only partner with brands where our engineering can provide a massive ROI. We blend modern JavaScript ecosystems with sophisticated creative direction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl">
              <h4 className="text-4xl font-black text-blue-500 mb-2">99%</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">Uptime Record</p>
            </div>
            <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl">
              <h4 className="text-4xl font-black text-blue-500 mb-2">10+</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">Tech Stacks</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] hover:bg-blue-600 transition-all duration-500 group">
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{v.title}</h3>
              <p className="text-gray-500 group-hover:text-blue-100 transition-colors text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-32 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center">
          <h3 className="text-xs font-black tracking-[0.4em] uppercase text-blue-500 mb-6">Our Mission</h3>
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-4xl mx-auto italic">
            "To build digital infrastructures that are so reliable, they become invisible."
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;