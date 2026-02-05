import React from 'react';
import herobg from '../../assets/HeroSecElement.svg'
/**
 * Interface for Article data
 */
interface Article {
  id: number;
  title: string;
  image: string;
}

import insightone from '../../assets/InsightsHero/heroone.png'
import insighttwo from '../../assets/InsightsHero/itwo.png'
import insightthree from '../../assets/InsightsHero/ithree.png'
import insightfour from '../../assets/InsightsHero/ifour.png'

/**
 * ThoughtLeadership Component
 * 
 * Requirements:
 * - Full width section background with light brand color.
 * - Centered content container (max-width: 1100px).
 * - Background image positioned at the bottom right.
 * - Color Palette: #006FF6.
 */
const ThoughtLeadership: React.FC = () => {
  const brandColor = "#006FF6";
  // A very light version of the brand color for the section background
//   const sectionBgColor = "rgba(2, 165, 230, 0.03)"; 

  const articles: Article[] = [
    {
      id: 1,
      title: "The Future of Digital Transformation: What Leaders Need to Prioritize in 2025",
      image: insightfour
    },
    {
      id: 2,
      title: "Redefining Customer Experience Through AI-Driven Personalization",
      image: insighttwo
    },
    {
      id: 3,
      title: "Why Sustainability Is Becoming a Core Business Strategy",
      image: insightthree
    },
    {
      id: 4,
      title: "The Rise of Human-Tech Collaboration: What It Means for the Workforce",
      image: insightone
    }
  ];

  const featured = articles[0];
  const sidebarItems = articles.slice(1);

  // Custom SVG background using the brand color #006FF6 for extra texture
//   const brandedBgSvg = `data:image/svg+xml,${encodeURIComponent(`
//     <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="600" cy="200" r="300" fill="${brandColor}" fill-opacity="0.1"/>
//       <circle cx="750" cy="500" r="200" fill="${brandColor}" fill-opacity="0.05"/>
//       <path d="M400 0C600 100 800 50 800 300C800 550 600 700 400 800C200 700 0 550 0 300C0 50 200 100 400 0Z" fill="${brandColor}" fill-opacity="0.03"/>
//     </svg>
//   `)}`;

  return (
    <section 
      className="relative w-full overflow-hidden py-8 sm:py-10 md:pt-28 md:pb-8 bg-[#F2F9FD]"
    >
      {/* 
          FULL WIDTH BACKGROUND TEXTURE 
          Anchored to the right bottom of the full section 
      */}
      <img 
        src={herobg} 
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 h-[100%] w-auto opacity-60 pointer-events-none select-none z-0 object-contain hidden md:block translate-y-[15%] translate-x-[10%]"
      />

      {/* 
          CENTERED CONTENT CONTAINER
          Maintains the requested 1100px fixed layout width
      */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 w-full select-none">
        
        {/* Section Header */}
        {/* <div className="flex justify-start">
          <div 
            className="px-4 py-1.5 rounded-full font-bold text-[10px] sm:text-xs tracking-widest bg-white shadow-md border border-gray-100/50 uppercase flex items-center gap-2"
            style={{ color: brandColor }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }}></span>
            Thought Leadership
          </div>
        </div> */}

        <div className="">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006FF6]/5 border border-[#006FF6]/20 text-[#006FF6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006FF6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006FF6]"></span>
                    </span>
                        Insights
                </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Side: Featured Article */}
          <div className="lg:col-span-6 group cursor-pointer flex flex-col h-full">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(2,165,230,0.12)] flex-grow flex flex-col border border-white">
              {/* Image Section */}
              <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9] overflow-hidden">
                <img 
                  src={featured.image} 
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Trending Badge */}
                <div 
                  className="absolute top-3 left-0 px-4 py-1.5 rounded-r-full text-white text-[10px] sm:text-xs font-bold flex items-center gap-2 shadow-2xl z-10"
                  style={{ backgroundColor: brandColor }}
                >
                  <span className="opacity-80">#</span> TRENDING
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 md:p-8 bg-white flex flex-col justify-center flex-grow relative">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 leading-tight group-hover:text-[#006FF6] transition-colors duration-300">
                    {featured.title}
                  </h2>
                </div>
                <div className="mt-4 md:mt-5 flex items-center gap-3">
                  <div className="h-1 bg-gray-100 w-10 sm:w-12 group-hover:w-16 transition-all duration-500 ease-out rounded-full" style={{ backgroundColor: brandColor }}></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">Read Article</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Secondary Articles */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 lg:justify-between">
            {sidebarItems.map((item) => (
              <div key={item.id} className="group cursor-pointer flex items-center relative">
                {/* Overlapping Image Container */}
                <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 shadow-2xl rounded-xl overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] border-white transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_30px_-8px_rgba(0,0,0,0.2)]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Text Card Container */}
                <div className="flex-grow -ml-5 sm:-ml-6 md:-ml-8 pl-9 sm:pl-10 md:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 bg-white rounded-2xl shadow-md border border-white flex items-center justify-between transition-all duration-500 ease-out group-hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] group-hover:translate-x-1 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
                  <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-gray-800 leading-snug group-hover:text-[#006FF6] transition-colors duration-300 line-clamp-2 sm:line-clamp-3 pr-2">
                    {item.title}
                  </h3>
                  <div 
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 hidden sm:block"
                    style={{ color: brandColor }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;