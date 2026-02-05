
import React, { useState } from 'react';

import dehero from '../../assets/ServicesHero/AI&MACHINELEARNING.png'


import { Terminal } from 'lucide-react';
import python   from '../../assets/AiIcons/Python.svg'
import mlplatfrom from '../../assets/AiIcons/MLPlatforms.svg'
import llm          from '../../assets/AiIcons/LLMFrameworks.svg'
import awsbed       from '../../assets/AiIcons/AWSBedrock.svg'
import vertex       from '../../assets/AiIcons/VertexAI.svg'




import De1 from '../../assets/Services/aiintelligence/1predictiv.jpg'
import De2 from '../../assets/Services/aiintelligence/2Generative.jpg'
import De3 from '../../assets/Services/aiintelligence/3Recommend.webp'
import De5 from '../../assets/Services/aiintelligence/4Intelligent.jpg'
import De4 from '../../assets/Services/aiintelligence/5onversational.jpg'
import De6 from '../../assets/Services/aiintelligence/6AI.webp'
import De7 from '../../assets/Services/aiintelligence/7Model.jpg'
import De8 from '../../assets/Services/aiintelligence/8AI.png'
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  TrendingDown, 
  BarChart3, 
  Cpu, 
  Network,
  Database,
  Cloud,
  Workflow,
//   ArrowRight,
  GitMerge,
  Server,
  RefreshCw,
  SearchCheck,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Constants & Types ---

const BRAND_COLOR = '#006FF6';

interface TechItem {
  id: string;
  name: string;
//   icon?: LucideIcon;
  icon: string;
  description?: string;
}


interface SliderProps {
  items?: TechItem[];
  speed?: number;
}

interface ValueProp {
  id: number;
  text: string;
  icon: LucideIcon;
}

interface DeliverableItem {
  title: string;
  description: string;
  gradient: string;
  icon: LucideIcon;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Predictive analytics and forecasting models",
    description: "Advanced predictive models are developed to reveal future trends, customer behavior and business outcomes before they occur. These forecasting insights support smarter planning, proactive strategy and confident decision-making.",
    gradient: "from-blue-500 to-cyan-400",
    icon: GitMerge
  },
  {
    title: "Generative AI solutions for business automation",
    description: "GenAI solutions are introduced to automate content generation, streamline workflows and support faster decision cycles. This level of automation increases productivity while reducing manual effort and operational costs.",
    gradient: "from-indigo-500 to-purple-500",
    icon: RefreshCw
  },
  {
    title: "Recommendation and personalization engines",
    description: "Intelligent recommendation engines are created to deliver tailored experiences to every user. These personalization capabilities boost engagement, improve satisfaction and drive stronger conversions across digital platforms.",
    gradient: "from-fuchsia-500 to-pink-500",
    icon: Cloud
  },
  {
    title: "Intelligent document processing (IDP)",
    description: "AI-powered document processing handles extraction, classification and validation with high accuracy. This approach cuts down manual processing time and enhances reliability in large-volume document operations.",
    gradient: "from-orange-400 to-amber-400",
    icon: Server
  },
  {
    title: "Conversational analytics and chat solutions",
    description: "Conversational AI tools and smart chat interfaces are built to understand user intent and provide immediate, helpful responses. These solutions elevate customer experience and ensure seamless, real-time support.",
    gradient: "from-emerald-400 to-teal-500",
    icon: Database
  },
  {
    title: "AI pipeline orchestration (MLOps)",
    description: "Automated MLOps pipelines are deployed to manage model training, deployment, versioning and continuous updates. This orchestration guarantees scalable, dependable and efficiently maintained AI systems.",
    gradient: "from-cyan-500 to-blue-600",
    icon: Workflow
  },
  {
    title: "Model monitoring and performance optimization",
    description: "Ongoing monitoring tracks accuracy, drift and real-world performance to keep models operating at peak quality. Continuous optimization ensures stable, trustworthy results throughout the model lifecycle.",
    gradient: "from-violet-500 to-indigo-600",
    icon: Zap
  },
  {
    title: "AI governance, ethics and risk control",
    description: "Responsible AI frameworks are established to mitigate bias, safeguard data and maintain regulatory alignment. These governance practices promote ethical use of AI while reducing security and compliance risks.",
    gradient: "from-rose-500 to-red-600",
    icon: SearchCheck
  }
];

const VALUE_PROPS: ValueProp[] = [
   { id: 1, text: " Faster insights & foresight", icon: Zap },
  { id: 2, text: "Improved prediction accuracy", icon: Layers },
  { id: 3, text: "Scalable automation", icon: ShieldCheck },
  { id: 4, text: " Reduced manual work & cost", icon: TrendingDown },
  { id: 5, text: " Continuous model reliability", icon: BarChart3 },
  { id: 6, text: " Enterprise-ready AI deployment", icon: Cpu },
];

// const TECH_STACK: TechItem[] = [
//   { id: '1', name: 'Snowflake' },
//   { id: '2', name: 'Talend' },
//   { id: '3', name: 'Databricks' },
//   { id: '4', name: 'AWS' },
//   { id: '5', name: 'API Integrations' },
// ];


const DEFAULT_ITEMS: TechItem[] = [
  { id: '1', name: 'Python', icon: python    },
    { id: '2', name: 'LLM Frameworks', icon: llm        },
  { id: '3', name: 'ML Platforms', icon: mlplatfrom },

  { id: '4', name: 'AWS Bedrock', icon: awsbed     },
  { id: '5', name: 'Vertex AI', icon: vertex     },
];





// --- Helper Sub-Components ---

const DataPulse: React.FC<{ delay: number; duration: number }> = ({ delay, duration }) => (
  <motion.div
    initial={{ top: "-10%", opacity: 0 }}
    animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-[#006FF6] blur-[2px] z-20 shadow-[0_0_8px_#006FF6]"
  />
);

const DeliverableRow: React.FC<{ item: DeliverableItem; index: number }> = ({ item, index }) => {
  const isReversed = index % 2 !== 0;
  const isLast = index === DELIVERABLES.length - 1;
  
  const placeholderImages = [
      De1,
    De2,
    De3,
    De4,
    De5,
    De6,
    De7,
    De8
  ];

  return (
    <div className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-40 last:mb-0`}>
      {/* Central Pipeline Node with Data Pulses (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 h-full flex-col items-center z-10 pointer-events-none">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-5 h-5 rounded-full bg-white border-4 border-[#006FF6] shadow-[0_0_20px_rgba(0,111,246,0.6)] z-30" 
        />
        {/* Full height vertical line stub for the last item as well */}
        <div className={`relative w-1 flex-1 bg-slate-200 mt-2 overflow-hidden ${isLast ? 'h-40 opacity-50' : ''}`}>
          <div className="absolute inset-0 bg-[#006FF6]/10" />
          <DataPulse delay={0} duration={3} />
          <DataPulse delay={1.5} duration={4} />
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group w-full max-w-[480px]"
        >
           <div className={`absolute -inset-4 rounded-[3rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 scale-95 group-hover:scale-105`} />
           <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-white/80 p-2 transform transition-transform duration-700 group-hover:-translate-y-2">
             <div className="rounded-[2rem] overflow-hidden">
                <img 
                  src={placeholderImages[index % placeholderImages.length]} 
                  className="aspect-[4/3] w-full object-cover transform transition-transform duration-[2s] group-hover:scale-110"
                  alt={item.title}
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           </div>
        </motion.div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left group"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-xl border border-slate-100 text-[#006FF6] mb-8 group-hover:bg-[#006FF6] group-hover:text-white transition-all duration-500`}
          >
            <item.icon size={27} strokeWidth={2.5} />
          </motion.div>
          
          <h3 className="capitalize text-2xl md:text-2xl font-black text-[#000000] mb-6 leading-[1.15] tracking-tight group-hover:text-[#006FF6] transition-colors duration-300">
            {item.title}
          </h3>
          
          <div className="relative px-2">
            <p className="text-lg text-slate-600 leading-relaxed  font-bold">
              {item.description}
            </p>
            <div className={`absolute -inset-x-6 -inset-y-4 rounded-3xl bg-gradient-to-r from-[#006FF6]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
          </div>

        </motion.div>
      </div>
    </div>
  );
};

const CardItem = ({ item, align, setHoveredId, hoveredId, index }: { item: ValueProp, align: 'left'|'right', setHoveredId: (id: number | null) => void, hoveredId: number|null, index: number }) => {
  const isHovered = hoveredId === item.id;
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      className={`
        group relative w-full sm:w-72 p-4 rounded-xl cursor-default transition-all duration-300 ease-out border
        ${isHovered 
           ? 'bg-white shadow-[0_10px_40px_-10px_rgba(0,111,246,0.2)] z-10 border-blue-200' 
           : 'bg-white/80 border-slate-200 shadow-sm'
        }
      `}
      style={{ textAlign: align }}
    >
      {isHovered && (
         <motion.div 
           layoutId="activeBorder"
           className="absolute inset-0 rounded-xl border-2 pointer-events-none"
           style={{ borderColor: BRAND_COLOR, opacity: 0.1 }}
         />
      )}
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
        <h3 className={`capitalize font-bold text-md leading-tight transition-colors duration-300 ${isHovered ? 'text-[#000000]' : 'text-slate-600'}`}>
          {item.text}
        </h3>
      </div>
      {/* Target Dot for SVG Connector */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors duration-300 z-20 hidden sm:block
          ${align === 'right' ? '-right-1.5' : '-left-1.5'}
          ${isHovered ? 'bg-white shadow-[0_0_0_2px_rgba(0,111,246,0.2)]' : 'bg-slate-200 border-white'}
        `}
        style={{ borderColor: isHovered ? BRAND_COLOR : 'white' }}
      />
    </motion.div>
  );
};

const ConnectorLine: React.FC<{ path: string; isActive: boolean }> = ({ path, isActive }) => (
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
    />
    {isActive && (
      <circle r="4" fill="white" stroke={BRAND_COLOR} strokeWidth="1">
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
      className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center z-20"
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
        <div className={`absolute inset-0 rounded-full bg-[#006FF6] blur-2xl transition-opacity duration-500 ${hoveredId ? 'opacity-20' : 'opacity-5'}`} />

        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-slate-50 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-50" />
          <motion.div
             animate={hoveredId ? { scale: [1, 1.1, 1] } : {}}
             transition={{ repeat: Infinity, duration: 2 }}
          >
             <Network className="w-8 h-8 md:w-10 md:h-10 relative z-10" style={{ color: BRAND_COLOR }} />
          </motion.div>
          <span className={`relative z-10 text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase text-[#006FF6] mt-1 md:mt-2`}>Value</span>
          <motion.div 
             className="absolute inset-0 z-0"
             style={{ background: `radial-gradient(circle at center, ${BRAND_COLOR}10 0%, transparent 70%)` }}
             animate={{ opacity: hoveredId ? 1 : 0 }}
          />
        </div>
    </motion.div>
  );
};

const DesktopHubLayout = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const width = 1000;
  const height = 500; // Increased to match the container height exactly
  const cx = width / 2;
  const cy = height / 2;
  
  // Recalculated anchor points for 500px height grid (83.3, 250, 416.6)
  const anchorY = [83.3, 250, 416.6];
  const leftAnchors = anchorY.map(y => ({ x: 293.3, y }));
  const rightAnchors = anchorY.map(y => ({ x: 706.6, y }));
  
  const leftProps = VALUE_PROPS.slice(0, 3);
  const rightProps = VALUE_PROPS.slice(3, 6);
  
  const getPath = (targetX: number, targetY: number, isRight: boolean) => {
    const cp1x = isRight ? cx + 120 : cx - 120;
    const cp1y = cy;
    const cp2x = isRight ? targetX - 60 : targetX + 60;
    const cp2y = targetY;
    return `M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`;
  };

  return (
    <div className="hidden lg:flex w-full max-w-6xl mx-auto items-center justify-center relative h-[500px]">
      {/* SVG Layer with strictly aligned coordinates */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          {leftAnchors.map((pos, i) => (
            <ConnectorLine key={`l-${i}`} path={getPath(pos.x, pos.y, false)} isActive={hoveredId === leftProps[i].id} />
          ))}
          {rightAnchors.map((pos, i) => (
            <ConnectorLine key={`r-${i}`} path={getPath(pos.x, pos.y, true)} isActive={hoveredId === rightProps[i].id} />
          ))}
        </svg>
      </div>
      
      {/* Foreground Grid Layer */}
      <div className="relative z-10 grid grid-cols-3 w-[1000px] h-full pointer-events-none">
        <div className="grid grid-rows-3 h-full pointer-events-auto">
          {leftProps.map((item, i) => (
            <div key={item.id} className="flex items-center justify-end pr-10">
               <CardItem item={item} align="right" setHoveredId={setHoveredId} hoveredId={hoveredId} index={i} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pointer-events-auto">
           <CentralHub hoveredId={hoveredId} />
        </div>
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

const MobileValueList = () => {
  return (
    <div className="lg:hidden w-full max-w-md mx-auto px-4 py-8 relative">
       <div className={`absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-[#006FF6] to-slate-200`} />
       <div className="space-y-6 relative">
         {VALUE_PROPS.map((item, i) => (
           <motion.div
             key={item.id}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
             className="pl-16 relative"
           >
             <div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-px bg-slate-200" />
             <div className={`absolute left-[30px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-[#006FF6] z-10`} />
             <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm active:shadow-md active:border-blue-500 transition-all duration-300">
               <div className="flex items-center gap-4">
                 <div className={`p-2.5 rounded-lg shrink-0 bg-slate-50 text-[#006FF6]`}>
                   <item.icon size={18} />
                 </div>
                 <h3 className={`capitalize font-bold text-[#000000] text-sm`}>{item.text}</h3>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  );
};




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
          Technologies We Support
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
                        // className="w-8 h-8 object-contain"
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


// --- Main Page Component ---

const DemoAiMachine: React.FC = () => {
  return (
    <div className="w-full bg-white relative">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
  
        <div className=" container mx-auto px-6 relative z-10 mt-12 ">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative group order-2 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#02A5E6] to-[#006FF6] rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img 
                    
                    src = {dehero}
                    alt="AI and Automation Technology" 
                    className="w-full h-auto object-cover transform group-hover:scale-150 transition-transform duration-700 ease-out"
                    loading="lazy"
                />
                </div>
            </div>

            <div className="order-1 lg:order-1">
                <div className="flex items-center gap-2 mb-6">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                        </span>
                      AI & Machine Learning
                    </div>
                </div>
    
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-6 leading-tight">
                Unlock Predictive  <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02A5E6] to-[#006FF6]">
                    Intelligence
                </span>
                </h2>
                
                <p className="text-lg font-600 mb-8 leading-relaxed">
                  We help organizations embed AI into core business operations through responsible, scalable and performance-driven solutions. From predictive analytics to generative AI, we deliver practical intelligence with measurable business impact.
                </p>

                {/* <ul className="space-y-4 mb-8">
                {[
                    "Unified single source of truth",
                    "Cloud-ready, scalable data pipelines",
                    "Analytics, AI and reporting optimization"
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
      </section>




      {/* Enhanced Deliverables Section */}
      <section className="py-16 bg-slate-50/40 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
     

          <div className="text-center mb-24">  
            <div className="relative inline-block">
                <h2 className="text-4xl md:text-4xl  font-black text-slate-900 tracking-tight relative z-10">
                What we Deliver
                </h2>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
            </div>
          </div>          


          <div className="max-w-6xl mx-auto px-4 relative">
            {DELIVERABLES.map((item, index) => (
              <DeliverableRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <TechSlider />

      {/* Business Value Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block">
              <div className="relative inline-block">
                <h2 className={`text-4xl md:text-5xl font-black text-[#000000] tracking-tight relative z-10`}>Business Value</h2>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#006FF6]/20 rounded-full"></div>
              </div>
            </motion.div>
          </div>
          <DesktopHubLayout />
          <MobileValueList />
        </div>
      </section>

 
    </div>
  );
};

export default DemoAiMachine;
