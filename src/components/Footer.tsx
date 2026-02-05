import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import { Link } from "react-router-dom";

/**
 * Footer Component
 * 
 * Features an animated SVG wave background with a refined professional aesthetic.
 * Background: Deep Oceanic Blue (#081121).
 * Updates: Slightly decreased text sizes for a more balanced look.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const FOOTER_LINKS = [
    { label: "About Us", path: "/aboutus" },
    { label: "Solutions", path: "/solutions" },
    { label: "Partnerships", path: "/partners" },
    { label: "Insights", path: "/insights" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/career" },
  ];

  const SERVICES_LINKS = [
    { label: 'Data Engineering & Integration', path: '/service/dataengineering' },
    { label: 'Business Intelligence', path: '/service/businessIntelligence' },
    { label: 'AI & Machine Learning', path: '/service/aimachine' },
    { label: 'Salesforce LifeScience', path: '/service/salesforce' },
    { label: 'Data Governance & Compliance', path: '/service/governance' },
    { label: 'Digital Transformation', path: '/service/digitaltransformation' },
    { label: 'Managed Services', path: '/service/managedservice' },
  ];

  const LOCATIONS = [
    '170 Township line Road, Suite B2A Hillsborough, New Jersey - 08844',
    'Shankaran Avenue 65/8, Radhakrishnan Street, Velachery Chennai - 600042'
  ];

  return (
    <footer className="relative bg-[#081121] pt-0 text-white overflow-hidden mt-auto w-full">
      {/* 
        Custom CSS for animations and refined states.
      */}
      <style>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }

        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }

        @keyframes subtle-glow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 111, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 6px rgba(0, 111, 246, 0.6)); }
        }

        /* Refined title style */
        .refined-title {
          background: linear-gradient(to bottom, #ffffff 60%, #9bc5ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 3px rgba(0, 111, 246, 0.2));
          animation: subtle-glow 6s ease-in-out infinite;
        }

        .elegant-border {
          position: relative;
        }
        .elegant-border::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #006FF6;
          border-radius: 1px;
        }

        /* Hover effect: Bright Blue transition for maximum visibility */
        .nav-link-hover:hover {
          color: #3989FF !important;
          transform: translateX(6px);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
        }
      `}</style>

      {/* Animated Wavy Background Top */}
      <div className="w-full bg-white">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(57, 137, 255, 0.15)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 111, 246, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 111, 246, 0.6)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#081121" />
          </g>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-extrabold tracking-tighter refined-title">Fipsar Inc</span>
            </div>
            <p className="text-blue-50 text-base leading-relaxed font-medium">
               Revolutionize the Life Sciences Through <span className="text-[#3989FF] font-bold">Data, AI</span> & Compliance Excellence
            </p>
            <div className="flex space-x-4 pt-1">
              {[
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                { icon: <Twitter size={20} />, label: "Twitter" },
                { icon: <Instagram size={20} />, label: "Instagram" },
                { icon: <Facebook size={20} />, label: "Facebook" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-white border border-blue-400/30 hover:bg-[#3989FF] hover:border-[#3989FF] transition-all duration-300 hover:scale-110 shadow-lg shadow-black/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="mb-6 inline-block">
              <h3 className="text-xl font-bold text-white  tracking-wider elegant-border">
                Links
              </h3>
            </div>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white text-base font-medium flex items-center gap-2 group nav-link-hover"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006FF6] opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div>
            <div className="mb-6 inline-block">
              <h3 className="text-xl font-bold text-white  tracking-wider elegant-border">
                Services
              </h3>
            </div>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white text-base font-medium flex items-center gap-2 group nav-link-hover"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006FF6] opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Presence */}
          <div>
            <div className="mb-6 inline-block">
              <h3 className="text-xl font-bold text-white  tracking-wider elegant-border">
                Location
              </h3>
            </div>
            <ul className="space-y-5">
              {LOCATIONS.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#006FF6] mt-1.5 shrink-0"></div>
                    <p className="text-white text-sm font-medium leading-relaxed group-hover:text-[#3989FF] group-hover:translate-x-1 transition-all cursor-default">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-[#050a14] py-8 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p className="font-medium text-white/50 tracking-wider uppercase text-sm">© {currentYear} Fipsar Solutions. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/60 hover:text-[#3989FF] transition-all font-bold uppercase tracking-widest text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#3989FF] transition-all font-bold uppercase tracking-widest text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;