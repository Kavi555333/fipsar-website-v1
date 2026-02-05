import React from 'react';
import { Building2, Database, Globe2, TrendingUp, BrainCircuit, Network, type LucideIcon } from 'lucide-react';

// Integrated Types
interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// Integrated Data
const milestones: Milestone[] = [
  {
    id: '1',
    year: '2010',
    title: 'Inception',
    description: 'Founded in New Jersey, focusing on specialized healthcare & life sciences consulting.',
    icon: Building2,
  },
  {
    id: '2',
    year: '2012',
    title: 'Data Mastery',
    description: 'Expanded service portfolio into robust data management, analytics and Business Intelligence.',
    icon: Database,
  },
  {
    id: '3',
    year: '2015',
    title: 'Global Expansion',
    description: 'Established global centers. Launched comprehensive CRM & Cloud solution verticals.',
    icon: Globe2,
  },
  {
    id: '4',
    year: '2018',
    title: 'Market Leadership',
    description: 'Strengthened consulting footprint for major Fortune 500 healthcare enterprises.',
    icon: TrendingUp,
  },
  {
    id: '5',
    year: '2021',
    title: 'Innovation Phase',
    description: 'Pioneered AI-driven automation and established nearshore delivery centers.',
    icon: BrainCircuit,
  },
  {
    id: '6',
    year: '2024',
    title: 'Scaling Future',
    description: 'Scaling global footprint and advancing next-gen AI & Cloud infrastructures.',
    icon: Network,
  },
];

export const Timeline: React.FC = () => {
  return (
    <div 
      className="w-full relative bg-gradient-to-br from-[#02A5E6] to-[#02A5E6] rounded-[2.5rem] shadow-2xl shadow-blue-500/30 flex flex-col h-[700px] overflow-hidden transform-gpu ring-1 ring-white/20"
      style={{ isolation: 'isolate' }}
    >
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none -z-10 animate-float-slow mix-blend-overlay"></div>
      <div className="absolute bottom-[10%] left-[-20%] w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-float-slow-reverse mix-blend-overlay"></div>
      
      {/* Large faint decorative number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[350px] font-black text-white/[0.03] select-none pointer-events-none leading-none -z-10 tracking-tighter">
        15
      </div>

      {/* Header Pill */}
      <div className="relative z-20 flex justify-center pt-8 pb-6 shrink-0 bg-gradient-to-b from-[#3989FF] via-[#3989FF] to-transparent">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 shadow-lg shadow-blue-900/10 border border-white/20 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="text-white font-bold tracking-wide text-sm">Milestones Timeline</span>
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-8 space-y-4 relative z-10 timeline-scrollbar scroll-smooth pb-12">
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.id} 
            className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-500 ease-out transform hover:-translate-y-1 border border-transparent hover:border-blue-200 animate-spring-in overflow-hidden"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10 flex gap-4">
              {/* Icon Box */}
              <div className="flex-shrink-0">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#02A5E6] transition-colors duration-300">
                    <milestone.icon className="w-6 h-6 text-[#02A5E6] group-hover:text-white transition-colors duration-300" />
                 </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="text-slate-900 font-bold text-lg group-hover:text-[#02A5E6] transition-colors duration-300 truncate">
                    {milestone.title}
                   </h4>
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-[#02A5E6] group-hover:bg-[#02A5E6] group-hover:text-white transition-colors duration-300">
                     {milestone.year}
                   </span>
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed group-hover:text-slate-600">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};