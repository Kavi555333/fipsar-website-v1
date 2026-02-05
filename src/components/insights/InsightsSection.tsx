import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Video, 
  Briefcase, 
  TrendingUp
} from 'lucide-react';
import ThoughtLeadership from './ThoughtLeadership';

// --- Types & Interfaces ---
interface InsightItem {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  image: string;
}

interface CategoryData {
  id: string;
  label: string;
  description: string;
  icon: React.ReactElement;
  items: InsightItem[];
}

import cs1 from '../../assets/InsightsLibrary/Casestudy/Cs1.jpeg'
import cs2 from '../../assets/InsightsLibrary/Casestudy/CsTwo.webp'
import cs3 from '../../assets/InsightsLibrary/Casestudy/CsThree.webp'
import cs4 from '../../assets/InsightsLibrary/Casestudy/csFour.png'
import w1 from '../../assets/InsightsLibrary/Webinars/web5.png'
import w2 from '../../assets/InsightsLibrary/Webinars/TwoW.jpg'
import w3 from '../../assets/InsightsLibrary/Webinars/threeW.webp'
import w4 from '../../assets/InsightsLibrary/Webinars/FourW.webp'


import b1 from '../../assets/InsightsLibrary/Blogs/b1.png'
import b2 from '../../assets/InsightsLibrary/Blogs/b2.png'
import b3 from '../../assets/InsightsLibrary/Blogs/b3.png'
import b4 from '../../assets/InsightsLibrary/Blogs/b4.png'
import wp1 from '../../assets/InsightsLibrary/Whitepapers/wp1.png'
import wp2 from '../../assets/InsightsLibrary/Whitepapers/wp2.png'
import wp3 from '../../assets/InsightsLibrary/Whitepapers/Wp3.png'
import wp4 from '../../assets/InsightsLibrary/Whitepapers/Wp4.png'
import ip1 from '../../assets/InsightsLibrary/IndustryTrends/IndustryTrends/In1.png'
import ip2 from '../../assets/InsightsLibrary/IndustryTrends/IndustryTrends/In2.png'
import ip3 from '../../assets/InsightsLibrary/IndustryTrends/IndustryTrends/In3.png'
import ip4 from '../../assets/InsightsLibrary/IndustryTrends/IndustryTrends/In4.png'






// --- Data Configuration ---

// const THOUGHT_LEADERSHIP_DATA: InsightItem[] = [
//   {
//     id: 'tl-1',
//     title: 'The Future of Digital Transformation: What Leaders Need to Prioritize in 2025',
//     category: 'Strategy',
//     readTime: '6 min read',
//     image: 'https://picsum.photos/1200/800?random=1'
//   },
//   {
//     id: 'tl-2',
//     title: 'Redefining Customer Experience Through AI-Driven Personalization',
//     category: 'Innovation',
//     readTime: '5 min read',
//     image: 'https://picsum.photos/800/800?random=2'
//   },
//   {
//     id: 'tl-3',
//     title: 'Why Sustainability Is Becoming a Core Business Strategy',
//     category: 'ESG',
//     readTime: '4 min read',
//     image: 'https://picsum.photos/800/800?random=3'
//   },
//   {
//     id: 'tl-4',
//     title: 'The Rise of Human-Tech Collaboration: What It Means for the Workforce',
//     category: 'Talent',
//     readTime: '7 min read',
//     image: 'https://picsum.photos/800/800?random=4'
//   }
// ];

const RESOURCE_CATEGORIES: CategoryData[] = [
  {
    id: 'blogs',
    label: 'Blogs',
    description: 'Practical tips, guides and updates from our team.',
    icon: <FileText className="w-4 h-4" />,
    items: [
      {
        id: 'blog-1',
        title: '5 Quick Wins to Improve Operational Efficiency',
        category: 'Blog',
        image: b1
      },
      {
        id: 'blog-2',
        title: 'How to Leverage Data Analytics Even If You’re Just Getting Started',
        category: 'Blog',
        image: b2
      },
      {
        id: 'blog-3',
        title: 'A Beginner’s Guide to Implementing Automation in Your Team',
        category: 'Blog',
        image: b3
      },
      {
        id: 'blog-4',
        title: 'What We Learned from This Year’s Major Industry Conference',
        category: 'Blog',
        image:b4
      }
    ]
  },
  {
    id: 'whitepapers',
    label: 'Whitepapers',
    description: 'Deep dives and research-backed reports.',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      {
        id: 'wp-1',
        title: 'AI Adoption Roadmap: Strategies, Barriers and Best Practices',
        category: 'Whitepaper',
        image: wp1
      },
      {
        id: 'wp-2',
        title: 'The 2025 Market Outlook Report: Key Trends Shaping the Next Decade',
        category: 'Whitepaper',
        image:wp2
      },
      {
        id: 'wp-3',
        title: 'Cybersecurity in a Hyperconnected World: Risk & Resilience Models',
        category: 'Whitepaper',
        image:wp3
      },
      {
        id: 'wp-4',
        title: 'Building a Future-Ready Enterprise: Transformational Frameworks',
        category: 'Whitepaper',
        image: wp4
      }
    ]
  },
  {
    id: 'webinars',
    label: 'Webinars',
    description: 'Watch sessions from experts and industry leaders.',
    icon: <Video className="w-4 h-4" />,
    items: [
      {
        id: 'web-1',
        title: 'Masterclass: Navigating Digital Transformation in Complex Organizations',
        category: 'Webinar',
        image: w1
      },
      {
        id: 'web-2',
        title: 'Live Panel: Industry Leaders Discuss the State of Innovation',
        category: 'Webinar',
        image: w2
      },
      {
        id: 'web-3',
        title: 'Workshop: How to Build High-Performance Teams in a Hybrid Work Era',
        category: 'Webinar',
        image: w3
      },
      {
        id: 'web-4',
        title: 'Tech Demo: Using Automation Tools to Cut Costs & Boost Productivity',
        category: 'Webinar',
        image: w4
      }
    ]
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description: 'Real-world success stories and results.',
    icon: <Briefcase className="w-4 h-4" />,
    items: [
      {
        id: 'cs-1',
        title: 'How a Global Retailer Reduced Costs by 30% Through Automation',
        category: 'Case Study',
        image: cs1
      },
      {
        id: 'cs-2',
        title: 'Transforming Customer Support Using AI Chatbots for a Telecom Leader',
        category: 'Case Study',
        image: cs2
      },
      {
        id: 'cs-3',
        title: 'A Manufacturing Firm’s Journey to a Connected, Data-Driven Operation',
        category: 'Case Study',
        image: cs3
      },
      {
        id: 'cs-4',
        title: 'Scaling a Start-Up to Enterprise-Level Infrastructure in Under 6 Months',
        category: 'Case Study',
        image: cs4
      }
    ]
  },
  {
    id: 'industry-trends',
    label: 'Industry Trends',
    description: 'Stay ahead of the curve with market analysis.',
    icon: <TrendingUp className="w-4 h-4" />,
    items: [
      {
        id: 'it-1',
        title: 'Top 7 Trends Reshaping the Industry in 2025',
        category: 'Trend Report',
        image: ip1
      },
      {
        id: 'it-2',
        title: 'How GenAI Is Influencing Business Models Across Sectors',
        category: 'Trend Report',
        image: ip2
      },
      {
        id: 'it-3',
        title: 'Market Disruptors to Watch: New Players Changing the Competitive Landscape',
        category: 'Trend Report',
        image:ip3
      },
      {
        id: 'it-4',
        title: 'Regulatory Changes You Need to Prepare for in the Coming Year',
        category: 'Trend Report',
        image: ip4
      }
    ]
  }
];

// --- Main Component ---
const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('blogs');

  // Thought Leadership split: Main featured item vs others
//   const featuredTL = THOUGHT_LEADERSHIP_DATA[0];
//   const sidebarTL = THOUGHT_LEADERSHIP_DATA.slice(1);

  // Helper to get current category data
  const currentCategory = RESOURCE_CATEGORIES.find(c => c.id === activeTab) || RESOURCE_CATEGORIES[0];

  return (
    // Updated padding to pt-24 (mobile) and pt-36 (desktop) to clear fixed headers
        
        <>
                        <ThoughtLeadership/>

                        <section className="pt-16 pb-8 md:pt-16 md:pb-16 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Custom Styles for Scrollbar - Updated for Blue Background */}
      <style>{`
        /* Custom styled scrollbar for the tabs container */
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px; /* Thinner scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5); 
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>




      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        


        {/* === SECTION 2: RESOURCE HUB (Enhanced Tabs & Cards) === */}
        <div className="bg-[#006FF6] rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-blue-900/10 relative overflow-hidden">
          
           {/* Decorative background element for the blue section */}
           <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                    <path d="M50 10V90" stroke="white" strokeWidth="2" />
                    <path d="M10 50H90" stroke="white" strokeWidth="2" />
                </svg>
           </div>

          {/* Header & Tabs */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 md:gap-8 mb-6 md:mb-10 relative z-10">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Resource Library</h3>
              <p className="text-blue-100 text-sm md:text-lg">Curated collections for every stage of  journey.</p>
            </div>

            {/* Tabs Pill Container - Enhanced Design */}
            <div 
              className="w-full xl:w-auto flex overflow-x-auto pb-4 gap-3 custom-scrollbar snap-x px-1"
            >
              {RESOURCE_CATEGORIES.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`
                      snap-start relative flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border group
                      ${isActive 
                        ? 'bg-white border-white text-[#006FF6] shadow-[0_8px_20px_rgba(0,0,0,0.15)] scale-105 z-10 translate-y-[-2px]' 
                        : 'bg-white/10 border-white/10 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm'
                      }
                    `}
                  >
                    <span className={`
                       flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300
                       ${isActive ? 'bg-blue-50 text-[#006FF6]' : 'bg-transparent text-white/80 group-hover:text-white'}
                    `}>
                        {React.cloneElement(category.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                    </span>
                    <span className="relative">
                        {category.label}
                    </span>
                    {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#006FF6] rounded-full opacity-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

           {/* Grid for Active Tab */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {currentCategory.items.map((item, index) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-2xl border-none overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 h-full flex flex-col cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Image Area */}
                <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Category Badge */}
                  {/* <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/95 backdrop-blur-md text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-[#006FF6] rounded-full shadow-sm ring-1 ring-black/5">
                        {item.category}
                      </span>
                  </div> */}
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-base md:text-md font-medium text-slate-800 leading-snug mb-3 group-hover:text-[#006FF6] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  
                  {/* <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                        Read
                      </span>
                      
                      <div className="w-8 h-8 md:w-8 md:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#006FF6] group-hover:bg-[#006FF6] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 transform group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                  </div> */}
                </div>
              </div>
            ))}
           </div>
           
        </div>

      </div>
    </section>

        </>


  );
};

export default InsightsSection;