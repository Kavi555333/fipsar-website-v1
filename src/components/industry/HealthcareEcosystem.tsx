import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import  ecosys  from '../../assets/HealthcareProviders.png'

const HealthcareEcosystem: React.FC = () => {
  return (
    <section className=" container mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden selection:bg-[#006FF6]/20 selection:text-[#0077a8]">
      {/* Decorative background elements - Refined for a cleaner, high-end look */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#006FF6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#006FF6]/10 via-blue-50/20 to-transparent rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-50/40 via-white to-transparent rounded-full blur-[80px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-fit mb-8 transition-all hover:border-[#006FF6]/30 cursor-default group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#006FF6]"></span>
                </span>
                <span className="text-slate-500 font-medium text-[11px] tracking-widest uppercase group-hover:text-[#006FF6] transition-colors">
                  Related Ecosystem
                </span>
              </div>
              
              {/* Typography */}
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006FF6] to-[#0077a8]">Healthcare Providers</span>
                <span className="capitalize block text-slate-800 mt-3 text-2xl sm:text-3xl lg:text-2xl font-bold tracking-normal">
                  Hospitals, clinics and clinicians participating in trials and therapy adoption
                </span>
              </h3>
              
              <div className="relative pl-6 border-l-[3px] border-[#006FF6]/30">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                  Collaborating with hospitals, clinics and clinicians to support therapy adoption, clinical engagement and improved patient outcomes.
                </p>
              </div>
            </div>

            {/* Premium Button Redesign */}
            <div className="pt-4">
               <Link to='/service/businessIntelligence' className="group relative inline-flex items-center justify-between gap-8 pl-8 pr-2 py-2 bg-[#006FF6] text-white rounded-full overflow-hidden transition-all duration-500 hover:bg-[#0293cd] shadow-[0_20px_40px_-15px_rgba(2,165,230,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(2,165,230,0.6)] transform hover:-translate-y-1">
                {/* Background Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0293cd] to-[#006080] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                
                {/* Text */}
                <span className="relative z-10 font-bold tracking-wide text-lg">View Provider Services</span>
                
                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full group-hover:bg-white group-hover:text-[#006FF6] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full flex justify-center lg:justify-center group perspective-1000">
            {/* Image Container with sophisticated backdrop */}
            <div className="relative z-10 transition-transform duration-700 ease-out transform group-hover:rotate-1 group-hover:scale-[1.02]">
                
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#006FF6]/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Main Frame */}
                <div className="relative h-[260px] lg:h-[360px] w-full max-w-lg rounded-[2rem] bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100/50">
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                        {/* Image */}
                        <img 
                            // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
                            src={ecosys}
                            alt="Healthcare Provider Ecosystem" 
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                        />
                        
                        {/* Subtle overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002040]/30 via-transparent to-transparent pointer-events-none"></div>

                        {/* Glass shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Decorative geometrical elements behind */}
             <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-[#006FF6]/5 rounded-full blur-3xl"></div>
             <div className="absolute -z-10 bottom-10 left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthcareEcosystem;