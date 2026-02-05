import React from 'react';
import { Sparkles } from 'lucide-react';

export const StoryContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 pr-0 lg:pr-10 relative z-10 pt-12">
      {/* Decorative Blur Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#02A5E6]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Header Section */}
      <div className="space-y-4">
        {/* Modern Impressive "Who We Are" Label */}
        <div className="flex items-center gap-3 animate-fade-in-up">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg shadow-blue-500/10 border border-blue-50 group transition-transform duration-500 hover:rotate-12">
            <Sparkles className="w-6 h-6 text-[#02A5E6] fill-[#02A5E6]/10" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#02A5E6] font-black tracking-[0.2em] uppercase text-sm leading-none">
              Who We Are
            </span>
            <span className="text-slate-400 font-medium text-[10px] tracking-wide uppercase mt-1">
              Our Journey & Identity
            </span>
          </div>
        </div>

        {/* Massive Headline: Jazz it to Success */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight mt-4">
          Jazz it to <br />
          <span className="relative inline-block mt-1">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#02A5E6] to-[#3989FF] font-serif italic pr-4">
              Success
            </span>
            {/* Underline Decoration */}
            <svg className="absolute bottom-1 left-0 w-full h-3 text-[#02A5E6]/30 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
      </div>

      {/* Main Narrative Content */}
      <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
        <p>
          <span className="font-bold text-slate-900">FIPSAR</span> is an industry-focused consulting firm specializing in 
          <span className="text-[#02A5E6] font-semibold"> data management</span>, 
          <span className="text-[#02A5E6] font-semibold"> analytics</span> and 
          <span className="text-[#02A5E6] font-semibold"> AI/ML solutions</span> specially crafted for the life sciences and healthcare sectors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center py-2">
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100 w-fit">
            <span className="bg-[#02A5E6]/10 text-[#02A5E6] font-bold px-3 py-1 rounded-lg">2010</span>
            <span className="text-sm font-semibold text-slate-700">Founded in NJ</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200"></div>
          <p className="text-slate-600 text-base">
            Visionaries <span className="text-slate-900 font-semibold">Anto & Subhar J</span> turned a local consultancy into a global powerhouse.
          </p>
        </div>

        <p>
          Today, we operate from our headquarters in <span className="font-bold text-slate-900 border-b-2 border-[#02A5E6]/20">Hillsborough, NJ</span>, delivering world-class technology services from our center of excellence in <span className="font-bold text-slate-900 border-b-2 border-[#02A5E6]/20">Chennai</span>.
        </p>
      </div>

      {/* Quote Section */}
      {/* <div className="relative mt-2 group">
        <div className="absolute inset-0 bg-[#02A5E6] rounded-2xl rotate-1 opacity-5 group-hover:rotate-2 transition-transform duration-300"></div>
        <div className="relative bg-white p-6 rounded-2xl border border-blue-50 shadow-xl shadow-blue-900/5">
          <Quote className="absolute top-4 right-4 text-blue-100 w-10 h-10 rotate-180" />
          <p className="text-lg font-serif italic text-slate-700 pr-8">
            "Our mission is to bridge the gap between complex data and actionable healthcare insights."
          </p>
        </div>
      </div> */}

      {/* CTA */}
      {/* <div className="pt-4">
        <button className="group relative inline-flex items-center justify-between gap-6 bg-slate-900 text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-[#02A5E6] transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-blue-500/25 hover:-translate-y-1">
          <span className="pl-2">Explore Our Services</span>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white text-white group-hover:text-[#02A5E6] transition-all">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div> */}
    </div>
  );
};