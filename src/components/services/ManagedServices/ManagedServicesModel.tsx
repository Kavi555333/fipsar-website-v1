
import React from 'react';

const BRAND_COLOR = '#006FF6';

interface ModelBoxProps {
  title: string;
  items: string[];
  className?: string;
}

const ModelBox: React.FC<ModelBoxProps> = ({ title, items, className = '' }) => {
  return (
    <div 
      className={`group relative p-6 w-full sm:w-[280px] min-h-[260px] flex flex-col dashed-border bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#006FF6] hover:shadow-[0_20px_40px_-15px_rgba(2,165,230,0.3)] hover:-translate-y-1 cursor-default shrink-0 z-10 overflow-hidden ${className}`}
    >
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cardPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0 M10 40 L40 10 M0 30 L30 0" stroke={BRAND_COLOR} strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="1" fill={BRAND_COLOR} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cardPattern)" />
        </svg>
      </div>

      {/* Glassy Title Section */}
      <div className="relative z-10 mb-6 px-4 py-3 rounded-xl border border-[#006FF6]/10 bg-[#006FF6]/5 backdrop-blur-lg transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Title Watermark */}
        <div className="absolute -right-2 -top-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#006FF6] group-hover:text-white">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        
        <div className="flex items-center justify-center gap-2.5 relative z-20">
          <div className="relative flex items-center justify-center shrink-0">
             <div className="absolute w-4 h-4 rounded-full bg-[#006FF6]/20 animate-pulse group-hover:bg-white/30" />
             <div className={`w-2 h-2 rounded-full transition-colors duration-300 bg-[#006FF6] group-hover:bg-white relative z-10`} />
          </div>
          <h3 className={`text-[12px] md:text-[13px] font-bold whitespace-nowrap uppercase tracking-[0.12em] leading-none transition-colors duration-500 text-[#006FF6] group-hover:text-white`}>
            {title}
          </h3>
        </div>
      </div>
      
      {/* List Items */}
      <ul className="relative z-10 space-y-3.5 px-1.5 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3.5">
            <div 
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 border-[#006FF6] group-hover:border-white/50 group-hover:bg-white/10`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 bg-[#006FF6] group-hover:bg-white`} />
            </div>
            <span className="text-[12px] md:text-[13px] font-medium text-slate-600 leading-tight transition-colors duration-500 group-hover:text-white/95">
              {item}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Bottom Decoration line */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-1/4 h-0.5 rounded-full bg-slate-100 group-hover:bg-white/30 transition-colors duration-500" />
    </div>
  );
};

const ArrowIndicator = ({ direction }: { direction: 'right' | 'left' | 'down' }) => {
  const rotations = {
    right: 'rotate-0',
    left: 'rotate-180',
    down: 'rotate-90',
  };

  return (
    <div className={`flex items-center justify-center transition-transform duration-500 ${rotations[direction]}`}>
      <div className="relative flex items-center justify-center z-20">
        {/* The Target Circle */}
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#006FF6]/30 flex items-center justify-center bg-white shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[#006FF6] shadow-[0_0_8px_rgba(2,165,230,0.5)]" />
        </div>
        {/* The Connection Line */}
        <div className="h-[1.5px] w-8 md:w-10 lg:w-12 bg-[#006FF6]/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/40 -translate-x-full animate-[flowEffect_2s_infinite]" />
        </div>
        {/* The Precise Arrow Head */}
        <div className="relative -ml-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_COLOR} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowEffect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

const ManagedServicesModel: React.FC = () => {
  const modelData = {
    row1: [
      {
        title: 'Client Systems',
        items: ['Rapid incident response', 'Priority - Based resolution', 'Root cause analysis (RCA)', 'Defect prevention']
      },
      {
        title: 'Monitoring Layer',
        items: ['24 × 5 Monitoring', 'Alerts & Notifies', 'Log management', 'Performance track']
      },
      {
        title: 'Support & Ops',
        items: ['Incident Mgmt', 'Problem Mgmt', 'Change Mgmt', 'Service request', 'System admin']
      }
    ],
    row2: [
      {
        title: 'Governance & SLA',
        items: ['SLA Management', 'Performance rpt', 'WBR / MBR / QBR', 'Risk Mgmt', 'Quality assure']
      },
      {
        title: 'Optimization',
        items: ['Automation', 'Performance tune', 'Process improve', 'Cost optimize', 'Self - Healing']
      },
      {
        title: 'Output',
        items: ['Stable platform', 'Reliable report', 'Higher uptime', 'Lower cost', 'Audit ready', 'Scalability']
      }
    ]
  };

  return (
    <div className="w-full flex flex-col items-center select-none py-8 px-4 lg:px-6 mt-16">
      {/* Header Section */}
      <div className="text-center mb-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-black mb-4 tracking-tight">
          <span className="text-slate-800">Managed Services </span>
          <span className="relative inline-block text-[#006FF6]">
            Delivery Model
            <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-[#006FF6] opacity-30 blur-[1px]" />
          </span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base mt-8 font-medium leading-relaxed">
          Our delivery framework integrates operations, governance and 
          <br/>
          optimization into one seamless managed services model.
          
          {/* A high-performance framework designed to streamline operations and drive continuous optimization. */}
        </p>
      </div>

      {/* Main Diagram Canvas - Now with background image */}
      <div className="relative w-full max-w-fit mx-auto px-8 py-10 md:px-12 md:py-12 outer-container-border bg-white rounded-[2.5rem] flex flex-col items-center overflow-hidden">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none grayscale" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1470")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Subtle Gradient Overlay for added depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#006FF6]/5 via-transparent to-transparent pointer-events-none" />

        {/* Corner Accent Dots */}
        <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#006FF6] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(2,165,230,0.5)] z-30" />
        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#006FF6] translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(2,165,230,0.5)] z-30" />
        <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-[#006FF6] -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_rgba(2,165,230,0.5)] z-30" />
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#006FF6] translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_rgba(2,165,230,0.5)] z-30" />

        <div className="flex flex-col items-center w-full relative z-10">
          
          {/* Row 1 Flow: Left to Right */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
            <ModelBox {...modelData.row1[0]} />
            <div className="hidden lg:flex items-center justify-center w-12">
              <ArrowIndicator direction="right" />
            </div>
            <ModelBox {...modelData.row1[1]} />
            <div className="hidden lg:flex items-center justify-center w-12">
              <ArrowIndicator direction="right" />
            </div>
            <ModelBox {...modelData.row1[2]} />
          </div>

          {/* Vertical Transition Connector */}
          <div className="flex justify-center lg:justify-end w-full">
             <div className="w-full lg:w-[280px] flex justify-center py-6 lg:py-8">
               <ArrowIndicator direction="down" />
             </div>
          </div>

          {/* Row 2 Flow: Right to Left */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-4">
            <ModelBox {...modelData.row2[0]} />
            <div className="hidden lg:flex items-center justify-center w-12">
              <ArrowIndicator direction="left" />
            </div>
            <ModelBox {...modelData.row2[1]} />
            <div className="hidden lg:flex items-center justify-center w-12">
              <ArrowIndicator direction="left" />
            </div>
            <ModelBox {...modelData.row2[2]} />
          </div>

        </div>
      </div>
      
      {/* Visual Operational Footer Status */}
      {/* <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           Systems Online
        </div>
        <div className="hidden sm:block w-px h-4 bg-slate-200" />
        <div className="opacity-80">SLA: 99.98%</div>
        <div className="hidden sm:block w-px h-4 bg-slate-200" />
        <div className="opacity-80">v4.2 PROD</div>
      </div> */}
    </div>
  );
};

export default ManagedServicesModel;
