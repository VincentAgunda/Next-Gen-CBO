import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

// Permanent Flagship Project Data with Official Attribution
const FLAGSHIP_MUSHROOM_PROJECT = {
  id: "flagship-white-button",
  title: "Automated Agaricus Bisporus Climate & Substrate Matrix",
  innovator: "Samuel Owino (UON Biology Graduate)",
  description: "An integrated vertical farming protocol engineered specifically for White Button Mushrooms (Agaricus bisporus). Utilizes IoT-driven ambient moisture controllers, CO2 scrubbing actuators, and automated substrate thermal-shocking to regulate mycelial colonization and fruiting body development with zero chemical intervention.",
  image: "/Innovation/mush4.png",
  status: "Deployed Protocol",
  category: "Mycology Automation"
};

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

export default function InnovationHub() {
  const [innovations, setInnovations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const q = query(collection(db, "innovation_submissions"), where("status", "==", "approved"));
    const unsub = onSnapshot(q, (snap) => {
      setInnovations(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "innovation_submissions"), {
        ...data,
        status: "pending",
        createdAt: new Date(),
      });
      reset();
      setShowForm(false);
      alert("Operational deployment blueprint submitted successfully for technical verification review!");
    } catch (err) {
      console.error("Submission anomaly detected:", err);
    }
  };

  return (
    <div className="font-sans text-black bg-[#f4f4f4] antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden min-h-screen py-28 px-[6vw] md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header & Submit Control Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 pb-8 border-b border-[#E5E5E5] transform-gpu"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#B0926A]"></span>
              <span className="block text-[#B0926A] text-[13x] md:text-xs font-normal uppercase tracking-[0.25em]">
                Technical Directory
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-normal leading-[0.95] tracking-tight text-black mb-6">
              Innovation <br />
              <span className="text-[#03A10E]">Hub.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
              Pioneering systems and hardware architectures driving deep agricultural automation.
            </motion.p>
          </div>

          <motion.button
            variants={fadeInUp}
            onClick={() => setShowForm(!showForm)}
            className="inline-block border border-black bg-black text-white hover:bg-[#B0926A] hover:border-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold px-8 py-4 transition-colors duration-300"
          >
            {showForm ? "Close Form Protocol" : "Submit Enterprise Spec"}
          </motion.button>
        </motion.div>

        {/* Enterprise Spec Submission Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-white p-10 lg:p-16 border border-[#E5E5E5] max-w-3xl mx-auto mb-20 shadow-sm">
                <span className="text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] block mb-2">
                  Blueprint Submission
                </span>
                <h3 className="text-2xl lg:text-3xl font-normal text-black tracking-tight mb-8">
                  Propose New Agricultural System
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                      Innovation Name
                    </label>
                    <input 
                      {...register("title", { required: true })} 
                      placeholder="e.g., Automated Ambient Moisture Controller" 
                      className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors" 
                    />
                    {errors.title && <span className="text-red-500 text-xs mt-2 block">Field mandatory</span>}
                  </div>

                  <div>
                    <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                      Technical Abstract
                    </label>
                    <textarea 
                      {...register("description", { required: true })} 
                      rows={4} 
                      placeholder="Comprehensive description of process workflows and technical metrics..." 
                      className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors resize-none" 
                    />
                    {errors.description && <span className="text-red-500 text-xs mt-2 block">Abstract mandatory</span>}
                  </div>

                  <div>
                    <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                      Core Problem Solved
                    </label>
                    <input 
                      {...register("problemSolved")} 
                      placeholder="e.g., High regional temperature shock mitigation" 
                      className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                        Lead Innovator Name
                      </label>
                      <input 
                        {...register("innovator", { required: true })} 
                        placeholder="Full Authorized Legal Name" 
                        className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                        System Classification
                      </label>
                      <input 
                        {...register("category")} 
                        placeholder="e.g., Mycology Automation" 
                        className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-3">
                      Schematic Image URL
                    </label>
                    <input 
                      {...register("image")} 
                      placeholder="Cloudinary Asset Reference URL" 
                      className="w-full bg-white border border-[#E5E5E5] p-4 text-sm font-normal text-black placeholder-[#757575] focus:outline-none focus:border-[#B0926A] transition-colors" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full border border-black bg-black text-white hover:bg-[#03A10E] hover:border-[#03A10E] py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold transition-colors duration-300 mt-4"
                  >
                    Deploy System Blueprint for Authorization
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 1: FLAGSHIP PROJECT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="h-[1px] w-12 bg-[#B0926A]"></span>
            <span className="text-[#B0926A] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em]">
              Flagship R&D Architecture
            </span>
          </div>
          
          <InnovationCard 
            title={FLAGSHIP_MUSHROOM_PROJECT.title}
            description={FLAGSHIP_MUSHROOM_PROJECT.description}
            innovator={FLAGSHIP_MUSHROOM_PROJECT.innovator}
            image={FLAGSHIP_MUSHROOM_PROJECT.image}
            status={FLAGSHIP_MUSHROOM_PROJECT.status}
            category={FLAGSHIP_MUSHROOM_PROJECT.category}
          />
        </motion.div>

        {/* SECTION 2: COMMUNITY SUBMISSIONS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12 pt-16 border-t border-[#E5E5E5]"
        >
          <span className="h-[1px] w-12 bg-[#757575]"></span>
          <span className="text-[#757575] font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em]">
            Authenticated Community Ledgers ({innovations.length})
          </span>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-16 items-center w-full">
          {innovations.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full bg-white border border-[#E5E5E5] p-16 text-center text-[#757575] font-normal text-[16px]"
            >
              No additional community innovations verified on ledger yet. Submit a system specification above to initiate technical review.
            </motion.div>
          ) : (
            <AnimatePresence>
              {innovations.map((inv) => (
                <motion.div
                  key={inv.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <InnovationCard 
                    title={inv.title}
                    description={inv.description}
                    innovator={inv.innovator}
                    image={inv.image || "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800"} 
                    status={inv.status === "approved" ? "Verified System" : (inv.category || "Active Prototype")} 
                    category={inv.category}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

      </div>
    </div>
  );
}