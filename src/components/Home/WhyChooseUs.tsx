import React from 'react';
import { motion,type Variants } from 'framer-motion';
import { ShieldCheck, TrendingUp, Coins, Sparkles, Headset, Zap, Briefcase, ArrowRight } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const differentiators = [
    {
      icon: <Headset className="w-6 h-6" />,
      title: "Dedicated Support",
      text: "24/7 dedicated support from certified experts",
      colSpan: "col-span-1"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast SLAs",
      text: "Fast SLAs with guaranteed response and resolution times",
      colSpan: "col-span-1"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Cost Savings",
      text: "Significant cost savings compared to managing internal IT",
      colSpan: "col-span-1"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Compliance",
      text: "Security & compliance first: SOC 2, ISO, GDPR-aligned processes",
      colSpan: "col-span-1"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry Expertise",
      text: "Industry-specific expertise that understands your operational needs",
      colSpan: "col-span-1"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Services",
      text: "Scalable services that grow as your business evolves",
      colSpan: "col-span-1"
    },
    // {
    //   icon: <Activity className="w-6 h-6" />,
    //   title: "Proactive Monitoring",
    //   text: "Proactive monitoring to prevent issues before they impact operations",
    //   colSpan: "md:col-span-2",
    //   highlight: true
    // }
  ];

  return (

    <>
    <section className="relative w-full py-12 lg:py-16 bg-[#02A5E6] overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Subtle radial gradients for depth */}
          <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[100px]" />
          
          {/* Grid Pattern Overlay to match reference */}
          {/* <div className="absolute inset-0 opacity-[0.1]" 
             style={{ 
               backgroundImage: `
                 linear-gradient(to right, #ffffff 1px, transparent 1px),
                 linear-gradient(to bottom, #ffffff 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px' 
             }} 
          /> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT SIDE: Why Choose Us Narrative - Styled like reference image */}
          <motion.div 
            className="lg:w-5/12 lg:sticky lg:top-24 h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Pill Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold tracking-wide backdrop-blur-md mb-3 shadow-sm">
                <Sparkles className="w-4 h-4 fill-white text-white" />
                <span>Our Promise</span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-5xl lg:text-5xl font-bold text-white tracking-tight">
                Why Choose Us?
            </motion.h2>

            {/* Underline Bar */}
            <motion.div variants={itemVariants} className="w-24 h-1.5 bg-white rounded-full mt-3 mb-6" />

            <motion.div variants={itemVariants} className="space-y-3 text-lg lg:text-xl text-blue-50/90 font-light leading-relaxed">
                <p>
                  Say goodbye to downtime, unpredictable IT costs, and compliance worries.
                </p>
                <p>
                  We deliver a fully managed IT model designed for <strong className="text-white font-semibold">reliability</strong>, <strong className="text-white font-semibold">security</strong>, and <strong className="text-white font-semibold">scale</strong> so your team can focus on what matters most: growing the business.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
                <button className="group relative px-8 py-4 bg-white text-[#02A5E6] font-bold rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10">Partner With Us</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: What Makes Us Different Grid */}
          <motion.div 
            className="lg:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Header for the Grid Section */}
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-4">
                {/* <div className="h-px bg-white/30 flex-grow max-w-[50px]"></div> */}
                <h3 className="text-2xl font-bold text-white tracking-tight">What Makes Us Different</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {differentiators.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`
                           ${item.colSpan} 
                           group relative p-6 cursor-default
                           
                           /* UPDATED: Clearer Border & Stronger Glass Background */
                           bg-gradient-to-br from-white/20 to-white/5 
                           backdrop-blur-xl border border-white/30
                           shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]
                           
                           /* Hover State */
                           hover:bg-white hover:border-transparent hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
                           
                           transition-all duration-500 ease-in-out
                           
                           /* Morphing Shapes */
                           rounded-tl-xl rounded-br-xl
                           rounded-tr-[3rem] rounded-bl-[3rem]
                           hover:rounded-[1rem]
                           
                           overflow-hidden
                        `}
                    >
                        {/* 1. Large Watermark Number (Bottom Left) - Increased visibility */}
                        <div className="absolute -bottom-4 -left-2 text-[5rem] font-black text-white/10 group-hover:text-blue-50/50 transition-colors duration-500 select-none leading-none z-0">
                          0{index + 1}
                        </div>

                        {/* 2. Floating Orb Icon (Top Right Corner) */}
                        <div className="absolute top-0 right-0 p-4 z-10">
                           <div className={`
                             w-14 h-14 rounded-full flex items-center justify-center
                             bg-white/10 backdrop-blur-md border border-white/30 shadow-lg
                             group-hover:bg-[#02A5E6] group-hover:text-white group-hover:rotate-[360deg]
                             text-white transition-all duration-700 ease-out
                           `}>
                              {item.icon}
                           </div>
                        </div>

                        {/* 3. Content Container */}
                        <div className="relative z-10 flex flex-col h-full justify-between pt-2 pr-12 min-h-[140px]">
                            
                            {/* Decorative Top Line - Brighter initial state */}
                            <div className="w-12 h-1 bg-white/50 group-hover:bg-[#02A5E6] rounded-full mb-4 transition-colors duration-300" />

                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-slate-900 mb-2 transition-colors duration-300 drop-shadow-sm">
                                    {item.title}
                                </h3>
                                <p className="text-blue-50 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300 font-medium">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
          <section className="py-20 bg-gradient-to-br from-white to-brand-50 ">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your IT, Fully Managed</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
              From infrastructure to end-user support, cybersecurity, cloud, and compliance — we take full ownership of your IT environment.
            </p>
            <p className="text-lg text-slate-500 mt-6 font-medium">
              One partner. One predictable cost. <span className="text-brand-600 font-bold">Zero headaches.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;