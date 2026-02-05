
import React from 'react';
import { Link } from 'react-router-dom';
import homehero from '../../assets/Home_Hero/hero_two.png'
// import homehero from '../../assets/gem_hero.png'
import herobg from '../../assets/HomeGradient.png'
/**
 * HeroSection Component
 * Replicates the provided design with a layered image stack and a decorative 
 * background element on the right.
 * Primary brand color: #006FF6.
 */
const HeroComponent: React.FC = () => {
  const primaryBlue = '#006FF6';
  
  // Background image for the entire section (Placeholder used in place of herobg)
  const sectionBgImage = herobg;
  
  // Hero feature image on the right (Placeholder used in place of homehero)
  const heroFeatureImage = homehero;

  return (
    <section 
      className="relative w-full min-h-screen flex items-center py-10 lg:py-0 overflow-hidden"
      style={{
        backgroundImage: `url(${sectionBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay to improve content legibility */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-0"></div>

      {/* Decorative Dot Pattern on the far right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block select-none">
        <svg width="200" height="400" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={primaryBlue} />
          </pattern>
          <rect width="100" height="200" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl font-bold leading-tight text-[#0D2B4D]">
                Transforming Life<span style={{ color: primaryBlue }}> Sciences Through Data, </span> <br className="hidden xl:block" />
                AI & Compliance Excellence
              </h1>

              {/* Added Tagline Section */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 py-1">
                <span className="own-css-span flex items-center gap-2 text-sm md:text-base font-bold tracking-widest uppercase text-[#0D2B4D]/70">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryBlue }}></span>
                  Precision analytics
                </span>
                <span className="own-css-span  flex items-center gap-2 text-sm md:text-base font-bold tracking-widest uppercase text-[#0D2B4D]/70">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryBlue }}></span>
                  Scalable platforms
                </span>
                <span className="own-css-span  flex items-center gap-2 text-sm md:text-base font-bold tracking-widest uppercase text-[#0D2B4D]/70">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryBlue }}></span>
                  Trusted outcomes
                </span>
              </div>
              
              <p className="text-gray-700 text-lg md:text-xl lg:text-xl max-w-2xl leading-relaxed font-normal">
                With 15+ years of IT excellence, Fipsar empowers biopharma and specialty pharma organizations to unlock the value of complex, regulated data. Our AI-enabled, compliance-ready platforms deliver actionable insights tailored to the unique demands of life sciences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-4 w-full sm:w-auto">
              
              <Link to='/solutions'
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ backgroundColor: primaryBlue }}
              >
                <span>Explore Solutions</span>
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>

              <Link to='/contact' 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:bg-white/50 active:scale-95"
                style={{ color: primaryBlue, borderColor: primaryBlue }}
              >
                <span>Talk to our Expertise</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Exact Stacked Image Design */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center py-10">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              
              {/* Bottom Layer - Light Blue Shadow Shape */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-20 -rotate-3 translate-x-4 translate-y-4"
                style={{ backgroundColor: primaryBlue }}
              ></div>
              
              {/* Middle Layer - Slightly Darker Blue Shape */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-40 rotate-2 -translate-x-2 -translate-y-2"
                style={{ backgroundColor: primaryBlue }}
              ></div>

              {/* Top Layer - Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-white/50 -rotate-1 transition-transform duration-500 hover:rotate-0">
                <img 
                  src={heroFeatureImage} 
                  alt="Modern Data & Life Sciences Concept"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#006FF611] to-transparent pointer-events-none"></div>
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
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default HeroComponent;
