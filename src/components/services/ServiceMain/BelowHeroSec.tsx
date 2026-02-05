import React from 'react';

const BelowHeroSec: React.FC = () => {
  const words = ["Platforms", "Infrastructure", "Strategies", "Ecosystems"];
  // Double the words array for a seamless infinite marquee loop
  const marqueeWords = [...words, ...words];

    const listItems = [
    "Discover",
    "Design",
    "Build",
    "Optimize",
    "Support",
    "Scale"
  ];

  // Component for the blue hollow circle list marker
  const BlueCircleIcon = () => (
    <svg 
      className="w-[9px] h-[9px] mr-4 shrink-0 mt-[7px] md:mt-[10px]" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#006FF6" 
      strokeWidth="5"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );

  /**
   * Top-Left decorative bar pattern.
   * Animation: Vertical "flow" from top to bottom.
   */
  const TopLeftBars = () => (
    <div className="hidden lg:block absolute top-0 left-0 w-[240px] h-[180px] pointer-events-none select-none">
      <div className="flex gap-[12px] h-full pl-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <div 
            key={i} 
            className="w-[3px] animate-flow-down" 
            style={{ 
              height: `${100 - (i * 6.5)}%`,
              backgroundColor: 'rgba(0, 111, 246, 0.05)'
            }}
          />
        ))}
      </div>
    </div>
  );

  /**
   * Bottom-Right decorative bar pattern.
   * Animation: Vertical "flow" from bottom to top.
   */
  const BottomRightBars = () => (
    <div className="hidden lg:block absolute bottom-0 right-0 w-[240px] h-[200px] pointer-events-none select-none">
      <div className="flex flex-row-reverse gap-[12px] h-full items-end">
        {Array.from({ length: 16 }).map((_, i) => (
          <div 
            key={i} 
            className="w-[3px] animate-flow-up" 
            style={{ 
              height: `${100 - (i * 5.5)}%`,
              backgroundColor: 'rgba(0, 111, 246, 0.05)'
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
<>



      <style>{`
         @keyframes vertical-marquee {
          /* 4 words, each gets 25% of the loop. 
             We pause for 20% and move for 5%.
             This ensures every 'slide' has the exact same timing/speed. */
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-12.5%); }
          50%, 70% { transform: translateY(-25%); }
          75%, 95% { transform: translateY(-37.5%); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          /* Using linear timing function here ensures the movement segments 
             defined in keyframes aren't skewed by global easing. */
          animation: vertical-marquee 12s linear infinite;
        }
        @keyframes flowDownContinuous {
          from { background-position: 0 0; }
          to { background-position: 0 400px; }
        }
        @keyframes flowUpContinuous {
          from { background-position: 0 400px; }
          to { background-position: 0 0; }
        }
        .animate-flow-down, .animate-flow-up {
          background-image: linear-gradient(
            to bottom,
            rgba(0, 111, 246, 0) 0%,
            rgba(0, 111, 246, 0.2) 40%,
            rgba(0, 111, 246, 1) 50%,
            rgba(0, 111, 246, 0.2) 60%,
            rgba(0, 111, 246, 0) 100%
          );
          background-size: 100% 400px;
          background-repeat: repeat;
          will-change: background-position;
        }
        .animate-flow-down {
          animation: flowDownContinuous 6s linear infinite;
        }
        .animate-flow-up {
          animation: flowUpContinuous 6s linear infinite;
        }
      `}</style>

      <div className="w-full bg-[#F5F5F5] pt-6 pb-6 px-6 md:px-12 lg:px-12 border-b border-gray-100 flex flex-col items-center text-center font-sans">
        <div className="max-w-6xl w-full">
          <h2 className="text-gray-800 text-lg md:text-2xl lg:text-[22px] font-medium tracking-tight leading-[1.2]">
            <span className="inline-block align-baseline">Our services are designed to modernize your</span>{' '}
            <span className="inline-flex flex-col h-[1.2em] overflow-hidden align-baseline relative min-w-[140px] md:min-w-[210px] text-[#006FF6] font-bold">
              <span className="flex flex-col animate-vertical-marquee w-full">
                {marqueeWords.map((word, i) => (
                  <span 
                    key={i} 
                    className="h-[1.2em] flex items-center justify-start whitespace-nowrap"
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h2>
        </div>
      </div>
    {/* <section className="w-full bg-white overflow-hidden relative min-h-[500px] flex items-center"> */}
    <section className="w-full bg-white overflow-hidden relative  flex items-center">


      {/* Main Container */}
      <div className="container mx-auto relative px-6 md:px-12 lg:px-16 py-12 md:py-20 flex items-center">
        
        {/* Decorative Corner Elements */}
        <TopLeftBars />
        <BottomRightBars />

        {/* 
            Main Content Grid: 
            Balanced layout that matches the provided design reference.
        */}
        <div className="relative z-10 w-full max-w-[920px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/* Left Content Column */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg md:text-[22px] font-normal text-gray-700 tracking-tight leading-none">
                What can be done for your <span className="text-[#006FF6] font-medium">business</span>?
              </p>
              
              <h1 className="text-3xl md:text-5xl lg:text-[48px] font-normal text-[#006FF6] leading-[1.1] tracking-tight">
                Delivering End-to-End <br className="hidden md:block" /> Data & AI Execution
              </h1>
            </div>

            <p className="text-[#424242] text-sm md:text-base lg:text-[17px] leading-relaxed max-w-[460px] font-medium ">
              From strategy and architecture to implementation and operations, 
              we provide complete support across your data and analytics lifecycle.
            </p>
          </div>

          {/* Right List Column */}
          <div className="flex-shrink-0 lg:pt-2">
            <ul className="space-y-3 md:space-y-5">
              {listItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start text-base md:text-xl lg:text-[22px] font-normal text-gray-900 group cursor-default"
                >
                  <BlueCircleIcon />
                  <span className="leading-none transition-colors duration-200 hover:text-[#006FF6]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>

    </>
  );
};

export default BelowHeroSec;