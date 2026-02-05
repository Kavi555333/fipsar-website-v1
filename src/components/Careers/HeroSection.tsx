
import React, { useEffect, useRef, useState } from 'react';

/**
 * Interface for Card data
 */
interface FeatureCardProps {
  title: string;
  image: string;
  className?: string;
}

import careerhero1 from '../../assets/Careers-Hero-Sec/ImproveOutcomes.png';
import careerhero2 from '../../assets/Careers-Hero-Sec/InsightsFromComplexData.png';
import careerhero3 from '../../assets/Careers-Hero-Sec/PurposefulInnovation.png';
import careerhero4 from '../../assets/Careers-Hero-Sec/ScientificDiscovery.png';
import careerhero5 from '../../assets/Careers-Hero-Sec/ThePowerOfData&AI.png';

/**
 * Individual Feature Card component
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ title, image, className = "" }) => {
  return (
    <div className={`relative flex-shrink-0 w-72 md:w-80 h-52 md:h-60 rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 ${className}`}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Label Content */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
        <div className="bg-white/95 backdrop-blur-sm px-6 py-2 rounded-lg shadow-md border border-gray-100">
          <p className="text-[#333] font-semibold text-sm md:text-base text-center whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Floating decorative shapes (Internal to CareersSection)
 * Enhanced with more variety and density
 */
const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-25">
      {/* Top Left Area */}
      <div className="absolute top-10 left-[8%] animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>
      <div className="absolute top-48 left-[12%] animate-float-delayed">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      </div>
      <div className="absolute top-24 left-[22%] animate-float">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#006FF6">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      
      {/* Top Center Area */}
      <div className="absolute top-12 left-[48%] animate-float-delayed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
      <div className="absolute top-36 left-[35%] animate-float">
        <svg width="32" height="8" viewBox="0 0 40 10" fill="none" stroke="#006FF6" strokeWidth="1">
          <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" />
        </svg>
      </div>

      {/* Top Right Area */}
      <div className="absolute top-16 right-[12%] animate-float-delayed">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <path d="M4 12L8 8L12 12L16 8L20 12" />
        </svg>
      </div>
      <div className="absolute top-44 right-[8%] animate-float">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <path d="M12 4L4 20H20L12 4Z" />
        </svg>
      </div>
      <div className="absolute top-28 right-[25%] animate-float-delayed">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="#006FF6">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
      </div>

      {/* Mid Left Area */}
      <div className="absolute top-[320px] left-[15%] animate-float">
        <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="#006FF6" strokeWidth="1.5" className="rotate-12">
          <path d="M2 12L14 2L26 12" />
        </svg>
      </div>
      <div className="absolute top-[280px] left-[5%] animate-float-delayed">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#006FF6] rounded-full" />
          ))}
        </div>
      </div>

      {/* Mid Right Area */}
      <div className="absolute top-[340px] right-[15%] animate-float-delayed">
         <svg width="24" height="12" viewBox="0 0 28 14" fill="none" stroke="#006FF6" strokeWidth="1.5" className="-rotate-12">
          <path d="M2 12L14 2L26 12" />
        </svg>
      </div>
      <div className="absolute top-[400px] right-[25%] animate-float">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="2">
          <path d="M12 2v20M2 12h20" className="rotate-45 origin-center" />
        </svg>
      </div>

      {/* Bottom Area */}
      <div className="absolute bottom-10 left-[30%] animate-float">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="8" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-[40%] animate-float-delayed">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FF6" strokeWidth="1">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      title: "Insights From Complex Data",
      image: careerhero2,
    },
    {
      title: "The Power Of Data & AI",
      image: careerhero5,
    },
    {
      title: "Purposeful Innovation",
      image: careerhero3,
    },
    {
      title: "Scientific Discovery",
      image: careerhero4
    },
    {
      title: "Improved Outcomes",
      image: careerhero1
    }
  ];

  // We duplicate the array multiple times to ensure a smooth, long-running loop
  const displayCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.8; // Pixels per frame

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to middle set of cards once we've scrolled past the first set
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3 * 2) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Initialize position to the middle set for smoother looping
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="mt-16 relative w-full py-8 md:py-12 bg-white flex flex-col items-center overflow-hidden">
      {/* Background Decorative Shapes */}
      <BackgroundDecorations />

      {/* Header Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center mb-10">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-[#006FF6]/10 text-[#006FF6] px-6 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase border border-[#006FF6]/20">
            Careers @ Fipsar
          </span>
        </div>

        {/* Main Title */}
        <h1 className="capitalize text-[#006FF6] font-serif font-bold text-4xl md:text-5xl lg:text-5xl leading-[1.2] mb-6">
          Join a team that's redefining <br className="hidden md:block" />
          the future of life sciences
        </h1>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-1">
            through the power of data, AI and purposeful innovation.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At Fipsar, we empower organizations to accelerate
          </p>
        </div>
      </div>

      {/* Auto-Slider Container */}
      <div 
        className="relative z-10 w-full overflow-x-hidden pb-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollContainerRef}
          className="flex flex-nowrap gap-6 md:gap-8 px-6 no-scrollbar overflow-x-auto"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayCards.map((card, index) => (
            <FeatureCard 
              key={`${index}-${card.title}`} 
              title={card.title} 
              image={card.image} 
            />
          ))}
        </div>
      </div>

      {/* Custom Styles for hiding scrollbar but allowing scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
};

export default HeroSection;
