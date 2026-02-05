
import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  ClipboardCheck, 
  Leaf, 
  Layers, 
  PlusSquare,
  Puzzle, ArrowUpRight  
} from 'lucide-react';


import herotop from '../../assets/IndustriesHeroElement.png';
const IndustrySection: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse move handler for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate normalized offset (-0.5 to 0.5)
    setMousePos({
      x: (clientX / innerWidth) - 0.5,
      y: (clientY / innerHeight) - 0.5,
    });
  };

  const items = [
    { id: 1, label: 'Medical Affairs', icon: <Activity className="w-5 h-5" /> },
    { id: 2, label: 'Regulatory', icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: 3, label: 'Bio Pharma', icon: <Leaf className="w-5 h-5" /> },
    { id: 4, label: 'CRO\'S', icon: <Layers className="w-5 h-5" /> },
    { id: 5, label: 'Healthcare Providers', icon: <PlusSquare className="w-5 h-5" /> },
  ];

  const displayItems = [...items, ...items, ...items];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className=" relative w-full overflow-hidden bg-white transition-colors duration-700 pt-0 mt-8"
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .entrance-anim {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .entrance-anim.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .delay-100 { transition-delay: 100ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-300 { transition-delay: 300ms; }
          .delay-400 { transition-delay: 400ms; }

          .bg-mesh {
            background-image: 
              radial-gradient(at 0% 0%, hsla(197, 98%, 45%, 0.05) 0px, transparent 50%),
              radial-gradient(at 100% 0%, hsla(197, 98%, 45%, 0.05) 0px, transparent 50%),
              radial-gradient(at 50% 100%, hsla(197, 98%, 45%, 0.03) 0px, transparent 50%);
          }
        `}
      </style>

      {/* Enhanced Backdrop: Mesh Gradients */}
      <div className="absolute inset-0 bg-mesh pointer-events-none z-0" />
      
      {/* Enhanced Backdrop: Floating Blurred Blobs (Atmospheric Glow) */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#006FF6]/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      />
      <div 
        className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#006FF6]/5 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
      />

      {/* Decorative Top Image Curve */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <img 
          src={herotop} 
          alt="Top Decorative Curve" 
          className="w-full h-24 md:h-32 object-cover opacity-90"
          style={{ 
            // maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Parallax Decorative Dot Pattern - Left */}
      <div 
        className="absolute left-[-40px] top-[35%] opacity-15 pointer-events-none transition-transform duration-700 ease-out z-10"
        style={{
          width: '200px',
          height: '200px',
          backgroundImage: 'radial-gradient(#006FF6 3px, transparent 2px)',
          // backgroundImage: `url(${leftbd})`,
          backgroundSize: '24px 24px',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* Parallax Decorative Dot Pattern - Right */}
      <div 
        className="absolute right-[-60px] top-[45%] opacity-15 pointer-events-none transition-transform duration-700 ease-out z-10"
        style={{
          width: '280px',
          height: '280px',
          backgroundImage: 'radial-gradient(#006FF6 3px, transparent 2px)',
          backgroundSize: '24px 24px',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-20 pt-28 md:pt-44">

         <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                </span>
                 Industry
                </div>
            </div>
        {/* Main Headline - Compact and strictly 3 lines */}
        <div className={`max-w-4xl mx-auto text-center mb-10 entrance-anim ${isVisible ? 'visible' : ''}`}>
          <h1 className="capitalize text-[30px] md:text-[34px] font-bold text-[#424242] leading-[1.3] md:leading-[1.25] tracking-tight">
            At the heart of every breakthrough in <br className="hidden md:block" />
            healthcare lies a network of <span className="text-[#006FF6] cursor-default">innovators, </span><br className="hidden md:block" />
            <span className="text-[#006FF6] cursor-default">researchers & providers.</span>
          </h1>
        </div>

        {/* Interactive Feature Cards - Visible borders and deep shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Card 1 */}
   
        <div className="relative group cursor-default">
          {/* Circular Badge - Left Top */}
          <div className="absolute -top-6 -left-6 z-20 w-16 h-16 bg-white rounded-full border border-[#006FF61a] shadow-[0_4px_20px_rgba(2,165,230,0.15)] flex items-center justify-center overflow-visible transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_30px_rgba(2,165,230,0.3)]">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Puzzle className="w-6 h-6 text-[#006FF6]" strokeWidth={1.75}  />
             </div>
             {/* Subtle outer rings */}
             <div className="absolute inset-0 rounded-full border-4 border-[#006FF608] pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          {/* Main Card Body */}
          <div className="h-full min-h-[160px] bg-white border border-[#006FF633] rounded-2xl p-8 flex items-center shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(2,165,230,0.2)] group-hover:border-[#006FF6] group-hover:-translate-y-2">
            <p className="text-[#333] text-md leading-relaxed font-medium transition-colors duration-300 group-hover:text-black">
              We partner with organizations across the Life Sciences ecosystem from drug development to healthcare delivery.
            </p>
          </div>
        </div>


              
        <div className="relative group cursor-default">
          {/* Circular Badge - Right Top */}
          <div className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-white rounded-full border border-[#006FF61a] shadow-[0_4px_20px_rgba(2,165,230,0.15)] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_8px_30px_rgba(2,165,230,0.3)]">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#006FF6]" strokeWidth={1.75} />
             </div>
             {/* Subtle outer rings */}
             <div className="absolute inset-0 rounded-full border-4 border-[#006FF608] pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          {/* Main Card Body */}
          <div className="h-full min-h-[160px] bg-white border border-[#006FF633] rounded-2xl p-8 flex items-center shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(2,165,230,0.2)] group-hover:border-[#006FF6] group-hover:-translate-y-2">
            <p className="text-[#333] text-md leading-relaxed font-medium transition-colors duration-300 group-hover:text-black">
              Helping them translate ideas into impactful solutions that improve patient outcomes.
            </p>
          </div>
        </div>


        </div>
      </div>

      {/* Interactive Marquee Bar - Compact and refined */}
      <div className={`w-full bg-[#006FF6] py-8 relative overflow-hidden entrance-anim delay-400 z-20 ${isVisible ? 'visible' : ''}`}>
        <div className="animate-marquee whitespace-nowrap">
          {displayItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-[1.2rem] mx-3 transition-all hover:bg-white hover:shadow-xl hover:scale-105 cursor-pointer group/item"
            >
              <div className="text-white group-hover/item:text-[#006FF6] transition-colors duration-300 transform group-hover/item:scale-110">
                {item.icon}
              </div>
              <span className="text-white group-hover/item:text-[#006FF6] font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Soft Edge Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#006FF6] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#006FF6] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Dynamic Bottom Decoration */}
      <div 
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none z-10"
        style={{
          width: '70%',
          height: '100px',
          backgroundImage: 'radial-gradient(#006FF6 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />
    </section>
  );
};

export  default IndustrySection;
