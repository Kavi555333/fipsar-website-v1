import React from 'react';
import { Activity, Leaf, Plus, Database, ClipboardCheck } from 'lucide-react';

// --- Types ---
interface CardProps {
  icon: React.ReactNode;
  label: string;
  rotation: string; // Tailwind rotate class
  className?: string;
  delay?: string;
}

// --- Sub-Components ---

const IndustryCard: React.FC<CardProps> = ({ icon, label, rotation, className = '', delay = '0s' }) => {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`
        bg-white border border-[#02A5E6]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-3
        flex flex-col items-center justify-center gap-1
        hover:scale-105 transition-transform duration-300
        w-36 h-24 md:w-44 md:h-28
        animate-float
        ${rotation}
        ${className}
      `}
    >
      <div className="text-[#02A5E6]/40 bg-[#02A5E6]/5 p-2 rounded-full">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 20, className: 'text-[#02A5E6]/80' })}
      </div>
      <span className="text-[#02A5E6] font-medium text-center text-xs md:text-sm leading-tight px-1">
        {label}
      </span>
    </div>
  );
};

// --- Main Component ---

const IndustriesSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-8 md:py-12 px-4 overflow-visible">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center">
        
        {/* Left Column Cards */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col justify-center items-center lg:items-end gap-3 lg:gap-5 relative z-20">
             <IndustryCard 
               icon={<Activity />} 
               label="Medical Affairs" 
               rotation="-rotate-2 lg:-rotate-3"
               className="origin-center lg:origin-bottom-right"
               delay="0s"
             />
             <IndustryCard 
               icon={<Plus />} 
               label="Healthcare Providers" 
               rotation="-rotate-2 lg:-rotate-6"
               className="origin-center lg:origin-bottom-right"
               delay="1.5s"
             />
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center text-center py-6 px-6 z-10">
          
          {/* Decorative Lines Frame - Crosshair Extension */}
          {/* Vertical lines: Shortened extension to -bottom-8 */}
          <div className="hidden lg:block absolute left-0 top-0 -bottom-8 w-[1px] bg-[#02A5E6]/20 z-0"></div>
          <div className="hidden lg:block absolute right-0 top-0 -bottom-8 w-[1px] bg-[#02A5E6]/20 z-0"></div>
          
          {/* Horizontal line: Moved up slightly */}
          <div className="hidden lg:block absolute -left-16 -right-16 bottom-8 h-[1px] bg-[#02A5E6]/20 z-0"></div>
          
          {/* Extension Lines - Top fade out */}
          <div className="hidden lg:block absolute -top-16 left-0 w-[1px] h-16 bg-gradient-to-b from-transparent to-[#02A5E6]/20"></div>
          <div className="hidden lg:block absolute -top-16 right-0 w-[1px] h-16 bg-gradient-to-b from-transparent to-[#02A5E6]/20"></div>

          {/* Top Pill */}
          <div className="mb-6 relative z-20">
            <span className="bg-white text-[#02A5E6] font-bold text-[10px] md:text-xs tracking-[0.2em] px-6 py-2 rounded-full shadow-sm border border-[#02A5E6]/10 uppercase relative">
              Industries We Serve
            </span>
          </div>

          {/* Text Content Wrapper */}
          <div className="relative w-full z-10">
            
            {/* SVG Background: Concentric Rings behind text */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 pointer-events-none opacity-30">
                <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="400" cy="400" r="120" stroke="#02A5E6" strokeWidth="1" />
                    <circle cx="400" cy="400" r="180" stroke="#02A5E6" strokeWidth="1" />
                    <circle cx="400" cy="400" r="240" stroke="#02A5E6" strokeWidth="1" />
                    <circle cx="400" cy="400" r="300" stroke="#02A5E6" strokeWidth="1" opacity="0.6" />
                    <circle cx="400" cy="400" r="360" stroke="#02A5E6" strokeWidth="1" opacity="0.3" />
                </svg>
            </div> */}

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-[#02A5E6] mb-4 leading-tight drop-shadow-sm tracking-tight">
              At The Heart Of Every <br />
              Breakthrough In Healthcare
            </h2>

            {/* Subtitle */}
            <div className="px-4">
              <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light">
                We partner with organizations across the Life Sciences ecosystem,
                from drug development to healthcare delivery.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column Cards */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col justify-center items-center lg:items-start gap-3 lg:gap-5 relative z-20">
             <IndustryCard 
               icon={<Leaf />} 
               label="Bio Pharma" 
               rotation="rotate-3 lg:rotate-6"
               className="origin-center lg:origin-bottom-left"
               delay="1s"
             />
             <IndustryCard 
               icon={<Database />} 
               label="CRO's" 
               rotation="rotate-1 lg:rotate-2"
               className="origin-center lg:origin-bottom-left"
               delay="2.5s"
             />
             <IndustryCard 
               icon={<ClipboardCheck />} 
               label="Regulatory" 
               rotation="rotate-2 lg:rotate-3"
               className="origin-center lg:origin-bottom-left"
               delay="0.5s"
             />
        </div>

      </div>

    </section>
  );
};

export default IndustriesSection;