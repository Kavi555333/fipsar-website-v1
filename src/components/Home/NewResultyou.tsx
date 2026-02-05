
import React from 'react';
import { 
  Activity, 
  TrendingDown, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ChevronRight 
} from 'lucide-react';
import bgsec from '../../assets/HomeBg.png'
import { Link } from 'react-router-dom';


// --- Sub-components for better organization within the same file ---

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "bg-[#1560CE] text-white" }) => (
  <div className={`rounded-xl inline-flex items-center justify-center shadow-sm mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#1560CE]/20 shrink-0 ${className}`}>
    {children}
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`group bg-white rounded-3xl p-8 relative overflow-hidden border border-slate-100 shadow-xl transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#1560CE]/20 hover:-translate-y-2 hover:scale-[1.01] cursor-default ${className}`}>
    {/* Decorative corner elements with hover animations */}
    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#1560CE]/10 rounded-tr-md transition-all duration-500 group-hover:top-3 group-hover:right-3 group-hover:border-[#1560CE]/40"></div>
    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#1560CE]/10 rounded-bl-md transition-all duration-500 group-hover:bottom-3 group-hover:left-3 group-hover:border-[#1560CE]/40"></div>
    
    {/* Subtle inner hover glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#1560CE]/0 to-[#1560CE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col h-full items-start w-full">
      {children}
    </div>
  </div>
);

const BarChart: React.FC = () => (
  <div className="flex items-end gap-1.5 h-12 mt-4 justify-center">
    {[30, 45, 60, 40, 70, 55, 35, 50, 65, 45].map((height, i) => (
      <div 
        key={i} 
        style={{ height: `${height}%` }} 
        className="w-1.5 bg-[#1560CE]/10 rounded-full overflow-hidden relative transition-all duration-500 group-hover:bg-[#1560CE]/20"
      >
        <div 
          className="absolute bottom-0 w-full bg-[#1560CE]/40 transition-all duration-700 group-hover:bg-[#1560CE]/70" 
          style={{ 
            height: i % 2 === 0 ? '60%' : '100%',
            transitionDelay: `${i * 50}ms`
          }}
        ></div>
      </div>
    ))}
  </div>
);

export const NewResultyou: React.FC = () => {
  const bgImageUrl =  bgsec 


  return (
    <section 
      className="min-h-screen py-16 px-4 md:px-8 flex flex-col items-center overflow-x-hidden relative bg-[#1560CE] bg-cover bg-center bg-no-repeat bg-fixed bg-blend-soft-light"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      {/* Title Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
          Results You Can Expect
        </h2>
        <div className="w-16 h-1 bg-white/40 mx-auto rounded-full mt-4 transition-all duration-500 hover:w-32 hover:bg-white/70"></div>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Row 1: Large Card (Spans 2 columns) */}
        <Card className="md:col-span-2">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full">
            {/* Left Column: Text Content */}
            <div className="flex-1 flex flex-col items-start text-left h-full">
              <IconWrapper className="w-12 h-12 bg-[#1560CE] text-white">
                <Activity className="w-6 h-6" />
              </IconWrapper>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#1560CE]">
                Reduce IT Downtime
              </h3>
              <p className="text-slate-500 leading-relaxed mb-10 max-w-sm">
                Reduce IT downtime by up to 60% with proactive monitoring and end-to-end managed services.
              </p>
              <Link to='/service/managedservice'
                className="inline-flex items-center text-[#1560CE] font-bold uppercase tracking-wider text-sm transition-all duration-300 group/link"
              >
                <span className="relative overflow-hidden inline-block">
                  Explore Managed Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1560CE] transition-all duration-300 group-hover:w-full group-hover/link:w-full"></span>
                </span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>

            {/* Right Column: Visual Data Representation */}
            <div className="flex-1 bg-slate-50/80 rounded-2xl p-10 border border-slate-100 flex flex-col items-center justify-center min-h-[280px] w-full shadow-inner transition-all duration-500 group-hover:bg-white group-hover:border-[#1560CE]/10">
              <div className="text-center">
                <div className="relative inline-block mb-2">
                   <span className="text-7xl font-black text-[#1560CE] block transition-transform duration-500 group-hover:scale-110">
                     60%
                   </span>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-6 transition-colors group-hover:text-[#1560CE]/60">
                  Reduction Achieved
                </span>
                <BarChart />
              </div>
            </div>
          </div>
        </Card>

        {/* Row 1: Smaller Side Card */}
        <Card className="md:col-span-1">
          <IconWrapper className="w-12 h-12 bg-[#1560CE]/10 text-[#1560CE] border border-[#1560CE]/20 group-hover:bg-[#1560CE] group-hover:text-white">
            <TrendingDown className="w-6 h-6" />
          </IconWrapper>
          <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#1560CE]">Lower IT Spend</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Lower IT spend with predictable, fixed monthly pricing.
          </p>
          
          <div className="w-full mb-8 mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase text-[#1560CE] tracking-widest">Cost Efficiency</span>
              <span className="text-[10px] font-bold text-slate-400 transition-colors group-hover:text-slate-600">High</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1560CE] rounded-full transition-all duration-1000 ease-out delay-100 group-hover:shadow-[0_0_10px_rgba(21,96,206,0.3)]" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1560CE]/5 text-[#1560CE] text-xs font-semibold rounded-full border border-[#1560CE]/10 transition-all duration-300 group-hover:bg-[#1560CE] group-hover:text-white">Predictable</span>
            <span className="px-3 py-1 bg-[#1560CE]/5 text-[#1560CE] text-xs font-semibold rounded-full border border-[#1560CE]/10 transition-all duration-300 group-hover:bg-[#1560CE] group-hover:text-white group-hover:delay-75">Scalable</span>
          </div>
        </Card>

        {/* Row 2: Three Small Cards */}
        <Card>
          <IconWrapper className="w-10 h-10 bg-[#1560CE]/5 text-[#1560CE] border border-[#1560CE]/20 rounded-lg group-hover:bg-[#1560CE] group-hover:text-white transition-colors duration-300">
            <ShieldCheck className="w-5 h-5" />
          </IconWrapper>
          <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[#1560CE]">Protect Revenue</h3>
          <p className="text-slate-500 text-md leading-relaxed">
            Protect revenue and productivity with rapid SLA-based support for critical systems.
          </p>
        </Card>

        <Card>
          <IconWrapper className="w-10 h-10 bg-[#1560CE]/5 text-[#1560CE] border border-[#1560CE]/20 rounded-lg group-hover:bg-[#1560CE] group-hover:text-white transition-colors duration-300">
            <Lock className="w-5 h-5" />
          </IconWrapper>
          <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[#1560CE]">Improve Security</h3>
          <p className="text-slate-500 text-md leading-relaxed">
            Improve your security posture with continuous threat detection and compliance-ready processes.
          </p>
        </Card>

        <Card>
          <IconWrapper className="w-10 h-10 bg-[#1560CE]/5 text-[#1560CE] border border-[#1560CE]/20 rounded-lg group-hover:bg-[#1560CE] group-hover:text-white transition-colors duration-300">
            <Zap className="w-5 h-5" />
          </IconWrapper>
          <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors group-hover:text-[#1560CE]">Boost Productivity</h3>
          <p className="text-slate-500 text-md leading-relaxed">
            Boost internal productivity by freeing your team from day-to-day tech issues.
          </p>
        </Card>

      </div>
    </section>
  );
};
