import React, { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";
import { motion, AnimatePresence } from "framer-motion";

// --- Animation Configs ---
// Custom easing for an ultra-smooth, premium feel
const smoothTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Membership() {
  const [tab, setTab] = useState("register");

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
            06 / Join The Ecosystem
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-10">
          Ecosystem <br />
          <span className="text-[#03A10E]">Access.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-2xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Gain full rights under our constitution, secure structural mentorship, and access direct agricultural investment programs.
        </motion.p>
      </motion.header>

      {/* 02. TOGGLE CONTROLS - PILL STYLE & CENTERED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...smoothTransition, delay: 0.4 }}
        className="w-full px-[6vw] md:px-12 lg:px-24 py-12 max-w-[1440px] flex justify-center border-b border-[#E5E5E5] bg-[#f4f4f4]"
      >
        <div className="relative flex items-center bg-[#EAEAEA] rounded-full p-1.5 shadow-inner">
          
          <button
            onClick={() => setTab("register")}
            className={`relative z-10 px-8 py-2.5 text-[13px] md:text-sm font-medium transition-colors duration-300 rounded-full ${
              tab === "register" ? "text-white" : "text-[#555] hover:text-black"
            }`}
          >
            Register Profile
            {tab === "register" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#1C1C1E] rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>

          <button
            onClick={() => setTab("login")}
            className={`relative z-10 px-8 py-2.5 text-[13px] md:text-sm font-medium transition-colors duration-300 rounded-full ${
              tab === "login" ? "text-white" : "text-[#555] hover:text-black"
            }`}
          >
            Secure Login
            {tab === "login" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#1C1C1E] rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>

        </div>
      </motion.div>

      {/* 03. FORM CONTAINER - CENTERED */}
      <section className="w-full py-24 px-[6vw] md:px-12 lg:px-24 flex justify-center">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full border border-[#E5E5E5] p-10 md:p-16 bg-transparent rounded-none"
            >
              {tab === "register" ? <MembershipForm /> : <LoginForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}