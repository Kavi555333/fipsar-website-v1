import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Target, Eye, TrendingUp, Cpu, Globe, Zap, CheckCircle2 } from 'lucide-react';

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MissionVision: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#006FF6] py-24 px-6 md:px-12 lg:px-20">
      {/* Decorative Background Elements - Concentric Rings Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Concentric Circles (Target Motif) - Top Right */}
        <div className="absolute -top-[150px] -right-[150px] opacity-[0.06] transform rotate-12">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="350" stroke="white" strokeWidth="45"/>
            <circle cx="400" cy="400" r="260" stroke="white" strokeWidth="45"/>
            <circle cx="400" cy="400" r="170" stroke="white" strokeWidth="45"/>
            <circle cx="400" cy="400" r="80" stroke="white" strokeWidth="45"/>
            <circle cx="400" cy="400" r="30" fill="white"/>
          </svg>
        </div>
        
        {/* Secondary Concentric Arc - Bottom Left */}
        <div className="absolute -bottom-[200px] -left-[100px] opacity-[0.04]">
           <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="35"/>
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="35"/>
            <circle cx="300" cy="300" r="120" stroke="white" strokeWidth="35"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* MISSION CARD */}
          <motion.div 
            variants={itemVariants} 
            className="group relative h-full"
          >
            {/* Soft shadow effect behind the card */}
            <div className="absolute inset-0 bg-black/5 transform rotate-1 rounded-3xl transition-transform group-hover:rotate-2 duration-500 ease-out" />
            
            <div className="relative h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Target className="w-8 h-8 text-[#006FF6]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Our Mission
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-[#006FF6] pl-4">
                To deliver quality, cost-effective and customized data management and analytics solutions that empower clients to:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">Informed Decisions</h3>
                  </div>
                  <p className="text-gray-500 text-sm">Make informed, data-driven decisions</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">Efficiency</h3>
                  </div>
                  <p className="text-gray-500 text-sm">Improve operational efficiency</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">Competitiveness</h3>
                  </div>
                  <p className="text-gray-500 text-sm">Stay competitive in fast-evolving industries</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VISION CARD */}
          <motion.div 
            variants={itemVariants}
            className="group relative h-full mt-8 lg:mt-0"
          >
            {/* Soft shadow effect behind the card */}
            <div className="absolute inset-0 bg-black/5 transform -rotate-1 rounded-3xl transition-transform group-hover:-rotate-2 duration-500 ease-out" />
            
            <div className="relative h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <Eye className="w-8 h-8 text-[#006FF6]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Our Vision
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-[#006FF6] pl-4">
                To build a trusted global brand known for excellence in data management, analytics and AI/ML, expanding through:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">Global Reach</h3>
                  </div>
                  <p className="text-gray-500 text-sm">Nearshore centers in Canada & South America</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">AI Innovation</h3>
                  </div>
                  <p className="text-gray-500 text-sm">AI-first modernization frameworks</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-[#006FF6]" />
                    <h3 className="text-lg font-semibold text-gray-800">Partnership</h3>
                  </div>
                  <p className="text-gray-500 text-sm">Strong, long-term client partnerships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;