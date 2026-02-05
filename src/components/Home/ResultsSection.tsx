import React, { useRef,type MouseEvent } from 'react';
import { motion,type Variants } from 'framer-motion';
import { 
  Activity, 
  ShieldCheck, 
  TrendingDown, 
  Lock, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

const SpotlightCard: React.FC<CardProps> = ({ children, className = "", variants }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={divRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`relative overflow-hidden group rounded-[2rem] bg-white border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#02A5E6]/40 ${className}`}
    >
       {/* Interactive Spotlight Reveal */}
       <div 
         className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
         style={{ 
           background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(2, 165, 230, 0.05), transparent 40%)`
         }}
       />
       
       {/* --- Asymmetrical 2-Corner Design (Diagonal) --- */}
       
       {/* Top Right Corner */}
       <div className="absolute top-5 right-5 w-5 h-5 border-t-[3px] border-r-[3px] border-[#02A5E6]/20 rounded-tr-lg pointer-events-none group-hover:border-[#02A5E6] group-hover:w-6 group-hover:h-6 transition-all duration-300 ease-out" />
       
       {/* Bottom Left Corner */}
       <div className="absolute bottom-5 left-5 w-5 h-5 border-b-[3px] border-l-[3px] border-[#02A5E6]/20 rounded-bl-lg pointer-events-none group-hover:border-[#02A5E6] group-hover:w-6 group-hover:h-6 transition-all duration-300 ease-out" />

       {/* Subtle Inner Gradient */}
       <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#02A5E6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#02A5E6]/10 transition-colors duration-500"></div>

       {/* Content Container */}
       <div className="relative z-10 h-full flex flex-col">
         {children}
       </div>
    </motion.div>
  );
};

const ResultsSection: React.FC = () => {
  const BRAND_COLOR = '#02A5E6';
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0, opacity: 1, scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8  overflow-x-hidden" style={{ backgroundColor: BRAND_COLOR }}>
      {/* Background Textures */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-[-10%] left-[20%] w-[1000px] h-[1000px] bg-white opacity-[0.07] rounded-full blur-[120px] mix-blend-overlay"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-900 opacity-30 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
            Results You Can Expect
          </h1>
          <div className="h-1.5 w-24 bg-white/30 mx-auto rounded-full mb-6 backdrop-blur-sm"></div>
          
          {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-cyan-50 leading-relaxed font-light opacity-90">
            Real impact, measured in uptime, security, and savings. We deliver the infrastructure your growth demands.
          </p> */}
        </motion.div>

        {/* Interactive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
        >
          {/* Card 1: Reduce IT Downtime (Hero Card) */}
          <SpotlightCard className="lg:col-span-8 p-8 md:p-10" variants={cardVariants}>
            <div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#02A5E6] to-[#028ec5] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-200/50 ring-4 ring-cyan-50">
                    <Activity size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#02A5E6] transition-colors">Reduce IT Downtime</h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                   Reduce IT downtime by up to  60% with proactive monitoring and end-to-end managed services
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[#02A5E6] font-bold group/link cursor-pointer uppercase tracking-wider text-sm">
                  <span>Explore managed services</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="flex-1 relative group-hover:scale-[1.02] transition-transform duration-500 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#02A5E6]/10 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
                <div className="relative bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center h-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
                   <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#02A5E6]/30 to-transparent"></div>
                   <div className="text-center z-10">
                     <span className="block text-6xl font-black text-[#02A5E6] tracking-tighter drop-shadow-sm leading-none">60%</span>
                     <span className="block text-gray-400 font-semibold uppercase tracking-widest text-xs mt-3">Reduction Achieved</span>
                   </div>
                   <div className="absolute bottom-0 inset-x-0 h-16 opacity-30">
                      <div className="flex items-end justify-center gap-1.5 h-full pb-4">
                        {[40, 60, 30, 80, 50, 90, 40, 60, 70, 45].map((h, i) => (
                          <div key={i} className="w-2.5 bg-[#02A5E6] rounded-t-full" style={{ height: `${h}%`, opacity: 0.5 + (i/10) }}></div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Lower IT Spend */}
          <SpotlightCard className="lg:col-span-4 p-8" variants={cardVariants}>
            <div className="h-full flex flex-col relative z-10">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#02A5E6] mb-6 shadow-sm ring-4 ring-cyan-50/50">
                <TrendingDown size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#02A5E6] transition-colors">Lower IT Spend</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lower IT spend with predictable, fixed monthly pricing.
              </p>
              <div className="mt-auto space-y-4">
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[#02A5E6] text-xs uppercase font-bold tracking-wider">Cost Efficiency</span>
                     <span className="text-gray-700 font-bold text-sm">High</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                     <div className="bg-[#02A5E6] h-1.5 rounded-full w-[90%] shadow-[0_0_10px_rgba(2,165,230,0.5)]"></div>
                   </div>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Predictable', 'Scalable'].map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-full bg-[#02A5E6]/10 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Protect Revenue */}
          <SpotlightCard className="lg:col-span-4 p-8" variants={cardVariants}>
            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#02A5E6] mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-4 ring-cyan-50/50">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02A5E6] transition-colors">Protect Revenue</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
             Protect revenue and  productivity with rapid SLAbased support for critical systems.
            </p>
          </SpotlightCard>

          {/* Card 4: Improve Security */}
          <SpotlightCard className="lg:col-span-4 p-8" variants={cardVariants}>
            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#02A5E6] mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-4 ring-cyan-50/50">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02A5E6] transition-colors">Improve Security</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Improve your security posture with continuous threat detection and compliance-ready processes
            </p>
          </SpotlightCard>

          {/* Card 5: Boost Productivity */}
          <SpotlightCard className="lg:col-span-4 p-8" variants={cardVariants}>
            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#02A5E6] mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-4 ring-cyan-50/50">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02A5E6] transition-colors">Boost Productivity</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Boost internal productivity by freeing your team from day-to-day tech issues.
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsSection;