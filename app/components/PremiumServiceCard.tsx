"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
  bgImage?: string;
}

export const PremiumServiceCard = ({ title, description, Icon, index, bgImage }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative h-[420px] w-full rounded-[40px] bg-[#FDFBF7] p-8 border border-brand-black/5 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(232,106,47,0.15)] hover:border-brand-orange/30"
    >
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent" />
        </div>
      )}

      {/* Decorative Background Icon */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12 group-hover:rotate-0 group-hover:scale-125 origin-center">
        <Icon className="w-64 h-64 text-brand-black" strokeWidth={1.5} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-16 h-16 rounded-3xl bg-white border border-brand-black/5 flex items-center justify-center shadow-sm group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500 mb-8">
          <Icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-500" />
        </div>

        <h3 className="text-2xl font-black text-brand-black font-[var(--font-display)] mb-4 group-hover:text-brand-orange transition-colors duration-500">
          {title}
        </h3>
        
        <p className="text-brand-black/50 font-medium leading-relaxed mb-8 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          Discover Solutions 
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
