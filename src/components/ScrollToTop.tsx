import React, { useState, useEffect } from 'react';
import  {ChevronUp}  from 'lucide-react';

interface ScrollToTopProps {
  position?: 'left' | 'right';
  threshold?: number;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ 
  position = 'left', 
  threshold = 100 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate visibility
      setIsVisible(scrollTop > threshold);

      // Calculate progress percentage (0 to 100)
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', calculateScroll);
    // Initial calculation on mount
    calculateScroll();
    
    return () => {
      window.removeEventListener('scroll', calculateScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Configuration
  const size = 52; // Width/Height of the button
  const strokeWidth = 3; // Thickness of the progress ring
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const positionClasses = position === 'left' 
    ? 'left-6 bottom-6' 
    : 'right-6 bottom-6';

  return (
    <div className={`fixed z-50 ${positionClasses} transition-all duration-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="relative flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        style={{ width: size, height: size }}
        aria-label="Scroll to top"
      >
        {/* SVG Progress Ring */}
        <svg 
          className="absolute top-0 left-0 transform -rotate-90 pointer-events-none" 
          width={size} 
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e2e8f0" // slate-200
            strokeWidth={strokeWidth}
          />
          {/* Progress Indicator */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            // stroke="#4f46e5" // indigo-600
            stroke="#006FF6" // indigo-600
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Icon */}
        <ChevronUp 
          className="w-6 h-6 text-[#006FF6] group-hover:-translate-y-0.5 transition-transform duration-300" 
          strokeWidth={2.5}
        />

        {/* <b className="">^</b> */}
      </button>
    </div>
  );
};