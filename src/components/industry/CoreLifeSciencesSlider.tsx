import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Leaf, ShieldCheck, Activity, Users } from 'lucide-react';

import corelife1 from '../../assets/CoreLifeSciences/Biopharma.png';
import corelife2 from '../../assets/CoreLifeSciences/ContractResearchOrganizations.png';
import corelife3 from '../../assets/CoreLifeSciences/Regulatory&SafetyTeams.png';
import corelife4 from '../../assets/CoreLifeSciences/MedicalAffairsTeams.png';
import { Link } from 'react-router-dom';



// --- Types ---
interface SlideData {
  id: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  description: string;
  image: string;
  Icon: React.ElementType;
     links : string ;
}




// --- Data ---
const SLIDES: SlideData[] = [
  {
    id: 'biopharma',
    title: 'Biopharma',
    displayTitle: 'Bio - Pharma',
    subtitle: 'Driving innovation in pharmaceuticals and biotech therapies',
    description: 'From pioneering new therapies to advancing biotech innovations, we support biopharma companies in their mission to transform patient care. Our work helps them navigate complex challenges, accelerate development timelines and bring life-changing medicines to market.',
    image: corelife1, 
    Icon: Leaf,
    links: '/service/aimachine',
  },
  {
    id: 'cros',
    title: 'CROs',
    displayTitle: 'CROs',
    subtitle: 'Supporting clinical trials & research programs',
    description: 'Clinical trials are the backbone of drug development and we collaborate closely with CROs to streamline research programs, ensure quality data and optimize trial execution. By fostering efficiency and scientific rigor, we help our clients achieve their goals faster.',
    image: corelife2, 
    Icon: Activity,
     links: '/solutions',
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Safety',
    displayTitle: 'Regulatory & Safety',
    subtitle: 'Ensuring compliance, approvals & patient safety',
    description: 'Compliance and patient safety are non-negotiable in Life Sciences. We assist regulatory and safety teams in managing submissions, navigating global regulations and maintaining the highest standards of pharmacovigilance, so that innovative therapies reach patients safely and efficiently.',
    image: corelife3, 
    Icon: ShieldCheck,
       links: '/service/governance',
  },
  {
    id: 'medical-affairs',
    title: 'Medical Affairs',
    displayTitle: 'Medical Affairs',
    subtitle: 'Translating clinical evidence into actionable insights',
    description: 'Bridging science and healthcare, medical affairs teams turn clinical insights into meaningful action. We empower these teams to communicate complex data effectively, engage with healthcare professionals and ensure that scientific evidence drives better outcomes in the real world.',
    image: corelife4, // People/Meeting
    Icon: Users,
       links: '/solutions',
  }
];

// --- Thematic Background SVGs ---
const MolecularBg = () => (
  <svg 
    className="absolute top-0 right-0 w-[400px] h-[400px] text-[#006FF6] opacity-[0.06] pointer-events-none transform translate-x-1/4 -translate-y-1/4 z-0" 
    viewBox="0 0 400 400" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central Hub */}
    <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="200" cy="200" r="10" fill="currentColor" opacity="0.2" />
    
    {/* Satellite Nodes */}
    <circle cx="100" cy="120" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="300" cy="120" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="300" cy="280" r="25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="100" cy="280" r="25" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Connections */}
    <line x1="172" y1="178" x2="120" y2="136" stroke="currentColor" strokeWidth="1.5" />
    <line x1="228" y1="178" x2="280" y2="136" stroke="currentColor" strokeWidth="1.5" />
    <line x1="228" y1="222" x2="280" y2="264" stroke="currentColor" strokeWidth="1.5" />
    <line x1="172" y1="222" x2="120" y2="264" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Floating Particles */}
    <circle cx="50" cy="200" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="350" cy="200" r="6" fill="currentColor" opacity="0.4" />
    <circle cx="200" cy="50" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="200" cy="350" r="3" fill="currentColor" opacity="0.4" />
  </svg>
);

const DnaBg = () => (
  <svg 
    className="absolute bottom-0 left-0 w-full h-48 text-[#006FF6] opacity-[0.04] pointer-events-none z-0" 
    viewBox="0 0 1200 320" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
     {/* Abstract Curves representing organic flow */}
     <path d="M0,320 C300,300 300,100 600,200 C900,300 900,150 1200,320 L1200,320 L0,320 Z" fill="currentColor" />
     <path d="M0,320 C200,320 400,250 600,320 C800,390 1000,280 1200,320" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
     
     {/* Grid-like texture overlay on bottom left */}
     <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
       <circle cx="2" cy="2" r="1" fill="currentColor" />
     </pattern>
     <rect x="0" y="200" width="300" height="120" fill="url(#grid)" opacity="0.3" />
  </svg>
);

const CoreLifeSciencesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    // setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    // setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, [isAnimating]);

  // Reset animation lock
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const currentSlide = SLIDES[currentIndex];
  const CurrentIcon = currentSlide.Icon;

  return (
    // Updated Layout Wrapper:

    <section className='bg-[#F2F9FD] py-12'>
                    <div className="w-full max-w-6xl mx-auto relative select-none px-4 sm:px-6 lg:px-8 my-16">
           <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-4xl  font-black text-slate-900 tracking-tight relative z-10">
              Core Life Science
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
          {/* <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
            Defining who we are and how we serve our community.
          </p> */}
        </div>
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

        
        
        {/* Desktop Navigation Button Left - Visible only on XL screens (1280px+) */}
        <button 
          onClick={handlePrev}
          className="hidden xl:flex absolute -left-12 top-1/2 -translate-y-1/2 p-2 text-[#006FF6] hover:text-[#0284B8] hover:scale-110 transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} strokeWidth={2} />
        </button>

        {/* Left Card: Text Content */}
        <div className="flex-1 lg:flex-[1.6] bg-white rounded-3xl p-8 lg:px-12 lg:pt-12 lg:pb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative overflow-hidden group">
          
          {/* Decorative Background Elements */}
          <MolecularBg />
          <DnaBg />

          {/* Transition wrapper for text content */}
          <div key={`text-${currentIndex}`} className="animate-fadeIn flex flex-col h-full z-10 relative">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#006FF6] tracking-tight">
                {currentSlide.displayTitle}
              </h2>
                {/* <div className="bg-[#006FF6]/10 p-4 rounded-2xl shadow-sm border border-[#006FF6]/5">
                  <CurrentIcon className="w-6 h-6 text-[#006FF6] animate-spin-slow" style={{ animationDuration: '10s' }} />
                </div> */}


                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 text-[#006FF6] 
                            ring-1 ring-slate-100
                            group-hover:bg-[#006FF6] group-hover:text-white group-hover:ring-[#006FF6]/30 
                            group-hover:shadow-[0_8px_20px_-4px_rgba(2,165,230,0.4)]
                            transition-all duration-500 ease-out">
                    <CurrentIcon size={26} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                </div>

              {/* Standard Icon Display */}
              {/* <CurrentIcon className=" text-[#006FF6] w-8 h-8 lg:w-10 lg:h-10 opacity-80" strokeWidth={1.5} /> */}
            </div>

            <h3 className="capitalize text-slate-800 text-lg lg:text-xl font-medium mb-6 leading-relaxed">
              {currentSlide.subtitle}
            </h3>

            <p className="text-slate-500 text-base leading-7 lg:leading-8 mb-6 relative">
              {currentSlide.description}
            </p>

            <div className="mt-auto">
              <Link to={currentSlide.links} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E6F6FD] text-[#006FF6] font-medium hover:bg-[#006FF6] hover:text-white transition-all duration-300 group/btn">
                <span>Learn More</span>
                <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Subtle Watermark in background */}
          <div className="absolute -bottom-10 -right-10 text-slate-50 opacity-[0.03] pointer-events-none transform rotate-12 transition-transform duration-1000 group-hover:rotate-[20deg] group-hover:scale-110">
             <CurrentIcon size={320} />
          </div>
        </div>

        {/* Right Card: Image Content */}
        <div className="flex-none h-64 lg:h-auto lg:flex-[1] relative rounded-3xl overflow-hidden shadow-lg group order-first lg:order-last">
          {/* Image transition wrapper */}
          <div 
            key={`img-${currentIndex}`} 
            className="absolute inset-0 w-full h-full bg-slate-200 transition-opacity duration-500"
          >
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title} 
              className="w-full h-full object-cover animate-scaleIn"
            />
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#006FF6]/90 via-[#006FF6]/40 to-transparent mix-blend-multiply opacity-80" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-[#006FF6]/30" />
          </div>

          {/* Floating Label Pill */}
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 lg:px-8 py-2 lg:py-2.5 rounded-full shadow-lg z-20 transition-transform duration-500 transform translate-y-0 opacity-100">
            <span className="text-[#006FF6] font-medium whitespace-nowrap text-sm lg:text-base">
              {currentSlide.displayTitle}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Button Right - Visible only on XL screens (1280px+) */}
        <button 
          onClick={handleNext}
          className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 p-2 text-[#006FF6] hover:text-[#0284B8] hover:scale-110 transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={48} strokeWidth={2} />
        </button>

      </div>

      {/* Mobile/Tablet Navigation Controls - Visible up to XL screens (< 1280px) */}
      <div className="flex xl:hidden justify-center items-center gap-6 mt-6">
        <button 
          onClick={handlePrev}
          className="p-3 bg-white rounded-full shadow-md text-[#006FF6] border border-slate-100 active:scale-95 transition-transform"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="p-3 bg-white rounded-full shadow-md text-[#006FF6] border border-slate-100 active:scale-95 transition-transform"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 lg:mt-12 w-full max-w-sm mx-auto h-1.5 bg-slate-200 rounded-full relative overflow-hidden">
        <div 
          className="absolute top-0 bottom-0 bg-[#006FF6] transition-all duration-500 ease-out rounded-full"
          style={{
            left: `${(currentIndex / SLIDES.length) * 100}%`,
            width: `${100 / SLIDES.length}%`
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
    </section>

  );
};

export default CoreLifeSciencesSlider;
