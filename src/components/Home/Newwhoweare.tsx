
import React, { useState } from 'react';
import { 
  Database, 
  Building2, 
  BrainCircuit, 
  BarChart3
} from 'lucide-react';
import herobg from '../../assets/Element1.png'
/**
 * FloatingBackgroundElements: Renders animated geometric shapes in the background
 * to create a sense of depth and activity without distracting from the content.
 */
const FloatingBackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orbital Ring 1 */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] border border-[#0066FF] opacity-[0.03] rounded-full animate-[spin_60s_linear_infinite]" />
      
      {/* Orbital Ring 2 */}
      <div className="absolute bottom-[5%] left-[20%] w-[600px] h-[600px] border border-[#0066FF] opacity-[0.02] rounded-full animate-[spin_90s_linear_reverse_infinite]" />

      {/* Floating Particles */}
      <svg className="absolute top-[15%] left-[10%] w-8 h-8 text-[#0066FF] opacity-[0.07] animate-[float_12s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="8" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
      
      <svg className="absolute top-[60%] left-[5%] w-12 h-12 text-[#0066FF] opacity-[0.05] animate-[float_15s_ease-in-out_infinite_reverse]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" strokeWidth="1" />
      </svg>

      <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-[#0066FF] rounded-full opacity-[0.1] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-[20%] right-[40%] w-1.5 h-1.5 bg-[#0066FF] rounded-full opacity-[0.08] animate-[pulse_6s_ease-in-out_infinite_1s]" />
      
      <svg className="absolute bottom-[20%] right-[10%] w-10 h-10 text-[#0066FF] opacity-[0.06] animate-[float_18s_ease-in-out_infinite_2s]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1" />
      </svg>
    </div>
  );
};

/**
 * ServiceSpecificElement: Renders a unique, highly relevant geometric motif for each service.
 */
interface ServiceSpecificElementProps {
  isHovered: boolean;
  title: string;
}

const ServiceSpecificElement: React.FC<ServiceSpecificElementProps> = ({ isHovered, title }) => {
  const getPattern = () => {
    switch (title) {
      case "Data Engineering":
        return (
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="100" cy="100" r="60" strokeDasharray="20 10" opacity="0.3" />
            <circle cx="100" cy="100" r="40" strokeDasharray="10 5" opacity="0.5" />
            <circle cx="100" cy="100" r="15" strokeWidth="4" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line 
                key={angle}
                x1="100" y1="40" x2="100" y2="25" 
                transform={`rotate(${angle} 100 100)`}
                strokeLinecap="round"
              />
            ))}
            <circle cx="100" cy="100" r="5" fill="currentColor" />
          </g>
        );
      case "Analytics":
        return (
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="100" cy="100" r="70" opacity="0.2" />
            <circle cx="100" cy="100" r="45" opacity="0.4" />
            <circle cx="100" cy="100" r="20" opacity="0.6" />
            <line x1="100" y1="30" x2="100" y2="170" opacity="0.3" />
            <line x1="30" y1="100" x2="170" y2="100" opacity="0.3" />
            <path d="M100 100 L140 60" strokeWidth="4" strokeLinecap="round" />
            <circle cx="140" cy="60" r="6" fill="currentColor" />
          </g>
        );
      case "Industry Focused":
        return (
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M100 30 L160 65 L160 135 L100 170 L40 135 L40 65 Z" opacity="0.3" />
            <path d="M100 30 L40 135 M100 30 L160 135 M40 65 L160 135 M160 65 L40 135 M100 170 L40 65 M100 170 L160 65" opacity="0.15" />
            {[ [100, 30], [160, 65], [160, 135], [100, 170], [40, 135], [40, 65] ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" fill="currentColor" />
            ))}
            <circle cx="100" cy="100" r="12" fill="currentColor" opacity="0.8" />
          </g>
        );
      case "AI / ML Solutions":
        return (
          <g fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="100" cy="100" r="30" strokeWidth="4" />
            <ellipse cx="100" cy="100" rx="80" ry="30" opacity="0.3" />
            <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(60 100 100)" opacity="0.3" />
            <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(120 100 100)" opacity="0.3" />
            <circle cx="180" cy="100" r="6" fill="currentColor" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`absolute bottom-[-15%] right-[-10%] w-44 h-44 md:w-56 md:h-56 pointer-events-none transition-all duration-1000 ease-in-out z-0
        ${isHovered 
          ? 'text-white scale-125' 
          : 'text-[#0066FF] scale-100'
        }
      `}
    >
      <svg 
        viewBox="0 0 200 200" 
        className={`w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-10'} animate-[rotate-360_25s_linear_infinite]`}
        style={{ transformOrigin: 'center center' }}
      >
        {getPattern()}
      </svg>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center p-4 md:p-6 mb-3 rounded-xl
        cursor-pointer overflow-hidden
        transition-all duration-500 ease-out border w-full
        ${isHovered 
          ? 'bg-[#0066FF] text-white shadow-2xl -translate-y-1 border-transparent' 
          : 'bg-[#FFFFFF] text-[#1a1a1a] shadow-sm border-gray-100'
        }
      `}
    >
      <ServiceSpecificElement isHovered={isHovered} title={title} />

      <div
        className={`
          flex flex-shrink-0 items-center justify-center
          w-10 h-10 md:w-14 md:h-14 rounded-xl shadow-inner
          transition-all duration-500 ease-out z-10
          ${isHovered ? 'bg-white' : 'bg-[#F5F5F5]'}
        `}
      >
        {React.cloneElement(icon as React.ReactElement<any>, {
          size: 24,
          strokeWidth: 2,
          className: 'text-[#0066FF] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-[360deg]'
        })}
      </div>

      <div className="ml-5 md:ml-7 transition-transform duration-500 group-hover:translate-x-1 z-10 flex-grow relative">
        <h3
          className={`
            text-base md:text-xl font-bold mb-1
            transition-colors duration-300
            ${isHovered ? 'text-white' : 'text-[#0066FF]'}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            text-sm md:text-base font-semibold transition-colors duration-300
            ${isHovered ? 'text-blue-50' : 'text-[#616161]'}
            max-w-[95%]
          `}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const NewWhoWeAre: React.FC = () => {
  const services = [
    {
      icon: <Database />,
      title: "Data Engineering",
      subtitle: "Modernize data platforms"
    },
    {
      icon: <BarChart3 />,
      title: "Analytics",
      subtitle: "Unlock the full value of data"
    },
    {
      icon: <Building2 />,
      title: "Industry Focused",
      subtitle: "Life sciences & health care"
    },
    {
      icon: <BrainCircuit />,
      title: "AI / ML Solutions",
      subtitle: "Automate compliance"
    }
  ];

  // Placeholder for background image asset if not available
// import herobg from '../../assets/Element1.png'
  const secbg = herobg;

  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-16 md:py-18 px-6 md:px-12 lg:px-24">
      {/* Background Static Image */}
      {/* <div 
        className="absolute inset-0 z-0 opacity-[0.7] pointer-events-none"
        style={{
          backgroundImage: `url(${secbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      /> */}

       <div 
        className="absolute top-[2px] right-[10px]  w-[75%] z-0 pointer-events-none overflow-hidden"
        // style={{ backgroundColor: '#E8F1FF' }}
      >
        <img 
          src={secbg}
          className="w-full h-full object-cover"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 25% 0)'
          }}
          alt=""
        />
      </div>
    

      {/* New Animated Background Elements */}
      <FloatingBackgroundElements />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        
        <div className="max-w-xl animate-[fade-in-up_0.8s_ease-out]">
          {/* <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-widest rounded-full">
            Our Identity
          </div> */}
          <h2 className="text-[#0066FF] text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 tracking-tighter leading-tight">
            Who We Are
          </h2>
          
          <div className="space-y-6 text-[#424242] leading-relaxed text-lg md:text-xl font-medium">
            <p>
              Fipsar is an industry-focused consulting firm specializing in data engineering, analytics and AI/ML solutions for life sciences and healthcare organizations
            </p>
            <p>
              We help businesses modernize data platforms, automate compliance and unlock the full value of data to drive innovation and improve outcomes.

            </p>
          </div>
          
          {/* <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4 text-[#0066FF] font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-12 h-[2px] bg-[#0066FF]"></span>
            Innovation through insight
          </div> */}
        </div>

        <div className="flex flex-col w-full max-w-2xl lg:ml-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="opacity-0 animate-[slide-in-right_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.12 + 0.2}s` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.5); }
        }
      `}} />
    </section>
  );
};

export default NewWhoWeAre;
