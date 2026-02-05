
import React, { useState, useEffect, useRef } from 'react';
import { 
  Network, 
  ShieldCheck, 
  Brain, 
  Database, 
  BarChart3, 
  Scale,
//   Puzzle
} from 'lucide-react';
import puzzles from '../../assets/problem-solving-two.png'


/**
 * Interface for the feature data
 */
interface FeatureItem {
  id: string;
  text: string;
  icon: React.ReactNode;
}

/**
 * Static Card for Mobile/Grid View
 */
const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => (
  <div 
    className="group relative overflow-hidden flex flex-col justify-center px-5 py-5 w-full rounded-[24px] bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-500 hover:bg-[#006FF6] cursor-pointer animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="relative z-20 flex items-center w-full">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mr-4 bg-white text-[#006FF6] transition-all duration-300 group-hover:bg-white/20 group-hover:text-white shadow-sm">
        {feature.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-[15px] font-bold leading-tight text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-white">
          {feature.text}
        </h3>
      </div>
    </div>
  </div>
);

/**
 * Orbiting Card for Desktop
 */
const OrbitingCard: React.FC<{ 
  feature: FeatureItem; 
  angle: number; 
  rx: number; 
  ry: number; 
}> = ({ feature, angle, rx, ry }) => {
  const x = rx * Math.cos(angle);
  const y = ry * Math.sin(angle);

  const baseScale = 1.0; 
  const opacity = 0.8 + (y / ry + 1) * 0.1; 
  const zIndex = y > 0 ? 50 : 10;

  return (
    <div 
      className="absolute top-1/2 left-1/2 will-change-transform pointer-events-auto"
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${baseScale})`,
        opacity: opacity,
        zIndex: zIndex,
        transition: 'transform 0.1s linear, opacity 0.5s ease',
      }}
    >
      <div className="group relative overflow-hidden flex flex-col justify-center px-6 w-80 h-[4.8rem] rounded-[24px] bg-white border border-slate-100 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 hover:bg-[#006FF6] cursor-pointer hover:scale-105 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        <div className="relative z-20 flex items-center w-full">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-[#F8FAFC] text-[#006FF6] transition-all duration-300 group-hover:bg-white/20 group-hover:text-white shadow-sm border border-slate-50">
            {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24, strokeWidth: 2 })}
          </div>
          <div className="flex-1">
            <h3 className="text-[18px] font-bold leading-tight text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-white">
              {feature.text}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OvalWhatweSolve: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const rx = 520; 
  const ry = 140;

  const features: FeatureItem[] = [
    { id: 'f1', text: 'Complex Fragmented Data Ecosystems', icon: <Network size={20} /> },
    { id: 'f2', text: 'Regulatory Compliance & Controls', icon: <ShieldCheck size={20} /> },
    { id: 'f3', text: 'AI Adoption In Pharma Workflows', icon: <Brain size={20} /> },
    { id: 'f4', text: 'Data Integration & Modernization', icon: <Database size={20} /> },
    { id: 'f5', text: 'Analytics Visibility & Performance Issues', icon: <BarChart3 size={20} /> },
    { id: 'f6', text: 'Scalable Operations & Governance', icon: <Scale size={20} /> }
  ];

  const animate = (time: number) => {
    if (lastTimeRef.current !== null) {
      const deltaTime = time - lastTimeRef.current;
      setAngle(prev => prev + (deltaTime * 0.000055)); 
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setIsVisible(true);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className={`relative w-full h-auto bg-[#F5F5F5] overflow-hidden flex flex-col items-center justify-center py-12 md:py-20 select-none font-['Inter'] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#FBFDFF]">
        {/* Subtle Grid Overlay (Static) */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#006FF6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* SECTION TITLE */}
        <div className="relative mb-8 md:mb-12 text-center z-20 px-6 max-w-4xl">
          <h2 className="text-[36px] md:text-[52px] font-[900] text-slate-900 tracking-tighter leading-[1.1]">
            What we <span className="text-[#006FF6] relative inline-block">
              solve
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#006FF6]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-500 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Architecting comprehensive solutions for the most intricate data and operational bottlenecks.
          </p> */}
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center px-6">
          
          {/* MOBILE & TABLET GRID VIEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl lg:hidden">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.id} feature={feature} index={idx} />
            ))}
          </div>

          {/* CONTAINER BOUND DESKTOP ORBIT ARENA */}
          <div className="hidden lg:flex relative w-full h-[400px] items-center justify-center pointer-events-none">
            
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width={rx * 2 + 100} height={ry * 2 + 100} viewBox={`0 0 ${rx * 2 + 100} ${ry * 2 + 100}`} style={{ overflow: 'visible' }}>
                {/* Main Orbital Path Line */}
                <ellipse 
                  cx={rx + 50} cy={ry + 50} rx={rx} ry={ry} 
                  fill="none" stroke="#E2E8F0" strokeWidth="2" 
                  className="opacity-100"
                />

                {/* Decorative nodes along the path */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const nodeAngle = (i * Math.PI * 2) / 6 + (angle * 0.15);
                  const px = (rx + 50) + rx * Math.cos(nodeAngle);
                  const py = (ry + 50) + ry * Math.sin(nodeAngle);
                  return (
                    <circle 
                      key={i}
                      cx={px} cy={py} r={2.5} 
                      fill="#006FF6" 
                      className="opacity-15"
                    />
                  );
                })}
              </svg>
            </div>

            <div className="absolute inset-0">
              {features.map((feature, idx) => {
                const offsetAngle = (idx * (2 * Math.PI)) / features.length;
                return (
                  <OrbitingCard 
                    key={feature.id} 
                    feature={feature} 
                    angle={angle + offsetAngle}
                    rx={rx}
                    ry={ry}
                  />
                );
              })}
            </div>

            {/* CENTER CORE */}
            <div className="relative z-[60] flex flex-col items-center justify-center animate-bounce-slow">
              <div className="w-24 h-24 rounded-[36px] bg-white border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,111,246,0.15)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0  opacity-80" />
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl  animate-pulse-slow">
                    {/* <Puzzle size={40} strokeWidth={1.5} /> */}
                        <img
      src={puzzles}
      alt="Puzzle Icon"
    //   className="w-10 h-10 object-contain"
    />
                  </div>
              </div>
              {/* Focal glow effect */}
              <div className="absolute w-48 h-48 bg-[#006FF6]/5 blur-[80px] rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.9; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
};
