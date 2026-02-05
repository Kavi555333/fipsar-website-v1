
import React, { useEffect, useState, useRef } from 'react';
import { 
  Activity, 
  TrendingDown, 
  Coins, 
  ShieldCheck, 
  Rocket, 
  ChevronRight 
} from 'lucide-react';
import elembg from '../../assets/Element1.png'
/**
 * Interface for the individual metric card properties.
 */
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  footerLink?: string;
  className?: string;
  isSplit?: boolean;
  delay?: number;
}

/**
 * ResultCard: A premium, interactive card component designed to showcase a single metric or result.
 * Includes mouse-tracking spotlight effects and micro-animations.
 */
const ResultCard: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  children, 
  footerLink, 
  className = "", 
  isSplit = false,
  delay = 0
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-white rounded-[10px] p-8 shadow-sm flex flex-col relative overflow-hidden h-full border border-white/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#006FF6]/30 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both ${className}`}
    >
      
      {/* Reactive Spotlight Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 111, 246, 0.05), transparent 40%)`
        }}
      />

      {/* Glass Sweep Reflection Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Premium Decorative corners with expansion animation */}
      <div className="absolute top-0 right-0 w-8 h-8 group-hover:w-12 group-hover:h-12 border-t-2 border-r-2 border-[#E5E7EB] rounded-tr-[10px] transition-all duration-500 group-hover:border-[#006FF6]/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 group-hover:w-12 group-hover:h-12 border-b-2 border-l-2 border-[#E5E7EB] rounded-bl-[10px] transition-all duration-500 group-hover:border-[#006FF6]/40" />

      {isSplit ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Side: Text Content */}
          <div className="flex flex-col h-full z-10">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#000000] transition-all duration-500 group-hover:bg-[#006FF6] group-hover:text-white group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_rgba(0,111,246,0.4)]">
                <div className="group-hover:animate-pulse">{icon}</div>
              </div>
            </div>
            <h3 className="text-[#006FF6] text-2xl font-bold mb-3 transition-colors duration-300 group-hover:translate-x-1">{title}</h3>
            <p className="text-[#424242] text-md leading-relaxed mb-6 flex-grow transition-colors duration-300 group-hover:text-black">
              {description}
            </p>
            {footerLink && (
              <a
                href="#"
                className="text-[#006FF6] text-[10px] font-bold tracking-widest flex items-center gap-1 hover:underline transition-all uppercase mt-auto group/link"
              >
                {footerLink} <ChevronRight size={12} strokeWidth={3} className="transition-transform duration-300 group-hover/link:translate-x-2" />
              </a>
            )}
          </div>
          {/* Right Side: Visual Data Representation */}
          <div className="flex items-center justify-center h-full z-10">
            <div className="w-full transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full relative z-10">
          <div className="mb-6">
            <div className={`w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#000000] transition-all duration-500 group-hover:bg-[#006FF6] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,111,246,0.4)] ${title === 'Enhanced Security' ? 'group-hover:animate-none' : 'group-hover:rotate-[360deg]'}`}>
              <div className={`
                ${title === 'Boost Productivity' ? 'group-hover:animate-bounce' : ''}
                ${title === 'Protect Revenue' ? 'group-hover:animate-spin-slow' : ''}
                ${title === 'Enhanced Security' ? 'relative overflow-hidden' : ''}
              `}>
                {icon}
                {title === 'Enhanced Security' && (
                  <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:animate-scan z-10" />
                )}
              </div>
            </div>
          </div>

          <h3 className="text-[#006FF6] text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1">{title}</h3>
          <p className="text-[#424242] text-md leading-relaxed mb-2 flex-grow transition-colors duration-300 group-hover:text-black">
            {description}
          </p>

          {children && <div className="mb-4 transition-all duration-700 group-hover:scale-[1.05]">{children}</div>}
          
          {footerLink && (
            <a
              href="#"
              className="text-[#006FF6] text-[10px] font-bold tracking-widest flex items-center gap-1 hover:underline transition-all uppercase mt-auto group/link"
            >
              {footerLink} <ChevronRight size={12} strokeWidth={3} className="transition-transform duration-300 group-hover/link:translate-x-2" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * ManagedITResults: The primary self-contained component for the Results section.
 */
const ARResult: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [efficiencyValue, setEfficiencyValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Dynamic counter animation for the efficiency percentage
    const duration = 2000;
    const start = 0;
    const end = 85;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setEfficiencyValue(Math.floor(start + easedProgress * (end - start)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const elemtnbg = elembg;

  return (
    <section className={`bg-[#FFFF] min-h-screen py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden selection:bg-[#006FF6]/20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
   


       <div 
        className="absolute top-[2px] right-[10px]  w-[75%] z-0 pointer-events-none overflow-hidden"
        // style={{ backgroundColor: '#E8F1FF' }}
      >
        <img 
          src={elemtnbg}
          className="w-full h-full object-cover"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 25% 0)'
          }}
          alt=""
        />
      </div>
    
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-[#006FF6] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            The Results You Can Expect
          </h2>
          <div className="w-20 h-1 bg-[#006FF6] mx-auto rounded-full mt-4 animate-pulse" />
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Main Card: IT Downtime Reduction */}
          <ResultCard
            className="md:col-span-4"
            isSplit={true}
            delay={500}
            title="Reduce IT Downtime"
            description="Reduce IT and data platform downtime by up to 60%"
            footerLink="Explore Solutions"
            icon={<Activity size={28} strokeWidth={2} />}
          >
            <div className="bg-[#F9FAFB] rounded-[10px] p-8 flex flex-col items-center justify-center border border-[#F3F4F6] w-full shadow-inner max-w-xs group/metric overflow-hidden relative">
              <div className="text-[#006FF6] text-6xl font-black mb-1 transition-all duration-500 group-hover/metric:scale-110 group-hover/metric:drop-shadow-[0_0_15px_rgba(0,111,246,0.5)]">60%</div>
              <div className="text-[#006FF6] text-[8px] font-bold tracking-[0.2em] uppercase mb-6 opacity-70">
                Reduction Achieved
              </div>
              <div className="flex items-end gap-1.5 h-12">
                {[4, 6, 3, 5, 8, 5, 7, 4, 6, 9, 5, 3, 5].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-[#006FF6] rounded-[10px] transition-all duration-700 group-hover:animate-bounce" 
                    style={{ 
                      height: `${h * 4}px`, 
                      opacity: 0.2 + (i * 0.06),
                      animationDelay: `${i * 100}ms`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            </div>
          </ResultCard>

          {/* Efficiency Metric Card */}
          <ResultCard
            className="md:col-span-2"
            delay={700}
            title="Lower IT Spend"
            description="Lower IT spend with predictable, fixed pricing"
            icon={<TrendingDown size={28} strokeWidth={2} />}
          >
            <div className="mt-2 w-full group/bar">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#006FF6] text-[9px] font-bold uppercase tracking-wider">Efficiency</span>
                <span className="text-gray-400 text-[9px] transition-colors group-hover/bar:text-[#006FF6]">
                  {efficiencyValue}% Optimized
                </span>
              </div>
              <div className="w-full bg-[#E5E7EB] h-2.5 rounded-[10px] overflow-hidden shadow-sm relative">
                <div 
                  className="bg-[#006FF6] h-full rounded-[10px] shadow-[0_0_15px_rgba(0,111,246,0.6)] transition-all duration-1000 ease-out relative overflow-hidden group-hover:duration-500 group-hover:shadow-[0_0_20px_rgba(0,111,246,0.8)]"
                  style={{ width: isVisible ? 'var(--target-width, 85%)' : '0%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </div>
              </div>
              <div className="mt-3 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500 text-[10px] text-[#006FF6] font-medium italic">
                Optimizing budgets in real-time...
              </div>
            </div>
          </ResultCard>

          {/* Revenue Protection Card */}
          <ResultCard
            className="md:col-span-2"
            delay={900}
            title="Protect Revenue"
            description="Protect revenue with rapid SLA-based support"
            icon={<Coins size={28} strokeWidth={2} />}
            // footerLink="View SLAs"
          />

          {/* Security Card */}
          <ResultCard
            className="md:col-span-2"
            delay={1100}
            title="Enhanced Security"
            description="Strengthen security and compliance posture"
            icon={<ShieldCheck size={28} strokeWidth={2} />}
            // footerLink="Security Audit"
          />

          {/* Productivity Card */}
          <ResultCard
            className="md:col-span-2"
            delay={1300}
            title="Boost Productivity"
            description="Increase productivity by freeing teams from day-to-day tech issues"
            icon={<Rocket size={28} strokeWidth={2} />}
            // footerLink="Efficiency Gains"
          />

        </div>
      </div>

      {/* Embedded styles for custom animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-scan {
          animation: scan 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .group\\/bar:hover .bg-\\[\\#006FF6\\] {
          --target-width: 95% !important;
        }
        .animate-in {
          animation-name: animate-in;
        }
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(2rem) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .fill-mode-both {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default ARResult;
