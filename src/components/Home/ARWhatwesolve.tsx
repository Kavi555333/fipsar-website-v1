
import React from 'react';
import { 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  BarChart3, 
  Settings
} from 'lucide-react';

/**
 * Interface for the Solve Card data
 */
interface SolveCardProps {
  icon: React.ReactElement;
  text: string;
}

/**
 * SolveCard Component
 * Precisely matches the card design in the image:
 * - White background, very light border, soft shadow.
 * - Gray thin-stroke icon on the left.
 */
const SolveCard: React.FC<SolveCardProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center bg-white px-6 py-6 md:px-8 md:py-6 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex-shrink-0 w-[320px] md:w-[440px] mx-3 md:mx-4 group cursor-pointer hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-500">
      <div className="flex-shrink-0 text-gray-400 mr-5 group-hover:text-[#3b82f6] transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.1 })}
      </div>
      <div className="text-[15px] md:text-[17px] text-[#4b5563] font-normal leading-tight tracking-tight whitespace-normal">
        {text}
      </div>
    </div>
  );
};

/**
 * WhatWeSolveSection Component
 * Refined version with reduced spacing:
 * - Tighter vertical padding on the section.
 * - Reduced gap between title and separator line.
 * - Reduced gap between separator line and cards.
 */
const ARWhatwesolve: React.FC = () => {
  const items = [
    {
      icon: <Database />,
      text: "Complex data ecosystem challenges"
    },
    {
      icon: <ShieldCheck />,
      text: "Regulatory compliance and controls"
    },
    {
      icon: <Cpu />,
      text: "AI adoption in pharma workflows"
    },
    {
      icon: <Layers />,
      text: "Data integration & modernization"
    },
    {
      icon: <BarChart3 />,
      text: "Analytics visibility & performance issues"
    },
    {
      icon: <Settings />,
      text: "Scalable operations & governance"
    }
  ];

  // Tripling items for a truly seamless infinite scroll experience
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="relative bg-white py-12 md:py-16 w-full overflow-hidden">
      {/* 
        Decorative Background Element:
        A subtle geometric shape on the right side.
      */}
      {/* <div className="absolute top-0 right-0 w-[45%] h-full opacity-[0.02] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-blue-600 fill-current">
          <path d="M100 0 L0 0 L100 100 Z" />
        </svg>
      </div> */}

      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3)); }
          }
          .marquee-wrapper {
            display: flex;
            width: fit-content;
            animation: marquee-scroll 40s linear infinite;
          }
          .marquee-container:hover .marquee-wrapper {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="relative z-10 w-full">
        {/* Header Section - Tightened */}
        <div className="text-center">
          <h2 className="text-[#3b82f6] text-3xl md:text-[42px] font-medium mb-6 md:mb-8 tracking-tight">
            What We Solve
          </h2>
          {/* Exact separator line from the image */}
          <div className="w-full h-[1px] bg-gray-300" />
        </div>

        {/* Auto Slider Container - Reduced vertical padding */}
        <div className="relative w-full marquee-container py-8 md:py-12">
          {/* Gradient Masks for edge fading */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Content */}
          <div className="marquee-wrapper">
            {displayItems.map((item, index) => (
              <SolveCard 
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom Line matching the top separator line */}
        <div className="w-full h-[1px] bg-gray-300" />
      </div>
    </section>
  );
};

export default ARWhatwesolve;
