import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import s1 from '../../assets/Services/salesforce/1SALESFORCE.jpg'
import s2 from '../../assets/Services/salesforce/2Salesforcehealth.webp'
import s3 from '../../assets/Services/salesforce/7Salesmanaged.png'
import s4 from '../../assets/Services/salesforce/4Commercial.webp'
import s5 from '../../assets/Services/salesforce/5Process.png'
import s6 from '../../assets/Services/salesforce/6Compliance.webp'
import s7 from '../../assets/Services/salesforce/7Salesmanaged.png'
// import s8 from '../../assets/Services/dataengineering/8datavaliation.jpg'


// --- Types ---
interface SliderItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// --- Data ---
const SLIDE_ITEMS: SliderItem[] = [
  {
    id: 1,
    title: "Salesforce Life Sciences Cloud implementation",
    description: " End-to-end implementation of Salesforce Life Sciences Cloud tailored to biopharma commercial and medical workflows. We configure data models, processes, and automation to support compliant, insight-driven engagement.",
    image: s1
  },
  {
    id: 2,
    title: "Salesforce Health Cloud for patient & care programs",
    description: "Design and deployment of Health Cloud solutions that centralize patient, provider, and care data. These platforms enable coordinated care, personalized journeys, and improved patient outcomes.",
    image: s2
  },
  {
    id: 3,
    title: "CRM data integration & 360° customer view",
    description: " Integration of Salesforce with clinical, commercial, and enterprise systems to create a unified, trusted view of HCPs, patients, and partners for better decision-making.",
    image: s3
  },
  {
    id: 4,
    title: "Commercial analytics & insights on Salesforce",
    description: " Embedded dashboards, KPIs, and analytics within Salesforce provide real-time visibility into sales performance, field effectiveness, and engagement outcomes.",
    image: s4
  },
  {
    id: 5,
    title: "Process automation & workflow orchestration",
    description: " Automation of sales, medical, and service workflows to improve efficiency, reduce manual effort, and ensure consistent execution across teams.",
    image: s5
  },
  {
    id: 6,
    title: "Compliance-ready Salesforce configurations",
    description: " Implementation of role-based access, audit trails, validation controls, and security configurations aligned with HIPAA, GDPR, and GxP expectations.",
    image: s6
  },
  {
    id: 7,
    title: "Salesforce managed services & platform support",
    description: " 24×5 managed services covering monitoring, enhancements, issue resolution, and continuous optimization to keep your Salesforce platform stable, secure, and scalable.",
    image: s7
  },
//   {
//     id: 8,
//     title: "BI user training and enablement",
//     description: "Hands-on training sessions help teams build confidence in using BI tools and interpreting insights effectively. These programs strengthen long-term analytics skills and promote self-sufficiency across the organization.",
//     image: s8
//   },
];

const TECH_ITEMS = [
  { 
    name: "Life Sciences Cloud", 
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L12 6M12 18L12 22M22 12L18 12M6 12L2 12M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="#29B6F6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 9L13.5 12L12 15L10.5 12L12 9Z" fill="#29B6F6" />
        <circle cx="12" cy="12" r="2.5" stroke="#29B6F6" strokeWidth="1"/>
      </svg>
    )
  },
  { 
    name: "Health Cloud", 
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="#8bc34a" />
        <path d="M12 12L6 8M12 12L18 8M12 12L12 18M12 12L6 16M12 12L18 16" stroke="#8bc34a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="8" r="1.5" fill="#8bc34a" fillOpacity="0.4" />
        <circle cx="18" cy="8" r="1.5" fill="#8bc34a" fillOpacity="0.4" />
        <circle cx="12" cy="18" r="1.5" fill="#8bc34a" fillOpacity="0.4" />
      </svg>
    )
  },
  { 
    name: "CRM Analytics", 
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="#FF3621" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 12L12 16L20 12" stroke="#FF3621" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 16L12 20L20 16" stroke="#FF3621" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: " Service Cloud", 
    icon: (
      <div className="flex flex-col items-center">
        <span className="text-2xl font-black text-slate-800 tracking-tighter leading-none">aws</span>
        <svg width="45" height="12" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 2C15 10 35 10 45 2" stroke="#FF9900" strokeWidth="3" strokeLinecap="round"/>
          <path d="M42 2L46 5L48 1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    )
  },
//   { 
//     name: "SQL", 
//     icon: (
//       <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#546E7A" strokeWidth="1.8"/>
//         <path d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6" stroke="#546E7A" strokeWidth="1.8"/>
//         <path d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12" stroke="#546E7A" strokeWidth="1.8"/>
//       </svg>
//     )
//   },
  { 
    name: "API Integration", 
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="18" height="11" rx="2" stroke="#006FF6" strokeWidth="1.5"/>
        <path d="M7 10V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V10" stroke="#006FF6" strokeWidth="1.5"/>
        <circle cx="12" cy="15" r="2" fill="#006FF6"/>
        <text x="12" y="11" fontSize="3" fill="#006FF6" textAnchor="middle" fontWeight="bold">API</text>
      </svg>
    )
  }
];

const BUSINESS_VALUE_POINTS = [
  " Unified view of HCPs and patients",
  "Improved commercial and medical engagement",
  " Faster, insight-driven decision-making",
  " Compliance-ready CRM operation",
  "Scalable platform for growth",
  " Reduced operational overhead through managed services"
];

// --- Sub-component: What We Deliver ---
const WhatWeDeliver: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerTransition = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentItem = SLIDE_ITEMS[currentIndex];

  return (
    <section className="w-full max-w-[1240px] mx-auto bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#006FF6]/5 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#006FF6]/5 via-transparent to-transparent opacity-40" />
      </div>

      <div className="flex flex-col relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[500px]">
          <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              {/* <div className="w-4 h-4 rounded-sm bg-[#006FF6] rotate-45" /> */}
              <h3 className="text-[#424242] font-bold text-[30px]">
                What We <span className="text-[#006FF6]">Deliver</span>
              </h3>
            </div>
            <div className="max-w-xl">
              <div className="space-y-6">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-10 blur-lg' : 'opacity-100 translate-x-0 blur-0'}`} style={{ color: '#006FF6' }}>
                  {currentItem.title}
                </h2>
                <p className={`text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-700 delay-100 ease-out ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
                  {currentItem.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-12">
              <button 
                onClick={() => triggerTransition(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0 || isAnimating} 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 text-[#475569] disabled:opacity-20 hover:bg-[#DCE6F1] transition-all shadow-sm"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => triggerTransition(Math.min(SLIDE_ITEMS.length - 1, currentIndex + 1))}
                disabled={currentIndex === SLIDE_ITEMS.length - 1 || isAnimating} 

                // className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 text-[#475569] disabled:opacity-20 hover:bg-[#DCE6F1] transition-all shadow-sm"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#E2E8F0] text-[#1E293B] disabled:opacity-20 hover:border-[#006FF6] hover:text-[#006FF6] transition-all shadow-sm"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[420px] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,111,246,0.15)] border-[10px] border-white bg-gray-50">

                {SLIDE_ITEMS.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out
                    ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    />
                </div>
                ))}

            </div>
        </div>


        </div>
      </div>
    </section>
  );
};

// --- Sub-component: Tech We Support ---
const TechWeSupport: React.FC = () => {
  const [techIndex, setTechIndex] = useState(0);
  const maxTechVisible = 5;
  const techIsAtEnd = techIndex >= TECH_ITEMS.length - maxTechVisible;

  return (
    <section className="w-full max-w-[1240px] mx-auto flex flex-col gap-8">
      <div className="flex items-end justify-between px-6">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: '#006FF6' }}>Technologies We Support</h2>
        <div className="flex items-center gap-3">
          <button onClick={() => setTechIndex(Math.max(0, techIndex - 1))} disabled={techIndex === 0} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#475569] disabled:opacity-20 hover:bg-[#DCE6F1] transition-all">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button onClick={() => setTechIndex(Math.min(TECH_ITEMS.length - maxTechVisible, techIndex + 1))} disabled={techIsAtEnd} className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#1E293B] disabled:opacity-20 hover:border-[#006FF6] transition-all">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <div className="w-full bg-[#7c838d0f] rounded-[3rem] border border-gray-100 p-12 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="flex items-center transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${techIndex * (100 / maxTechVisible)}%)` }}>
   {TECH_ITEMS.map((tech, idx) => (
  <div
    key={idx}
    className="flex-shrink-0 min-w-[20%] flex justify-center"
  >
    <div
      className="
        group
        flex flex-col items-center justify-center
        gap-3
        w-full max-w-[160px]
        text-center
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className="
          flex items-center justify-center
          h-16 w-16
          transition-all duration-300
          group-hover:scale-110
        "
      >
        {tech.icon}
      </div>

      {/* Title */}
      <span
        className="
          text-lg
          font-bold
          text-slate-700
          transition-colors duration-300
          group-hover:text-[#006FF6]
        "
      >
        {tech.name}
      </span>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

// --- Sub-component: Business Value ---
const BusinessValue: React.FC = () => {
  const originalPoints = BUSINESS_VALUE_POINTS;
  const tripledItems = [...originalPoints, ...originalPoints, ...originalPoints];
  
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1.2);
      else if (window.innerWidth < 1024) setVisibleCount(2.5);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [displayIdx, setDisplayIdx] = useState(originalPoints.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const play = () => {
      setIsTransitioning(true);
      setDisplayIdx(prev => prev + 1);
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayIdx >= originalPoints.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false); 
        setDisplayIdx(originalPoints.length); 
      }, 1000); 
    }
  }, [displayIdx, originalPoints.length]);

  return (
    <section className="w-full max-w-[1240px] mx-auto py-12 flex flex-col items-center">
      {/* <h2 className="text-[36px] md:text-[42px] font-normal tracking-tight text-center mb-16" style={{ color: '#006FF6' }}> */}
      <h2 className="text-[#006FF6] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-16" style={{ color: '#006FF6' }}>
        Business Value
      </h2>

      <div className="w-full relative min-h-[160px] flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          {/* 
            Horizontal Line: 
            Placed inside the scrollable container's parent. 
            Vertical position 'top-[10px]' matches the center of the 'h-5' marker row.
          */}
          <div className="absolute top-[10px] left-0 w-full h-[1.5px] bg-[#006FF6]/20 z-0" />
          
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ 
              transform: `translateX(-${(displayIdx * 100) / tripledItems.length}%)`,
              width: `${(tripledItems.length / visibleCount) * 100}%` 
            }}
          >
            {tripledItems.map((text, idx) => {
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-start flex-shrink-0 px-8"
                  style={{ width: `${100 / tripledItems.length}%` }}
                >
                  {/* 
                    Marker Container: Fixed h-5 (20px). 
                    Center point is 10px. 
                    The circle itself is w-4 h-4 (16px) or w-5 h-5 (20px).
                  */}
                  <div className="relative flex items-center justify-start w-full h-5 mb-8">
                    {/* Circle marker: centered exactly on the horizontal line */}
                    <div 
                      className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#006FF6] bg-white z-10"
                    />
                  </div>
                  
                  <div className="text-left w-full">
                    <p className="capitalize text-[18px] md:text-[20px] leading-[1.3] font-medium text-slate-700">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Container ---
export const SalesforceNew: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 py-24 px-4 md:px-8 bg-white">

    <div className="w-full flex justify-center px-6 sm:px-10 lg:px-16 py-12">
        <div className="max-w-4xl text-center">
            <h3 className="text-[#006FF6] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            Enable Connected, Compliant & Patient-Centric  Commercial Operations
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        We help biopharma and healthcare organizations design, implement, and operate Salesforce Life Sciences and Health Cloud solutions that unify commercial, medical, and patient data. Our Salesforce services enable smarter HCP engagement, personalized patient experiences, and compliant operations across the life sciences value chain.
         {/* We help organizations turn raw data into actionable intelligence through modern dashboards, automated reporting, and analytics platforms. Our BI solutions provide real-time visibility into performance, improve decision-making, and drive business alignment across teams. */}
            </p>
        </div>
    </div>

      <WhatWeDeliver />
      <TechWeSupport />
      <BusinessValue />
    </div>
  );
};
