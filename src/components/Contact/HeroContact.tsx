import React from "react";
import desktopBg from "../../assets/ContactUsbackground.svg";
import mobileBg from "../../assets/ContactUsElemetsMob.svg";

const HeroContact: React.FC = () => {
  return (
    <section className="w-full lg:mt-16">
      
      <div
        className="
          relative w-full min-h-[350px] lg:min-h-[400px]
          flex items-center
          bg-no-repeat bg-center
          bg-cover lg:bg-contain
        "
        style={{
          backgroundImage: `url(${mobileBg})`,
        }}
      >
        {/* Desktop background override */}
        <div
          className="absolute inset-0 hidden lg:block bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${desktopBg})` }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 lg:left-[15%] lg:top-[10%] lg:absolute">
          
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02A5E6]/5 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02A5E6]"></span>
            </span>
            Contact us
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] leading-tight font-extrabold text-slate-900 tracking-tight">
            Every successful project <br />
            <span className="text-[#02A5E6]">starts with &apos;hello&apos;</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
