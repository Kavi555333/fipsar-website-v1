
import React, { useState, useEffect, useRef } from 'react';

/**
 * FipsarHero Component
 * - Left: High-impact typography and service phases.
 * - Right: Physical 3D Card Stack with smooth cycling.
 * 
 * Design: Ultra-compact refined version. Further reduced right-side 
 * footprint and tightened layout to maximize screen efficiency.
 */
export const SerivceSection: React.FC = () => {
  const servicePhases = ["Discover", "Design", "Build", "Optimize", "Support", "Scale"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const SLIDE_DURATION = 6000;
  const PROGRESS_INTERVAL = 50;

  const slides = [
    {
      id: 0,
      prefix: "Fipsar delivers",
      content: "compliance-ready data, analytics, and AI services purpose-built for",
      showPills: true,
      pills: ["biopharma", "specialty pharma", "healthcare organizations"]
    },
    {
      id: 1,
      prefix: "Modernize & Scale",
      content: "Our services help regulated teams modernize platforms, improve decision-making, and scale innovation—without compromising data integrity.",
      showPills: false
    },
    {
      id: 2,
      prefix: "Full Lifecycle",
      content: "From strategy to execution and operations, we support the entire data and analytics lifecycle.",
      showPills: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100, 100));
    }, PROGRESS_INTERVAL);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 700);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stackRef.current || isTransitioning || window.innerWidth < 1024) return;
    const rect = stackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 55;
    const rotateY = (centerX - x) / 55;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const getCardStyle = (index: number) => {
    const total = slides.length;
    const position = (index - currentSlide + total) % total;
    
    if (position === 0) {
      const xOffset = window.innerWidth < 768 ? '25%' : '95%';
      return {
        zIndex: isTransitioning ? 50 : 30,
        transform: isTransitioning 
          ? `translate3d(${xOffset}, -4%, 90px) rotateZ(6deg) rotateY(-8deg) scale(0.97)` 
          : `translate3d(0, 0, 0) scale(1)`,
        opacity: isTransitioning ? 0 : 1,
        transition: isTransitioning 
          ? 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in 0.1s' 
          : 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
      };
    }
    
    if (position === 1) {
      return {
        zIndex: 25,
        transform: isTransitioning 
          ? `translate3d(0, 0, 0) scale(1) rotateZ(0deg)` 
          : `translate3d(16px, 16px, -35px) scale(0.97) rotateZ(1.2deg)`,
        opacity: 1,
        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
      };
    }

    return {
      zIndex: 10,
      transform: isTransitioning
        ? `translate3d(16px, 16px, -35px) scale(0.97) rotateZ(1.2deg)`
        : `translate3d(32px, 32px, -70px) scale(0.94) rotateZ(2.4deg)`,
      opacity: isTransitioning ? 1 : 0.4,
      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
    };
  };

  return (
    <section className="max-w-6xl mt-24 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center py-2 lg:py-4 px-4 select-none overflow-hidden lg:overflow-visible">
      {/* Left Content Column */}
      <div className="flex flex-col space-y-3 lg:space-y-5 animate-in fade-in slide-in-from-left duration-1000 ease-out">
        <div className="flex items-center space-x-2 group cursor-default">
          <div className="p-1 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 group-hover:rotate-90 transition-transform duration-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
            </svg>
          </div>
          <span className="text-gray-500 font-bold tracking-widest uppercase text-[9px] lg:text-[11px]">Services</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
          Intelligent <span className="text-blue-600">Data, <br className="hidden md:block" /> Analytics & AI Services</span> <br />
          for Life Sciences
        </h1>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-gray-400 font-medium text-[11px] lg:text-[13px] border-t border-gray-100 pt-3">
          {servicePhases.map((phase, index) => (
            <React.Fragment key={phase}>
              <span className="hover:text-blue-600 transition-colors cursor-default duration-300">{phase}</span>
              {index < servicePhases.length - 1 && (
                <span className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-gray-200 rounded-full" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Content Column: Refined Smaller High-Fidelity Stack */}
      <div 
        className="relative flex justify-center lg:justify-center perspective-2500 h-[360px] md:h-[400px] lg:h-[420px] items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={stackRef}
          style={{ 
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: 'transform 0.4s ease-out',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
          className="relative w-full max-w-[340px] h-full"
        >
          {slides.map((slide, idx) => {
            const cardStyle = getCardStyle(idx);
            
            return (
              <div
                key={slide.id}
                style={cardStyle as React.CSSProperties}
                className="absolute inset-0 bg-gradient-to-br from-[#0047FF] via-[#0066FF] to-[#3B82F6] rounded-[1.5rem] p-5 lg:p-7 shadow-[0_15px_35px_-8px_rgba(0,102,255,0.25)] overflow-hidden flex flex-col justify-between border border-white/10 backface-hidden will-change-transform"
              >
                {/* Visual Polish */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/30 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                {/* Card Content Area */}
                <div className="relative z-10 space-y-3 lg:space-y-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-[1px] bg-blue-300/60"></div>
                    <p className="text-blue-100 text-[8px] font-bold tracking-[0.2em] uppercase">
                      {slide.prefix}
                    </p>
                  </div>
                  
                  <p className="text-white text-base lg:text-xl font-normal leading-[1.25] tracking-tight">
                    {slide.content}
                  </p>

                  {slide.showPills && (
                    <div className="flex flex-col items-start space-y-2 lg:space-y-2.5 pt-0.5">
                      {slide.pills?.map((pill, _pIdx) => (
                        <div key={pill} className="flex items-center group/pill">
                          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-1.5 text-white text-[10px] lg:text-[11px] font-semibold shadow-lg transition-all duration-300 group-hover/pill:bg-white/20">
                            {pill}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Pagination */}
                <div className="relative z-20 flex items-center space-x-2.5 pt-3">
                  {slides.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className="group relative h-3 flex items-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (dotIdx !== currentSlide && !isTransitioning) {
                          setIsTransitioning(true);
                          setProgress(0);
                          setTimeout(() => {
                            setCurrentSlide(dotIdx);
                            setIsTransitioning(false);
                          }, 700);
                        }
                      }}
                    >
                      <div className={`h-[2px] transition-all duration-500 rounded-full bg-white/20 ${
                        currentSlide === dotIdx ? 'w-10 lg:w-12' : 'w-2.5 lg:w-3 hover:bg-white/50'
                      }`}>
                        {currentSlide === dotIdx && (
                          <div 
                            className="h-full bg-white rounded-full transition-none" 
                            style={{ width: `${progress}%` }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .perspective-2500 {
          perspective: 2500px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        body {
          overflow: hidden;
        }
        @media (max-height: 600px) {
          body { overflow-y: auto; }
        }
      `}</style>
    </section>
  );
};
