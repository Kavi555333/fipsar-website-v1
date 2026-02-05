
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Brain, Link as LinkIcon } from 'lucide-react';


import slider1 from '../../assets/SliderC/sligerbgimg/bannerone.jpeg'
import slider2 from '../../assets/SliderC/sligerbgimg/Home banner 2 bg.jpg.jpeg'
import slider3 from '../../assets/SliderC/sligerbgimg/Home banner 3bg.jpg.jpeg'
import slider5 from '../../assets/SliderC/sligerbgimg/banner5img.jpg.jpeg'
// import slider1 from '../../assets/SliderC/sligerbgimg/bannerone.jpeg'

/**
 * --- Types & Data ---
 */

export interface SlideData {
  id: number;
  title: string;
  titleHighlight?: string; 
  subtitle: string;
  subtitleSide?: string; 
  description: string;
  imageUrl: string;
  theme: 'light' | 'dark'; 
  ctaText: string;
  cta2Text?: string;
  tagline?: string;
  bottomRightTagline?: string; 
  footerTitle?: string; 
  buttonVariant?: 'link' | 'pill' | 'footer' | 'glass';
  layoutVariant?: 'standard' | 'ai-hero';
}

export interface CarouselProps {
  slides?: SlideData[];
  autoPlayInterval?: number;
}

const DEFAULT_SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Transforming Life Sciences Through",
    titleHighlight: "Data, AI & Compliance Excellence",
    subtitle: "INNOVATION",
    description: "With 15+ years of IT excellence, Fipsar empowers biopharma and specialty pharma organizations to unlock the value of complex, regulated data. Our AI-enabled, compliance-ready platforms deliver actionable insights tailored to the unique demands of life sciences.",
    imageUrl: slider1, 
    // imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1920', 
    theme: 'light',
    ctaText: "Explore Solutions",
    cta2Text: "Talk to an Expert",
    tagline: "Precision analytics. Scalable platforms. Trusted outcomes.",
    buttonVariant: 'link',
    layoutVariant: 'standard'
  },
  {
    id: 2,
    title: "Life Sciences Expertise",
    titleHighlight: "That Goes Beyond Technology",
    subtitle: "EXPERTISE",
    subtitleSide: "Built for biopharma. Designed for impact.",
    description: "We understand the unique challenges of biopharma—from commercial and patient services to clinical operations. Our teams align technology, data and governance to support every stage of your lifecycle.",
    imageUrl: slider2,
    theme: 'dark',
    ctaText: "LEARN MORE",
    cta2Text: "GET CONNECTED",
    buttonVariant: 'link',
    layoutVariant: 'standard'
  },
  {
    id: 3,
    title: "Trusted Salesforce & Data",
    titleHighlight: "Partner for Biopharma",
    subtitle: "PARTNERSHIP",
    description: "As certified Salesforce and data analytics specialists, we help biopharma teams implement, optimize and support platforms that drive adoption, performance and long-term value.",
    imageUrl: slider3, 
    theme: 'light',
    ctaText: "Learn More",
    cta2Text: "Get Connected",
    bottomRightTagline: "From strategy to steady-state support.",
    buttonVariant: 'pill',
    layoutVariant: 'standard'
  },
  {
    id: 5,
    title: "Responsible AI.",
    titleHighlight: "Real-world outcomes.",
    subtitle: "AI READINESS",
    subtitleSide: "Advancing AI Readiness in Biopharma",
    description: "We help organizations assess readiness, strengthen data foundations and responsibly adopt AI to automate workflows, enhance insights and accelerate business outcomes—without compromising compliance.",
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1920', 
    theme: 'dark',
    ctaText: "AI INSIGHTS",
    cta2Text: "GET CONNECTED",
    buttonVariant: 'glass',
    layoutVariant: 'ai-hero'
  },
  {
    id: 4,
    title: "Modernize commercial & operational ecosystems.",
    subtitle: "MODERNIZATION",
    description: "From CRM modernization to advanced analytics and automation, we help biopharma leaders build connected, data-driven ecosystems that evolve with their business.",
    imageUrl: slider5, 
    theme: 'dark',
    footerTitle: "CRM Transformation for a Connected Future",
    ctaText: "LEARN MORE",
    cta2Text: "GET CONNECTED",
    buttonVariant: 'footer',
    layoutVariant: 'standard'
  }
];

/**
 * Single Slide Sub-Component
 */
const Slide: React.FC<{ slide: SlideData; active: boolean }> = ({ slide, active }) => {
  const isDark = slide.theme === 'dark';
  const isPill = slide.buttonVariant === 'pill';
  const isFooter = slide.buttonVariant === 'footer';
  const isAiHero = slide.layoutVariant === 'ai-hero';
  
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isDark ? 'bg-slate-950' : 'bg-slate-950'
      } ${active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      {/* Background Image - Forced to fill container */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear`}
        style={{ 
          backgroundImage: isAiHero 
            ? `linear-gradient(to bottom, rgba(37, 99, 235, 0.75), rgba(15, 23, 42, 0.95)), url(${slide.imageUrl})`
            : `url(${slide.imageUrl})`,
          transform: active ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
      </div>

      {/* Main Content Area */}
      <div className={`relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 ${isFooter ? 'pb-32 sm:pb-36 lg:pb-32' : 'pb-12 sm:pb-16'}`}>
        <div className={`w-full max-w-7xl mx-auto transform transition-all duration-700 delay-300 ${
          active ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {isAiHero ? (
            <div className="flex flex-col gap-4 md:gap-8">
              {/* Top Tagline */}
              <div className="text-white text-lg sm:text-2xl md:text-4xl font-light tracking-tight">
                {slide.subtitleSide}
              </div>

              {/* Glass Buttons Row */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="group flex items-center gap-3 px-5 py-2.5 bg-white/15 backdrop-blur-xl border border-white/25 hover:bg-white/25 rounded-lg text-white font-bold text-xs sm:text-sm tracking-widest transition-all active:scale-95 uppercase shadow-lg">
                  <span>{slide.ctaText}</span>
                  <Brain className="w-4 h-4" />
                </button>
                <button className="group flex items-center gap-3 px-5 py-2.5 bg-white/15 backdrop-blur-xl border border-white/25 hover:bg-white/25 rounded-lg text-white font-bold text-xs sm:text-sm tracking-widest transition-all active:scale-95 uppercase shadow-lg">
                  <span>{slide.cta2Text}</span>
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Huge Headline */}
              <div className="mt-4 md:mt-8">
                <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-normal text-white leading-none tracking-tighter">
                  {slide.title}
                  {slide.titleHighlight && (
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl ml-0 md:ml-4 font-light text-white/80 block md:inline mt-2 md:mt-0">
                      {slide.titleHighlight}
                    </span>
                  )}
                </h2>
              </div>

              {/* Bottom Description */}
              <div className="max-w-3xl">
                 <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-bold">
                  {slide.description}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 mb-4 md:mb-10">
                <div className="max-w-4xl">
                  <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-normal ${isDark ? 'text-white' : 'text-slate-900'} leading-tight tracking-tight`}>
                    {slide.title}
                    {slide.titleHighlight && (
                      <span className={`block font-semibold mt-1 md:mt-3 ${isDark ? 'text-white' : 'text-blue-600'}`}>
                        {slide.titleHighlight}
                      </span>
                    )}
                  </h2>
                </div>
                
                {slide.subtitleSide && (
                  <div className={`text-xs sm:text-base md:text-xl lg:text-2xl font-light ${isDark ? 'text-white/70' : 'text-slate-600'} max-w-[200px] sm:max-w-xs md:text-right italic`}>
                    {slide.subtitleSide}
                  </div>
                )}
              </div>

              <p className={`text-[13px] sm:text-sm md:text-lg lg:text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'} mb-6 md:mb-12 leading-relaxed max-w-3xl font-bold line-clamp-4 md:line-clamp-none`}>
                {slide.description}
              </p>

              {!isFooter && (
                <div className="flex flex-wrap items-center gap-3 md:gap-8 mb-6 md:mb-10">
                  {isPill ? (
                    <>
                      <button className="px-5 sm:px-12 py-2.5 sm:py-5 bg-[#00AEEF] text-white rounded-full font-bold text-xs sm:text-base lg:text-lg hover:bg-[#0096ce] transition-all shadow-xl active:scale-95 uppercase tracking-wider">
                        {slide.ctaText}
                      </button>
                      {slide.cta2Text && (
                        <button className="px-5 sm:px-12 py-2.5 sm:py-5 bg-[#00AEEF] text-white rounded-full font-bold text-xs sm:text-base lg:text-lg hover:bg-[#0096ce] transition-all shadow-xl active:scale-95 uppercase tracking-wider">
                          {slide.cta2Text}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <button className={`group flex items-center gap-2 md:gap-4 font-bold text-xs sm:text-base lg:text-lg tracking-widest hover:underline transition-all ${isDark ? 'text-white' : 'text-blue-600'}`}>
                        <span className="uppercase">{slide.ctaText}</span>
                        <div className={`p-1 sm:p-2 rounded-full border ${isDark ? 'border-white/40 group-hover:bg-white/20' : 'border-blue-600/40 group-hover:bg-blue-50'} transition-all`}>
                          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
                        </div>
                      </button>
                      {slide.cta2Text && (
                        <button className={`group flex items-center gap-2 md:gap-4 font-bold text-xs sm:text-base lg:text-lg tracking-widest hover:underline transition-all ${isDark ? 'text-white' : 'text-blue-600'}`}>
                          <span className="uppercase">{slide.cta2Text}</span>
                          <div className={`p-1 sm:p-2 rounded-full border ${isDark ? 'border-white/40 group-hover:bg-white/20' : 'border-blue-600/40 group-hover:bg-blue-50'} transition-all`}>
                            <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
                          </div>
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}

              {!isFooter && slide.tagline && (
                <div className={`flex items-center gap-2 font-medium text-[11px] sm:text-base md:text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <span className="text-blue-600 text-sm sm:text-3xl font-bold">#</span>
                  <span className="tracking-wide uppercase sm:normal-case">{slide.tagline}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Specialized Footer Bar for Slide 4 Style */}
      {isFooter && (
        <div className={`absolute bottom-0 left-0 right-0 py-4 sm:py-6 sm:h-28 lg:h-32 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 flex items-center px-6 sm:px-12 lg:px-24 z-20 transform transition-transform duration-700 delay-500 ${active ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 max-w-7xl mx-auto">
            <h3 className="text-white text-sm sm:text-xl md:text-2xl lg:text-3xl font-normal text-center md:text-left">
              {slide.footerTitle}
            </h3>
            <div className="flex items-center gap-2 sm:gap-6">
              <button className="flex-1 md:flex-none px-4 sm:px-10 py-2.5 sm:py-4 bg-[#3A6D75] hover:bg-[#4a8a94] text-white rounded-lg sm:rounded-2xl font-bold text-[9px] sm:text-sm lg:text-base tracking-widest transition-all  active:scale-95 uppercase">
                {slide.ctaText}
              </button>
              {slide.cta2Text && (
                <button className="flex-1 md:flex-none px-4 sm:px-10 py-2.5 sm:py-4 bg-[#3A6D75] hover:bg-[#4a8a94] text-white rounded-lg sm:rounded-2xl font-bold text-[9px] sm:text-sm lg:text-base tracking-widest transition-all  active:scale-95 uppercase">
                  {slide.cta2Text}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Main Carousel Component
 */
const Carousek: React.FC<CarouselProps> = ({ 
  slides = DEFAULT_SLIDES, 
  autoPlayInterval = 8000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
  }, [slides.length, autoPlayInterval]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    if (isAutoPlaying) startTimer();
  }, [slides.length, isAutoPlaying, startTimer]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    if (isAutoPlaying) startTimer();
  }, [slides.length, isAutoPlaying, startTimer]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (isAutoPlaying) startTimer();
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isAutoPlaying, startTimer, stopTimer]);

  return (
    <section 
      className="mt-20 relative w-full h-[calc(100vh-5rem)] overflow-hidden group bg-slate-950 transition-all duration-500"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <Slide 
              key={slide.id} 
              slide={slide} 
              active={index === currentIndex} 
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pointer-events-none z-30">
          <button 
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-xl border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 hidden md:block shadow-2xl"
          >
            <ChevronLeft className="w-6 h-6 " />
          </button>
          <button 
            onClick={handleNext}
            aria-label="Next Slide"
            className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-xl border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90 hidden md:block shadow-2xl"
          >
            <ChevronRight className="w-6 h-6 " />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/30 backdrop-blur-xl px-5 py-3 rounded-full border border-white/10 shadow-2xl">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-white/80 ${
                index === currentIndex 
                  ? 'w-8 bg-blue-400' 
                  : 'w-4 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousek;
