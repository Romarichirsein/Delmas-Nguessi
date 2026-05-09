import React from "react";
import { motion } from "motion/react";

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  image?: string;
}

export default function HeroSection({ subtitle, title, description, image }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden mb-20 transition-colors duration-500">
      <div className="absolute inset-0 z-0 text-text-main">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={image || "/images/486192177_626382383488141_7325554881521288092_n.jpg"} 
          className="w-full h-full object-cover opacity-40 shadow-2xl"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl bg-bg-main/5 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-border-main shadow-2xl"
        >
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold block mb-4 italic">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight italic text-text-main">
            {title}
          </h1>
          <p className="text-text-main/60 text-lg font-light leading-relaxed max-w-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
