
import React, { useEffect, useState } from 'react';

/**
 * Reverted to the preferred "tech" icon style
 */
const AlignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110">
    <rect x="3" y="4" width="18" height="2" rx="1" fill="#006FF6" />
    <rect x="7" y="9" width="14" height="2" rx="1" fill="#5EA6FF" />
    <rect x="3" y="14" width="18" height="2" rx="1" fill="#006FF6" />
    <rect x="7" y="19" width="10" height="2" rx="1" fill="#5EA6FF" />
    <circle cx="4" cy="10" r="2" stroke="#5EA6FF" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2" stroke="#5EA6FF" strokeWidth="1.5" />
  </svg>
);

const OperateIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:rotate-12">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#006FF6" strokeWidth="1.5"/>
    <path d="M12 6V12L16 14" stroke="#5EA6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" fill="#006FF6" className="animate-pulse" />
  </svg>
);

const OptimizeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:-translate-y-1">
    <path d="M21 7L13 15L9 11L3 17" stroke="#006FF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 7H15M21 7V13" stroke="#5EA6FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 7L7 7" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 11L5 11" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ArrowUp = ({ color = '#006FF6' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
    <path d="M12 4L12 20M12 4L7 9M12 4L17 9" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDown = ({ color = '#006FF6' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
    <path d="M12 20L12 4M12 20L17 15M12 20L7 15" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface NodeProps {
  label: string;
  description: string;
  labelPosition: 'top' | 'bottom';
  icon: React.ReactNode;
  delay?: number;
}

const RoadmapNode: React.FC<NodeProps> = ({ label, description, labelPosition, icon, delay = 0 }) => {
  const isTop = labelPosition === 'top';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex flex-col items-center relative z-10 w-full md:w-72 px-2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Desktop Top Label */}
      <div className={`hidden md:flex flex-col items-center justify-end pb-2 h-24 md:h-28 transition-all duration-700 ${isTop ? 'opacity-100' : 'opacity-0 select-none pointer-events-none'}`}>
        <h3 className="text-[#006FF6] font-extrabold text-xl mb-0.5 tracking-tight">{label}</h3>
        <p className="text-gray-500 text-[14px] text-center leading-tight font-bold max-w-[180px] mb-1.5">{description}</p>
        <div className="bg-blue-50 p-1 rounded-full">
           <ArrowUp color="#006FF6" />
        </div>
      </div>

      {/* Central Node Circle */}
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110" />
        <div className="absolute inset-[-4px] border border-blue-50 rounded-full group-hover:scale-105 transition-transform duration-500" />
        
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#F5F5F5] flex items-center justify-center relative shadow-[0_6px_20px_-8px_rgba(0,111,246,0.12)] group-hover:shadow-[0_12px_30px_-10px_rgba(0,111,246,0.2)] transition-all duration-500 border-4 border-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />
          <div className="relative z-10">
            {icon}
          </div>
        </div>
      </div>

      {/* Label Area Bottom - Responsive behavior */}
      <div className={`flex flex-col items-center pt-2 h-auto md:h-28 transition-all duration-700 ${!isTop ? 'md:opacity-100' : 'md:opacity-0 md:select-none md:pointer-events-none'}`}>
        <div className="bg-blue-50 p-1 rounded-full mb-1.5 hidden md:block">
          <ArrowDown color="#006FF6" />
        </div>
        <h3 className="text-[#006FF6] font-extrabold text-xl mt-1 md:mt-0 tracking-tight">{label}</h3>
        <p className="text-gray-500 text-[14px] text-center leading-tight font-bold max-w-[180px] mt-1 md:mt-0.5">{description}</p>
        
        {/* Mobile Spacer Indicator */}
        <div className="md:hidden mt-4 text-[#5EA6FF] opacity-50 last:hidden">
           <ArrowDown color="#5EA6FF" />
        </div>
      </div>
    </div>
  );
};

const HowweWork: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 md:py-10 px-6 flex flex-col items-center bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-10 md:mb-12 relative z-10">
        <h2 className="text-[#006FF6] font-black text-4xl md:text-5xl tracking-tighter uppercase mb-2 drop-shadow-sm">
          How We Work
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px w-8 bg-blue-100 hidden md:block" />
          <p className="text-[#000000] text-base md:text-xl font-light tracking-wide">
            A Delivery Model You Can <span className="text-[#006FF6] font-semibold">Trust</span>
          </p>
          <div className="h-px w-8 bg-blue-100 hidden md:block" />
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center">
        
        {/* Desktop SVG Curve Background Layer */}
        <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden md:block">
          <svg 
            viewBox="0 0 1000 200" 
            className="w-full h-64 absolute -top-32 pointer-events-none" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mainCurveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5EA6FF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#006FF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#5EA6FF" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="activeFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5EA6FF" />
                <stop offset="50%" stopColor="#006FF6" />
                <stop offset="100%" stopColor="#5EA6FF" />
              </linearGradient>
            </defs>
            
            <path 
              d="M 0,100 C 100,100 200,170 333,100 C 466,30 566,30 666,100 C 766,170 900,100 1000,100" 
              stroke="url(#mainCurveGradient)" 
              strokeWidth="4" 
              fill="none"
            />
            
            <path 
              d="M 0,100 C 100,100 200,170 333,100 C 466,30 566,30 666,100 C 766,170 900,100 1000,100" 
              stroke="url(#activeFlowGradient)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="10, 20"
              className="drop-shadow-[0_0_4px_rgba(0,111,246,0.25)]"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                from="300" 
                to="0" 
                dur="10s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
        </div>

        {/* Mobile Vertical Flow Line */}
        <div className="absolute left-1/2 top-10 bottom-10 w-px bg-dashed border-l border-dashed border-blue-200 -translate-x-1/2 md:hidden z-0" />

        {/* Nodes Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full relative space-y-16 md:space-y-0 max-w-5xl z-10">
          
          <RoadmapNode 
            label="Align" 
            description="Workflow alignment, ownership, governance & success metrics"
            labelPosition="bottom" 
            icon={<AlignIcon />} 
            delay={50}
          />

          <RoadmapNode 
            label="Operate" 
            description="24×5 monitoring, platform support & data quality management"
            labelPosition="top" 
            icon={<OperateIcon />} 
            delay={200}
          />

          <RoadmapNode 
            label="Optimize" 
            description="Automation, enhancements & analytics for continuous improvement"
            labelPosition="bottom" 
            icon={<OptimizeIcon />} 
            delay={350}
          />

        </div>
      </div>
      

    </section>
  );
};

export default HowweWork;
