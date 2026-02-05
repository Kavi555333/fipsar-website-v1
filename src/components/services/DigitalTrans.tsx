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


import heroS from '../../assets/ServicesHero/DIGITALTRANSFORMATION.png'
import dt1 from '../../assets/Services[whatwedelive]/digital/one.png'
import dt2 from '../../assets/Services[whatwedelive]/digital/two.png'
import dt3 from '../../assets/Services[whatwedelive]/digital/three.png'
import dt4 from '../../assets/Services[whatwedelive]/digital/four.png'
import dt5 from '../../assets/Services[whatwedelive]/digital/five.png'
import dt6 from '../../assets/Services[whatwedelive]/digital/six.png'
import dt7 from '../../assets/Services[whatwedelive]/digital/seven.png'
import dt8 from '../../assets/Services[whatwedelive]/digital/eight.png'

// Define types locally
export interface TechItem {
  id: string;
  name: string;
  icon?: LucideIcon;
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
    title: "Digital strategy & transformation roadmaps",
    description: "Clear transformation roadmaps outline the steps needed to modernize operations, elevate customer experiences and unlock new digital opportunities. Each strategy is shaped to support long-term growth and organizational agility.",
    gradient: "from-blue-500 to-cyan-400",
    iconType: "chart"
  },
  {
    title: "Cloud migration & platform modernization",
    description: "Cloud migrations are approached with a focus on stability, performance and future scalability. Modernized platforms deliver faster operations, reduced costs and greater flexibility across the entire ecosystem.",
    gradient: "from-indigo-500 to-purple-500",
    iconType: "genai"
  },
  {
    title: "Legacy system transformation",
    description: "Older systems are upgraded or replaced with modern technologies that support current needs and future innovation. This transition improves reliability, reduces technical debt and prepares the business for digital evolution.",
    gradient: "from-fuchsia-500 to-pink-500",
    iconType: "users"
  },
  {
    title: "Intelligent automation strategy",
    description: "Automation opportunities are identified across processes to enhance efficiency and reduce manual workload. Intelligent solutions streamline operations while maintaining accuracy and consistency.",
    gradient: "from-orange-400 to-amber-400",
    iconType: "doc"
  },
  {
    title: "Application modernization",
    description: "Existing applications are redesigned or rebuilt to align with modern standards, architectures and user expectations. This improves performance, security and the overall digital experience.",
    gradient: "from-emerald-400 to-teal-500",
    iconType: "chat"
  },
  {
    title: "Change management & adoption enablement",
    description: "Structured change programs help teams adapt smoothly to new tools and processes. Guided adoption builds confidence, reduces resistance and increases the success of technology initiatives.",
    gradient: "from-cyan-500 to-blue-600",
    iconType: "pipeline"
  },
  {
    title: "Business process re-engineering",
    description: "Core processes are analyzed and redesigned to eliminate inefficiencies and improve operational flow. The result is a more streamlined, scalable and productive business environment.",
    gradient: "from-violet-500 to-indigo-600",
    iconType: "monitor"
  },
  {
    title: "Technology architecture optimization",
    description: "Technology architectures are fine-tuned to improve integration, performance and long-term sustainability. Optimized systems support faster delivery, better reliability and enhanced digital capabilities.",
    gradient: "from-rose-500 to-red-600",
    iconType: "shield"
  }
];

// --- Sub-Components ---

/**
 * DeliverableRow: A zigzag row component.
 */

const imges = [
    dt1,
    dt2,
    dt3,
    dt4,
    dt5,
    dt6,
    dt7,
    dt8
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
  { id: 1, text: "Faster time-to-market", icon: Zap },
  { id: 2, text: "Improved business agility", icon: Layers },
  { id: 3, text: "Enhanced customer experience", icon: ShieldCheck },
  { id: 4, text: " Scalable digital platforms", icon: TrendingDown },
  { id: 5, text: " Reduced technical debt", icon: BarChart3 },
  { id: 6, text: " Sustainable transformation outcomes", icon: Cpu },
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
      // Key Fix: Use border-1 explicitly for both states and removed scale/translate from container.
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
                 <h3 className="capitalize font-semibold text-gray-900 text-sm">{item.text}</h3>
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






export const DigitalTrans: React.FC<SliderProps> = () => {
  
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
             src={heroS}
             // src="https://emudhra.com/hubfs/Imported_Blog_Media/Z9zIzio7SX3Ys9vlfCnh.webp"
                // src="https://cdn.prod.website-files.com/64fef88ee8b22d3d21b715a2/657c2bfd9d07f76a47c70ce8_64c0dfda42c1ee625bb4640c_Blog%2520image%2520(1).webp"
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
                Digital Transformation
              </span> */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                </span>
                   Digital Transformation
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
              Accelerate Modernization,  <br className="hidden md:block"/>
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> */}
                Innovation
              {/* </span> */}
            </h2>
            
            <p className="text-lg font-600 mb-8 leading-relaxed">
            {/* We design and implement enterprise-grade data platforms that unify clinical, commercial and operational data into a single source of truth. Our data engineering solutions ensure your data is cloud-ready, reliable and optimized for analytics, AI and reporting. */}
            We help organizations modernize operations and build future-ready digital ecosystems. Our digital transformation services align strategy, technology and execution to drive measurable impact across people, processes and platforms.

              {/* We help organizations embed AI into core business operations through responsible, scalable and performance-driven solutions. From predictive analytics to generative AI, we deliver practical intelligence with measurable business impact. */}
            </p>

            {/* <ul className="space-y-4 mb-8">
              {[
                "Operational modernization & agility",
                "Technology-driven business transformation",
                "Measurable impact across people and processes"
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
            <h2 className="text-4xl md:text-4xl  font-black text-slate-900 tracking-tight relative z-10">
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



            {/* <TechSlider/> */}


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
            <h2 className="text-4xl md:text-4xl font-black text-slate-900 tracking-tight relative z-10">
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