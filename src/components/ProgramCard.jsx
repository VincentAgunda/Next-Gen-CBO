import React from "react";
import { motion } from "framer-motion";

export default function ProgramCard({ title, description, image, category }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full antialiased"
    >
      <div className="relative flex flex-col w-full h-full min-h-[460px] overflow-hidden rounded-none bg-white border border-neutral-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#03A10E] cursor-pointer">
        
        {/* ============================================================
            IMAGE SECTION
        ============================================================ */}
        <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100 border-b border-neutral-200 group-hover:border-[#03A10E]/20 transition-colors duration-700">
          <img 
            src={image || "/api/placeholder/800/500"} 
            alt={title} 
            loading="lazy"
            className="h-full w-full object-cover transform-gpu transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
          />
          {/* Subtle overlay that fades out on hover */}
          <div className="absolute inset-0 bg-neutral-900/[0.03] group-hover:bg-transparent transition-colors duration-700" />
        </div>

        {/* ============================================================
            CONTENT CONTAINER
        ============================================================ */}
        <div className="relative z-10 flex flex-col flex-grow p-8 sm:p-10">
          
          {/* ----------------------------------------------------------
              CATEGORY META
          ----------------------------------------------------------- */}
          <div className="mb-5">
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none min-h-[12px]">
              {category || "Program"}
            </span>
          </div>

          {/* ----------------------------------------------------------
              MAIN TITLE
          ----------------------------------------------------------- */}
          <div className="mb-5">
            <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter leading-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-[#03A10E]">
              {title}
            </h3>
          </div>

          {/* ----------------------------------------------------------
              DESCRIPTION
          ----------------------------------------------------------- */}
          <div className="mb-10">
            <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* ==========================================================
              BOTTOM ACTION ROW
          =========================================================== */}
          <div className="mt-auto pt-6 border-t border-neutral-200 group-hover:border-[#03A10E]/20 transition-colors duration-700 flex items-center justify-between w-full">
            
            {/* TEXT */}
            <div className="transition-all duration-500 mb-0.5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 group-hover:text-neutral-900 font-semibold transition-colors duration-500">
                Explore Program
              </span>
            </div>

            {/* ACTION ARROW */}
            <div className="flex-shrink-0">
              <svg 
                className="w-4 h-4 text-neutral-900 transition-all duration-500 ease-out group-hover:text-[#03A10E] group-hover:translate-x-1.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            
          </div>
        </div>

        {/* ============================================================
            BOTTOM ACCENT
        ============================================================ */}
        <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#03A10E] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full z-20" />
      </div>
    </motion.article>
  );
}