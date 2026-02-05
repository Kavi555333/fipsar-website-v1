
import React,  { useState }from 'react';
import ApplyFormModal from './ApplyFormModal';

/**
 * CareerSection Component
 * Uses the vibrant blue gradient design (#006FF6).
 * Integrates the Lightbulb and Splatter SVGs as background decorations.
 * Constrained to a wider container width (max-w-7xl).
 * Title redesigned to match the 'Results You Can Expect' visual style with a white underline.
 */
const Whywork: React.FC = () => {
  const BRAND_BLUE = "#006FF6";
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (

    <>
                <div className=" relative w-full max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl isolate flex items-center">
    {/* <div className="mt-24 relative w-full max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl isolate flex items-center"> */}
      {/* --- BACKGROUND GRADIENT --- */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{ 
          background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #0189BD 100%)` 
        }} 
      />

      {/* --- BACKGROUND DECORATIVE SVGS --- */}

      {/* Lightbulb SVG - Top Left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-10 w-28 md:w-40 opacity-20 pointer-events-none transform -rotate-12 animate-float">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 10C33.4315 10 20 23.4315 20 40C20 50.325 25.195 59.435 33.09 64.915C36.87 67.545 39.545 71.695 40.54 76.24L41.67 81.33C42.14 83.43 43.99 84.93 46.14 84.93H53.86C56.01 84.93 57.86 83.43 58.33 81.33L59.46 76.24C60.455 71.695 63.13 67.545 66.91 64.915C74.805 59.435 80 50.325 80 40C80 23.4315 66.5685 10 50 10Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path d="M40 45 Q45 35 55 45 T70 45" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M42 90 L58 90 M44 95 L56 95 M46 100 L54 100" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Splatter SVG - Bottom Right */}
      <div className="absolute -bottom-12 -right-12 w-64 md:w-[450px] opacity-10 pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 200 200" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M145.5,50.2c10.3,9.2,18.4,20.4,22.1,33.3c3.7,12.9,2.9,27.5-3,40.1c-5.9,12.6-17,23.3-30.2,29c-13.2,5.7-28.5,6.5-41.4,1.8
            c-12.9-4.7-23.4-14.8-31.4-26.6c-8-11.8-13.5-25.2-13.8-38.9c-0.3-13.7,4.7-27.7,14-37.4c9.3-9.7,22.8-15.1,36.5-16.1
            C112,34.4,126,38.9,145.5,50.2z" />
          <circle cx="175" cy="45" r="10" />
          <circle cx="190" cy="120" r="15" />
          <circle cx="50" cy="170" r="12" />
          <circle cx="25" cy="80" r="8" />
        </svg>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 md:py-12 w-full">
        {/* Title: Why Work At Fipsar */}
        <div className="mb-6 group cursor-default">
          <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            Why Work At Fipsar
          </h2>
          {/* Centered White Underline from Image style */}
          <div className="w-20 md:w-32 h-1 md:h-1.5 bg-white/90 rounded-full mx-auto mt-4 shadow-sm transition-all duration-500 group-hover:w-40 md:group-hover:w-56" />
        </div>

        {/* Description */}
        <p className="text-white/95 text-base md:text-lg lg:text-lg leading-relaxed max-w-4xl font-medium mb-8 drop-shadow-sm">
          Work with talented people, use cutting-edge technologies and shape solutions that 
          advance global healthcare and scientific progress. At Fipsar, you'll grow your skills, 
          amplify your strengths and contribute to projects that create real-world change.
        </p>

        {/* Action Button Bar */}
        <div className="flex justify-center w-full mb-8">
          <div className="group/bar relative flex items-center bg-white/15 backdrop-blur-xl rounded-full border border-white/30 p-2 pl-8 pr-2 shadow-2xl transition-all duration-300 hover:bg-white/25">
            <span className="text-white text-sm md:text-base font-semibold tracking-wide mr-8 hidden sm:inline-block">
              Interested in joining our team?
            </span>
            
            <button 
              className="group flex items-center gap-2 bg-white text-[#006FF6] px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            //   onClick={() => window.open('https://fipsar.com/careers', '_blank')}
            //   onClick={() =>}
                          onClick={() => setIsModalOpen(true)}            
            >
              Apply Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Keyword Points */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          <span className="hover:text-white transition-colors cursor-default drop-shadow-sm">Innovative Culture</span>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          <span className="hover:text-white transition-colors cursor-default drop-shadow-sm">Global Impact</span>
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          <span className="hover:text-white transition-colors cursor-default drop-shadow-sm">Growth Focused</span>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-12deg); }
            50% { transform: translateY(-15px) rotate(-8deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.1); opacity: 0.15; }
          }
          .animate-float { animation: float 7s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 12s ease-in-out infinite; }
        `}
      </style>
    </div>

    <ApplyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>


    
    //   <ApplyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
};

export default Whywork;
