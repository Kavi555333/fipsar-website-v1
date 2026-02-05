
import React from 'react';
import homebg from '../../assets/HomeBg.png'
import {
  Database,
  BarChart3,
  Building2,
  BrainCircuit
} from "lucide-react";


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-fipsar/80 backdrop-blur-sm rounded-lg p-5 flex items-center gap-5 shadow-lg border border-white/10 hover:bg-fipsar transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full group">
      <div className="text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
        <p className="text-white/90 text-md font-light">{subtitle}</p>
      </div>
    </div>
  );
};

const WhoWeAre: React.FC = () => {
  const services = [
    {
      icon: <Building2 />,
      title: 'Industry Focused',
      subtitle: 'Life sciences & health care'
    },
    {
      icon: <Database  />,
      title: 'Data Engineering',
      subtitle: 'Modernize data platforms'
    },
    {
      icon: <BarChart3 />,
      title: 'Analytics',
      subtitle: 'Unlock the full value of data'
    },

    {
      icon: <BrainCircuit />,
      title: 'AI / ML Solutions',
      subtitle: 'Automate compliance'
    }
  ];

  return (
    <section 
      className="relative w-full flex items-center py-12 md:py-20"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white">
            
            <div className="mb-10">
              <h2 className="text-5xl md:text-5xl font-bold mb-4 tracking-tight">
                Who We Are
              </h2>
              <div className="w-24 h-1.5 bg-white rounded-full" />
            </div>


            <div className="space-y-6 text-lg lg:text-xl font-medium leading-normal max-w-2xl">
              <p>
                Fipsar is an industry-focused consulting firm specializing in data engineering, analytics and AI/ML solutions for life sciences and healthcare organizations.
              </p>
              <p>
                We help businesses modernize data platforms, automate compliance and unlock the full value of data to drive innovation and improve outcomes.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-3 w-full max-w-lg lg:ml-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;