
import React from 'react';
import { 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  ThumbsUp, 
  BarChart,
  ArrowRight,
  Globe
} from 'lucide-react';

import homebg from '../../assets/HomeBg.png'
import { Link } from 'react-router-dom';

/**
 * Feature Card Component
 * Maintains asymmetric corners (sharp top-left) and horizontal icon/title layout.
 */
const FeatureCard: React.FC<{ icon: any, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="group relative flex flex-col p-7 bg-[#1560CE] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] rounded-tl-none transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden cursor-default">
    {/* Animated background glow inside the card */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1560CE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Header: Icon and Title on the same line */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-transparent border border-white/30 transform transition-all duration-700 ease-out group-hover:bg-[#1560CE] group-hover:border-transparent group-hover:rotate-[360deg] group-hover:scale-110">
          <Icon className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-white" />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-[#1560CE] transition-colors duration-500">
          {title}
        </h3>
      </div>
      
      {/* Description below */}
      <p className="text-blue-100/70  font-semibold   text-md leading-relaxed font-white group-hover:text-[#1560CE]/80 transition-colors duration-500">
        {description}
      </p>
    </div>
  </div>
);

/**
 * Main "Why Choose Us" Section
 */
const NewwhyChoose: React.FC = () => {
   const features = [
    {
      icon: ThumbsUp,
      title: 'Dedicated Support',
      description: '24/7 dedicated support from certified experts.'
    },
    {
      icon: Zap,
      title: 'Fast SLAs',
      description: 'Fast SLAs with guaranteed response and resolution times'
    },
    {
      icon: TrendingDown,
      title: 'Cost Savings',
      description: 'Significant cost savings compared to managing internal IT.'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: ' Supporting HIPAA, GDPR, SOC 2 & GxP-aligned data platforms for regulated life sciences organizations.'
    },
    {
      icon: BarChart,
      title: 'Industry Expertise',
      description: 'Industry-specific expertise that understands your operational needs.'
    },
    {
      icon: Globe,
      title: 'Scalable Services',
      description: 'Scalable services that grow as your business evolves.'
    }
  ];
  
  // Placeholder background image URL - change this to your actual image path
  const backgroundImagePath = homebg
  const primaryColor = '#006FF6';

  return (

    <>
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 bg-[#1560CE] overflow-hidden selection:bg-white selection:text-[#1560CE]">
      
      {/* Simple Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImagePath}')` }}
      >

           {/* <div className="absolute inset-0 bg-black/60" /> */}
        {/* Overlay to ensure readability and maintain brand color consistency */}
        {/* <div className="absolute inset-0 bg-[#1560CE]/80 mix-blend-multiply" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1560CE]/40 via-transparent to-[#1560CE]/40" /> */}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Title Block */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8 animate-slideIn">
          <div className="space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300"></span>
              <span className="text-white text-[8px] font-black uppercase tracking-[0.2em]">Our Advantage</span>
            </div> */}

            {/* Title: Single line with specific underline */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight whitespace-nowrap inline-flex items-center gap-x-3">
              <span className="relative inline-block">
                Why
                <span className="absolute bottom-[-4px] left-0 w-full h-1 bg-white rounded-full"></span>
              </span>
              <span>Choose Us?</span>
            </h2>

            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed max-w-xl font-semibold">
              Say goodbye to data downtime, fragmented analytics and compliance risk
            </p>
            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed max-w-xl font-semibold">
              
              We deliver fully managed data, analytics and AI platforms built for regulated life sciences environments.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to='/partners' className="flex items-center gap-2 px-8 py-4 bg-white text-[#1560CE] rounded-xl font-bold text-base hover:bg-blue-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.15)] transition-all duration-300 group">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300">
              Our Vision
            </button> */}
          </div>

          {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
            <div>
              <p className="text-xl font-black text-white">99.9<span className="text-blue-300">%</span></p>
              <p className="text-blue-200/60 text-[9px] uppercase font-black tracking-[0.15em] mt-1">Uptime</p>
            </div>
            <div>
              <p className="text-xl font-black text-white">15<span className="text-blue-300">m</span></p>
              <p className="text-blue-200/60 text-[9px] uppercase font-black tracking-[0.15em] mt-1">Response</p>
            </div>
            <div>
              <p className="text-xl font-black text-white">500<span className="text-blue-300">+</span></p>
              <p className="text-blue-200/60 text-[9px] uppercase font-black tracking-[0.15em] mt-1">Clients</p>
            </div>
          </div> */}
        </div>

        {/* Right Column: Cards Grid */}
        {/* <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeInUp"> */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-10 animate-fadeInUp">
          
           <div className="flex flex-col items-center text-center gap-3">
            <h3 className="capitalize text-2xl md:text-3xl font-bold text-white tracking-tight">
              What makes us different
              {/* What <span className="text-[#1560CE]">makes us different</span> */}
            </h3>
            <div className="h-0.5 w-24 bg-white rounded-full shadow-[0_0_10px_rgba(21,96,206,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((item, idx) => (
            <FeatureCard 
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

          </div>
          
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </section>

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
               Your  Data & Analytics Platform, Fully Managed
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
    

            {/* <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your IT, Fully Managed</h2> */}
            <div className="w-24 h-1 bg-brand-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-xl text-slate-700 font-medium leading-relaxed">
              
             From data platforms and analytics systems to cloud operations and compliance controls, we take full ownership of your data ecosystem.  
               {/* infrastructure to end-user support, cybersecurity, cloud and compliance — we take full ownership of your IT environment. */}
            </p>
            <p className="text-lg text-slate-500 mt-6 font-medium">
             One trusted partner. Predictable cost. <span className="text-brand-600 font-bold">Compliance-Ready operations</span>
            </p>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default NewwhyChoose;
