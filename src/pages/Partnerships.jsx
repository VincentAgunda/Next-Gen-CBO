import React, { useState } from "react";
import { partners } from "../data/partners";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { motion } from "framer-motion";

// --- Animation Configs ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Partnerships() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "partnership_requests"), { ...data, createdAt: new Date() });
      setMsg("Partnership request securely catalogued.");
      reset();
    } catch (err) {
      console.error("Partnership tracking error:", err);
    }
  };

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
            05 / Consortium Networks
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Institutional <br />
          <span className="text-[#03A10E]">Alliances.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Co-building high-value sustainable agribusiness systems, advanced research pipelines, and empowering agricultural value hubs with global frameworks.
        </motion.p>
      </motion.header>

      {/* 02. PARTNERS LOGOS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[1440px] mx-auto border-b border-[#E5E5E5] py-20 px-[6vw]"
      >
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-50 grayscale filter contrast-125">
          {partners && partners.map((p, i) => (
            <img key={i} src={p.logo} alt={p.name} className="h-10 md:h-12 object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
          ))}
        </div>
      </motion.section>

      {/* 03. PARTNERSHIP FORM */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto"
      >
        <motion.div variants={fadeInUp} className="max-w-4xl border border-[#E5E5E5] p-10 md:p-16 bg-transparent rounded-none">
          <div className="space-y-4 mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B0926A] block font-semibold">Alliance Charter</span>
            <h3 className="text-3xl font-normal text-black">Initiate Partnership Affiliation</h3>
            <p className="text-[16px] text-black opacity-85 font-normal max-w-lg">Register your corporate framework to establish shared cooperative projects and operational setups.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <input
                {...register("organization")}
                placeholder="Organization Name"
                required
                className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
              />
              <input
                {...register("contactPerson")}
                placeholder="Contact Delegate / Title"
                required
                className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
              />
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="Official Corporate Email Address"
              required
              className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
            />
            <textarea
              {...register("proposal")}
              placeholder="Outline structural terms of the proposed developmental collaboration or joint venture scope..."
              rows="4"
              className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors resize-none rounded-none placeholder:text-[#A3A3A3]"
            />
            
            <div className="pt-4">
              <button className="border border-black text-black px-12 py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-none">
                Submit Request
              </button>
              {msg && (
                <p className="text-[10px] uppercase tracking-wider text-[#03A10E] font-semibold mt-6">{msg}</p>
              )}
            </div>
          </form>
        </motion.div>
      </motion.section>

    </div>
  );
}