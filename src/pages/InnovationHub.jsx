import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import { useForm } from "react-hook-form";

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
    <div className="bg-[#f4f4f4] min-h-screen py-28 px-6 lg:px-12 text-neutral-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header & Submit Control Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 pb-8 border-b border-neutral-200">
          <div className="max-w-xl">
            <span className="text-[#C0A175] font-medium text-xs uppercase tracking-[0.3em] block mb-3">
              Technical Directory
            </span>
            <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight mb-4">
              Innovation Hub
            </h1>
            <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed">
              Pioneering systems and hardware architectures driving deep agricultural automation.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-block border border-neutral-900 bg-neutral-900 text-white hover:bg-[#C0A175] hover:border-[#C0A175] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors duration-300"
          >
            {showForm ? "Close Form Protocol" : "Submit Enterprise Spec"}
          </button>
        </div>

        {/* Enterprise Spec Submission Form */}
        {showForm && (
          <div className="bg-white p-10 lg:p-16 border border-neutral-200 max-w-3xl mx-auto mb-20 shadow-sm transition-all duration-500">
            <span className="text-[#C0A175] font-medium text-xs uppercase tracking-[0.3em] block mb-2">
              Blueprint Submission
            </span>
            <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 tracking-tight mb-8">
              Propose New Agricultural System
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                  Innovation Name
                </label>
                <input 
                  {...register("title", { required: true })} 
                  placeholder="e.g., Automated Ambient Moisture Controller" 
                  className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                />
                {errors.title && <span className="text-red-500 text-xs mt-2 block">Field mandatory</span>}
              </div>

              <div>
                <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                  Technical Abstract
                </label>
                <textarea 
                  {...register("description", { required: true })} 
                  rows={4} 
                  placeholder="Comprehensive description of process workflows and technical metrics..." 
                  className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                />
                {errors.description && <span className="text-red-500 text-xs mt-2 block">Abstract mandatory</span>}
              </div>

              <div>
                <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                  Core Problem Solved
                </label>
                <input 
                  {...register("problemSolved")} 
                  placeholder="e.g., High regional temperature shock mitigation" 
                  className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                    Lead Innovator Name
                  </label>
                  <input 
                    {...register("innovator", { required: true })} 
                    placeholder="Full Authorized Legal Name" 
                    className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                    System Classification Category
                  </label>
                  <input 
                    {...register("category")} 
                    placeholder="e.g., Mycology Automation" 
                    className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em] mb-2">
                  Schematic Image URL
                </label>
                <input 
                  {...register("image")} 
                  placeholder="Cloudinary Asset Reference URL" 
                  className="w-full bg-[#fbfbfb] border border-neutral-300 p-4 text-sm font-light text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#C0A175] transition-colors" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full border border-neutral-900 bg-neutral-900 text-white hover:bg-[#C0A175] hover:border-[#C0A175] py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 mt-4"
              >
                Deploy System Blueprint for Authorization
              </button>
            </form>
          </div>
        )}

        {/* SECTION 1: FLAGSHIP PROJECT */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#C0A175]"></span>
            <span className="text-[#C0A175] font-medium text-xs uppercase tracking-[0.25em]">
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
        </div>

        {/* SECTION 2: COMMUNITY SUBMISSIONS */}
        <div className="flex items-center gap-3 mb-8 pt-12 border-t border-neutral-200">
          <span className="h-[1px] w-8 bg-neutral-400"></span>
          <span className="text-neutral-400 font-medium text-xs uppercase tracking-[0.25em]">
            Authenticated Community Ledgers ({innovations.length})
          </span>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 items-center w-full">
          {innovations.length === 0 ? (
            <div className="w-full bg-white border border-neutral-200 p-16 text-center text-neutral-500 font-light text-sm lg:text-base">
              No additional community innovations verified on ledger yet. Submit a system specification above to initiate technical review.
            </div>
          ) : (
            innovations.map((inv) => (
              <InnovationCard 
                key={inv.id} 
                title={inv.title}
                description={inv.description}
                innovator={inv.innovator}
                image={inv.image || "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800"} 
                status={inv.status === "approved" ? "Verified System" : (inv.category || "Active Prototype")} 
                category={inv.category}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}