import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Activity, 
  ShieldCheck, 
  Search, 
  BarChart3, 
  BrainCircuit, 
  TrendingUp, 
  FileCheck, 
  FileText, 
  MessageCircleHeart, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

import datasphere from '../../assets/FipsarAIHub&DataSphere/DataSphere.png'
import aihub from '../../assets/FipsarAIHub&DataSphere/AIHub.png'

// --- Types ---
interface SubFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainIcon: React.ReactNode;
  features: SubFeature[];
  themeColor: string;
  image: string;
}
const BRAND_COLOR = '#006FF6';
// --- Data Definition ---
const platformsData: Platform[] = [
  {
    id: 'datasphere',
    name: 'Fipsar DataSphere',
    tagline: 'Unified Data Platform',
    description: 'A unified data platform for clinical, regulatory and enterprise intelligence.',
    themeColor: '#006FF6',
    mainIcon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
    image: datasphere, // Data dashboard/analytics
    features: [
      {
        title: 'Clinical Data Intelligence',
        description: 'Standardize, validate and analyze clinical data to improve trial performance.',
        icon: <Activity className="w-6 h-6" />,
      },
      {
        title: 'Enterprise Data Governance',
        description: 'Build trust, consistency and control across your organization’s data landscape.',
        icon: <ShieldCheck className="w-6 h-6" />,
      },
      {
        title: 'Knowledge Intelligence',
        description: 'Turn documents, research and unstructured content into searchable insights.',
        icon: <Search className="w-6 h-6" />,
      },
      {
        title: 'Trial Insights Dashboard',
        description: 'Monitor operational, clinical and safety metrics with real-time analytics.',
        icon: <BarChart3 className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 'ai-hub',
    name: 'Fipsar AI Hub',
    tagline: 'Intelligent Automation',
    description: 'An AI-first platform powering automation and decision intelligence across Life Sciences.',
    themeColor: '#006FF6',
    mainIcon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10" />,
    image: aihub, // Abstract AI/Brain
    features: [
      {
        title: 'AI-Powered Trial Optimization',
        description: 'Improve patient selection, reduce trial timelines and optimize study design.',
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        title: 'Regulatory Compliance Automation',
        description: 'Automate validation, auditing and regulatory reporting workflows.',
        icon: <FileCheck className="w-6 h-6" />,
      },
      {
        title: 'Protocol Generator',
        description: 'Generate structured clinical protocols using AI-driven templates and context-aware suggestions.',
        icon: <FileText className="w-6 h-6" />,
      },
      {
        title: 'CAMI: Conversational AI for Medical & Insights',
        description: 'An intelligent assistant that answers scientific, clinical and operational questions instantly.',
        icon: <MessageCircleHeart className="w-6 h-6" />,
      },
    ],
  },
];

const PlatformsSection: React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>('datasphere');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className=" bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[#006FF6] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-[#006FF6] opacity-[0.03] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
      


                  <div className={`text-center mb-10 animate-elastic`} style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our Platforms
          </h2>
          {/* Animated underline that grows from center */}
          <div className="relative h-1.5 w-24 mx-auto bg-gray-100 rounded-full overflow-hidden">
             <div 
               className="absolute top-0 left-0 h-full w-full bg-current rounded-full"
               style={{ 
                 backgroundColor: BRAND_COLOR,
                 transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
                 transformOrigin: 'center',
                 transition: 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s'
               }}
             />
          </div>
        </div>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Intelligent platforms and AI solutions built for 
             <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006FF6] to-blue-600">
              the  Life Sciences ecosystem.
            </span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our solutions improve speed, accuracy and decision-making across the entire drug development and healthcare lifecycle.   
          </p> */}
        </div>

        {/* Tab/Toggle */}
        <div className="flex justify-start mb-12">
          <div className="bg-slate-100 p-1 rounded-full inline-flex relative">
            {platformsData.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-out z-10 flex items-center gap-2 ${
                  activeTab === platform.id
                    ? 'text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                 {/* Animated Background for Active Tab */}
                 {activeTab === platform.id && (
                  <div className="absolute inset-0 bg-[#006FF6] rounded-full -z-10 animate-fade-in"></div>
                )}
                {platform.id === 'datasphere' ? <Database size={16} /> : <BrainCircuit size={16} />}
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          
          {/* Left Side: Hero Card */}
          <div className="relative group perspective-1000 min-h-[500px] lg:min-h-[auto]">
             {platformsData.map((platform) => (
                <div 
                  key={platform.id}
                  className={`transition-all duration-700 ease-in-out absolute inset-0 w-full h-full ${
                    activeTab === platform.id 
                      ? 'opacity-100 translate-x-0 relative z-10' 
                      : 'opacity-0 -translate-x-8 absolute pointer-events-none z-0 hidden lg:block'
                  }`}
                  style={{ display: activeTab === platform.id ? 'block' : undefined }}
                >
                  <div className="bg-gradient-to-br from-white via-white to-blue-50/40 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200/80 hover:border-[#006FF6]/30 h-full flex flex-col overflow-hidden relative group/card transition-colors duration-500">
                    
                    {/* --- Tech Accents (Left Card) --- */}
                    {/* Top Left Bracket */}
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#006FF6]/20 rounded-tl-lg pointer-events-none"></div>
                    {/* Top Right Dots */}
                    <div className="absolute top-6 right-6 flex gap-1.5 pointer-events-none opacity-60">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                         <div className="w-1.5 h-1.5 rounded-full bg-[#006FF6]"></div>
                    </div>
                    {/* Inner Glow */}
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#006FF6]/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Content Area (Top) */}
                    <div className="p-8 pt-10 md:p-12 relative z-20">
                      <div className="inline-flex items-center justify-center p-3 md:p-4 bg-white border border-[#006FF6]/10 shadow-sm rounded-2xl text-[#006FF6] mb-6 md:mb-8">
                        {platform.mainIcon}
                      </div>
                      
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{platform.name}</h4>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-md">
                        {platform.description}
                      </p>
                      
                      <button className="text-[#006FF6] font-semibold flex items-center gap-2 group/btn hover:text-blue-600 transition-colors mt-2">
                        Explore {platform.name.split(' ')[1]}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>

                    {/* Image Area (Bottom) */}
                    <div className="mt-auto relative w-full h-64 md:h-80 overflow-hidden">
                         {/* Gradient Overlays for smooth blending */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#006FF6]/20 to-white/10 mix-blend-overlay z-10 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 pointer-events-none h-24"></div>
                        
                        <img 
                          src={platform.image} 
                          alt={platform.name}
                          className="w-full h-full object-cover object-center transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                  </div>
                </div>
             ))}
          </div>

          {/* Right Side: Feature Grid */}
          <div className="space-y-6 flex flex-col justify-center">
             {platformsData.map((platform) => (
               <div 
                  key={`${platform.id}-features`}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 delay-100 ${
                    activeTab === platform.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 hidden'
                  }`}
               >
                 {platform.features.map((feature, idx) => (
                   <div 
                    key={idx} 
                    className="relative group overflow-hidden bg-gradient-to-br from-white to-slate-50/50 p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                   >
                     {/* --- Tech Accents (Right Card) --- */}
                     {/* Hover Grid Pattern Background */}
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(#006FF6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.07]"></div>
                     </div>

                     {/* Top Gradient Line */}
                     <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#006FF6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     {/* Header Section with Icon and Arrow */}
                     <div className="flex justify-between items-start mb-4">
                        <div className="relative z-10 w-12 h-12 rounded-xl bg-blue-50/50 text-[#006FF6] flex items-center justify-center group-hover:bg-[#006FF6] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                           {feature.icon}
                        </div>
                        
                        {/* Hover Arrow Action */}
                        <div className="text-slate-300 group-hover:text-[#006FF6] transition-all duration-300 transform translate-x-4 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>

                     <h5 className="relative z-10 text-lg font-bold text-slate-900 mb-2 group-hover:text-[#006FF6] transition-colors">
                       {feature.title}
                     </h5>
                     <p className="relative z-10 text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                       {feature.description}
                     </p>
                   </div>
                 ))}
               </div>
             ))}
             
             {/* CTA Box */}
             {/* <div className="bg-gradient-to-r from-blue-50/50 to-white rounded-xl p-6 flex items-center gap-4 border border-blue-100/80 shadow-sm">
                <div className="p-2 bg-[#006FF6] text-white rounded-full shrink-0 shadow-lg shadow-blue-200">
                  <ChevronRight size={16} />
                </div>
                <div>
                  <h6 className="font-semibold text-slate-900">Seamless Integration</h6>
                  <p className="text-sm text-slate-600 mt-1">
                    Fipsar {activeTab === 'datasphere' ? 'DataSphere' : 'AI Hub'} works seamlessly with our other platforms to create a continuous loop of intelligence.
                  </p>
                </div>
             </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;