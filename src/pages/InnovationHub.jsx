import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import SectionHeader from "../components/SectionHeader";
import { useForm } from "react-hook-form";

// Permanent Flagship Project Data with Official Attribution
const FLAGSHIP_MUSHROOM_PROJECT = {
  id: "flagship-white-button",
  title: "Automated Agaricus Bisporus Climate & Substrate Matrix",
  innovator: "Samuel Owino (UON Biology Graduate)",
  description: "An integrated vertical farming protocol engineered specifically for White Button Mushrooms (Agaricus bisporus). Utilizes IoT-driven ambient moisture controllers, CO2 scrubbing actuators, and automated substrate thermal-shocking to regulate mycelial colonization and fruiting body development with zero chemical intervention.",
  image: "/Innovation/mush2.png",
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
    <div className="bg-[#F5F5F7] min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header & Submit Button Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 pb-8 border-b border-[#e5e5e5]">
          <div className="max-w-xl">
            <SectionHeader 
              title="Innovation Hub" 
              subtitle="Pioneering systems and hardware architectures driving deep agricultural automation." 
              center={false}
            />
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="font-sans text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium bg-[#1a1a1a] text-white px-8 py-4 hover:bg-[#333333] transition-all duration-300"
          >
            {showForm ? "Close Form Protocol" : "Submit Enterprise Spec"}
          </button>
        </div>

        {/* Enterprise Spec Submission Form */}
        {showForm && (
          <div className="bg-white p-10 lg:p-16 border border-[#e5e5e5] max-w-3xl mx-auto mb-20 transition-all duration-500 shadow-sm">
            <h3 className="text-[#1a1a1a] font-sans text-2xl lg:text-3xl font-normal leading-[1.2] mb-8 tracking-tight">
              Propose New Agricultural System
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">Innovation Name</label>
                <input {...register("title", { required: true })} placeholder="e.g., automated ambient moisture controller" className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                {errors.title && <span className="text-red-500 text-xs mt-2 block">Field mandatory</span>}
              </div>

              <div>
                <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">Technical Abstract</label>
                <textarea {...register("description", { required: true })} rows={4} placeholder="Comprehensive description of process workflows and technical metrics..." className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                {errors.description && <span className="text-red-500 text-xs mt-2 block">Abstract mandatory</span>}
              </div>

              <div>
                <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">Core Problem Solved</label>
                <input {...register("problemSolved")} placeholder="e.g., high regional temperature shock mitigation" className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">Lead Innovator Name</label>
                  <input {...register("innovator", { required: true })} placeholder="Full Authorized Legal Name" className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                </div>
                <div>
                  <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">System Classification Category</label>
                  <input {...register("category")} placeholder="e.g., Mycology Automation" className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[#c2b4a3] font-sans text-[10px] uppercase tracking-[0.25em] mb-3 font-medium">Schematic Image URL</label>
                <input {...register("image")} placeholder="Cloudinary Asset Reference URL" className="w-full bg-[#FAFAFC] border border-[#e0e0e0] p-4 text-[15px] font-light text-[#757575] focus:outline-none focus:border-[#1a1a1a] transition-colors" />
              </div>

              <button type="submit" className="w-full border border-[#1a1a1a] bg-[#1a1a1a] text-white py-4 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#1a1a1a] transition-all duration-300 mt-4">
                Deploy System Blueprint for Authorization
              </button>
            </form>
          </div>
        )}

        {/* =========================================================================
            SECTION 1: FLAGSHIP PROJECT (White Button Mushroom - Always Visible)
        ========================================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#1a1a1a]"></span>
            <span className="text-[#1a1a1a] font-mono text-xs uppercase tracking-[0.25em] font-semibold">
              Flagship R&D Architecture
            </span>
          </div>
          
          <InnovationCard 
            title={FLAGSHIP_MUSHROOM_PROJECT.title}
            description={FLAGSHIP_MUSHROOM_PROJECT.description}
            innovator={FLAGSHIP_MUSHROOM_PROJECT.innovator}
            image={FLAGSHIP_MUSHROOM_PROJECT.image}
            status={FLAGSHIP_MUSHROOM_PROJECT.status}
          />
        </div>

        {/* =========================================================================
            SECTION 2: COMMUNITY SUBMISSIONS (Loaded from Firebase)
        ========================================================================== */}
        <div className="flex items-center gap-3 mb-8 pt-8 border-t border-[#e5e5e5]">
          <span className="h-[1px] w-8 bg-[#757575]"></span>
          <span className="text-[#757575] font-mono text-xs uppercase tracking-[0.25em] font-medium">
            Authenticated Community Ledgers ({innovations.length})
          </span>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 items-center w-full">
          {innovations.length === 0 ? (
            <div className="w-full max-w-[1280px] mx-auto bg-white border border-[#e5e5e5] p-16 text-center text-[#757575] font-light text-[15px]">
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
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
}