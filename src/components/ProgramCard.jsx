import React from "react";
import { motion } from "framer-motion";

export default function ProgramCard({ title, description, image }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white group cursor-pointer border border-[#E5E5E5] hover:border-black transition-colors duration-500 overflow-hidden flex flex-col h-full rounded-xs"
    >
      <div className="overflow-hidden relative aspect-[16/10]">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="h-full w-full object-cover transform-gpu transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-103" 
        />
        <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="text-2xl font-normal mb-3 text-black tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-[14px] text-[#666666] font-light leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        
        <div className="pt-6 flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-black group-hover:opacity-60 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="square" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}