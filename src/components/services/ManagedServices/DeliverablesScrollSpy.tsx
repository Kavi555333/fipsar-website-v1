  import React, { useState, useEffect, useRef } from 'react';
  import { 
    Settings, 
    AlertTriangle, 
    RefreshCw, 
    BookOpen, 
    UserCog, 
    Zap, 
    Layers, 
    CheckCircle2,
    ArrowRight
  } from 'lucide-react';

  // --- Type Definitions ---
  interface DeliverableItem {
    text: string;
  }

  interface ServiceSection {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    items: DeliverableItem[];
  }

  // --- Data Configuration ---
  const SCROLLSPY_SECTIONS: ServiceSection[] = [
    {
      id: 'operations',
      title: 'Operations & Support',
      subtitle: 'Keep the lights on, 24/5',
      icon: <Settings className="w-6 h-6" />,
      items: [
        { text: '24×5 monitoring and alerting' },
        { text: 'Platform uptime management' },
        { text: 'System health checks' },
      ]
    },
    {
      id: 'incident',
      title: 'Incident Management',
      subtitle: 'Rapid response & resolution',
      icon: <AlertTriangle className="w-6 h-6" />,
      items: [
        { text: 'Rapid incident response' },
        { text: 'Priority-based resolution' },
        { text: 'Root cause analysis (RCA)' },
        { text: 'Defect prevention' },
      ]
    },
    {
      id: 'change',
      title: 'Change Management',
      subtitle: 'Controlled & safe evolution',
      icon: <RefreshCw className="w-6 h-6" />,
      items: [
        { text: 'Controlled deployments' },
        { text: 'Impact and risk management' },
        { text: 'Configuration control' },
        { text: 'Service request handling' },
      ]
    },
    {
      id: 'knowledge',
      title: 'Knowledge Base',
      subtitle: 'Empowerment through documentation',
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { text: 'SOPs and runbooks' },
        { text: 'Knowledge base creation' },
        { text: 'Technical documentation' },
      ]
    },
    {
      id: 'admin',
      title: 'System Administration',
      subtitle: 'Security & environment governance',
      icon: <UserCog className="w-6 h-6" />,
      items: [
        { text: 'User and access management' },
        { text: 'Security configuration' },
        { text: 'Environment governance' },
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      subtitle: 'Efficiency at scale',
      icon: <Zap className="w-6 h-6" />,
      items: [
        { text: 'Job automation' },
        { text: 'Performance tuning' },
        { text: 'Cost optimization' },
        { text: 'Self-healing workflows' },
      ]
    },
  ];

  const COVERAGE_SECTION: ServiceSection = {
    id: 'coverage',
    title: 'Service Coverage',
    subtitle: 'We support all layers of your data ecosystem',
    icon: <Layers className="w-6 h-6" />,
    items: [
      { text: 'BI and analytics platforms' },
      { text: 'Data pipelines and integrations' },
      { text: 'Databases' },
      { text: 'Cloud environments' },
      { text: 'Reporting and dashboards' },
    ]
  };

  const THEME_COLOR = '#006FF6';

  export const DeliverablesScrollSpy: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(SCROLLSPY_SECTIONS[0].id);
    const [progressHeight, setProgressHeight] = useState(0);
    
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const navItemRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const navListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // Adjusted for tighter layout
        threshold: 0
      };

      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, []);

    // Update progress line height when activeId changes
    useEffect(() => {
      if (activeId && navItemRefs.current[activeId] && navListRef.current) {
        const activeItem = navItemRefs.current[activeId];
        
        const itemTop = activeItem!.offsetTop;
        const itemHeight = activeItem!.offsetHeight;
        
        // Calculate the center point of the active item's marker
        // The marker is 40px height (h-10), centered vertically in the item
        // We subtract 24px because the line starts 24px (top-6) from the top of the container
        const targetHeight = itemTop + (itemHeight / 2);
        setProgressHeight(targetHeight - 24); 
      }
    }, [activeId]);

    const handleNavClick = (id: string) => {
      setActiveId(id);
      const element = sectionRefs.current[id];
      if (element) {
        const yOffset = -80; // Reduced offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    return (
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-serif font-black text-slate-900 tracking-tight ">
            What We Deliver
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#006FF6]  mx-auto rounded-full"></div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10 relative">
          
          {/* --- Left Column: Enhanced Timeline Navigation --- */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-24">
              
              {/* Navigation Container */}
              <div className="relative pl-4">
                {/* Background Grey Line */}
                <div className="absolute left-[35px] top-6 bottom-6 w-[2px] bg-slate-100 z-0 rounded-full"></div>
                
                {/* Dynamic Progress Line */}
                <div 
                  className="absolute left-[35px] top-6 w-[2px] bg-[#006FF6] z-0 rounded-full transition-all duration-500 ease-out"
                  style={{ height: `${Math.max(0, progressHeight)}px` }}
                ></div>

                <ul ref={navListRef} className="relative z-10 space-y-6">
                  {SCROLLSPY_SECTIONS.map((section) => {
                    const isActive = activeId === section.id;
                    return (
                      <li 
                        key={section.id} 
                        ref={(el) => { navItemRefs.current[section.id] = el; }}
                        className="group"
                      >
                        <button
                          onClick={() => handleNavClick(section.id)}
                          className="flex items-center w-full text-left focus:outline-none"
                        >
                          {/* Circle Indicator */}
                          <div 
                            className={`flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all duration-500 flex items-center justify-center z-20 ${
                              isActive 
                                ? 'border-[#006FF6] bg-[#006FF6] shadow-lg shadow-blue-200 scale-110' 
                                : 'bg-white border-slate-200 group-hover:border-slate-300'
                            }`}
                          >
                            <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                          </div>

                          {/* Label Card / Text */}
                          <div className="ml-5 flex-grow transition-all duration-500">
                            {isActive ? (
                              <div className="bg-white border-l-4 border-[#006FF6] shadow-lg shadow-slate-200/50 rounded-r-xl rounded-l-sm py-3 px-5 flex items-center justify-between transform translate-x-2 transition-all duration-500">
                                <span className="font-bold text-base text-slate-800">
                                  {section.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#006FF6] animate-pulse" />
                              </div>
                            ) : (
                              <span className="text-lg font-medium text-slate-400 group-hover:text-slate-600 transition-colors px-5 block py-2">
                                {section.title}
                              </span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
            </div>
          </div>

          {/* --- Right Column: Impressive Content Cards --- */}
          <div className="lg:col-span-8 space-y-6">
            {SCROLLSPY_SECTIONS.map((section) => (
              <div 
                key={section.id} 
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="scroll-mt-24"
              >
                <div className="relative bg-white rounded-[1.5rem] p-6 lg:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(2,165,230,0.15)] hover:border-blue-100 group overflow-hidden">
                  
                  {/* Decorative Gradient Accent (Top Right) */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#006FF6]/5 to-transparent rounded-bl-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Animated Background Watermark */}
                  <div 
                    className="absolute -right-12 -bottom-12 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 ease-out pointer-events-none transform group-hover:rotate-12 group-hover:scale-110"
                    style={{ color: THEME_COLOR }}
                  >
                    {React.cloneElement(section.icon as React.ReactElement<any>, { size: 280, strokeWidth: 1 })}
                  </div>

                  {/* Header Section */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-5 mb-6">
                    
                    {/* Glowing Icon Box */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-[#006FF6] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"></div>
                      <div 
                        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-105 group-hover:rotate-2 group-hover:border-blue-100"
                      >
                        {React.cloneElement(section.icon as React.ReactElement<any>, { className: 'w-7 h-7 sm:w-8 sm:h-8 text-[#006FF6]' })}
                      </div>
                    </div>

                    <div className="pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#006FF6] transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-500 mt-1 font-medium leading-relaxed">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Grid Items */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {section.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="group/item flex items-start p-3 sm:p-4 rounded-xl bg-slate-50/50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-100 hover:-translate-y-0.5 cursor-default"
                      >
                        {/* Interactive Checkmark */}
                        <div className="flex-shrink-0 mt-0.5 mr-3 w-6 h-6 rounded-full bg-blue-50/50 flex items-center justify-center transition-colors duration-300 group-hover/item:bg-[#006FF6]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006FF6] transition-colors duration-300 group-hover/item:text-white" />
                        </div>
                        <span className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed group-hover/item:text-slate-900 transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Service Coverage Section (Separate from ScrollSpy) --- */}
        <div className="mt-12 lg:mt-16">
          <div 
            className="relative rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-blue-900/20 transition-transform duration-500 hover:scale-[1.005] overflow-hidden"
            style={{ backgroundColor: THEME_COLOR }}
          >
            {/* Background Watermark (White version) */}
            <div 
              className="absolute -right-8 -bottom-8 opacity-[0.1] pointer-events-none transform -rotate-12 text-white"
            >
              {React.cloneElement(COVERAGE_SECTION.icon as React.ReactElement<any>, { size: 350, strokeWidth: 1 })}
            </div>

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
              {/* Left Side: Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/10 text-white shadow-inner ring-1 ring-white/20 backdrop-blur-md"
                >
                  {React.cloneElement(COVERAGE_SECTION.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {COVERAGE_SECTION.title}
                  </h3>
                  <p className="text-lg font-medium mt-1 text-blue-100/90">
                    {COVERAGE_SECTION.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Side: Pills */}
              <div className="flex flex-wrap gap-2 xl:justify-end xl:max-w-2xl">
                {COVERAGE_SECTION.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40 cursor-default shadow-sm"
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };