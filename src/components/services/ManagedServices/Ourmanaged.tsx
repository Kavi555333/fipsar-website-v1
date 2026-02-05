import React from 'react';
import { Activity, Zap, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

// Configuration
const PRIMARY_COLOR = '#006FF6';

const Ourmanaged: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Proactive monitoring",
      icon: Activity,
    },
    {
      id: 2,
      title: "Faster incident resolution",
      icon: Zap,
    },
    {
      id: 3,
      title: "Strong governance",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Continuous optimization",
      icon: TrendingUp,
    }
  ];

  return (
    <section className="relative w-full py-16 px-8 lg:px-12 bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* Background: Subtle High-End Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 pt-4">
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: PRIMARY_COLOR }}></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Service Delivery</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                How Our <br />
                <span className="relative inline-block">
                    <span className="relative z-10" style={{ color: PRIMARY_COLOR }}>Managed Services</span>
                    <span 
                        className="absolute bottom-1 left-0 w-full h-3 -z-10 opacity-30 transform -skew-x-12"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    ></span>
                </span>
                <br />Work
              </h2>
              
              <p className="text-base text-slate-600 leading-relaxed font-light max-w-md mb-8">
                We follow a structured, SLA-driven delivery model to ensure continuous operations, rapid support  and continuous improvement across your data ecosystem.
              </p>

              <button 
                className="group flex items-center gap-3 text-sm font-bold tracking-wide uppercase transition-all duration-300"
                style={{ color: PRIMARY_COLOR }}
              >
                <span>Full Process Breakdown</span>
                <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:w-10 group-hover:shadow-lg"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((feature, idx) => (
                  <div key={feature.id} className={idx % 2 !== 0 ? "md:mt-0" : ""}>
                    <FeatureCard feature={feature} index={idx} />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  return (
    <div 
      className="group relative bg-white rounded-3xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-slate-100/60 hover:border-transparent"
    >
        {/* Hover: Gradient Border Mask (The "Magic" Border) */}
        <div 
            className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
                background: `linear-gradient(135deg, ${PRIMARY_COLOR}, transparent 50%)`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
            }}
        />

        {/* Hover: Ambient Glow Shadow */}
        <div 
            className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-all duration-700 blur-xl"
            style={{ backgroundColor: PRIMARY_COLOR }}
        />

        {/* Background Blob */}
        <div 
            className="absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-all duration-700 blur-2xl group-hover:scale-150"
            style={{ backgroundColor: PRIMARY_COLOR }}
        />

      {/* Card Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-md group-hover:shadow-blue-500/10 group-hover:scale-105 bg-slate-50 group-hover:bg-white"
        >
          <feature.icon 
            size={24} 
            strokeWidth={1.5}
            className="text-slate-400 transition-colors duration-500 group-hover:text-[#006FF6]" 
          />
        </div>

        <span className="font-mono text-lg font-bold text-slate-100 group-hover:text-slate-200 transition-colors duration-500 select-none">
          0{index + 1}
        </span>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-slate-800 leading-snug mb-2 group-hover:text-[#006FF6] transition-colors duration-300">
          {feature.title}
        </h3>
        
        {/* Animated Reveal Action */}
        {/* <div className="h-0 overflow-hidden group-hover:h-5 transition-all duration-500 ease-out">
            <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-[1.5px] w-4 bg-[#006FF6]"></div>
                <span className="text-[10px] font-bold tracking-widest text-[#006FF6] uppercase">Explore</span>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Ourmanaged;