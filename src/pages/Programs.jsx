import React, { useState } from "react";
import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import { motion, AnimatePresence } from "framer-motion";

// Updated premium categories to encompass the entire CBO spectrum
const categories = ["All", "Agribusiness", "Youth Empowerment", "ICT & Digital", "Charity & Outreach"];

// --- Animation Configs ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
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
    <div className="font-sans text-black bg-[#f4f4f4] antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden min-h-screen">
      
      {/* 01. TYPOGRAPHIC HERO */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="pt-40 pb-24 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto border-b border-[#E5E5E5] transform-gpu"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
          <span className="w-8 h-[1px] bg-[#B0926A]"></span>
          <span className="block text-[#B0926A] text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em]">
            02 / Strategic Initiatives
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Operational <br />
          <span className="text-[#03A10E]">Programs.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </motion.p>
      </motion.header>

      {/* FILTER CONTROLS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="px-[6vw] md:px-12 lg:px-24 py-16 max-w-[1440px] mx-auto border-b border-[#E5E5E5] bg-[#f4f4f4]"
      >
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-300 pb-2 border-b-2 font-semibold ${
                filter === cat
                  ? "text-[#03A10E] border-[#03A10E]"
                  : "text-[#757575] border-transparent hover:text-[#B0926A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* PROGRAM GRID */}
      <section className="py-28 px-[6vw] md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((prog, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  key={prog.title || idx} // Ideally use a unique id from your data (e.g., prog.id)
                >
                  <ProgramCard {...prog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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