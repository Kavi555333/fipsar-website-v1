
import React from 'react';
import { 
  RefreshCw, Cloud, BarChart3, ShieldCheck, 
  Cpu, Layers, Layout, Activity, Hospital, 
  Microscope, DatabaseZap, Terminal, Code, Network
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const techItems: TechItem[] = [
  { name: 'AWS', icon: <Cloud className="w-5 h-5" />, color: '#FF9900' },
  { name: 'Google Cloud', icon: <Cloud className="w-5 h-5" />, color: '#4285F4' },
  { name: 'Microsoft Azure', icon: <Cloud className="w-5 h-5" />, color: '#0089D6' },
  { name: 'Snowflake', icon: <DatabaseZap className="w-5 h-5" />, color: '#29B5E8' },
  { name: 'Databricks', icon: <Layers className="w-5 h-5" />, color: '#FF3621' },
  { name: 'Talend', icon: <Cpu className="w-5 h-5" />, color: '#FF6D70' },
  { name: 'Qlik Sense', icon: <BarChart3 className="w-5 h-5" />, color: '#009845' },
  { name: 'Salesforce', icon: <Cloud className="w-5 h-5" />, color: '#00A1E0' },
  { name: 'Salesforce Health Cloud', icon: <Hospital className="w-5 h-5" />, color: '#00A1E0' },
  { name: 'Veeva Systems', icon: <ShieldCheck className="w-5 h-5" />, color: '#F26B21' },
  { name: 'Medidata', icon: <Activity className="w-5 h-5" />, color: '#0072CE' },
  { name: 'Oracle Life Sciences', icon: <Microscope className="w-5 h-5" />, color: '#C74634' },
  { name: 'Tableau', icon: <Layout className="w-5 h-5" />, color: '#E97627' },
  { name: 'Power BI', icon: <BarChart3 className="w-5 h-5" />, color: '#F2C811' },
];

const PendantLamp: React.FC<{ className?: string; height?: string }> = ({ className, height = "200" }) => (
  <svg className={className} viewBox={`0 0 60 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="0" x2="30" y2={parseInt(height) - 40} stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    <rect x="26" y={parseInt(height) - 45} width="8" height="10" rx="1" fill="white" fillOpacity="0.4" />
    <path d={`M10 ${parseInt(height) - 10} C10 ${parseInt(height) - 35} 50 ${parseInt(height) - 35} 50 ${parseInt(height) - 10} L50 ${parseInt(height)} L10 ${parseInt(height)} Z`} fill="white" fillOpacity="0.25" />
  </svg>
);

const EcosystemSection: React.FC = () => {
  const scrollingItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className=" relative w-full overflow-hidden bg-[#006FF6] flex items-center justify-center py-16 px-4 md:px-10 lg:px-24 mt-14">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
        
        {/* PENDANT LAMPS - Positioned to the left of the ecosystem card */}
        <div className="absolute inset-y-0 left-0 w-1/2 overflow-visible">
          <PendantLamp className="absolute top-0 left-[4%] w-16 h-[340px] opacity-60" height="340" />
          <PendantLamp className="absolute top-0 left-[12%] w-12 h-[220px] opacity-40" height="220" />
          <PendantLamp className="absolute top-0 left-[24%] w-20 h-[400px] opacity-30" height="400" />
          <PendantLamp className="absolute top-0 left-[38%] w-14 h-[280px] opacity-25" height="280" />
          <PendantLamp className="absolute top-0 left-[45%] w-10 h-[200px] opacity-15" height="200" />
        </div>

        {/* Animated Tech Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-white/15 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-400/20 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }} />

        {/* Tech Blueprint Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <path d="M 2 2 L 50 2 M 50 2 L 50 50" stroke="white" strokeWidth="0.4" fill="none" strokeDasharray="3 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>

        {/* Moving Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
                <div 
                    key={i} 
                    className="absolute bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] w-1/4 animate-data-stream"
                    style={{ 
                        top: `${i * 25}%`, 
                        left: '-40%',
                        animationDelay: `${i * 2}s`,
                        transform: 'rotate(-3deg)'
                    }} 
                />
            ))}
        </div>

        {/* Scattered SVG Icons */}
        <div className="absolute top-[15%] right-[5%] animate-float opacity-10"><Terminal className="text-white w-8 h-8" /></div>
        <div className="absolute top-[40%] right-[10%] animate-float-slow opacity-10"><Code className="text-white w-12 h-12" /></div>
        <div className="absolute bottom-[15%] right-[5%] animate-float opacity-10"><Network className="text-white w-16 h-16" /></div>
        
        {/* Decorative Gear SVGs */}
        <div className="absolute -right-24 -top-24">
          <SettingsIcon className="w-[400px] h-[400px] text-white opacity-[0.02] animate-spin-slow" />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* --- LEFT CONTENT CARD --- */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-white/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.15)] max-w-lg border border-white/60">
              
              <div className="flex items-start justify-between mb-6">
                <h2 className="serif-title text-2xl md:text-3xl lg:text-4xl text-[#006FF6] font-bold leading-tight">
                  Our Technology <br />
                  <span className="text-[#1560CE] font-semibold">Ecosystem</span>
                </h2>
                <div className="bg-[#006FF6]/10 p-4 rounded-2xl shadow-sm border border-[#006FF6]/5">
                  <RefreshCw className="w-8 h-8 text-[#006FF6] animate-spin-slow" style={{ animationDuration: '10s' }} />
                </div>
              </div>

              <div className="h-[2px] w-20 bg-gradient-to-r from-[#006FF6] to-transparent mb-6" />

              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                Our partnerships span cloud infrastructure, data engineering, analytics, enterprise applications and Life Sciences platforms allowing us to build scalable, secure and compliant solutions across the clinical, regulatory, safety and medical value chain.
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SLIDER --- */}
        <div className="relative h-[360px] md:h-[400px] overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 z-30 pointer-events-none rounded-[2rem]" />
          
          <div className="flex flex-col space-y-4 animate-vertical-marquee py-6 px-4">
            {scrollingItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex items-center space-x-5 bg-white/90 backdrop-blur-lg rounded-[1.25rem] px-6 py-4 border border-white/60 w-full max-w-sm mx-auto transition-all duration-300 hover:translate-x-2 hover:bg-white shadow-none"
              >
                <div 
                  className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-500 group-hover:rotate-12"
                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                >
                  {item.icon}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-lg text-[#006FF6] font-normal tracking-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#006FF6] to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#006FF6] to-transparent z-20" />
        </div>
      </div>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style>{`
        @keyframes vertical-marquee {
            0% { transform: translateY(0); }
            100% { transform: translateY(-33.33%); }
        }
        .animate-vertical-marquee {
            animation: vertical-marquee 50s linear infinite;
        }
        .animate-vertical-marquee:hover {
            animation-play-state: paused;
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes data-stream {
            0% { left: -40%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 15s ease-in-out infinite;
        }
        .animate-float {
            animation: float 10s ease-in-out infinite;
        }
        .animate-float-slow {
            animation: float 15s ease-in-out infinite;
        }
        .animate-spin-slow {
            animation: spin 45s linear infinite;
        }
        .animate-data-stream {
            animation: data-stream 8s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        {...props} 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.0" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

export default EcosystemSection;
