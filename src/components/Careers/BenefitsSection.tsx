
import React from 'react';
import { 
  Tag, 
  MousePointer2, 
  HandHeart, 
  Focus, 
  LayoutGrid, 
  ThumbsUp,
  Coins,
  Wifi,
  HeartPulse,
  BatteryCharging,
  Users2,
  Rocket
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  bgIcon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, bgIcon, title, description }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center text-center p-12 bg-white transition-all duration-500 hover:z-10 overflow-hidden">
      {/* Decorative Background SVG Image */}
      <div className="absolute -bottom-6 -right-6 w-48 h-48 text-[#006FF6]/[0.03] group-hover:text-[#006FF6]/[0.08] transform rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none">
        {bgIcon}
      </div>

      {/* Subtle hover background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#006FF6]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container */}
      <div className="relative mb-8 z-10">
        <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#006FF6]/[0.07] text-[#006FF6] transform transition-all duration-500 group-hover:bg-[#006FF6] group-hover:text-white group-hover:rotate-[12deg] group-hover:scale-110 shadow-sm group-hover:shadow-lg group-hover:shadow-[#006FF6]/20">
          {icon}
        </div>
        {/* Decorative shadow element */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#006FF6]/10 rounded-xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
      </div>

      <h3 className="relative z-10 text-[#1a4188] text-xl font-bold mb-4 tracking-tight group-hover:text-[#006FF6] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="relative z-10 text-gray-500 text-base md:text-lg leading-relaxed max-w-[280px] group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <div className="max-w-7xl w-full mx-auto py-12 px-6">
      {/* Header Section - Centered */}
      <div className="flex flex-col items-center text-center mb-16 space-y-8">
        {/* <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <span className="h-[1px] w-12 bg-[#006FF6]/30"></span>
            <span className="text-[#006FF6] font-bold tracking-[0.3em] text-xs uppercase">Our Commitment</span>
            <span className="h-[1px] w-12 bg-[#006FF6]/30"></span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2">
            <h1 className="text-[#1a4188] text-5xl md:text-8xl font-bold serif-font tracking-tight leading-none">
              Benefits
            </h1>
            <span className="text-[#006FF6] text-3xl md:text-5xl font-extralight italic serif-font">
              by Fipsar
            </span>
          </div>
        </div> */}
        
        {/* <div className="max-w-2xl px-4">
          <p className="text-gray-500 text-lg md:text-2xl leading-relaxed font-light">
            We empower our global team with a robust foundation for <span className="text-[#1a4188] font-medium">personal excellence</span>, creative innovation and sustained well-being.
          </p>
        </div> */}

              <div className="flex flex-col items-center text-center ">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-4xl font-serif font-black text-slate-900 tracking-tight relative z-10">
             Benefits
            </h2>
            {/* Underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#006FF6] rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
            {/* Defining who we are and how we serve our community. */}
            We invest in our people so they can do their best work: 
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 gap-[1px] border border-gray-100 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#1a4188]/5">
        <BenefitItem 
          icon={<Tag size={32} strokeWidth={1.5} />} 
          bgIcon={<Coins size={192} strokeWidth={0.5} />}
          title="Competitive Rewards"
          description="Competitive compensation and performance incentives." 
        />
        
        <BenefitItem 
          icon={<MousePointer2 size={32} strokeWidth={1.5} />} 
          bgIcon={<Wifi size={192} strokeWidth={0.5} />}
          title="Flexible Work Model"
          description="Flexible remote/hybrid work options." 
        />
        
        <BenefitItem 
          icon={<HandHeart size={32} strokeWidth={1.5} />} 
          bgIcon={<HeartPulse size={192} strokeWidth={0.5} />}
          title="Health & Wellness"
          description="Comprehensive health and wellness coverage." 
        />

        <BenefitItem 
          icon={<Focus size={32} strokeWidth={1.5} />} 
          bgIcon={<BatteryCharging size={192} strokeWidth={0.5} />}
          title="Learning & Growth"
          description="Professional development and learning support." 
        />
        
        <BenefitItem 
          icon={<LayoutGrid size={32} strokeWidth={1.5} />} 
          bgIcon={<Users2 size={192} strokeWidth={0.5} />}
          title="Work–Life Balanc"
          description="Generous time off and work–life balance." 
        />
        
        <BenefitItem 
          icon={<ThumbsUp size={32} strokeWidth={1.5} />} 
          bgIcon={<Rocket size={192} strokeWidth={0.5} />}
          title="Inclusive Culture"
          description="Inclusive, supportive team environment." 
        />
      </div>

    </div>
  );
};

export default BenefitsSection;
