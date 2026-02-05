
import React from 'react';
import herobg from '../../../assets/HomeGradient.png'
import herobg1 from '../../../assets/Home_Hero/hero_two.png'
// import { Link } from 'react-router-dom';

const ServiceHero: React.FC = () => {
  // const primaryBlue = '#0067FF';
  
  // Background image for the entire section
  const sectionBgImage = herobg
  
  // Hero feature image on the right
  // const heroFeatureImage = homehero

  return (
    <section 
      className="relative w-full  flex items-center py-12 mt-16 sm:mt-16 lg:mt-4 lg:pt-26 overflow-hidden"
      style={{
        backgroundImage: `url(${sectionBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay to improve content legibility */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-0"></div>

      {/* Decorative Dot Pattern on the far right */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block select-none">
        <svg width="200" height="400" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={primaryBlue} />
          </pattern>
          <rect width="100" height="200" fill="url(#dotPattern)" />
        </svg>
      </div> */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl  font-medium leading-tight text-[#006FF6]">
                {/* Transforming <span style={{ color: primaryBlue }}>Life Sciences</span> <br className="hidden xl:block" />
                Through <span style={{ color: primaryBlue }}>Data & AI</span> */}
                Intelligent Data, Analytics & AI <br/>  Services for Life Sciences
                {/* Transforming Life<span style={{ color: primaryBlue }}>  Sciences Through Data</span> <br className="hidden xl:block" /> */}
                
              </h1>
              
              <p className="text-[#424242] text-lg md:text-xl lg:text-xl max-w-2xl leading-relaxed font-normal">
              We deliver integrated data engineering, analytics, AI, and managed services built specifically for biopharma and healthcare organizations.   
                {/* Specialized consulting firm delivering data engineering, advanced analytics, AI and compliance-ready platforms for life sciences and healthcare organizations. */}
                {/* Specialized consulting firm delivering data engineering, advanced analytics and AI-driven solutions to life sciences and healthcare organizations. */}
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-4 w-full sm:w-auto">
              
              
              <Link  to='/solutions'
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4  text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ backgroundColor: primaryBlue }}
              >
                <span>Explore Solutions</span>
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>

              <Link to='/contact' 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4  font-bold text-lg border-2 transition-all duration-300 hover:bg-white/50 active:scale-95"
                style={{ color: primaryBlue, borderColor: primaryBlue }}
              >
                <span>Talk to our Expertise</span>
              </Link>
            </div> */}

            {/* <div className="flex items-center gap-4 pt-6 text-[#0D2B4D]/60">
              <div className="h-px w-12 bg-[#0D2B4D]/20"></div>
              <span className="text-sm uppercase tracking-widest font-bold">Compliance Excellence</span>
            </div> */}
          </div>

          {/* Right Column: Exact Stacked Image Design */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center py-0">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              
              {/* Bottom Layer - Light Blue Shadow Shape */}
              {/* <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-20 -rotate-3 translate-x-4 translate-y-4"
                style={{ backgroundColor: primaryBlue }}
              ></div> */}
              
              {/* Middle Layer - Slightly Darker Blue Shape */}
              {/* <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-40 rotate-2 -translate-x-2 -translate-y-2"
                style={{ backgroundColor: primaryBlue }}
              ></div> */}

              {/* Top Layer - Main Image */}
              {/* <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-white/50 -rotate-1 transition-transform duration-500 hover:rotate-0"> */}
              <div className="relative h-full w-full overflow-hidden  shadow-2xl border-2 border-white/50  transition-transform duration-500 hover:rotate-0">
                <img 
                  src={herobg1} 
                  alt="Modern Data & Life Sciences Concept"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#02A5E611] to-transparent pointer-events-none"></div> */}
              </div>

             
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

/**
 * Icons
 */
// const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     viewBox="0 0 24 24" 
//     fill="none" 
//     stroke="currentColor" 
//     strokeWidth="2.5" 
//     strokeLinecap="round" 
//     strokeLinejoin="round" 
//     className={className}
//   >
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//     <polyline points="12 5 19 12 12 19"></polyline>
//   </svg>
// );



export default ServiceHero;
