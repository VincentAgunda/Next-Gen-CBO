import React, { useState } from "react";
import MembershipForm from "../components/MembershipForm";
import LoginForm from "../components/LoginForm";
import { motion, AnimatePresence } from "framer-motion";

// --- Animation Configs ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Membership() {
  const [tab, setTab] = useState("register");

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
            06 / Join The Ecosystem
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Ecosystem <br />
          <span className="text-[#03A10E]">Access.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Gain full rights under our constitution, secure structural mentorship, and access direct agricultural investment programs.
        </motion.p>
      </motion.header>

      {/* 02. TOGGLE CONTROLS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="px-[6vw] md:px-12 lg:px-24 py-16 max-w-[1440px] mx-auto border-b border-[#E5E5E5] bg-[#f4f4f4]"
      >
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          <button
            onClick={() => setTab("register")}
            className={`text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-300 pb-2 border-b-2 font-semibold ${
              tab === "register"
                ? "text-[#03A10E] border-[#03A10E]"
                : "text-[#757575] border-transparent hover:text-[#B0926A]"
            }`}
          >
            Register Profile
          </button>
          <button
            onClick={() => setTab("login")}
            className={`text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-300 pb-2 border-b-2 font-semibold ${
              tab === "login"
                ? "text-[#03A10E] border-[#03A10E]"
                : "text-[#757575] border-transparent hover:text-[#B0926A]"
            }`}
          >
            Secure Login
          </button>
        </div>
      </motion.div>

      {/* 03. FORM CONTAINER */}
      <section className="py-24 px-[6vw] md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl border border-[#E5E5E5] p-10 md:p-16 bg-transparent rounded-none"
            >
              {tab === "register" ? <MembershipForm /> : <LoginForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}