import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



const CtaSection: React.FC = () => {
  const primaryColor = '#006FF6';

  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div 
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl mix-blend-multiply"
          style={{ backgroundColor: primaryColor }}
        />
        <div 
          className="absolute top-40 -left-20 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl mix-blend-multiply"
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6 leading-tight">
            Ready to transform your <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              {/* Gradient Text */}
              <span 
                className="relative z-10 text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, #0077b6 100%)` 
                }}
              >
                Data & Analytics?
              </span>
              
              {/* Soft glow accent behind the text */}
              <div 
                className="absolute -inset-4 blur-2xl opacity-20 rounded-full z-0 pointer-events-none"
                style={{ backgroundColor: primaryColor }}
              ></div>
              
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
          
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Let’s build <span className="text-gray-900 font-semibold">secure, scalable & intelligent solutions</span> tailored to your life sciences  organization designed for <span className="text-gray-900 font-semibold">compliance, performance & long-term growth</span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link to="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                backgroundColor: primaryColor,
                boxShadow: `0 10px 30px -10px ${primaryColor}`
              }}
            >
              Book a free consultation
              {/* <sup className="text-xs ml-0.5">3</sup> */}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* <p className="mt-6 text-xs text-gray-400 font-medium">
            ³ Consultation availability is limited for this quarter.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;