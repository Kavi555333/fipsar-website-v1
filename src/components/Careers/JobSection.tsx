
import React from 'react';

const JobSection: React.FC = () => {
  // Brand Colors
  const primary = '#006FF6';
  const primaryDark = '#018bc2';
  const primaryLight = '#e6f6fd';

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      {/* Subtle branding accent - Using arbitrary values for self-containment */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full blur-3xl opacity-40" 
        style={{ backgroundColor: primaryLight }}
      />
      <div 
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 rounded-full blur-3xl opacity-20" 
        style={{ backgroundColor: primaryLight }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Open Jobs / <span style={{ color: primary }}>Current Openings</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Explore opportunities across data science, engineering, product, research, client success and more. 
          We’re always looking for curious, driven problem-solvers to join our mission.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            className="group relative px-8 py-3.5 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-widest text-xs shadow-lg"
            style={{ 
              backgroundColor: primary,
              boxShadow: `0 10px 15px -3px rgba(2, 165, 230, 0.3)` 
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = primary}
          >
            view all opening
            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Decorative separator */}
        {/* <div className="mt-12 flex justify-center items-center gap-3">
          <div className="h-[1px] w-8 bg-slate-100" />
          <div 
            className="w-1.5 h-1.5 rounded-full opacity-30" 
            style={{ backgroundColor: primary }}
          />
          <div className="h-[1px] w-8 bg-slate-100" />
        </div> */}
      </div>
    </section>
  );
};

export default JobSection;
