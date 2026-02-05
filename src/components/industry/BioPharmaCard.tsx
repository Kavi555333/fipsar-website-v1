import React, { useMemo } from 'react';
import { Scissors, BarChart3, LayoutGrid, CheckCircle2 } from 'lucide-react';

// --- Types ---
interface SolutionItem {
  id: number;
  text: string;
  icon: React.ElementType;
}

// --- Components ---

/**
 * BackgroundClouds
 * Renders the cloud shapes seen in the top-left of the reference image.
 */
const BackgroundClouds: React.FC = () => (
  <svg
    className="absolute top-8 left-8 w-48 h-32 md:w-64 md:h-40 opacity-30 pointer-events-none"
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Large Cloud */}
    <path
      d="M40 80C40 96.5685 53.4315 110 70 110H140C162.091 110 180 92.0914 180 70C180 48.5 163 31 142 30C140 15 125 5 110 5C90 5 75 20 72 35C54.3269 35 40 49.3269 40 67V80Z"
      fill="#87CEEB"
    />
    {/* Small Cloud floating above */}
    <path
      d="M120 40C120 45 124 50 130 50H150C155 50 160 45 160 40C160 35 155 30 150 30C148 25 142 25 138 25C132 25 128 28 126 32C122 32 120 36 120 40Z"
      fill="#87CEEB"
      transform="translate(-30, -20) scale(0.6)"
    />
  </svg>
);

/**
 * BackgroundCityscape
 * Renders the city skyline seen in the bottom-right of the reference image.
 * Uses semi-transparent blocks to mimic buildings.
 */
const BackgroundCityscape: React.FC = () => (
  <svg
    className="absolute bottom-0 right-0 w-full h-64 pointer-events-none opacity-20"
    viewBox="0 0 800 300"
    preserveAspectRatio="xMaxYMax meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#005f9e">
      {/* Far right tall building */}
      <rect x="750" y="100" width="40" height="200" />
      <rect x="750" y="90" width="5" height="10" /> {/* Antenna */}
      
      {/* Building next to it */}
      <rect x="700" y="150" width="40" height="150" />
      <rect x="710" y="140" width="2" height="10" />
      
      {/* Cluster */}
      <rect x="640" y="180" width="50" height="120" />
      <rect x="600" y="200" width="30" height="100" />
      
      {/* Main wide building with window grid pattern implied */}
      <rect x="480" y="160" width="80" height="140" />
      <rect x="520" y="130" width="2" height="30" /> {/* Spire */}
      
      {/* Left side smaller buildings fading out */}
      <rect x="420" y="220" width="40" height="80" />
      <rect x="380" y="240" width="30" height="60" />
      
      {/* Window Details (small rects to mimic the grid look) */}
      <g fill="#006FF6" opacity="0.6">
        <rect x="485" y="170" width="5" height="5" />
        <rect x="495" y="170" width="5" height="5" />
        <rect x="505" y="170" width="5" height="5" />
        <rect x="515" y="170" width="5" height="5" />
        <rect x="485" y="180" width="5" height="5" />
        <rect x="495" y="180" width="5" height="5" />
        <rect x="505" y="180" width="5" height="5" />
        <rect x="515" y="180" width="5" height="5" />
        
        <rect x="755" y="110" width="4" height="4" />
        <rect x="765" y="110" width="4" height="4" />
        <rect x="755" y="120" width="4" height="4" />
        <rect x="765" y="120" width="4" height="4" />
      </g>
    </g>
  </svg>
);

const BioPharmaCard: React.FC = () => {
  // Define content items matching the image context
  const items: SolutionItem[] = useMemo(() => [
    { id: 1, text: " Reduce trial delays", icon: CheckCircle2 },
    { id: 2, text: " Improve compliance readiness", icon: Scissors },
    { id: 3, text: "Increase reporting accuracy", icon: BarChart3 },
    { id: 4, text: " Modernize legacy systems", icon: LayoutGrid },
    { id: 1, text: " Introduce AI safely", icon: CheckCircle2 },
    { id: 2, text: "Eliminate data silos", icon: Scissors },
    { id: 3, text: " Scale globally", icon: BarChart3 },
    { id: 4, text: "Reduce operational cost", icon: LayoutGrid },
  ], []);

  // Use 2 sets for seamless -50% scrolling loop
  const scrollItems = [...items, ...items];

  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      {/* Embedded CSS for self-contained component */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Card Container */}
      <div 
        className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
        style={{ backgroundColor: '#006FF6' }}
      >
        {/* Background Decorative Elements */}
        <BackgroundClouds />
        <BackgroundCityscape />

        {/* Content Wrapper */}
        <div className="relative z-10 pt-12 pb-10 md:pt-14 md:pb-12 px-4 md:px-12 flex flex-col items-center text-center">
          
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl  font-bold text-white leading-tight mb-4 drop-shadow-sm tracking-wide">
            How We Solve Bio - Pharma<br />
            Business Problems
          </h1>

          {/* Subheader */}
          <p className="text-white/90 text-sm md:text-lg max-w-2xl font-light leading-relaxed mb-8">
            We partner with organizations across the Life Sciences ecosystem, 
            from drug development to healthcare delivery.
          </p>

          {/* Infinite Auto-Slider */}
          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-scroll hover:pause">
              {scrollItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="mx-3 flex items-center bg-white rounded-full py-4 px-6 shadow-lg select-none whitespace-nowrap transition-transform hover:scale-105 cursor-default"
                >
                  <div className="mr-3 text-[#006FF6]">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="capitalize text-gray-800 text-base md:text-lg font-medium tracking-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Fade Overlay for Cityscape blending */}
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#029ad6] to-transparent opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BioPharmaCard;