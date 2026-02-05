import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Database, 
  Handshake, 
  Stethoscope, 
  BrainCircuit, 
  Globe2,
  Quote
} from 'lucide-react';

interface Milestone {
  year: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const milestones: Milestone[] = [
  {
    year: '2010',
    icon: <Building2 />,
    title: 'Inception',
    content: 'Founded in New Jersey, focusing on specialized healthcare & life sciences consulting.'
  },
  {
    year: '2012',
    icon: <Database />,
    title: 'Data Mastery',
    content: 'Expanded service portfolio into robust data management, analytics and Business Intelligence.'
  },
  {
    year: '2015',
    icon: <Handshake />,
    title: 'Global Expansion',
    content: 'Established global centers. Launched comprehensive CRM & Cloud solution verticals.'
  },
  {
    year: '2018',
    icon: <Stethoscope />,
    title: 'Market Leadership',
    content: 'Strengthened consulting footprint for major Fortune 500 healthcare enterprises.'
  },
  {
    year: '2021',
    icon: <BrainCircuit />,
    title: 'Innovation Phase',
    content: 'Pioneered AI-driven innovations and established global nearshore centers.'
  },
  {
    year: '2024',
    icon: <Globe2 />,
    title: 'Global Scaling',
    content: 'Scaling global footprint and advancing cutting-edge AI & cloud tech for clients.'
  }
];

const tripledMilestones = [...milestones, ...milestones, ...milestones];

const StorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(milestones.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cardHeight = 120; 
  const gapHeight = 16;
  const viewportHeight = 440; 
  const totalStep = cardHeight + gapHeight;
  const scrollOffset = 0; 

  // Move Tailwind configuration into the component as requested
  useEffect(() => {
    const tw = (window as any).tailwind;
    if (tw) {
      tw.config = {
        theme: {
          extend: {
            colors: {
              fipsar: '#006FF6',
              'fipsar-light': '#E6F6FD',
              'fipsar-dark': '#017BB0'
            },
          }
        }
      };
    }
  }, []);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  useEffect(() => {
    if (activeIndex >= milestones.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex - milestones.length);
      }, 800);
      return () => clearTimeout(timeout);
    }
    if (activeIndex < milestones.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex + milestones.length);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  const translateY = -(activeIndex * totalStep) + scrollOffset;

  return (
    <section className="w-full bg-[#f8fafc] py-20 md:py-32 overflow-hidden relative">
      <style>{`
        .mask-vertical-focus {
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 50%, black 85%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 50%, black 85%, transparent);
        }
        .jazz-success {
          position: relative;
          z-index: 1;
          display: inline-block;
        }
        // .jazz-success::after {
        //   content: '';
        //   position: absolute;
        //   bottom: 15%;
        //   left: -2%;
        //   width: 104%;
        //   height: 35%;
        //   background-color: #006FF6;
        //   opacity: 0.15;
        //   z-index: -1;
        //   border-radius: 4px;
        // }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch justify-center relative z-10">
        
        {/* LEFT SECTION: Milestones Slider */}
        <div 
          className="w-full lg:w-[42%] relative bg-[#006FF6] rounded-[3rem] p-8 md:p-10 overflow-hidden flex flex-col h-[600px] transition-all duration-500 border-none shadow-none shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-start mb-10 z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 flex items-center gap-2.5 text-white font-bold text-[10px] tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Our Milestone
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden " style={{ height: `${viewportHeight}px` }}>
            <div 
              className={`w-full flex flex-col gap-4 ${isTransitioning ? 'transition-transform duration-[1200ms]' : ''}`}
              style={{ 
                  transform: `translateY(${translateY}px)`,
                  transitionTimingFunction: 'linear'
              }}
            >
              {tripledMilestones.map((m, idx) => {
                return (
                  <div 
                    key={idx}
                    className="w-full bg-white rounded-[2.5rem] p-6 flex gap-5 relative scale-100 opacity-100 border-none"
                    style={{ height: `${cardHeight}px` }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#006FF6] text-white">
                      {React.cloneElement(m.icon as React.ReactElement<any>, { size: 24, strokeWidth: 2.5 })}
                    </div>

                    <div className="flex-1 pr-10 flex flex-col justify-center overflow-hidden">
                      <h4 className="font-extrabold text-gray-900 text-[16px] mb-1 leading-tight tracking-tight">
                          {m.title}
                      </h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3 font-medium">
                        {m.content}
                      </p>
                    </div>

                    <div className="absolute top-6 right-8 text-[9px] font-black px-2 py-1 rounded-lg bg-[#E6F6FD] text-[#006FF6]">
                      {m.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-start gap-2 mt-10 z-10">
            {milestones.map((_, idx) => (
              <button 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  (activeIndex % milestones.length) === idx ? 'w-8 bg-white' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Professional Content */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center relative py-6">
          <div className="space-y-12">
            <div className="space-y-5">
              {/* <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#006FF6] rounded-full" />
                <span className="text-[#006FF6] font-extrabold text-[10px] tracking-[0.4em] uppercase">About Fipsar</span>
              </div> */}

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                    </span>
                    About us
                </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-[#1e293b] tracking-tighter leading-[1.05]">
                Our <span className="jazz-success">Story</span>
              </h2>
            </div>
            
            <div className="space-y-10 max-w-xl">
              <div className="relative">
                <Quote className="absolute -left-12 -top-8 text-[#006FF6]/10" size={56} strokeWidth={2.5} />
                <p className="text-lg md:text-xl lg:text-xl text-gray-800 font-bold leading-snug tracking-tight">
                  FIPSAR is an industry-focused consulting firm specializing in <span className="text-[#006FF6]">data management, analytics</span> and <span className="text-[#006FF6]">AI/ML solutions</span> for the life sciences and healthcare sectors.
                </p>
              </div>
              
              <div className="border-l-4 border-[#006FF6] pl-8 py-2">
                <p className="text-sm md:text-base lg:text-lg text-gray-500 font-semibold leading-relaxed">
                  Founded in 2010 in New Jersey by <span className="text-gray-900 font-bold">Anto & Subhar J</span>, we now operate from Hillsborough, NJ, delivering world-class technology services from Chennai to global clients.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-16 pt-4">
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-slate-800 tracking-tighter">14+</span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">Years of Excellence</span>
               </div>
               <div className="w-[1px] h-10 bg-slate-200" />
               <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-slate-800 tracking-tighter">Global</span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">Delivery Network</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;