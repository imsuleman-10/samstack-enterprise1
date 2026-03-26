import React from 'react';

const Services = () => {
  const services = [
    { 
      id: "01",
      title: "Full-Stack Engineering", 
      desc: "Architecting scalable, cloud-native infrastructures using the React & Node.js ecosystem. Built for 99.9% uptime.",
      tags: ["React", "Next.js", "PostgreSQL"]
    },
    { 
      id: "02",
      title: "Performance Systems", 
      desc: "Advanced speed optimization and Core Web Vitals engineering to ensure your SEO and conversion rates dominate.",
      tags: ["V8 Engine", "SSR", "Edge Caching"]
    },
    { 
      id: "03",
      title: "Enterprise Solutions", 
      desc: "Custom business logic integration, automated workflows, and complex data visualization for internal tools.",
      tags: ["CRM", "SaaS", "Internal Dashboards"]
    },
    { 
      id: "04",
      title: "UI/UX Strategy", 
      desc: "Pixel-perfect frontend development with a focus on conversion-centric design and motion physics.",
      tags: ["Framer Motion", "Tailwind", "GSAP"]
    },
    { 
      id: "05",
      title: "Security & DevOps", 
      desc: "Hardened deployment pipelines, SSL management, and high-security hosting configurations via Vercel/AWS.",
      tags: ["CI/CD", "SSL", "Cloud Architecture"]
    },
    { 
      id: "06",
      title: "Portfolio Engine", 
      desc: "Bespoke digital showcases designed for high-end creators and elite service providers to capture leads.",
      tags: ["Personal Branding", "High-Conversion"]
    }
  ];

  return (
    <div className="w-full bg-[#020202] py-20 overflow-hidden" style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Core Capabilities</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            WE PROVIDE THE <br />
            <span className="text-gray-600">TECHNICAL EDGE.</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] border border-white/[0.05] p-10 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden">
              {/* Subtle Background Number */}
              <span className="absolute top-4 right-8 text-8xl font-black text-white/[0.02] group-hover:text-blue-500/10 transition-colors">
                {s.id}
              </span>
              
              <div className="relative z-10">
                <div className="w-10 h-1 bg-blue-600 mb-8 group-hover:w-full transition-all duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {s.desc}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-widest text-gray-400 font-bold border border-white/10 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;