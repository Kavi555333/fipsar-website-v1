
import React from 'react';
import { 
  ClipboardCheck, 
  Files, 
  Linkedin, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

import insightele from '../../assets/insightselement.png'

/**
 * InsightsSection Component
 * Replicates the provided reference design with a full-width background 
 * and centered content within a container.
 * Primary color: #006FF6
 */
const InsightsSection: React.FC = () => {
  const primaryBlue = "#006FF6";

  return (
    <section className="relative w-full py-16 select-none overflow-hidden">
      {/* Full-width Background Image - Spans entire viewport */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img 
          src={insightele} 
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.15em] mb-4">
            Insights & Thought Leadership
          </p>
          <h1 
            className="text-4xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight"
            style={{ color: primaryBlue }}
          >
            Expert Perspectives for Life Sciences Leaders
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Stay informed with practical insights, real-world case studies and expert viewpoints on data, analytics, AI and compliance in regulated life sciences environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Columns (Col 1 & 2 of the visual grid) */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Expert Articles */}
              <div className="relative group bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden flex flex-col h-[340px]">
                {/* Floating Icon Overlay */}
                <div className="absolute top-4 left-4 z-20 bg-white p-2.5 rounded-xl shadow-md border border-slate-50">
                  <ClipboardCheck size={24} color={primaryBlue} />
                </div>
                
                <div className="flex-1 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop" 
                    alt="Expert articles" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="h-20 bg-white flex items-center px-8 rounded-b-[2rem]">
                  <span className="text-xl font-medium text-slate-800">Expert articles</span>
                </div>
              </div>

              {/* Card 2: Solution Briefs */}
              <div className="relative group bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden flex flex-col h-[340px]">
                {/* Floating Icon Overlay */}
                <div className="absolute top-4 left-4 z-20 bg-white p-2.5 rounded-xl shadow-md border border-slate-50">
                  <Files size={24} color={primaryBlue} />
                </div>
                
                <div className="flex-1 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                    alt="Solution briefs" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="h-20 bg-white flex items-center px-8 rounded-b-[2rem]">
                  <span className="text-xl font-medium text-slate-800">Solution briefs</span>
                </div>
              </div>
            </div>

            {/* Bottom Wide CTA Bar (Aligned with cards above) */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center justify-between gap-6 min-h-[160px]">
              <p className="text-slate-600 text-base md:text-lg max-w-[65%] leading-relaxed font-medium">
                Alongside our published content, follow our live updates, perspectives and announcements through our LinkedIn feed.
              </p>
              <button 
                className="flex items-center gap-4 py-3 px-6 rounded-full border border-slate-100 shadow-sm text-lg font-semibold transition-all bg-white hover:bg-slate-50 text-slate-800 group"
              >
                View All Insights
                <div className="bg-slate-50 p-1.5 rounded-full border border-slate-100 group-hover:bg-[#006FF6] transition-all">
                  <ArrowRight size={18} className="text-[#006FF6] group-hover:text-white transition-all" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column (Col 3: LinkedIn Profile) */}
          <div className="md:col-span-4 h-full">
            <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden flex flex-col h-full min-h-[526px]">
              {/* LinkedIn Banner */}
              <div className="relative h-28 w-full overflow-hidden" style={{ backgroundColor: primaryBlue }}>
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <path fill="white" d="M0,50 C120,20 250,90 400,30 L400,120 L0,120 Z" />
                </svg>
                {/* White box for LinkedIn logo overlay */}
                <div className="absolute top-4 right-4 bg-white p-2.5 rounded-xl shadow-md z-10">
                  <Linkedin size={22} color={primaryBlue} fill={primaryBlue} stroke="none" />
                </div>
              </div>
              
              <div className="px-6 pb-6 -mt-12 flex-1 flex flex-col">
                {/* Profile Avatar */}
                <div 
                  className="w-24 h-24 rounded-full border-4 border-white mb-4 shadow-lg overflow-hidden relative z-10"
                  style={{ backgroundColor: primaryBlue }}
                >
                  {/* Empty blue circle as per reference */}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900">Username</h4>
                  <p className="text-sm font-semibold text-slate-600">Lorem Ipsum Dolor</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-[90%]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Cdmx. MX ·
                  </p>
                  <button className="text-[#006FF6] text-xs font-bold mt-1.5 hover:underline">
                    Contact Information
                  </button>
                </div>

                {/* LinkedIn Action Buttons */}
                <div className="flex gap-2 mb-6">
                  <button 
                    className="flex-1 py-2.5 px-4 rounded-full text-white font-bold text-sm shadow-md transition-opacity hover:opacity-90"
                    style={{ backgroundColor: primaryBlue }}
                  >
                    I am interested
                  </button>
                  <button className="flex-1 py-2.5 px-4 rounded-full border border-slate-200 text-slate-600 font-bold text-sm bg-slate-50/50 hover:bg-slate-50">
                    Add section
                  </button>
                </div>

                {/* Profile Level Section */}
                <div className="bg-[#F8F9FA] rounded-2xl p-4 mb-4 border border-slate-100/50">
                   <div className="flex justify-between items-center mb-2.5">
                     <span className="text-sm font-bold text-slate-700">Profile level: <span className="text-slate-500 font-bold ml-1">Advanced</span></span>
                   </div>
                   <div className="flex items-center gap-2">
                      {/* First progress indicator */}
                      <div className="bg-[#006FF6] p-0.5 rounded-full ring-2 ring-white">
                        <CheckCircle2 size={12} className="text-white" fill="currentColor" stroke="none" />
                      </div>
                      
                      <div className="flex-1 flex gap-1 h-1.5">
                        <div className="flex-1 rounded-full bg-blue-800"></div>
                        <div className="flex-1 rounded-full bg-blue-700"></div>
                        <div className="flex-1 rounded-full bg-blue-600"></div>
                        <div className="flex-1 rounded-full bg-blue-500"></div>
                      </div>
                      
                      {/* Second progress indicator */}
                      <div className="bg-[#006FF6] p-0.5 rounded-full ring-2 ring-white">
                        <CheckCircle2 size={12} className="text-white" fill="currentColor" stroke="none" />
                      </div>
                      
                      <div className="flex-1 flex gap-1 h-1.5">
                        <div className="flex-1 rounded-full bg-blue-400"></div>
                        <div className="flex-1 rounded-full bg-blue-300"></div>
                        <div className="flex-1 rounded-full bg-slate-200"></div>
                      </div>
                   </div>
                </div>

                {/* LinkedIn Profile Footer */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-center items-center">
                  <button className="flex items-center gap-2 text-slate-800 font-medium hover:text-[#006FF6] transition-colors group">
                    Follow Us on <span className="text-[#006FF6] font-bold">LinkedIn</span>
                    <ExternalLink size={16} className="text-[#006FF6] group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
