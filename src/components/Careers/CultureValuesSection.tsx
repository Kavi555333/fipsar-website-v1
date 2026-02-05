
import React from 'react';

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CultureValuesSection: React.FC = () => {
  const values: ValueItem[] = [
    {
      title: "Integrity & Transparency",
      description: "We do what’s right, openly and honestly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Innovation with Purpose",
      description: "We build solutions that truly move life sciences forward.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Diverse perspectives fuel our best work.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Ownership & Accountability",
      description: "We take pride in driving outcomes, not just tasks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "We grow by experimenting, exploring and leveling up.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    // <section className="relative overflow-hidden rounded-[2.5rem] bg-[#006FF6] py-14 px-6 lg:py-16 lg:px-14 shadow-[0_30px_80px_-20px_rgba(2,165,230,0.4)]">
    <section className="relative overflow-hidden  bg-[#006FF6] py-14 px-6 lg:py-16 lg:px-14 shadow-[0_30px_80px_-20px_rgba(2,165,230,0.4)]">
      
      {/* --- MULTI-LAYERED IMPRESSIVE BACKGROUND --- */}
      
      {/* Layer 1: Base Biotech Visual */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
          alt="Biotech Research"
          className="w-full h-full object-cover opacity-[0.12] mix-blend-overlay scale-110"
        />
      </div>

      {/* Layer 2: Second Visual Texture (Microscopic) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden translate-x-[20%] opacity-[0.1]">
        <img 
          src="https://images.unsplash.com/photo-1532187875605-1ef647a70094?auto=format&fit=crop&q=80&w=1500" 
          alt="Cellular Texture"
          className="w-full h-full object-cover mix-blend-screen rotate-12"
        />
      </div>

      {/* Layer 3: Advanced SVG Decorative Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none overflow-hidden">
        {/* Large Floating Molecular Structure */}
        <svg viewBox="0 0 800 800" className="absolute top-[-15%] right-[-10%] w-[70%] h-auto animate-[spin_240s_linear_infinite]">
          <circle cx="400" cy="400" r="320" stroke="white" strokeWidth="0.5" strokeDasharray="15 15" />
          <circle cx="400" cy="400" r="180" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <g key={angle} transform={`rotate(${angle} 400 400)`}>
              <line x1="400" y1="400" x2="400" y2="80" stroke="white" strokeWidth="1.5" />
              <circle cx="400" cy="80" r="14" fill="white" fillOpacity="0.8" />
              <circle cx="430" cy="50" r="8" stroke="white" strokeWidth="1" fill="none" />
            </g>
          ))}
        </svg>

        {/* Floating Connection Nodes (Center Right) */}
        <svg viewBox="0 0 400 400" className="absolute right-[10%] top-[30%] w-[30%] h-auto opacity-30">
          <circle cx="200" cy="200" r="4" fill="white" />
          <path d="M200 200 L250 150 L300 180 L280 250 L200 200" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.05" />
          <circle cx="250" cy="150" r="3" fill="white" />
          <circle cx="300" cy="180" r="3" fill="white" />
          <circle cx="280" cy="250" r="3" fill="white" />
        </svg>

        {/* Sophisticated DNA Helix Schematic (Left Edge) */}
        <svg viewBox="0 0 200 800" className="absolute left-0 top-0 w-[18%] h-full opacity-60">
           {Array.from({ length: 25 }).map((_, i) => (
            <g key={i}>
              <circle cx={100 + Math.sin(i * 0.5) * 35} cy={40 + i * 35} r="2" fill="white" />
              <circle cx={100 - Math.sin(i * 0.5) * 35} cy={40 + i * 35} r="2" fill="white" />
              <line x1={100 + Math.sin(i * 0.5) * 35} y1={40 + i * 35} x2={100 - Math.sin(i * 0.5) * 35} y2={40 + i * 35} stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
            </g>
          ))}
        </svg>

        {/* Floating Hexagonal Connectivity Grid */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(30)">
            <path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Overlay Gradients for Depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#006FF6]/60 via-transparent to-black/30 pointer-events-none z-0"></div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        
        {/* LEFT SIDE: Narrative Content */}
        <div className="lg:w-5/12 lg:sticky lg:top-8 shrink-0">
          <div className="space-y-5 bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {/* Mission Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/40 shadow-inner">
              <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase drop-shadow-md">
                Our Mission
              </span>
            </div>
            
            {/* Title Section */}
            <div className="space-y-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-xl">
                Culture <br /> 
                <span className="text-blue-50  opacity-95">& Values</span>
              </h2>
            </div>
            
            {/* Narrative Paragraph */}
            <div className="max-w-sm">
              <p className="text-lg md:text-xl text-white/95 leading-tight font-bold tracking-tight">
                We believe that innovation thrives where people feel supported, trusted and inspired.
              </p>
              <div className="mt-5 h-2 w-24 bg-gradient-to-r from-white via-white/50 to-transparent rounded-full shadow-lg shadow-white/30"></div>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-3">
              <button className="group flex items-center px-8 py-4 bg-white text-[#006FF6] font-black text-sm rounded-xl hover:bg-blue-50 hover:scale-[1.05] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.2)] active:scale-95">
                Join Our Team
                <div className="ml-3 p-1 bg-[#006FF6]/5 rounded-lg transform group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </div> */}
          </div>
        </div>

        {/* RIGHT SIDE: Value Cards Grid */}
        <div className="lg:w-7/12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative p-6 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col ${index === values.length - 1 && values.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Floating Big Index Number */}
                <div className="absolute top-5 right-7 text-5xl font-black text-slate-100/80 select-none group-hover:text-[#006FF6]/10 transition-colors pointer-events-none tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Wrapper */}
                  <div className="mb-4 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#006FF6] shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 group-hover:bg-[#006FF6] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_10px_25px_rgba(2,165,230,0.35)] ">
                    <div className="transform  transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>

                  {/* Typography */}
                  <h3 className="text-lg font-black text-slate-900 mb-1.5 tracking-tight group-hover:text-[#006FF6] transition-colors duration-300 leading-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-snug text-sm font-bold group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>
                </div>

                {/* Subtle Internal Card Connectivity Path */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-8 h-8 text-[#006FF6]/10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CultureValuesSection;
