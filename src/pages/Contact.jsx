import React, { useState } from "react";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { motion } from "framer-motion";

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

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "contact_messages"), { ...data, createdAt: new Date() });
      setSent(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="font-sans text-black bg-[#FAFAFC] antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden min-h-screen">
      
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
            03 / Secretariat
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Contact <br />
          <span className="text-[#03A10E]">Command.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Route structural ecosystem questions or operational ledger verifications directly to our registered Makueni office location.
        </motion.p>
      </motion.header>

      {/* 02. CONTENT GRID */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="py-24 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Core Identity Parameters Panel */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6 bg-white p-8 border border-gray-200/70 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#03A10E] transition-colors duration-300">
                  <Phone className="text-[#03A10E] group-hover:text-white transition-colors text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#B0926A] font-medium">Voice Prefix Line</span>
                  <span className="text-sm font-medium text-black">+254 792 823 182</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#03A10E] transition-colors duration-300">
                  <Email className="text-[#03A10E] group-hover:text-white transition-colors text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#B0926A] font-medium">Electronic Mail Routing</span>
                  <span className="text-sm font-medium text-black">info@ngyar-agri.org</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#03A10E] transition-colors duration-300">
                  <LocationOn className="text-[#03A10E] group-hover:text-white transition-colors text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#B0926A] font-medium">Headquarters Seat</span>
                  <span className="text-sm font-medium text-black leading-tight">
                    Emali-Sultan Humud Municipality, Makueni County, Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Precision Premium Embedded Map Frame */}
            <div className="h-72 bg-neutral-100 rounded-2xl overflow-hidden shadow-md border border-gray-200/60 relative group">
              <iframe
                title="NGYAR Makueni Operations Command Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.5323204987!2d37.4589212!3d-2.2789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1843b3531bfa28b5%3A0x63cd94f877bf7a16!2sEmali!5e0!3m2!1sen!2ske!4v1719748000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) brightness(0.96)" }}
                allowFullScreen
                loading="lazy"
                className="group-hover:scale-[1.01] transition-transform duration-700"
              ></iframe>
            </div>
          </div>

          {/* Secure Messaging Dispatch Frame */}
          <div className="lg:col-span-7 bg-white p-12 border border-gray-200/80 rounded-2xl shadow-xl space-y-6">
            <h2 className="text-2xl font-normal tracking-tight text-black">Transmit Digital Correspondence</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#B0926A] mb-2">Your Identity Name</label>
                <input {...register("name")} placeholder="Full Corporate / Individual Legal Title" required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#B0926A] mb-2">Return Mail Link</label>
                <input {...register("email")} type="email" placeholder="correspondent@domain.com" required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#B0926A] mb-2">Secure Text Message Body</label>
                <textarea {...register("message")} rows={6} placeholder="Provide explicit details regarding your structural request or consultation terms..." required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors" />
              </div>
              <button className="w-full bg-black text-white py-4 text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#03A10E] transition-all duration-300 shadow-md">
                Dispatch Correspondence Assets
              </button>
            </form>
            {sent && (
              <div className="p-4 bg-[#03A10E]/10 text-[#03A10E] text-xs font-medium rounded-xl border border-[#03A10E]/20 transition-all animate-fade-in">
                Data packet safely dispatched into the communications queue.
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}