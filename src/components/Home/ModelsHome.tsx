import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  Settings, 
  Activity, 
  Wand2, 
  ShieldCheck,
//   Zap,
  Users,
//   MousePointer2,
//   Flag,
//   MoveRight,
  Sparkles,
  Dna,
//   Microscope,
//   Stethoscope,
//   FlaskConical,
  Target,
  Trophy
} from 'lucide-react';

import elemtncar from '../../assets/elementcards.png'
import modalthird from '../../assets/modals3rd.jpg'

// Color Palette Constant
const BRAND_COLOR = '#006FF6';
// const ACCENT_COLOR = '#FBBF24'; // Yellow accent
const DECOR_IMAGE = elemtncar;

interface ServiceGridItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  label: string;
  layout: 'grid' | 'overlay' | 'flow';
  imageUrl?: string;
  gridItems?: ServiceGridItem[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    id: 'managed',
    label: 'Managed Services',
    layout: 'grid',
    gridItems: [
      { id: 'm1', title: '24×5 Operations', icon: <Activity className="w-6 h-6" /> },
      { id: 'm2', title: 'Proactive Monitoring', icon: <ShieldCheck className="w-6 h-6" /> },
      { id: 'm3', title: 'Workflow Automation', icon: <Settings className="w-6 h-6" /> },
      { id: 'm4', title: 'AI Enablement', icon: <Wand2 className="w-6 h-6" /> },
    ]
  },
  {
    id: 'consulting',
    label: 'Project Consulting',
    layout: 'flow',
    gridItems: [] 
  },
  {
    id: 'staffing',
    label: 'Staff Augmentation',
    layout: 'overlay',
    imageUrl: modalthird
  }
];

const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [isChanging, setIsChanging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryChange = (index: number) => {
    if (index === activeIndex) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsChanging(false);
    }, 200);
  };

  const handleNext = () => handleCategoryChange((activeIndex + 1) % CATEGORIES.length);
  const handlePrev = () => handleCategoryChange((activeIndex - 1 + CATEGORIES.length) % CATEGORIES.length);

  const currentCategory = CATEGORIES[activeIndex];

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-12 px-4 md:px-8 lg:px-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(${BRAND_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_COLOR} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        <div className="absolute -left-10 top-10 opacity-[0.04] rotate-12 scale-125 animate-[float_25s_infinite_ease-in-out]">
           <Dna size={350} strokeWidth={1} color={BRAND_COLOR} />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-100/20 rounded-full blur-[140px]" />
      </div>






      <div className={`w-full max-w-[1400px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 relative z-10">
          <h2 className="text-[#006FF6] font-black text-4xl md:text-5xl tracking-tighter uppercase mb-2 drop-shadow-sm">
            Engagement Models
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-8 bg-blue-100 hidden md:block" />
            <p className="text-[#000000] text-base md:text-xl font-light tracking-wide">
              Flexible Partnerships That  <span className="text-[#006FF6] font-semibold">Scale</span>
            </p>
            <div className="h-px w-8 bg-blue-100 hidden md:block" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 w-full">
          {/* Left Navigation Controls */}
          <div className="flex items-center gap-8 min-w-fit relative">
            <div className="flex flex-col gap-3 relative z-10">
              <button 
                onClick={handlePrev}
                className="group/nav w-10 h-10 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center bg-white hover:bg-blue-50 transition-colors duration-150 focus:outline-none"
              >
                <ChevronUp size={20} color={BRAND_COLOR} strokeWidth={2.5} className="group-hover/nav:-translate-y-0.5 transition-transform duration-150" />
              </button>
              <button 
                onClick={handleNext}
                className="group/nav w-10 h-10 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center bg-white hover:bg-gray-100 transition-colors duration-150 focus:outline-none"
              >
                <ChevronDown size={20} color="#333" strokeWidth={2.5} className="group-hover/nav:translate-y-0.5 transition-transform duration-150" />
              </button>
            </div>

            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-300" />
              
              {CATEGORIES.map((cat, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div key={cat.id} className="relative flex items-center">
                    <div 
                      className={`absolute -left-[1px] w-[2px] h-8 bg-[#006FF6] transition-transform duration-150 ease-out rounded-full
                      ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
                    />
                    
                    <button
                      onClick={() => handleCategoryChange(idx)}
                      className={`
                        pl-8 pr-10 py-3 rounded-2xl text-xl font-bold transition-all duration-150 text-left min-w-[280px] group/btn relative overflow-hidden
                        ${isActive 
                          ? `text-[#006FF6] bg-white shadow-lg translate-x-2 border border-blue-100` 
                          : 'text-gray-400 bg-transparent hover:text-gray-600 hover:translate-x-1'
                        }
                      `}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {cat.label}
                        {isActive && <Sparkles size={16} className="text-blue-400 animate-pulse" />}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content Panel - Card Display */}
          <div className={`relative w-full lg:flex-1 max-w-4xl min-h-[440px] flex items-stretch transition-all duration-200 ${isChanging ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'}`}>
            <div className="w-full bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl backdrop-blur-sm relative">
              
              {/* Layout 1: Grid */}
              {currentCategory.layout === 'grid' && currentCategory.gridItems && (
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-[1px] bg-gray-100">
                  {currentCategory.gridItems.map((item) => (
                    <div 
                      key={item.id}
                      className="relative flex flex-col items-start justify-center p-12 bg-white hover:bg-blue-50/40 transition-colors duration-150 group/item overflow-hidden"
                    >
                      <div className="mb-6 relative z-10">
                         <div className="w-14 h-14 rounded-2xl bg-[#006FF6]/10 flex items-center justify-center text-[#006FF6] transition-all duration-150 group-hover/item:scale-105 group-hover/item:bg-[#006FF6] group-hover/item:text-white">
                            {item.icon}
                         </div>
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-black tracking-tight leading-tight transition-colors duration-150 text-slate-900 group-hover/item:text-[#006FF6]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="absolute bottom-0 right-[0px] w-[230px] h-[230px] pointer-events-none transition-all duration-1000 group-hover:scale-110 z-0 select-none translate-x-[60%] translate-y-[60%]">
                        <img src={DECOR_IMAGE} alt="" className="w-full h-full object-contain filter saturate-[0.8] animate-[rotate-clockwise_20s_linear_infinite]" />
                      </div>
                        {/* <div className="absolute bottom-0 right-[0px] w-[230px] h-[230px] pointer-events-none transition-all duration-1000 group-hover:scale-110 z-0 select-none translate-x-[60%] translate-y-[60%]">
                            <img 
                            src={DECOR_IMAGE}
                            // src="https://framerusercontent.com/images/UWWLOnjuQ1PeZXHIyBz3JINowSU.png?scale-down-to=512&width=1040&height=1040"
                            alt=""
                            aria-hidden="true"
                            className="w-full h-full object-contain animate-[spin_30s_linear_infinite] transition-all duration-1000"
                            style={{ transformOrigin: 'center center' }}
                            />
                        </div> */}


                    </div>
                  ))}
                </div>
              )}

              {/* Layout 2: Flow */}
              {currentCategory.layout === 'flow' && (
                <div className="flex flex-col h-full bg-white relative">
                  <div className="flex-1 p-12 flex flex-col items-start justify-center space-y-6 relative group/flow bg-white border-b border-gray-100 overflow-hidden hover:bg-blue-50/20 transition-colors duration-150">
                     <div className="w-14 h-14 rounded-2xl bg-[#006FF6]/10 flex items-center justify-center text-[#006FF6] transition-colors duration-150 group-hover/flow:bg-[#006FF6] group-hover/flow:text-white">
                        <Target size={28} />
                     </div>
                     <h4 className="text-3xl font-black text-slate-900 tracking-tighter transition-colors duration-150 group-hover/flow:text-[#006FF6]">Strategy Through Execution</h4>
                     <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none transform transition-transform duration-150 group-hover/flow:scale-110">
                        <img src={DECOR_IMAGE} alt="" className="w-full h-full object-contain filter saturate-[0.8] animate-[rotate-clockwise_25s_linear_infinite]" />
                     </div>
                  </div>
                  <div className="flex-1 bg-gray-50 hover:bg-white transition-colors duration-150 flex flex-col items-start justify-center p-12 space-y-6 group/milestone relative overflow-hidden">
                     
                      <div className="w-14 h-14 rounded-2xl bg-[#006FF6]/10 flex items-center justify-center text-[#006FF6] transition-colors duration-150 group-hover/flow:bg-[#006FF6] group-hover/flow:text-white">
                        <Trophy size={28} />
                     </div>
                     <h4 className="text-3xl font-black text-slate-900 tracking-tight transition-colors duration-150 group-hover/milestone:text-[#006FF6]">Milestone-Based Delivery</h4>
                     <div className="absolute -bottom-16 -right-16 w-64 h-64 pointer-events-none transform transition-transform duration-150 group-hover/milestone:scale-110">
                        <img src={DECOR_IMAGE} alt="" className="w-full h-full object-contain filter saturate-[0.8] animate-[rotate-clockwise_30s_linear_infinite]" />
                     </div>
                  </div>
                </div>
              )}

              {/* Layout 3: Overlay */}
              {currentCategory.layout === 'overlay' && (
                <div className="relative h-full w-full group overflow-hidden bg-slate-100">
                  <div className="absolute inset-0">
                    <img src={currentCategory.imageUrl} className="w-full h-full object-cover transition-transform duration-[6000ms] scale-100 group-hover:scale-105 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-16 text-slate-900 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#006FF6] flex items-center justify-center shadow-xl mb-8 transform transition-all duration-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-white">
                        <Users size={32} />
                    </div>
                    <p className="capitalize text-2xl font-bold  text-slate-900">On-demand life sciences expertise with rapid onboarding</p>
                    {/* <button className="mt-8 px-10 py-5 bg-[#006FF6] rounded-full text-base font-black shadow-lg text-white transition-transform duration-150 hover:scale-105 active:scale-95 w-fit">
                      HIRE EXPERTS
                    </button> */}
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-72 h-72 pointer-events-none transform transition-transform duration-150 group-hover:scale-105 z-20">
                    <img src={DECOR_IMAGE} alt="" className="w-full h-full object-contain filter saturate-[0.8] animate-[rotate-clockwise_25s_linear_infinite]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;