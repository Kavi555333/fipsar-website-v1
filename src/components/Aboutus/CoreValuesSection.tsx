import React from 'react';
import { Heart, Clock, Binoculars, Infinity as InfinityIcon, Share2,type LucideIcon } from 'lucide-react';

// --- Types ---
interface CoreValue {
  title: string;
  description: string;
  Icon: LucideIcon;
}

// --- Data ---
const CORE_VALUES_TOP: CoreValue[] = [
  {
    title: "Care",
    description: "We build strong, human relationships with our clients.",
    Icon: Heart,
  },
  {
    title: "Dedication",
    description: "We deliver excellence through every engagement.",
    Icon: Clock,
  },
  {
    title: "Innovation",
    description: "We embrace new ideas to solve modern data challenges.",
    Icon: Binoculars,
  },
];

const CORE_VALUES_BOTTOM: CoreValue[] = [
  {
    title: "Trust",
    description: "We act with integrity and transparency.",
    Icon: InfinityIcon,
  },
  {
    title: "Partnership",
    description: "We work as an extension of your team.",
    Icon: Share2,
  },
];

// --- Sub-Component: Individual Card ---
const ValueCard: React.FC<CoreValue> = ({ title, description, Icon }) => {
  return (
    <div className="group relative h-full">
      {/* 
        Main Card Container 
        - Compact sizing with reduced corner radius (2rem)
        - Explicit hex colors used for reliability
      */}
      <div className="relative h-full bg-white rounded-[2rem] overflow-hidden 
                      border border-slate-100 
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]
                      hover:shadow-[0_25px_60px_-12px_rgba(2,165,230,0.2)]
                      hover:border-[#006FF6]/20
                      transition-all duration-500 ease-out 
                      group-hover:-translate-y-2">

        {/* --- Decorative Corner Accent (Geometric Ripple) --- */}
        <div className="absolute -top-8 -right-8 w-40 h-40 pointer-events-none select-none">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#006FF6]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Concentric Arcs SVG */}
            <svg 
              className="w-full h-full text-[#006FF6] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-6"
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor"
            >
               {/* Outer Arc */}
               <circle cx="100" cy="0" r="80" strokeWidth="12" className="opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
               {/* Middle Arc */}
               <circle cx="100" cy="0" r="60" strokeWidth="6" className="opacity-[0.06] group-hover:opacity-[0.12] transition-opacity" />
               {/* Inner Arc */}
               <circle cx="100" cy="0" r="42" strokeWidth="1.5" className="opacity-20 group-hover:opacity-40 transition-opacity" strokeDasharray="4 4" />
               {/* Dot */}
               <circle cx="70" cy="22" r="3" fill="currentColor" className="opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-100" stroke="none" />
            </svg>
        </div>

        {/* --- Content Layer --- */}
        <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
          
          <div className="mb-6">
             {/* Icon Container */}
             <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 text-[#006FF6] 
                            ring-1 ring-slate-100
                            group-hover:bg-[#006FF6] group-hover:text-white group-hover:ring-[#006FF6]/30 
                            group-hover:shadow-[0_8px_20px_-4px_rgba(2,165,230,0.4)]
                            transition-all duration-500 ease-out">
                <Icon size={26} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
             </div>
          </div>

          {/* Typography */}
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#006FF6] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-slate-600/90 font-sans leading-relaxed text-base">
            {description}
          </p>

          {/* Bottom Accent Line */}
          <div className="mt-auto pt-6">
            <div className="h-1 w-10 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-[#006FF6]/20 transition-all duration-700 ease-out origin-left" />
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Main Component: Full Section ---
const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006FF6]/5 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#006FF6]/5 rounded-full blur-[80px] translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tight relative z-10">
              Our Core Values
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
            Defining who we are and how we serve our community.
          </p>
        </div>

        {/* Grid Container */}
        <div className="space-y-8">
          
          {/* Top Row: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES_TOP.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                Icon={value.Icon}
              />
            ))}
          </div>

          {/* Bottom Row: 2 Items (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
             <div className="hidden lg:block lg:col-span-3">
               <div className="flex flex-col lg:flex-row justify-center gap-6">
                  {CORE_VALUES_BOTTOM.map((value) => (
                    <div key={value.title} className="w-full lg:w-[calc(33.333%-1rem)]">
                      <ValueCard
                        title={value.title}
                        description={value.description}
                        Icon={value.Icon}
                      />
                    </div>
                  ))}
               </div>
            </div>

            <div className="contents lg:hidden">
              {CORE_VALUES_BOTTOM.map((value) => (
                <ValueCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  Icon={value.Icon}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;