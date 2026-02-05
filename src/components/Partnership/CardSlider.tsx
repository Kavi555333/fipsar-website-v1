
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pone from '../../assets/partnerbenefits/pone.png'
import ptwo from '../../assets/partnerbenefits/ptwo.png'
import pthree from '../../assets/partnerbenefits/pthree.png'
import pfour from '../../assets/partnerbenefits/pfour.png'
import pfive from '../../assets/partnerbenefits/pfive.png'
import psix from '../../assets/partnerbenefits/psix.png'




interface SliderItem {
  id: number;
  text: string;
  imageUrl: string;
  category: string;
}



const PRIMARY_COLOR = "#006FF6";
const SLIDER_ITEMS: SliderItem[] = [
  { id: 1, text: "Scalable, secure  and enterprise-ready solutions", imageUrl:pone , category: "Scalability" },
  { id: 2, text: "Faster integrations with your existing systems", imageUrl: ptwo, category: "Integration" },
  { id: 3, text: "Improved data governance and interoperability", imageUrl: pthree, category: "Governance" },
  { id: 4, text: "Access to advanced AI, analytics  and cloud capabilities", imageUrl: pfour, category: "Advanced AI" },
  { id: 5, text: "Reduced implementation time and total cost of ownership", imageUrl: pfive, category: "Efficiency" },
  { id: 6, text: "Solutions fully tailored to Life Sciences workflows", imageUrl: psix, category: "Life Sciences" }
];


const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDER_ITEMS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? SLIDER_ITEMS.length - 1 : prevIndex - 1);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    if (!isHovered) timerRef.current = window.setInterval(nextSlide, 5000);
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered, nextSlide]);

  const getCardTransform = (index: number) => {
    const total = SLIDER_ITEMS.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isActive = diff === 0;
    const isPrev = diff === -1 || (currentIndex === 0 && index === total - 1);
    const isNext = diff === 1 || (currentIndex === total - 1 && index === 0);

    if (isActive) {
      return "z-30 scale-100 opacity-100 translate-x-0 shadow-xl";
    } else if (isPrev) {
      return "z-10 scale-75 opacity-60 -translate-x-[55%] pointer-events-auto";
    } else if (isNext) {
      return "z-10 scale-75 opacity-60 translate-x-[55%] pointer-events-auto";
    } else {
      return "z-0 scale-50 opacity-0 translate-x-0 pointer-events-none";
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      
    <div className="text-center mb-8 space-y-3">
            <h2 className="text-4xl md:text-4xl font-serif font-black text-slate-900 tracking-tight relative z-10">
              Partner Benefits
            </h2>
        <div className="w-16 h-1 bg-[#006FF6] mx-auto rounded-full mt-4" />
    </div>
      
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden perspective-1000">
        {SLIDER_ITEMS.map((item, index) => {
          const transformClasses = getCardTransform(index);
          const isActive = index === currentIndex;
          return (
            <div key={item.id} onClick={() => !isActive && goToSlide(index)} className={`absolute w-[220px] md:w-[320px] aspect-square transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${transformClasses}`}>
              <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden shadow-lg bg-transparent">
                <div className="w-full h-full relative">
                  <img src={item.imageUrl} alt={item.category} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-black/5' : 'bg-black/25'}`}></div>
                </div>
                <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-[94%] transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="bg-[#f8faff] p-3 md:p-4 rounded-xl shadow-lg border border-white/50">
                    <h3 className="capitalize text-[13px] md:text-sm font-semibold text-slate-800 leading-tight text-left">{item.text}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-40 flex justify-between px-1 md:px-8 pointer-events-none">
        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="pointer-events-auto p-2 rounded-full bg-white shadow-lg transition-all border border-slate-50 group hover:scale-110 active:scale-95" style={{ color: PRIMARY_COLOR }}>
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" strokeWidth={3} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="pointer-events-auto p-2 rounded-full bg-white shadow-lg transition-all border border-slate-50 group hover:scale-110 active:scale-95" style={{ color: PRIMARY_COLOR }}>
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
        </button>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {SLIDER_ITEMS.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)} 
            className={`transition-all duration-300 rounded-full h-1.5 ${index === currentIndex ? 'w-6' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`} 
            style={{ backgroundColor: index === currentIndex ? PRIMARY_COLOR : undefined }} 
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
