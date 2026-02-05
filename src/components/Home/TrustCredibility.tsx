
import React, { useEffect, useState, useRef } from 'react';

import aws from '../../assets/HomeTechicons/AWS.svg'
import db from '../../assets/HomeTechicons/Dataricks.svg'
import powern from '../../assets/HomeTechicons/Power BI.svg'
import qlik from '../../assets/HomeTechicons/Sense.svg'
import snow from '../../assets/HomeTechicons/SnowFlack.svg'
import tab from '../../assets/HomeTechicons/Tableau.svg'
import info from '../../assets/HomeTechicons/informatica.png'
import gc from '../../assets/HomeTechicons/gc.png'
import veeva from '../../assets/HomeTechicons/veevacrm.png'

// Brand Logos Component (Custom SVGs)
const TechLogo = ({ name }: { name: string }) => {
  const common = "w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 flex items-center justify-center";
  
  switch (name) {
    case 'AWS':
      return (
            <img src={aws} alt="aws"  className={common}/>
      );
    case 'Azure':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="#0089D6">
          <path d="M5.4 19.3L11.5 4.6l6 9.8z"/>
          <path d="M22.5 19.3L15.3 1.5H8.7l13.8 17.8z"/>
        </svg>
      );
    case 'Google Cloud':
      return (
        <img src={gc} alt="aws"  className={common}/>
      );
    case 'Snowflake':
      return (
<img src={snow} alt="aws"  className={common}/>
      );
    case 'Databricks':
      return (
 <img src={db} alt="aws"  className={common}/>
      );
    case 'Salesforce':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="#00A1E0">
          <path d="M18.8 9.3c-1.1-2.4-3.5-4-6.3-4-2.2 0-4.2 1-5.4 2.7-2.1.2-3.8 2-3.8 4.2 0 2.3 1.9 4.2 4.2 4.2h11.3c2 0 3.7-1.6 3.7-3.7 0-1.9-1.5-3.4-3.7-3.4z"/>
        </svg>
      );
    case 'Tableau':
      return (
     <img src={tab} alt="aws"  className={common}/>
      );
    case 'Power BI':
      return (
     <img src={powern} alt="aws"  className={common}/>
      );
    case 'Veeva':
      return (
<img src={veeva} alt="aws"  className={common}/>
      );
    case 'Qlik':
      return (
<img src={qlik} alt="aws"  className={common}/>
      );
          case 'Informatica':
      return (
<img src={info} alt="aws"  className={common}/>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="#006ff6">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
        </svg>
      );
  }
};

const TrustIcon = ({ type }: { type: 'history' | 'global' | 'security' }) => {
  const commonProps = { className: "w-8 h-8 text-[#006ff6] relative z-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  
  return (
    <div className="relative mb-5 group-hover:scale-110 transition-transform duration-500">
      <div className="absolute inset-0 bg-[#006ff6]/10 blur-xl rounded-full scale-150 animate-pulse"></div>
      {type === 'history' && (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )}
      {type === 'global' && (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )}
      {type === 'security' && (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )}
    </div>
  );
};

const TrustCredibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Snowflake', 'Databricks', 'Informatica',
    'Salesforce', 'Veeva', 'Tableau', 'Power BI', 'Qlik'
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (window.innerWidth < 768) return;
    const card = cardRefs[index].current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs[index].current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    }
  };

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden relative">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulseDot {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(1.6); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .chevron-container {
          display: flex;
          height: 56px;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }
        .chevron-part {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 2.5rem;
          font-size: 1.5rem;
          font-weight: 900;
          position: relative;
        }
        .chevron-part-1 { background-color: #b0d2fc; clip-path: polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 0% 100%); z-index: 3; color: rgba(0, 111, 246, 0.3); }
        .chevron-part-2 { background-color: #006ff6; clip-path: polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 0% 100%, 6% 50%); margin-left: -20px; z-index: 2; color: rgba(255, 255, 255, 0.2); }
        .chevron-part-3 { background-color: #004394; clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 6% 50%); margin-left: -20px; z-index: 1; color: rgba(255, 255, 255, 0.2); }

        .steps-grid {
          display: grid;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }

        .step-column {
          position: relative;
        }

        .connector-group {
          position: absolute;
          top: -10px; 
          left: 40px; 
          width: 100%;
          pointer-events: none;
        }

        .line-v {
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0;
          transition: height 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        
        .line-h {
          position: absolute;
          left: 0;
          top: 60px; 
          width: 0;
          height: 3px;
          transition: width 0.5s ease-out 0.8s;
          overflow: hidden;
        }

        .data-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #fff, transparent);
          animation: dataFlow 2s infinite linear;
        }

        .line-h .data-pulse {
          background: linear-gradient(to right, transparent, #fff, transparent);
        }

        .indicator-dot {
          position: absolute;
          top: 56px;
          left: 0;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease 1.3s, left 0.5s ease-out 0.8s;
          z-index: 10;
        }

        .active-state .line-v { height: 60px; }
        .active-state .line-h { width: 40px; }
        .active-state .indicator-dot { opacity: 1; left: 40px; animation: pulseDot 2s infinite ease-in-out; }

        .hi-fi-card {
          background-color: #F5F5F5;
          padding: 2rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(0,0,0,0.04);
          height: 240px; 
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.1s ease-out, background-color 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
          width: 100%;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }

        .hi-fi-card:hover {
          background-color: #ffffff;
          border-color: rgba(0,111,246,0.2);
          box-shadow: 0 30px 60px -15px rgba(0, 111, 246, 0.1);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
        }

        .hi-fi-card:hover .card-title { color: #006ff6; }

        .card-accent {
          height: 3px;
          width: 40px;
          background-color: #006ff6;
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .hi-fi-card:hover .card-accent { width: 100%; }

        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
          padding: 2rem 0; /* Extra vertical space for hover lift */
        }

        .marquee-container:hover .marquee-wrapper {
          animation-play-state: paused;
        }

        .tech-circle-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 160px;
          flex-shrink: 0;
          margin: 0 1.5rem;
          height: 180px; /* Fixed height for consistent alignment */
          position: relative;
        }

        .tech-circle-card {
          background-color: #F5F5F5;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          margin-bottom: 0.75rem;
          will-change: transform, background-color, box-shadow;
        }

        .tech-circle-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
        }

        .tech-circle-item:hover .tech-circle-card {
          background-color: #ffffff;
          transform: translateY(-12px) scale(1.1);
          box-shadow: 0 25px 50px -12px rgba(0, 111, 246, 0.2);
          z-index: 50;
        }

        .tech-circle-item:hover .tech-circle-card::after {
          border-color: #006ff6;
        }

        .tech-label {
          color: #000000;
          font-weight: 700;
          font-size: 20px;
          text-align: center;
          opacity: 0.8;
          transition: transform 0.3s ease, opacity 0.3s ease;
          width: 100%;
        }

        .tech-circle-item:hover .tech-label {
          opacity: 1;
          transform: translateY(-4px);
        }

        .marquee-gradient-left { background: linear-gradient(to right, white, transparent); }
        .marquee-gradient-right { background: linear-gradient(to left, white, transparent); }

        @media (max-width: 767px) {
          .hi-fi-card { height: auto; min-height: 160px; padding: 1.5rem; border-radius: 1rem; }
          .card-title { font-size: 1.05rem; }
          .tech-circle-card { width: 90px; height: 90px; }
          .tech-circle-item { width: 120px; height: 160px; margin: 0 0.75rem; }
          .tech-label { font-size: 0.75rem; }
        }
      `}</style>

      {/* Trust Cards Section - Contained */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        {/* <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-[#006ff6] font-bold text-sm tracking-widest uppercase mb-3 block">Trust & Credibility</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#006ff6] mb-4">Enterprise Excellence</h2>
          <div className="w-24 h-1 bg-[#006ff6] mx-auto rounded-full"></div>
        </div> */}

        <div className="mb-8">
          <div className={`hidden md:flex chevron-container mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="chevron-part chevron-part-1"><span>»</span></div>
            <div className="chevron-part chevron-part-2"><span>»</span></div>
            <div className="chevron-part chevron-part-3"><span>»</span></div>
          </div>

          <div className="steps-grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 px-1 md:px-0">
            {[
              { type: 'history' as const, text: '15+ years in Life Sciences & Healthcare', delay: '0.1s', color: '#b0d2fc' },
              { type: 'global' as const, text: 'Global delivery with US leadership and India execution', delay: '0.2s', color: '#006ff6' },
              { type: 'security' as const, text: 'Compliance-ready platforms aligned to HIPAA, GxP, GDPR', delay: '0.3s', color: '#004394' }
            ].map((card, i) => (
              <div key={i} className={`step-column h-auto md:h-[300px] ${isVisible ? 'active-state animate-fade-in' : ''}`} style={{ animationDelay: card.delay }}>
                <div className="hidden md:block connector-group">
                  <div className="line-v" style={{ backgroundColor: card.color }}>
                    <div className="data-pulse"></div>
                  </div>
                  <div className="line-h" style={{ backgroundColor: card.color }}>
                    <div className="data-pulse"></div>
                  </div>
                  <div className="indicator-dot" style={{ backgroundColor: card.color }}></div>
                </div>

                <div className="md:pl-[85px] md:pt-[10px] md:pr-[20px]">
                  <div 
                    ref={cardRefs[i]}
                    className="hi-fi-card group"
                    onMouseMove={(e) => handleMouseMove(e, i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                  >
                    <TrustIcon type={card.type} />
                    <h3 className="card-title">
                      {card.text}
                    </h3>
                    <div className="card-accent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Ecosystem Section - Full Width */}
      <div className={`w-full  ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center mb-8">
          <span className="text-[#006ff6] font-bold text-sm tracking-widest uppercase mb-2 block">Our Technology Partners</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#006ff6]">Technology & Ecosystem Expertise</h2>
        </div>
        
        <div className="relative marquee-container py-2 w-full">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-60 z-20 marquee-gradient-left pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-60 z-20 marquee-gradient-right pointer-events-none"></div>

          <div className="overflow-hidden w-full">
            <div className="marquee-wrapper">
              {/* Loop 1 */}
              {technologies.map((tech, i) => (
                <div key={`tech-1-${i}`} className="tech-circle-item group">
                  <div className="tech-circle-card">
                    <TechLogo name={tech} />
                  </div>
                  <span className="tech-label">{tech}</span>
                </div>
              ))}
              {/* Loop 2 (Seamless) */}
              {technologies.map((tech, i) => (
                <div key={`tech-2-${i}`} className="tech-circle-item group">
                  <div className="tech-circle-card">
                    <TechLogo name={tech} />
                  </div>
                  <span className="tech-label">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredibility;
