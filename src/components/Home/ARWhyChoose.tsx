import React from 'react';
import { 
  Headset, 
  Zap, 
  PiggyBank, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  // Activity 
} from 'lucide-react';

import cardbg from '../../assets/cardbg11.svg'
import whyfip from '../../assets/whychosefip.webp'


interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Decorative Image Component
 * Positioned at bottom 0px and right 10px.
 * Translated by 60% on both axes for partial visibility.
 */
const GeometricPattern = () => (
  <div className="absolute bottom-0 right-[0px] w-[230px] h-[230px] pointer-events-none transition-all duration-1000 group-hover:scale-110 z-0 select-none translate-x-[60%] translate-y-[60%]">
    <img 
      src={cardbg}
      // src="https://framerusercontent.com/images/UWWLOnjuQ1PeZXHIyBz3JINowSU.png?scale-down-to=512&width=1040&height=1040"
      alt=""
      aria-hidden="true"
      className="w-full h-full object-contain animate-[spin_30s_linear_infinite] transition-all duration-1000"
      style={{ transformOrigin: 'center center' }}
    />
  </div>
);
  const primaryColor = '#006FF6';

/**
 * Feature Card Component
 * Implements a sticky stacking behavior.
 */
const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => {
  return (
    <div 
      className="sticky w-full bg-[#FFFFFF] rounded-[32px] p-8 md:p-6 mb-6 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 border border-gray-100 group hover:border-[#006FF6]/20 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 cursor-pointer shadow-sm overflow-hidden"
      style={{ 
        top: `${100 + (index * 20)}px`, // Stacking logic tightened
        zIndex: (index + 1) * 10,
      }}
    >
      <GeometricPattern />
      <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#F5F5F5] rounded-2xl border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:border-[#006FF6]/20 group-hover:shadow-lg group-hover:shadow-blue-500/5">
        <div className="text-[#006FF6] transition-transform duration-500 group-hover:rotate-6">
          {feature.icon}
        </div>
      </div>
      <div className="relative z-10 flex-grow">
        <h3 className="capitalize text-xl md:text-xl font-bold text-[#000000] leading-tight mb-2 transition-colors duration-500 group-hover:text-[#006FF6]">
          {feature.title}
        </h3>
      </div>
    </div>
  );
};

/**
 * Main Comparison Section
 */
const ARWhyChoose: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'support',
      title: 'Life sciences-first expertise',
      description: '24/7 dedicated support from certified experts.',
      icon: <Headset size={32} strokeWidth={1.5} />,
    },
    {
      id: 'slas',
      title: 'AI-driven modernization',
      description: 'Fast SLAs with guaranteed response and resolution times.',
      icon: <Zap size={32} strokeWidth={1.5} />,
    },
    {
      id: 'savings',
      title: 'Compliance-ready delivery',
      description: 'Significant cost savings compared to managing internal IT.',
      icon: <PiggyBank size={32} strokeWidth={1.5} />,
    },
    {
      id: 'security',
      title: 'Predictable pricing & SLAs',
      description: 'Security and compliance first —  supporting HIPAA, GDPR, SOC 2 and GxP-aligned data platforms for regulated life sciences organizations.',
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
    {
      id: 'industry',
      title: 'Global delivery with accountability',
      description: 'Industry-specific expertise that understands your operational needs.',
      icon: <Building2 size={32} strokeWidth={1.5} />,
    },
    {
      id: 'scalable',
      title: 'Long-term, client-first partnerships',
      description: 'Scalable services that grow as your business evolves.',
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
    }
  ];

  return (
    <>

                   <section className="py-16 bg-gradient-to-br from-white to-brand-50 ">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">

                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-2 leading-tight">
            
            <span className="relative inline-block mt-2">
              {/* Gradient Text */}
              <span 
                className="relative z-10 text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, #0077b6 100%)` 
                }}
              >
               Your Data Ecosystem, Fully Managed
              </span>
 
              {/* Subtle underline accent */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 opacity-40" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
                style={{ fill: primaryColor }}
              >
                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" />
              </svg>
            </span>
                    
                    </h2>
    


            <div className="w-24 h-1 bg-brand-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-xl text-slate-700 font-medium leading-relaxed">
              
             From data platforms and analytics systems to cloud operations and compliance controls, we take full ownership of your data ecosystem.  
               
            </p>
            <p className="text-lg text-slate-500 mt-6 font-medium">
             One trusted partner. Predictable cost. <span className="text-brand-600 font-bold">Compliance-Ready operations</span>
            </p>
          </div>
        </div>
      </section>
    <div className="bg-[#F5F5F5]">
      <section className="w-full py-12 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* Left Sticky Content */}
  <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit mb-8 lg:mb-0">
            <div className="relative group overflow-hidden rounded-[40px] shadow-2xl transition-all duration-700 hover:shadow-blue-500/10 hover:scale-[1.01]">
              <img 
                src={whyfip} 
                alt="Life Sciences Data Analytics and AI Technology" 
                className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006FF6]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <h2 className="text-white text-center text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-2xl">
                  Why Fipsar?
                </h2>
              </div>
            </div>
          </div>


          {/* Right Cards Content */}
          <div className="lg:col-span-7 flex flex-col pb-12">
            <div className="mb-8 text-center">
              <h3 className="text-[#006FF6] text-3xl md:text-4xl font-bold tracking-tight">
                Why Life Sciences Leaders Choose Us?
              </h3>
            </div>
            
            <div className="relative">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.id} 
                  feature={feature} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
   
      </>
  );
};

export default ARWhyChoose;