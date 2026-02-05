import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Lightbulb, Users, Target, BookOpen } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  className: string;
  bgSvg: React.ReactNode;
}

const values: ValueItem[] = [
  {
    id: 'innovation',
    title: "Innovation with Purpose",
    description: "We build solutions that truly move life sciences forward.",
    icon: Lightbulb,
    className: "md:col-span-2 md:row-span-1",
    bgSvg: (
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M200 50V350M50 200H350" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    )
  },
  {
    id: 'integrity',
    title: "Integrity & Transparency",
    description: "We do what’s right, openly and honestly.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
    bgSvg: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 20L180 60V140L100 180L20 140V60L100 20Z" stroke="currentColor" strokeWidth="1" />
        <path d="M100 40L160 70V130L100 160L40 130V70L100 40Z" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <path d="M100 0V200M0 100H200" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
      </svg>
    )
  },
  {
    id: 'collaboration',
    title: "Collaboration",
    description: "Diverse perspectives fuel our best work.",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
    bgSvg: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="130" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="70" r="50" stroke="currentColor" strokeWidth="1" />
        <path d="M100 100L150 150M50 50L100 100" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    id: 'ownership',
    title: "Ownership & Accountability",
    description: "We take pride in driving outcomes, not just tasks.",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
    bgSvg: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="1" />
        <rect x="60" y="60" width="80" height="80" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="0.2" />
        <line x1="200" y1="0" x2="0" y2="200" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    )
  },
  {
    id: 'learning',
    title: "Continuous Learning",
    description: "We grow by experimenting, exploring and leveling up.",
    icon: BookOpen,
    className: "md:col-span-1 md:row-span-1",
    bgSvg: (
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 180C20 180 60 140 100 140C140 140 180 180 180 180" stroke="currentColor" strokeWidth="1" />
        <path d="M20 140C20 140 60 100 100 100C140 100 180 140 180 140" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <path d="M20 100C20 100 60 60 100 60C140 60 180 100 180 100" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="100" cy="40" r="10" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

const MagneticCard: React.FC<{ item: ValueItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-6deg", "6deg"]);
  const translateX = useTransform(mouseX, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], ["-10px", "10px"]);
  const bgTranslateX = useTransform(mouseX, [-0.5, 0.5], ["15px", "-15px"]);
  const bgTranslateY = useTransform(mouseY, [-0.5, 0.5], ["15px", "-15px"]);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const relX = (e.clientX - rect.left) / width - 0.5;
    const relY = (e.clientY - rect.top) / height - 0.5;
    x.set(relX);
    y.set(relY);
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const Icon = item.icon;
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group h-full ${item.className}`}
    >
      <div className={`relative h-full w-full p-6 rounded-[2rem] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[260px] border ${isHovered ? 'bg-white border-transparent shadow-2xl scale-[1.02]' : 'bg-white/10 backdrop-blur-xl border-white/20 shadow-xl'}`}>
        <motion.div style={{ x: bgTranslateX, y: bgTranslateY, translateZ: -15 }} className={`absolute -right-8 -bottom-8 transition-colors duration-700 pointer-events-none opacity-10 group-hover:opacity-15 ${isHovered ? 'text-[#02A5E6]' : 'text-white'}`}>
          {item.bgSvg}
        </motion.div>
        <div className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" style={{ left: glowPos.x, top: glowPos.y, width: '400px', height: '400px', background: `radial-gradient(circle, ${isHovered ? 'rgba(2, 165, 230, 0.1)' : 'rgba(255, 255, 255, 0.05)'} 0%, transparent 70%)`, transform: 'translate(-50%, -50%)' }} />
        <div className="relative z-10">
          <motion.div style={{ x: translateX, y: translateY, translateZ: 40 }} className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${isHovered ? 'bg-[#02A5E6] text-white scale-105' : 'bg-white text-[#02A5E6]'}`}>
            <Icon size={24} strokeWidth={2} />
          </motion.div>
          <motion.h3 style={{ translateZ: 30 }} className={`text-xl md:text-lg font-bold mb-3 tracking-normal transition-colors duration-500 ${isHovered ? 'text-slate-900' : 'text-white'}`}>
            {item.title}
          </motion.h3>
          <motion.p style={{ translateZ: 20 }} className={`text-base md:text-lg leading-relaxed font-normal tracking-normal transition-colors duration-500 ${isHovered ? 'text-slate-600' : 'text-white/80'}`}>
            {item.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const CultureAndValues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener('mousemove', handleGlobalMove);
    return () => window.removeEventListener('mousemove', handleGlobalMove);
  }, []);
  return (
    <section ref={containerRef} className="relative bg-[#02A5E6] min-h-screen py-16 px-6 sm:px-12 lg:px-24 flex items-center overflow-hidden">
      <div className="absolute pointer-events-none transition-transform duration-500 ease-out z-0 hidden lg:block" style={{ left: mousePos.x, top: mousePos.y, width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -50, 0], rotate: [0, 360] }} transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }} className="absolute border border-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${80 + i * 80}px`, height: `${80 + i * 80}px` }} />
        ))}
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <header className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-white text-4xl md:text-4xl font-bold mb-4 tracking-normal"
          >
            Culture & Value
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="w-32 h-1 bg-white mx-auto mb-10 rounded-full" 
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="text-white text-lg md:text-xl font-normal max-w-5xl leading-relaxed mx-auto tracking-normal"
          >
          We believe that innovation thrives where people feel supported, trusted and inspired. Our culture is built on:
            {/* Work with talented people, use cutting-edge technologies and shape solutions that advance global healthcare and scientific progress. At Fipsar, you'll grow your skills, amplify your strengths and contribute to projects that create real-world change. */}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {values.map((item, index) => (
            <MagneticCard key={item.id} item={item} index={index} />
          ))}
        </div>
        
        {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] font-bold tracking-widest uppercase gap-6">
          <div className="flex items-center gap-2"><span className="w-1 h-1 bg-white/40 rounded-full" />Organization Standards</div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Integrity', 'Innovation', 'Collaboration', 'Ownership', 'Learning'].map(label => (
              <span key={label} className="hover:text-white transition-all cursor-pointer">{label}</span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CultureAndValues;