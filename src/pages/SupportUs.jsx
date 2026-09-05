import React, { useState } from "react";
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

export default function SupportUs() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const volunteerSubmit = async (data) => {
    try {
      await addDoc(collection(db, "volunteers"), { ...data, status: "pending", createdAt: new Date() });
      setMsg("Volunteer record registered under pending verification status.");
      reset();
    } catch (err) {
      console.error("Error registering volunteer:", err);
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
            04 / Resource Mobilization
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Mission <br />
          <span className="text-[#03A10E]">Framework.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Invest in youth-led scientific innovation, strategic local field hubs, and transparent socioeconomic transformation projects.
        </motion.p>
      </motion.header>

      {/* 02. INITIATIVES GRID */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto space-y-24"
      >
        
        {/* Donation Block */}
        <motion.div variants={fadeInUp} className="max-w-2xl border border-[#E5E5E5] p-10 md:p-14 bg-transparent rounded-none">
          <div className="border-b border-[#E5E5E5] pb-6 mb-8 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold block">M-Pesa Integration Gateway</span>
            <h3 className="text-2xl md:text-3xl font-normal text-black">Direct Institutional Donation</h3>
          </div>
          
          <div className="space-y-6 text-sm font-normal text-black opacity-85">
            <div className="flex justify-between border-b border-[#E5E5E5] pb-4">
              <span className="text-[#757575] uppercase tracking-wider text-[10px] font-semibold">Paybill Number</span>
              <span className="font-semibold text-black tracking-widest">247247</span>
            </div>
            <div className="flex justify-between border-b border-[#E5E5E5] pb-4">
              <span className="text-[#757575] uppercase tracking-wider text-[10px] font-semibold">Account Number</span>
              <span className="font-semibold text-black tracking-widest">0600187518823</span>
            </div>
          </div>

          <div className="pt-8">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#757575] font-semibold block">
              Online card processing via Flutterwave / Stripe pending clearance.
            </span>
          </div>
        </motion.div>

        {/* Volunteer Block */}
        <motion.div variants={fadeInUp} className="max-w-4xl border border-[#E5E5E5] p-10 md:p-16 bg-transparent rounded-none">
          <div className="space-y-4 mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B0926A] block font-semibold">Human Capital</span>
            <h3 className="text-3xl font-normal text-black">Join the Volunteer Cadre</h3>
            <p className="text-[16px] text-black opacity-85 font-normal max-w-lg">Lend your technical expertise, research focus, or operations capability to regional field setups.</p>
          </div>

          <form onSubmit={handleSubmit(volunteerSubmit)} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <input
                {...register("fullName")}
                placeholder="Full Legal Name"
                required
                className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
              />
            </div>
            <input
              {...register("phone")}
              placeholder="Mobile Number (M-Pesa Registered Code)"
              className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors rounded-none placeholder:text-[#A3A3A3]"
            />
            <textarea
              {...register("message")}
              placeholder="Specify your field of interest or technical statement of motivation..."
              rows="4"
              className="w-full bg-transparent border-b border-[#E5E5E5] py-4 text-sm focus:outline-none focus:border-[#03A10E] transition-colors resize-none rounded-none placeholder:text-[#A3A3A3]"
            />
            
            <div className="pt-4">
              <button className="border border-black text-black px-12 py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-none">
                Submit Application
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