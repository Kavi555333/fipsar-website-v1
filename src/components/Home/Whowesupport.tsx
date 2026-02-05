
import React, { useState, useEffect, useRef } from 'react';
import { 
  Megaphone,
  FlaskConical,
  ClipboardCheck,
  ShieldCheck,
  ChevronRight,
  Dna,
  FileUser,
  Heart,
  Accessibility,
  Target
} from 'lucide-react';

import slider1 from '../../assets/whosupport/slider1.avif'
import slider2 from '../../assets/whosupport/slider2.avif'
import slider3 from '../../assets/whosupport/sldier3.avif'
import slider4 from '../../assets/whosupport/slider4.jpg'
import slider5 from '../../assets/whosupport/slider5.jpg'
import slider6 from '../../assets/whosupport/slider6.jpg'
import slider7 from '../../assets/whosupport/slider7.avif'
import slider8 from '../../assets/whosupport/slider8.jpg'
import slider9 from '../../assets/whosupport/slider9.webp'

interface SlideItem {
  title: string;
  image: string;
  icon: React.ReactElement;
}

interface SliderCardProps {
  slides: SlideItem[];
  autoSlideInterval?: number;
  externalActiveSlide?: number;
  onSlideChange?: (index: number) => void;
  showBottomNav?: boolean;
  variant?: 'standard' | 'glass-indicators';
}

const SliderCard: React.FC<SliderCardProps> = ({ 
  slides, 
  autoSlideInterval = 5000, 
  externalActiveSlide, 
  onSlideChange,
  showBottomNav = true,
  variant = 'standard'
}) => {
  const [internalActiveSlide, setInternalActiveSlide] = useState(0);
  const [_progress, setProgress] = useState(0);
  const autoSlideRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  
  const activeSlide = externalActiveSlide !== undefined ? externalActiveSlide : internalActiveSlide;

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = window.setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      if (onSlideChange) onSlideChange(nextSlide);
      else setInternalActiveSlide(nextSlide);
      setProgress(0);
    }, autoSlideInterval);

    const step = 100 / (autoSlideInterval / 100);
    progressRef.current = window.setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 100);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, activeSlide]);

  const handleManualSlide = (index: number) => {
    if (onSlideChange) onSlideChange(index);
    else setInternalActiveSlide(index);
    setProgress(0);
    startAutoSlide();
  };

  return (
    <div className="relative group overflow-hidden rounded-[2.5rem] h-[360px] shadow-2xl border border-white/50 bg-white w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          {variant === 'standard' && (
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
          )}
        </div>
      ))}
      
      {/* Progress Bars */}
      {/* <div className="absolute top-0 left-0 right-0 z-20 flex gap-2 p-6">
        {slides.map((_, idx) => (
          <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#006FF6] transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(0,111,246,0.5)]"
              style={{ width: activeSlide === idx ? `${progress}%` : activeSlide > idx ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div> */}

      {/* Title */}
      <div className={`absolute z-10 transition-all duration-500 ${variant === 'glass-indicators' ? 'top-10 left-8' : 'bottom-16 left-8 right-8'}`}>
        <h3 className="text-white text-2xl font-medium tracking-tight leading-tight drop-shadow-lg">
          {slides[activeSlide].title}
        </h3>
      </div>

      {/* Navigation */}
      {showBottomNav && (
        variant === 'glass-indicators' ? (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
            {slides.map((slide, idx) => (
              <button 
                key={idx}
                onClick={() => handleManualSlide(idx)}
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 transform hover:scale-105
                  ${activeSlide === idx 
                    ? 'bg-white text-[#006FF6] shadow-2xl ring-4 ring-white/20' 
                    : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/50'}`}
              >
                {React.cloneElement(slide.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
              </button>
            ))}
          </div>
        ) : (
          <div className="absolute bottom-5 left-8 right-8 flex items-center justify-between z-10">
            <div className="flex space-x-2">
              {slides.map((slide, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleManualSlide(idx)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500
                    ${activeSlide === idx 
                      ? 'bg-[#006FF6] text-white shadow-lg shadow-[#006FF6]/40 ring-4 ring-[#006FF6]/20' 
                      : 'bg-white/10 backdrop-blur-xl text-white/70 hover:bg-white/20 border border-white/20'}`}
                >
                  {React.cloneElement(slide.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
                </button>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export const Whowesupport: React.FC = () => {
  const [rightActiveSlide, setRightActiveSlide] = useState(0);

  const leftSliderContent: SlideItem[] = [
    { title: "Patient Services", image: slider1, icon: <Accessibility /> },
    { title: "Commercial & Sales Operations", image: slider2, icon: <Target /> },
    { title: "Marketing & Field Engagement", image: slider3, icon: <Megaphone /> },
    { title: "Clinical Operations", image: slider4, icon: <FlaskConical /> },
  ];

  const rightSliderContent: SlideItem[] = [
    { title: "Biopharma & Specialty Pharma", image: slider5, icon: <Dna /> },
    { title: "CROs", image: slider6, icon: <ClipboardCheck /> },
    { title: "Medical Affairs", image: slider7, icon: <FileUser /> },
    { title: "Regulatory & Safety Teams", image: slider8, icon: <ShieldCheck /> },
    { title: "Healthcare Providers", image: slider9, icon: <Heart /> },
  ];

  const rightEcosystemIcons = [
    { icon: <Dna />, id: 0 },
    { icon: <ClipboardCheck />, id: 1 },
    { icon: <FileUser />, id: 2 },
    { icon: <ShieldCheck />, id: 3 },
    { icon: <Heart />, id: 4 }
  ];

  return (
    <section className="relative bg-[#F5F5F5] py-12 px-6 overflow-hidden w-full flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006FF6]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#006FF6]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-10">
          <p className="text-[#006FF6] font-bold text-md tracking-[0.2em] uppercase mb-4">WHO WE SUPPORT</p>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Built for the Life Sciences Value Chain 
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            <p className="text-gray-800 text-lg font-medium leading-relaxed max-w-lg">
              We support regulated life sciences organizations across critical operational functions.
            </p>
            <SliderCard 
              slides={leftSliderContent} 
              autoSlideInterval={5000} 
              variant="glass-indicators" 
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-5">
              <h2 className="text-[#006FF6] text-xl md:text-2xl font-normal tracking-tight">Life Sciences Ecosystem</h2>
              <div className="flex items-center space-x-5">
                {rightEcosystemIcons.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setRightActiveSlide(idx)}
                    className={`transition-all duration-300 transform hover:scale-125 focus:outline-none ${
                      rightActiveSlide === idx ? 'text-[#006FF6] scale-110' : 'text-gray-300 hover:text-[#0058c4]'
                    }`}
                    aria-label={`View slide ${idx + 1}`}
                  >
                    {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                  </button>
                ))}
              </div>
            </div>

            <SliderCard 
              slides={rightSliderContent} 
              autoSlideInterval={5500}
              externalActiveSlide={rightActiveSlide}
              onSlideChange={setRightActiveSlide}
              showBottomNav={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whowesupport;
