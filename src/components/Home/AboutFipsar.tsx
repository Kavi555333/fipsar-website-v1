
import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroimg from '../../assets/abtfipsarimg.png'
/**
 * SustainabilitySection Component (Fipsar Edition)
 * 
 * REFINEMENTS:
 * - Reduced Height: Adjusted min-height for a more compact and balanced appearance.
 * - Balanced Typography: Maintained professional scale for standard displays.
 * - Premium UI: Refined button styling and badge appearance.
 */
const AboutFipsar: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden">
      {/* Reduced min-height from 600/700px to 450/550px */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[450px] xl:min-h-[550px]">
        
        {/* Left Side: Brand Content */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-24">
          <div className="max-w-xl xl:max-w-2xl animate-fade-in-left">
            
            {/* Tagline / Subtitle */}
            <span className="block text-[#006FF6] font-bold text-xs md:text-sm mb-4 tracking-[0.2em] uppercase">
              ABOUT FIPSAR
            </span>
            
            {/* Main Title - Compact font size for normal views */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-[1.1] mb-6 tracking-tight">
              Built for Biopharma.<br />
              <span className="text-[#006FF6]">Designed for Scale.</span>
            </h1>
            
            {/* Body Text - Refined color and spacing */}
            <div className="space-y-4 mb-8 max-w-lg">
              <p className="text-base md:text-lg text-[#000000] font-normal leading-relaxed">
                Fipsar is a life sciences consulting firm focused on data engineering, analytics, and AI/ML solutions.
              </p>
              <p className="text-base md:text-lg text-[#000000] font-normal leading-relaxed">
                We help pharma and biotech teams modernize platforms, automate compliance, and turn data into trusted insights across clinical, commercial, and enterprise operations.
              </p>
              <p className="text-base md:text-lg text-[#000000] font-normal leading-relaxed">
                
                From strategy to delivery, we support organizations with analytics, Salesforce solutions, data platforms, and AI-driven automation to drive better outcomes.
              </p>
              <p className="text-base md:text-lg text-[#000000] font-normal leading-relaxed">
                
                Let’s transform data into <b className='text-[#006FF6]'>impact</b> .
              </p>
            </div>
            
            {/* Action Button - Professional and streamlined */}
            <div className="flex items-center">
              <button 
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#006FF6] text-white font-bold text-sm md:text-base hover:bg-[#0058c4] transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/10 active:scale-95"
                onClick={() => console.log("Explore Fipsar")}
              >
                <span>Explore more</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
          </div>
        </div>
        
        {/* Right Side: Visual Representation */}
        <div className="relative min-h-[300px] lg:h-auto overflow-hidden bg-gray-900">
          {/* Microscopic Cell Image */}
          <img 
            src={heroimg} 
            alt="Life Sciences Microscopic Visualization" 
            className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[6000ms] ease-out opacity-80"
          />
          
          {/* Top Right Badge - Professional styling */}
          {/* <div className="absolute top-6 right-6 lg:top-8 lg:right-8 animate-fade-in-delayed">
             <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 border border-white/20">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-white/90 tracking-[0.15em] uppercase">
                  Scale Protocol Active
                </span>
             </div>
          </div> */}

          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
        </div>
        
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutFipsar;
