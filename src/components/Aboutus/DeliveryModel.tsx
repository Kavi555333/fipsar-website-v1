import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, 
  Clock, 
  Target, 
  FileBarChart2, 
  ShieldAlert,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

// --- Types & Data ---

interface FeatureProps {
  id: number;
  title: string;
  icon: React.ElementType;
  description: string;
}

const FEATURES: FeatureProps[] = [
  {
    id: 0,
    title: "Onshore & Offshore Teams",
    icon: Globe2,
    description: "Seamless collaboration across borders. We integrate global talent pools to deliver continuous value."
  },
  {
    id: 1,
    title: "24×5 Coverage",
    icon: Clock,
    description: "Continuous operation. Our follow-the-sun model ensures your projects move forward every hour."
  },
  {
    id: 2,
    title: "SLA-Driven Execution",
    icon: Target,
    description: "Performance guaranteed. We adhere to strict Service Level Agreements to ensure quality."
  },
  {
    id: 3,
    title: "Governance & Reporting",
    icon: FileBarChart2,
    description: "Total transparency. Real-time dashboards provide complete visibility into project health."
  },
  {
    id: 4,
    title: "Risk & Escalation",
    icon: ShieldAlert,
    description: "Proactive security. Advanced risk mitigation frameworks ensure business continuity."
  }
];

// --- Minimalist Visualizations (Custom Color #006FF6) ---

const VizGlobe = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-dashed border-[#006FF6]/30"
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-4 rounded-full border border-dotted border-[#006FF6]/50"
    />
    <div className="bg-[#006FF6]/10 p-6 rounded-full relative z-10">
      <Globe2 size={48} className="text-[#006FF6]" />
    </div>
    <div className="absolute top-2 right-4 w-3 h-3 bg-[#006FF6] rounded-full animate-ping" />
  </div>
);

const VizClock = () => (
  <div className="relative w-40 h-40 flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm">
    <div className="absolute inset-2 rounded-full border border-[#006FF6]/20" />
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-t-2 border-[#006FF6]"
    />
    <Clock size={48} className="text-[#006FF6] relative z-10" />
  </div>
);

const VizTarget = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        className="absolute inset-0 border border-[#006FF6] rounded-full"
      />
    ))}
    <div className="bg-white p-6 rounded-full border-4 border-[#006FF6]/10 shadow-sm relative z-10">
      <Target size={48} className="text-[#006FF6]" />
    </div>
  </div>
);

const VizChart = () => (
  <div className="relative w-40 h-40 flex items-end justify-center gap-3 pb-8">
    {[40, 70, 50, 90, 60].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 10 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.8, delay: i * 0.1, ease: "backOut" }}
        className="w-4 bg-[#006FF6] rounded-t-md"
      />
    ))}
  </div>
);

const VizShield = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 bg-[#006FF6]/10 rounded-full opacity-50"
    />
    <ShieldAlert size={64} className="text-[#006FF6] relative z-10" />
    <div className="absolute bottom-2 right-8 bg-white shadow-md p-1.5 rounded-full">
       <CheckCircle2 size={16} className="text-[#006FF6]" />
    </div>
  </div>
);

// --- Main Component ---

const DeliveryModel: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveId(prev => (prev + 1) % FEATURES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const activeFeature = FEATURES[activeId];

  const renderVisual = () => {
    switch(activeId) {
      case 0: return <VizGlobe />;
      case 1: return <VizClock />;
      case 2: return <VizTarget />;
      case 3: return <VizChart />;
      case 4: return <VizShield />;
      default: return <VizGlobe />;
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      
      {/* Header Section (Outside Box) */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tight relative z-10">
              Delivery Model
            </h2>
            {/* Underline */}
            {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Delivery <span className="text-[#006FF6]">Model</span>
        </h2> */}
        {/* <p className="text-gray-500 font-medium max-w-lg mx-auto">
          Global Delivery. Local Excellence. A unified approach to ensure quality, speed and reliability.
        </p> */}
        <div className="w-16 h-1 bg-[#006FF6] mx-auto rounded-full mt-4" />
      </div>

      {/* Main Card */}
      <div 
        className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Left Panel: Navigation */}
        <div className="w-full md:w-2/5 bg-gray-50/50 p-6 flex flex-col border-r border-gray-200 justify-center">
          <div className="flex flex-col gap-2">
            {FEATURES.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`
                  group flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300
                  ${activeId === feature.id ? 'bg-white shadow-lg shadow-black/5 ring-1 ring-black/5' : 'hover:bg-gray-100'}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    p-2.5 rounded-lg transition-colors duration-300
                    ${activeId === feature.id ? 'bg-[#006FF6] text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300 group-hover:text-gray-700'}
                  `}>
                    <feature.icon size={20} strokeWidth={2} />
                  </div>
                  <span className={`font-semibold text-sm ${activeId === feature.id ? 'text-gray-900' : 'text-gray-600'}`}>
                    {feature.title}
                  </span>
                </div>
                
                {activeId === feature.id && (
                  <ChevronRight size={16} className="text-[#006FF6]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel: Content Viewport */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col items-center justify-center text-center relative bg-white">
          
          {/* Background Patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#006FF6]/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gray-100 rounded-full blur-3xl" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center max-w-md"
            >
              <div className="mb-10 scale-110">
                {renderVisual()}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {activeFeature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {activeFeature.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Simple Progress Bar at bottom */}
          <div className="absolute bottom-0 left-0 h-1 bg-[#006FF6] transition-all duration-300 ease-linear"
               style={{ width: `${((activeId + 1) / FEATURES.length) * 100}%` }}
          />
        </div>

      </div>

    </section>
  );
};

export default DeliveryModel;