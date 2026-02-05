import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingDown, 
  BarChart3, 
  Cpu,
  type LucideIcon,
  Network
} from 'lucide-react';
import { motion } from 'framer-motion';

import { Terminal } from 'lucide-react';

import hipaa  from '../../assets/DataGovernacIcons/HIPAA.svg' 
import gdpr  from '../../assets/DataGovernacIcons/GDPR.svg' 
import soc2  from '../../assets/DataGovernacIcons/SOC2.svg' 
import gxp  from '../../assets/DataGovernacIcons/GxP.svg' 
import phi  from '../../assets/DataGovernacIcons/PHIProtection.svg' 


import dg1 from '../../assets/Services[whatwedelive]/datagov/one.png'
import dg2 from '../../assets/Services[whatwedelive]/datagov/two.png'
import dg3 from '../../assets/Services[whatwedelive]/datagov/three.png'
import dg4 from '../../assets/Services[whatwedelive]/datagov/four.png'
import dg5 from '../../assets/Services[whatwedelive]/datagov/five.png'
import dg6 from '../../assets/Services[whatwedelive]/datagov/six.png'
import dg7 from '../../assets/Services[whatwedelive]/datagov/seven.png'
import dg8 from '../../assets/Services[whatwedelive]/datagov/eight.png'

import heroserv from '../../assets/ServicesHero/DATAGOVERNANCE&COMPLIANCE.png'

// Define types locally
export interface TechItem {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

export interface SliderProps {
  items?: TechItem[];
  speed?: number; // Duration in seconds for one full loop
}




const BRAND_COLOR = '#006FF6';

interface ValueProp {
  id: number;
  text: string;
  icon: LucideIcon;
}

interface DeliverableItem {
  title: string;
  description: string;
  gradient: string;
  iconType: 'chart' | 'genai' | 'users' | 'doc' | 'chat' | 'pipeline' | 'monitor' | 'shield';
}




const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Data governance strategy & framework design",
    description: "Clear, business-aligned data governance strategies are crafted to create structure and accountability across the organization. Each framework supports long-term reliability and sustainable data management practices.",
    gradient: "from-blue-500 to-cyan-400",
    iconType: "chart"
  },
  {
    title: "Metadata management & data lineage",
    description: "Robust metadata and lineage capabilities are implemented to reveal how data moves, evolves  and connects across systems. This transparency builds trust and improves the overall understanding of the data landscape.",
    gradient: "from-indigo-500 to-purple-500",
    iconType: "genai"
  },
  {
    title: "Role-based access control & security models",
    description: "Secure, role-based access models are developed to ensure that the right users access the right data at the right time. These controls enhance protection while maintaining smooth operational workflows.",
    gradient: "from-fuchsia-500 to-pink-500",
    iconType: "users"
  },
  {
    title: "Compliance implementation & audit readiness",
    description: "Regulatory requirements are addressed through  documentation, strong controls  and structured processes. This approach helps organizations remain audit-ready and reduces potential compliance risks.",
    gradient: "from-orange-400 to-amber-400",
    iconType: "doc"
  },
  {
    title: "Privacy management & data protection controls",
    description: "Advanced privacy and protection measures are deployed to safeguard sensitive information throughout its lifecycle. These controls promote responsible data use and support ongoing regulatory adherence.",
    gradient: "from-emerald-400 to-teal-500",
    iconType: "chat"
  },
  {
    title: "Risk assessment & mitigation frameworks",
    description: "Comprehensive risk assessments identify vulnerabilities across data systems and processes. Tailored mitigation frameworks are then applied to reduce exposure and strengthen overall resilience.",
    gradient: "from-cyan-500 to-blue-600",
    iconType: "pipeline"
  },
  {
    title: "Policy development & controls enforcement",
    description: "Clear, actionable data policies are created to guide consistent and compliant behavior across teams. Enforced controls ensure that governance standards are upheld over time",
    gradient: "from-violet-500 to-indigo-600",
    iconType: "monitor"
  },
  {
    title: "Continuous monitoring & governance automation",
    description: "Automated monitoring solutions track data quality, compliance  and usage in real time. This ongoing oversight enables proactive governance and significantly reduces manual intervention.",
    gradient: "from-rose-500 to-red-600",
    iconType: "shield"
  }
];

// --- Sub-Components ---

/**
 * DeliverableRow: A zigzag row component.
 */

const imges = [
dg1,
dg2,
dg3,
dg4,
dg5,
dg6,
dg7,
dg8

]





const DeliverableRow: React.FC<{ item: DeliverableItem; index: number }> = ({ item, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-20 mb-20 md:mb-16`}>
      
      {/* Visual Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative group">
           {/* Corner Accent: Behind */}
           <div className={`absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 rounded-tl-3xl opacity-60 transition-all duration-500 group-hover:top-[-1.5rem] group-hover:left-[-1.5rem] ${isReversed ? 'border-indigo-300' : 'border-blue-300'}`}></div>
           <div className={`absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 rounded-br-3xl opacity-60 transition-all duration-500 group-hover:bottom-[-1.5rem] group-hover:right-[-1.5rem] ${isReversed ? 'border-indigo-300' : 'border-blue-300'}`}></div>
           
           {
            // img.map((item,index) =>
                <img  src={imges[index % imges.length]}   className={`relative  h-[220px] md:w-[400px] md:h-[280px] rounded-2xl  shadow-xl flex items-center justify-center transform transition-transform duration-500 hover:scale-[1.02]`}/>

            // )
           }

           {/* Main Card/Image Placeholder */}
           {/* <div className={`relative w-[300px] h-[220px] md:w-[400px] md:h-[280px] rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl flex items-center justify-center p-8 transform transition-transform duration-500 hover:scale-[1.02]`}>
              <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
            
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/30" />
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full shadow-sm border border-white/30" />
              
             
              <div className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg">
                {getIllustration(item.iconType)}
              </div>
           </div> */}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* <div className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-100 text-slate-500`}>
          Feature {index + 1}
        </div> */}
        <h3 className="text-xl md:text-xl font-bold text-slate-800 mb-4 leading-tight capitalize">
          {item.title}
        </h3>
        <p className="text-md text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>

    </div>
  );
};



const valueProps: ValueProp[] = [
  { id: 1, text: "Reduced regulatory risks", icon: Zap },
  { id: 2, text: "Increased confidence in data accuracy", icon: Layers },
  { id: 3, text: "Improved security posture", icon: ShieldCheck },
  { id: 4, text: "Faster audits & approvals", icon: TrendingDown },
  { id: 5, text: "Enterprise control & visibility", icon: BarChart3 },
  { id: 6, text: "Trust across business teams", icon: Cpu },
];

const leftProps = valueProps.slice(0, 3);
const rightProps = valueProps.slice(3, 6);



const DesktopHubLayout = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // SVG Config
  const width = 1000;
  const height = 450; 
  const cx = width / 2;
  const cy = height / 2;
  
  // FIXED ANCHORS:
  // Layout Strategy: 1000px x 450px Container.
  // Grid Columns: 3.
  // Grid Rows: 3 (Side columns).
  // Row Height: 450 / 3 = 150px.
  // Center of Rows: 75, 225, 375.
  //
  // X Position Calculation:
  // Left Col (0-333px) -> Padding Right 40px -> Card Edge at 293px.
  // Right Col (667-1000px) -> Padding Left 40px -> Card Edge at 707px.
  const anchorY = [75, 225, 375];
  const leftAnchors = anchorY.map(y => ({ x: 293, y }));
  const rightAnchors = anchorY.map(y => ({ x: 707, y }));

  const getPath = (targetX: number, targetY: number, isRight: boolean) => {
    const cp1x = isRight ? cx + 120 : cx - 120;
    const cp1y = cy;
    const cp2x = isRight ? targetX - 60 : targetX + 60;
    const cp2y = targetY;
    return `M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`;
  };

  return (
    <div className="hidden lg:flex w-[1000px] mx-auto items-center justify-center relative h-[450px]">
      
      {/* Background Connecting Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          <defs>
             <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="3" result="blur" />
               <feComposite in="SourceGraphic" in2="blur" operator="over" />
             </filter>
          </defs>

          {/* Left Connections */}
          {leftAnchors.map((pos, i) => {
            const path = getPath(pos.x, pos.y, false);
            const isActive = hoveredId === leftProps[i].id;
            return <ConnectorLine key={`l-${i}`} path={path} isActive={isActive} />;
          })}

          {/* Right Connections */}
          {rightAnchors.map((pos, i) => {
            const path = getPath(pos.x, pos.y, true);
            const isActive = hoveredId === rightProps[i].id;
            return <ConnectorLine key={`r-${i}`} path={path} isActive={isActive} />;
          })}
        </svg>
      </div>

      {/* Content Layout Grid */}
      <div className="relative z-10 grid grid-cols-3 w-full h-full pointer-events-none">
        
        {/* Left Column - Explicit Grid Rows for alignment */}
        <div className="grid grid-rows-3 h-full pointer-events-auto">
          {leftProps.map((item, i) => (
            <div key={item.id} className="flex items-center justify-end pr-10">
               <CardItem item={item} align="right" setHoveredId={setHoveredId} hoveredId={hoveredId} index={i} />
            </div>
          ))}
        </div>

        {/* Center Hub */}
        <div className="flex items-center justify-center pointer-events-auto">
           <CentralHub hoveredId={hoveredId} />
        </div>

        {/* Right Column - Explicit Grid Rows for alignment */}
        <div className="grid grid-rows-3 h-full pointer-events-auto">
          {rightProps.map((item, i) => (
            <div key={item.id} className="flex items-center justify-start pl-10">
              <CardItem item={item} align="left" setHoveredId={setHoveredId} hoveredId={hoveredId} index={i + 3} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const ConnectorLine = ({ path, isActive }: { path: string, isActive: boolean }) => (
  <g>
    <path d={path} fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
    <motion.path 
      d={path} 
      fill="none" 
      stroke={BRAND_COLOR} 
      strokeWidth="2.5"
      strokeOpacity={0.6}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isActive ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      style={{ filter: "url(#glow-line)" }}
    />
    {isActive && (
      <circle r="4" fill="white">
        <animateMotion 
           dur="1.5s" 
           repeatCount="indefinite" 
           path={path} 
           keyPoints="1;0" 
           keyTimes="0;1" 
           calcMode="linear" 
        />
      </circle>
    )}
  </g>
);

const CentralHub = ({ hoveredId }: { hoveredId: number | null }) => {
  return (
    <motion.div 
      className="relative w-36 h-36 flex items-center justify-center z-20"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
    >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: hoveredId ? 4 : 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-dashed border-slate-300"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: hoveredId ? 5 : 25, ease: "linear", repeat: Infinity }}
          className="absolute inset-3 rounded-full border border-dotted border-slate-300 opacity-70"
        />
        <div className={`absolute inset-0 rounded-full bg-[${BRAND_COLOR}] blur-2xl transition-opacity duration-500 ${hoveredId ? 'opacity-20' : 'opacity-5'}`} />

        <div className="relative w-28 h-28 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-slate-50 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-50" />
          <motion.div
             animate={hoveredId ? { scale: [1, 1.1, 1] } : {}}
             transition={{ repeat: Infinity, duration: 2 }}
          >
             <Network className="w-10 h-10 relative z-10" style={{ color: BRAND_COLOR }} />
          </motion.div>
          <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mt-2">Value</span>
          <motion.div 
             className="absolute inset-0 z-0"
             style={{ background: `radial-gradient(circle at center, ${BRAND_COLOR}10 0%, transparent 70%)` }}
             animate={{ opacity: hoveredId ? 1 : 0 }}
          />
        </div>
    </motion.div>
  );
};

const CardItem = ({ item, align, setHoveredId, hoveredId, index }: { item: ValueProp, align: 'left'|'right', setHoveredId: any, hoveredId: number|null, index: number }) => {
  const isHovered = hoveredId === item.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      // Key Fix: Use border-1 explicitly for both states  and removed scale/translate from container.
      // The container size and position is now STATIC.
      className={`
        group relative w-72 p-4 rounded-xl cursor-default transition-colors duration-300 ease-out border
        ${isHovered 
           ? 'bg-white shadow-[0_10px_40px_-10px_rgba(2,165,230,0.15)] z-10 border-slate-200' 
           : 'bg-white/80 border-slate-200 shadow-sm'
        }
      `}
      style={{ textAlign: align }}
    >
      {/* Active Border Gradient - purely cosmetic overlay */}
      {isHovered && (
         <motion.div 
           layoutId="activeBorder"
           className="absolute inset-0 rounded-xl border-2 pointer-events-none"
           style={{ borderColor: BRAND_COLOR, opacity: 0.1 }}
         />
      )}

      {/* Content wrapper handles the 'pop' effect, leaving the container static */}
      <div 
        className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} gap-3 relative z-10 transition-transform duration-300 ease-out`}
        style={{ transform: isHovered ? 'translateY(-2px)' : 'none' }}
      >
        <div 
          className="relative p-3 rounded-lg transition-all duration-300"
          style={{ 
            backgroundColor: isHovered ? BRAND_COLOR : '#F8FAFC',
            boxShadow: isHovered ? `0 4px 12px ${BRAND_COLOR}40` : 'none'
          }}
        >
          <item.icon 
             size={20} 
             className="transition-colors duration-300"
             style={{ color: isHovered ? 'white' : '#64748B' }} 
          />
        </div>
        
        <h3 className={`capitalize font-semibold text-sm leading-tight transition-colors duration-300 ${isHovered ? 'text-gray-900' : 'text-slate-600'}`}>
          {item.text}
        </h3>
      </div>
      
      {/* Connection Point Dot - ABSOLUTELY STATIC relative to container border */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors duration-300 z-20
          ${align === 'right' ? '-right-1.5' : '-left-1.5'}
          ${isHovered ? 'bg-white border-[color:var(--brand)] shadow-[0_0_0_2px_rgba(2,165,230,0.2)]' : 'bg-slate-200 border-white'}
        `}
        style={{ '--brand': BRAND_COLOR } as React.CSSProperties}
      />
    </motion.div>
  );
};

const MobileCircuitLayout = () => {
  return (
    <div className="lg:hidden w-full max-w-md mx-auto px-4 py-8 relative">
       <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-[${BRAND_COLOR}40] to-slate-200" />
       <div className="space-y-6 relative">
         {valueProps.map((item, i) => (
           <motion.div
             key={item.id}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
             className="pl-16 relative"
           >
             <div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-px bg-slate-200 group-hover:bg-[${BRAND_COLOR}] transition-colors" />
             <div className="absolute left-[30px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-[${BRAND_COLOR}] z-10" />
             <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm active:shadow-md active:border-[${BRAND_COLOR}] transition-all duration-300">
               <div className="flex items-center gap-4">
                 <div className="p-2.5 rounded-lg shrink-0 bg-slate-50 text-slate-500">
                   <item.icon size={18} />
                 </div>
                 <h3 className=" capitalize font-semibold text-gray-900 text-sm">{item.text}</h3>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
};



//   const displayItems = [...items, ...items];

// --- Main Export ---
// Default items defined within the component
const DEFAULT_ITEMS: TechItem[] = [
  { id: '1', name: 'HIPAA  ', icon: hipaa },
  { id: '2', name: 'GDPR  ', icon: gdpr  },
  { id: '3', name: 'SOC 2 ', icon: soc2  },
  { id: '4', name: 'GxP ', icon: gxp   },
  { id: '5', name: ' PHI Protection ', icon: phi   },
];


const TechSlider: React.FC<SliderProps> = ({ items = DEFAULT_ITEMS, speed =45 }) => {
  // Quadruple the items to ensure seamless infinite loop effect on large screens
  // This prevents empty space at the end of the loop if the screen width > total item width
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full py-10 overflow-hidden select-none bg-[#006FF6]">
      {/* Inject styles locally so the component works standalone without external CSS */}
      <style>{`
        @keyframes tech-slider-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-slider {
          animation: tech-slider-scroll var(--slider-speed) linear infinite;
        }
        .pause-on-hover:hover .animate-tech-slider {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Compliance Standards Supported
        </h2>
        <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full group">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#006FF6] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#006FF6] to-transparent pointer-events-none"></div>

        <div 
          className="flex overflow-hidden pause-on-hover"
          style={{ '--slider-speed': `${speed}s` } as React.CSSProperties}
        >
          <div className="flex animate-tech-slider flex-nowrap">
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 mx-6 md:mx-8 w-64 group/card cursor-default"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl h-full">
                  <div className="mb-4 p-4 bg-white/20 rounded-full text-white group-hover/card:bg-white group-hover/card:text-[#006FF6] transition-colors duration-300">
                    {item.icon ? (
                     <img
                        src={item.icon}
                        alt={item.name}
                        className="
                            w-8 h-8
                            brightness-0 invert
                            group-hover/card:invert-0
                            group-hover/card:brightness-100
                            transition-all duration-300
                        "
                    />
                    ) : (
                      <Terminal size={32} />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const DataGovernance: React.FC<SliderProps> = () => {
  
    return (

    <>
        <div className="w-full">
      
      {/* Section 1: What We Deliver (Zigzag) */}
      <section className="py-24 mt-8 relative overflow-hidden">



      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group order-2 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300 opacity-20 group-hover:opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img 
               src={heroserv}
            //    src="https://cdn.prod.website-files.com/645b9abe6a218233e4ac7428/6491af1e3939ec70562bb22d_What_is_Data_Governance_and_Why_Does_it_Matter_What_is_Data_Governance_Section_Image.webp"
                // src='https://caddcentre.com/blog/wp-content/uploads/2024/06/automation-data-analytic-with-robot-digital-visualization-big-data-scientist1.jpg'
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab7Wep8BP4amVVsYi6qo0ZzPHGvsGl0BPqQ&s" 
                alt="AI and Automation Technology" 
                className="w-full h-auto object-cover transform group-hover:scale-150 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              {/* <span className="w-8 h-[2px] bg-blue-600"></span> */}
              {/* <span className="text-sm font-bold tracking-widest text-[#006FF6] uppercase">
                Data governance
              </span> */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                </span>
                  Data governance
                </div>
            </div>
{/*             
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Unlock Predictive <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligence
              </span>
            </h2> */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-6 leading-tight">
              Enable Trusted,  <br className="hidden md:block"/>
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> */}
                Secure & Compliant Data
              {/* </span> */}
            </h2>
            
            <p className="text-lg font-600 mb-8 leading-relaxed">
                We help organizations establish strong data governance frameworks that protect sensitive information, ensure regulatory compliance  and increase confidence in enterprise data. Our approach combines governance, security  and transparency to deliver trusted data across your organization.
              {/* We help organizations embed AI into core business operations through responsible, scalable  and performance-driven solutions. From predictive analytics to generative AI, we deliver practical intelligence with measurable business impact. */}
            </p>

            {/* <ul className="space-y-4 mb-8">
              {[
                "Data security & privacy protection",
                "Regulatory compliance & risk control",
                "Trusted, transparent enterprise data"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-600">{item}</span>
                </li>
              ))}
            </ul> */}

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="primary">Explore Solutions</Button>
              <Button variant="outline">View Case Studies</Button>
            </div> */}
          </div>

        </div>
      </div>



        <div className="container mx-auto px-4 mt-20 relative z-10">
          <div className="text-center mb-24">
            {/* <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Capabilities</span> */}
            {/* <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Deliver</span>
            </h2> */}
            {/* <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              What We Deliver
            </h2> */}

            
       <div className="relative inline-block">
            <h2 className="text-4xl md:text-4xl font-serif font-black text-slate-900 tracking-tight relative z-10">
             What we Deliver
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
            {/* <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end AI solutions designed to transform your data into actionable intelligence.
            </p> */}
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {DELIVERABLES.map((item, index) => (
              <DeliverableRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>



            <TechSlider/>


    <section className="w-full bg-white rounded-3xl overflow-hidden relative border border-slate-100 shadow-sm selection:bg-[${BRAND_COLOR}] selection:text-white">
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_COLOR} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      <div className="relative z-10 py-16 px-4 md:px-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
                   <div className="relative inline-block">
            <h2 className="text-4xl md:text-4xl font-serif font-black text-slate-900 tracking-tight relative z-10">
           Business Value
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
             <div className="h-1.5 w-full bg-[${BRAND_COLOR}] opacity-20 mt-1 rounded-full transform -skew-x-12" />
          </motion.div>
        </div>
        <DesktopHubLayout />
        <MobileCircuitLayout />
      </div>
    </section>

      {/* <style jsx>{headingStyles}</style> */}

    </div>


    </>



  );
};