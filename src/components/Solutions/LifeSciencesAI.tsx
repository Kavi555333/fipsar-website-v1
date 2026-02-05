import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Search, 
  FileText, 
  ShieldAlert, 
  Languages, 
  FileSearch, 
  MessageSquare, 
  Phone, 
  Users, 
  Globe, 
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import bgimg from '../../assets/Backgroundsol.png';

// --- Data Definitions ---

interface UseCaseData {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  benefits: string;
  icon: React.ElementType;
  imageUrl: string;
}

const PRIMARY_COLOR = '#006FF6';
// A lighter version of primary color for backgrounds (approx 10% opacity)
const PRIMARY_COLOR_BG = 'rgba(2, 165, 230, 0.1)'; 

const useCases: UseCaseData[] = [
  {
    id: 'enterprise-translation',
    title: 'Enterprise Translation Automation',
    subtitle: 'Multilingual translation at scale — from days to minutes.',
    problem: 'Information is not always accessible to everyone because it could be in other languages. Instead of manually translating documents, users use Enterprise Translation, which makes it simpler.',
    solution: 'Application is used to translate documents from one language to another.',
    benefits: 'Previously took months for a third party to translate and was very costly.',
    icon: Languages,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'protocol-research',
    title: 'Protocol Research Automation',
    subtitle: 'Automatically summarize disease & treatment research for protocol development.',
    problem: 'Writing protocol documents is a tedious process because background information on diseases and treatments is spread across many sources. This makes the process time-consuming and can lead to missing or inconsistent details.',
    solution: 'Automated the collection and summarization of background research on specific diseases and treatments to support faster and more accurate protocol document development',
    benefits: 'Improved the efficiency and accuracy of producing protocol background sections by generating research automatically and enabling quick assignment of researchers to specific documents.',
    icon: FileSearch,
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fda-claims',
    title: 'FDA Claims Detection',
    subtitle: 'Identify high-risk promotional claims before FDA review.',
    problem: 'Manual reviews were slow and sometimes missed false or unclear claims that could be flagged by the FDA.',
    solution: 'Created an application used to catch any false claims that could potentially be flagged by the FDA before drug promotion is released.',
    benefits: 'Previously, reviewing all FDA-flagged promotions tied to documented materials required two weeks of manual effort and relied on a third-party tool that flagged content based on keywords',
    icon: ShieldAlert,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'automated-redaction',
    title: 'Automated Redaction',
    subtitle: 'Remove sensitive information instantly and safely.',
    problem: 'Companies often need to share financial documents externally, but manually hiding sensitive details takes time and can lead to mistakes or data leaks.',
    solution: 'Application created to safely to share financial information by automatically redacting sensitive data from documents.',
    benefits: 'Automated redaction of sensitive information in internal documents, replacing the tedious manual process.',
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1506556554531-17c984375b6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'protocol-deviation',
    title: 'Protocol Deviation Categorization',
    subtitle: 'Classify deviations as major/minor with intelligent rules.',
    problem: 'Manual classification of protocol deviations was time-consuming and more prone to errors.',
    solution: 'Application created to categorizes protocol deviations as major or minor. A major deviation is classified as an issue that could affect patients safety or study results for example a patient receives wrong dosage. A minor deviation doesn\'t impact overall results of study. For example a form is signed in the wrong order.',
    benefits: 'Automated identification and flagging of study protocols based on study rules, replacing a complex manual process.',
    icon: Activity,
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'restricted-terms',
    title: 'Restricted Terms Scanner',
    subtitle: 'Flag non-compliant terms and accelerate approvals.',
    problem: 'Manual document reviews were slow and could miss restricted terms, risking inconsistency and compliance issues.',
    solution: 'Application created to scan documents before finalization for any restricted terms and provide replacements to those terms that have been approved.',
    benefits: 'Auditing document before application used to take months to complete.',
    icon: CheckCircle2,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'policy-qa',
    title: 'Policy Q&A Portal',
    subtitle: 'Natural language answers for policies and internal processes.',
    problem: 'Finding answers about company policies and procedures can be time-consuming for employees.',
    solution: 'A website/URL was created to be used by all business employees to answer questions within a document regarding any company policies and processes.',
    benefits: 'Better user experience and information accessibility for website users by providing a natural language response to user questions.',
    icon: MessageSquare,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-manager',
    title: 'Case Manager Monitoring',
    subtitle: 'Analyze support calls for sentiment, quality and effectiveness.',
    problem: 'It\'s difficult to consistently monitor and evaluate how case managers communicate with patients effectively.',
    solution: 'The application analyzes phone calls between case managers and patients to provide feedback on communication quality and effectiveness',
    benefits: 'Previously relied on a third-party software, which was very costly. Built an in-house monitoring application with customized features and utilized AI to a great extent.',
    icon: Phone,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hcp-compliance',
    title: 'HCP Compliance Monitoring',
    subtitle: 'AI-based audits of HCP–patient interactions.',
    problem: 'Ensuring that HCPs follow compliance guidelines during patient calls is challenging. Manual reviews are time-consuming and can result in missed compliance issues.',
    solution: 'Application analyzes phone calls between HCPs and patients to ensure all interactions adhere to company and regulatory guidelines.',
    benefits: 'Before, the audit took a lot of manual work and could only cover a small sample. Now, with this tool, we can run the audit on the full dataset and save a lot of time.',
    icon: Users,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hcp-network',
    title: 'HCP Network Platform',
    subtitle: 'Discover and connect HCPs by specialty, publications and geography.',
    problem: 'Difficult for HCPs to identify and connect with others who share similar specialties or research interest.',
    solution: 'Created application where HCPs expand their network based on location, specialties and publications.',
    benefits: 'Discovering new HCPs for Collaborations.',
    icon: Globe,
    imageUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'website-search',
    title: 'Website Search Engine',
    subtitle: 'Make complex websites easy to navigate with intelligent search.',
    problem: 'Client\'s websites were difficult to navigate, making it hard for users to find information quickly',
    solution: 'Created a search engine bar to make client websites more easily accessible. The feature was added to 4 different websites.',
    benefits: 'Users can easily find relevant information, leading to improved satisfaction and reduced frustration. This enhances overall website usability and efficiency.',
    icon: Search,
    imageUrl: 'https://images.unsplash.com/photo-1481487484168-9b930d5b7960?auto=format&fit=crop&q=80&w=800'
  }
];

// --- Helper Components ---

const DetailSection: React.FC<{ title: string; content: string; delay: number }> = ({ title, content }) => (
  <div className="mb-4 last:mb-0">
    <h4 
      className="text-xs font-bold uppercase tracking-wider mb-1" 
      style={{ color: PRIMARY_COLOR }}
    >
      {title}
    </h4>
    <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
  </div>
);

const Card: React.FC<{ data: UseCaseData; index: number }> = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.icon;

  return (
    <div 
      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col h-full group relative"
    //   className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col h-full group relative"
      style={{ 
        borderColor: isHovered ? PRIMARY_COLOR : 'rgba(255, 255, 255, 0.5)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Accent Line */}
      <div 
        className="h-1.5 w-full transition-all duration-300" 
        style={{ backgroundColor: PRIMARY_COLOR }} 
      />

      {/* Image Section */}
      {/* <div className="h-44 overflow-hidden relative">
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
      </div> */}

      {/* Header */}
      <div className="p-6 pb-2 relative">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="p-3 rounded-xl transition-colors duration-300"
            style={{ 
              backgroundColor: isHovered ? PRIMARY_COLOR : PRIMARY_COLOR_BG,
              color: isHovered ? 'white' : PRIMARY_COLOR 
            }}
          >
            <Icon size={24} strokeWidth={2} />
          </div>
          <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
        </div>

        <h3 
            className="text-xl font-bold text-slate-900 mb-2 leading-tight transition-colors duration-300"
            style={{ color: isHovered ? PRIMARY_COLOR : undefined }}
        >
          {data.title}
        </h3>
        <p className="text-slate-500 font-medium text-sm leading-snug min-h-[40px]">
          {data.subtitle}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mx-6 my-2" />

      {/* Content */}
      <div className="p-6 pt-2 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <DetailSection title="Business Problem" content={data.problem} delay={0} />
          <DetailSection title="Solutions & Technologies" content={data.solution} delay={100} />
          <DetailSection title="Business Benefits" content={data.benefits} delay={200} />
        </div>
        
        {/* <div 
          className="mt-6 flex items-center text-sm font-bold transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0" 
          style={{ color: PRIMARY_COLOR }}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </div> */}
      </div>
    </div>
  );
};

// --- Main Component ---

const LifeSciencesAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per page logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index stays within bounds when itemsPerPage changes
  const maxIndex = Math.max(0, useCases.length - itemsPerPage);
  
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div className=" min-h-screen flex flex-col  text-slate-900">
      {/* 1. Header Section - Clean White Background */}
      <header className="pt-16 pb-12 px-4 md:px-8 bg-white  z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: PRIMARY_COLOR }}>
            AI Use Cases for Life Sciences
          </h2> */}
            <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                </span>
                AI Use Cases for Life Sciences
                </div>
          </div>
          <h5 className="text-3xl md:text-3xl font-medium text-slate-900 mt-6 ">
            Transforming Pharmaceutical Operations with <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${PRIMARY_COLOR}, #2563EB)` }}>Intelligent Automation</span>
          </h5>
          {/* <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Leveraging cutting-edge artificial intelligence to streamline workflows, enhance compliance and accelerate innovation across the life sciences value chain.
          </p> */}
        </div>

    
      </header>

      {/* 2. Slider Section - Background Image | Cards Vertically Centered */}
      <div className="relative flex-grow min-h-[600px] flex flex-col justify-center py-12 px-6 md:px-16 lg:px-24 lg:py-24 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
            <img 
              src={bgimg}
              alt="Background" 
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />  */}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Slider Mechanism */}
          <div className="relative group">
            
            {/* Navigation Button - Left */}
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 p-3 rounded-full shadow-lg bg-white/90 backdrop-blur-md border border-slate-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentIndex === 0 ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
              style={{ color: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR } as React.CSSProperties}
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>

            {/* Navigation Button - Right */}
            <button 
              onClick={nextSlide} 
              disabled={currentIndex === maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 p-3 rounded-full shadow-lg bg-white/90 backdrop-blur-md border border-slate-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentIndex === maxIndex ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
              style={{ color: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR } as React.CSSProperties}
              aria-label="Next slide"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>

            {/* Track Viewport */}
            <div 
              className="overflow-hidden py-10 -my-10 px-2"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {useCases.map((useCase, index) => (
                  <div 
                    key={useCase.id} 
                    className="flex-shrink-0 px-4 transition-all duration-500"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <Card data={useCase} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Section - White Background | Indicators & CTA */}
      {/* <div className="bg-white py-12 px-4 md:px-8 z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"> */}
      <div className="bg-white py-12 px-4 md:px-8 z-20 ">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Pagination Indicators */}
          <div className="flex justify-center items-center space-x-3 mb-8">
            {useCases.map((_, index) => {
              // Only show a limited number of dots for better UI if list is long, 
              // but here we show all for simplicity as per request
              const isActive = index === currentIndex;
              return (
                 <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${isActive ? 'w-10 h-2.5' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`}
                  style={{ backgroundColor: isActive ? PRIMARY_COLOR : undefined }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
          
          {/* CTA Badge */}
          {/* <div className="inline-flex items-center p-1.5 pl-1.5 pr-6 rounded-full bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-pointer group">
            <span 
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full mr-4 uppercase tracking-wide transition-opacity"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              New
            </span>
            <span className="text-slate-600 text-sm font-semibold group-hover:text-slate-900 transition-colors">
              Explore our intelligent automation catalog
            </span>
            <ArrowRight size={14} className="ml-2 text-slate-400 group-hover:text-slate-900 transition-colors" />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default LifeSciencesAI;