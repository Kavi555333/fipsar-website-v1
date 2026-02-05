import React, { useState, useEffect } from 'react';
import {
  Share2,
  
  BrainCircuit,

  Scale
} from "lucide-react";



// Brand color constant
const BRAND_COLOR = '#006FF6';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

interface SolutionItem {
  id: number;
  text: string;
  icon: React.FC<IconProps>;
}

// --- Icons ---

const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);


const DatabaseIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const BarChartIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);



const SOLUTIONS_DATA: SolutionItem[] = [
  { id: 1, text: "Complex data ecosystem challenges", icon: Share2 },
  { id: 2, text: "Regulatory compliance & controls", icon: ShieldCheckIcon },
  { id: 3, text: "AI adoption in pharma workflows", icon: BrainCircuit },
  { id: 4, text: "Data integration & modernization", icon: DatabaseIcon },
  { id: 5, text: "Analytics visibility & performance issues", icon: BarChartIcon },
  { id: 6, text: "Scalable operations & governance", icon: Scale },
];

const WhatWeSolve: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <style>{`
        /* Elastic Entrance Animation */
        @keyframes elasticPop {
          0% { opacity: 0; transform: scale(0.85) translateY(30px); }
          60% { opacity: 1; transform: scale(1.02) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        /* Continuous rotation for background elements */
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Reverse rotation */
        @keyframes rotate-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-elastic {
          opacity: 0;
          animation: elasticPop 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-spin-slow {
          animation: rotate-slow 60s linear infinite;
        }
        .animate-spin-reverse {
          animation: rotate-slow-reverse 45s linear infinite;
        }
      `}</style>

      {/* Background Geometric Elements (Rings) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0 opacity-[0.05]">
         <div className="absolute w-[800px] h-[800px] border border-dashed border-gray-900 rounded-full animate-spin-slow" />
         <div className="absolute w-[600px] h-[600px] border border-gray-900 rounded-full animate-spin-reverse opacity-50" />
         <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-900 rounded-full animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-10 animate-elastic`} style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            What We Solve
          </h2>
          {/* Animated underline that grows from center */}
          <div className="relative h-1.5 w-24 mx-auto bg-gray-100 rounded-full overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full w-full bg-current rounded-full"
               style={{ 
                 backgroundColor: BRAND_COLOR,
                 transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
                 transformOrigin: 'center',
                 transition: 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s'
               }}
             />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const animationDelay = `${(index + 1) * 150}ms`;
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative flex items-start p-6 rounded-2xl border transition-all duration-500 animate-elastic bg-white`}
                style={{
                  animationDelay,
                  borderColor: isHovered ? BRAND_COLOR : '#f3f4f6',
                  transform: isHovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
                  boxShadow: isHovered 
                    ? `0 20px 40px -10px ${BRAND_COLOR}15` 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-5 relative z-10">
                   <div 
                    className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-500 ease-out"
                    style={{ 
                      backgroundColor: isHovered ? BRAND_COLOR : 'transparent',
                      border: `1px solid ${isHovered ? BRAND_COLOR : '#f3f4f6'}`,
                      boxShadow: isHovered ? `0 10px 20px -5px ${BRAND_COLOR}40` : 'none'
                    }}
                  >
                    <IconComponent 
                      className="w-6 h-6 transition-transform duration-700 ease-in-out"
                      style={{ 
                        color: isHovered ? 'white' : BRAND_COLOR,
                        transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)'
                      }} 
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 relative z-10 pt-1">
                  <p className=" capitalize text-lg font-medium text-gray-800 leading-snug transition-colors duration-300 group-hover:text-gray-900">
                    {item.text}
                  </p>
                  
                  {/* Center-expanding underline on card hover */}
                  <div 
                    className="mt-3 h-0.5 rounded-full transition-all duration-500 ease-out mx-auto md:mx-0"
                    style={{ 
                      backgroundColor: BRAND_COLOR,
                      width: isHovered ? '40%' : '0%',
                      opacity: isHovered ? 1 : 0,
                      transformOrigin: 'left' 
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;