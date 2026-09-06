import React, { useState } from "react";
import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import { motion, AnimatePresence } from "framer-motion";

// Updated premium categories
const categories = ["All", "Agribusiness", "Youth Empowerment", "ICT & Digital", "Charity & Outreach"];

// --- Animation Configs ---
// Custom easing for an ultra-smooth, premium feel
const smoothTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: smoothTransition 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export default function Programs() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <div className="font-sans text-black bg-[#f4f4f4] antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden min-h-screen flex flex-col items-center">
      
      {/* 01. TYPOGRAPHIC HERO - CENTERED */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full pt-40 pb-24 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] flex flex-col items-center text-center border-b border-[#E5E5E5] transform-gpu"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-[#B0926A]"></span>
          <span className="block text-[#B0926A] text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em]">
            02 / Strategic Initiatives
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-10">
          Operational <br />
          <span className="text-[#03A10E]">Programs.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-2xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </motion.p>
      </motion.header>

      {/* 02. FILTER CONTROLS - PILL STYLE & CENTERED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smoothTransition, delay: 0.4 }}
        className="w-full px-[6vw] md:px-12 lg:px-24 py-12 max-w-[1440px] flex justify-center border-b border-[#E5E5E5] bg-[#f4f4f4]"
      >
        <div className="relative flex flex-wrap justify-center items-center gap-1 sm:gap-2 bg-[#EAEAEA] rounded-3xl lg:rounded-full p-1.5 shadow-inner max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative z-10 px-4 sm:px-6 py-2.5 text-[12px] md:text-[13px] font-medium transition-colors duration-300 rounded-full whitespace-nowrap ${
                filter === cat ? "text-white" : "text-[#555] hover:text-black"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute inset-0 bg-[#1C1C1E] rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 03. PROGRAM GRID */}
      <section className="w-full py-28 px-[6vw] md:px-12 lg:px-24 flex justify-center">
        <div className="w-full max-w-[1440px]">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((prog, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={prog.id || prog.title || idx} 
                >
                  <ProgramCard {...prog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smoothTransition}
              className="text-center py-32 text-[#757575] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold"
            >
              No programs currently scheduled in this tier.
            </motion.div>
          )}
        </div>
      </section>
      
    </div>
  );
}