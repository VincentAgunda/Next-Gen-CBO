import React from "react";
import { motion } from "framer-motion";

export default function ProgramCard({ title, description, image, category }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white group cursor-pointer border border-neutral-200 hover:border-[#C0A175] hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col h-full rounded-none"
    >
      <div className="overflow-hidden relative aspect-[16/10] bg-neutral-100">
        <img 
          src={image || "/api/placeholder/800/500"} 
          alt={title} 
          loading="lazy"
          className="h-full w-full object-cover transform-gpu transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-neutral-900/[0.02] group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Optional Category Label if passed in */}
          {category && (
            <span className="text-[#C0A175] font-light text-[10px] uppercase tracking-[0.25em] mb-4 block">
              {category}
            </span>
          )}
          <h3 className="text-2xl font-normal mb-4 text-neutral-900 tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        
        <div className="pt-8 mt-4 border-t border-transparent group-hover:border-neutral-100 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-900 group-hover:text-[#C0A175] transition-all duration-300">
          <span>Explore Program</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}