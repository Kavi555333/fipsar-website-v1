
import React from 'react';

import cardbg from '../../assets/Isolation_Mode (1).png'
interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Data Engineering & Integration",
    description: "Secure, scalable, AI-ready data foundations"
  },
  {
    id: 2,
    title: "Business Intelligence & Visualization",
    description: "Actionable insights from trusted, governed data"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Predictive intelligence and responsible automation"
  },
  {
    id: 4,
    title: "Salesforce Life Sciences & Health Cloud",
    description: "Connected, compliant commercial and patient operations"
  },
  {
    id: 5,
    title: "Data Governance & Compliance",
    description: "Audit-ready platforms aligned to GxP and HIPAA"
  },
  {
    id: 6,
    title: "Managed Data Platform Services",
    description: "24×5 monitoring, support and continuous optimization"
  }
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="group relative bg-[#FFFFFF] rounded-2xl p-7 shadow-sm border border-gray-100 h-full min-h-[260px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,111,246,0.15)] hover:-translate-y-3 hover:border-[#006FF6]/30 overflow-hidden flex flex-col justify-between cursor-pointer">
      
      {/* 
          Background Decorative Element
          Continuous 360-degree rotation with enhanced scale and rotation speed on hover
      */}
      {/* <div className="absolute -bottom-20 -right-20 w-48 h-48 transition-all duration-700 group-hover:scale-150 group-hover:-translate-x-4 group-hover:-translate-y-4 pointer-events-none z-0">
        <div className="w-full h-full animate-[spin_30s_linear_infinite] group-hover:animate-[spin_15s_linear_infinite]">
          <img 
            src={cardbg} 
            alt="Decorative Element" 
            className="w-full h-full object-contain opacity-100 transition-all duration-500 group-hover:brightness-110"
          />
        </div>
      </div> */}

        <div className="opacity-[0.5] absolute bottom-[15px] right-[18px] w-[130px] h-[130px] pointer-events-none transition-all duration-1000 group-hover:scale-110 z-0 select-none translate-x-[60%] translate-y-[60%]">
          <img 
            src={cardbg}
            // src="https://framerusercontent.com/images/UWWLOnjuQ1PeZXHIyBz3JINowSU.png?scale-down-to=512&width=1040&height=1040"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain animate-[spin_30s_linear_infinite] transition-all duration-1000"
            style={{ transformOrigin: 'center center' }}
          />
        </div>

      <div className="relative z-10">
        {/* Number Badge with dynamic pop effect */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#006FF6] text-white text-base font-bold mb-6 shadow-lg shadow-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:rounded-full">
          0{service.id}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl md:text-xl font-bold text-[#000000] leading-tight transition-colors duration-300 group-hover:text-[#006FF6]">
              {service.title}
            </h3>
            {/* Sliding Arrow Icon */}
            {/* <div className="mt-1 transition-all duration-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006FF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div> */}
          </div>
          <p className="text-[#424242] font-bold text-base leading-relaxed max-w-[90%] transition-colors duration-300 group-hover:text-gray-700">
            {service.description}
          </p>
        </div>
      </div>

      {/* Subtle overlay highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006FF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

/**
 * ServiceSection is the main component that contains the header, grid and CTA buttons.
 * It is fully self-contained for easy copying and pasting.
 * Max-width and side paddings removed to allow flush placement.
 */
const LittleService: React.FC = () => {
  return (
    <section className="w-full py-12 bg-[#F5F5F5]">
      {/* Header Section */}
      <header className="mb-10 text-center px-4">
        <p className="text-[#006FF6] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
          SERVICES & SOLUTIONS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] mb-5 tracking-tight">
          End-to-End Data, Analytics & AI Capabilities
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Our services and platforms work together to support regulated life sciences environments.
        </p>
      </header>

      {/* Grid of Cards - Using full width with a small inner gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      
      {/* Footer Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        {/* Primary Button */}
        <button className="w-full sm:w-auto relative group overflow-hidden bg-[#006FF6] text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,111,246,0.3)] active:scale-95 uppercase tracking-widest text-xs md:text-sm border border-[#006FF6]">
          <span className="relative z-10">View All Services </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        {/* Secondary Button */}
        <button className="w-full sm:w-auto relative group overflow-hidden bg-transparent text-[#006FF6] px-10 py-4 rounded-2xl font-bold transition-all duration-300 border-2 border-[#006FF6] hover:bg-[#006FF6] hover:text-white active:scale-95 uppercase tracking-widest text-xs md:text-sm">
          <span className="relative z-10"> Explore Solutions</span>
        </button>
      </div>
    </section>
  );
};

export default LittleService;
