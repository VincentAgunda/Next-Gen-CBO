import React, { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import { useForm } from "react-hook-form";

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
    <div className="bg-[#F5F5F7] min-h-screen pt-40 pb-24 px-6 md:px-12 lg:px-24 antialiased selection:bg-neutral-900 selection:text-white">
      <div className="max-w-[1400px] mx-auto">
        
        <header className="mb-20">
          <span className="block text-[#B0926A] text-[13px] font-medium mb-8 uppercase tracking-[0.2em]">
            R&D Pipeline
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-light leading-[0.95] tracking-tight text-neutral-900 mb-8">
            The Innovation Hub.
          </h1>
          <p className="max-w-3xl text-neutral-500 font-light text-[18px] md:text-[22px] leading-relaxed">
            Pioneering systems and hardware architectures driving deep agricultural automation.
          </p>
        </header>

        {/* Massive Toggle Action */}
        <div className="divide-y divide-neutral-300 border-t border-b border-neutral-300 mb-20">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full text-left group py-12 lg:py-16 flex items-center justify-between transition-all duration-500 ease-out hover:px-8"
          >
            <span className="text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-500 tracking-tight">
              {showForm ? "Close Form Protocol" : "Submit Enterprise Spec"}
            </span>
            <svg className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-neutral-400 group-hover:text-[#B0926A] transform transition-all duration-500 ease-out ${showForm ? "rotate-45" : "group-hover:translate-x-4 group-hover:-translate-y-4"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </button>
        </div>

        {/* Form Expansion Area */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showForm ? "max-h-[2000px] opacity-100 mb-24" : "max-h-0 opacity-0 mb-0"}`}>
          <div className="bg-white p-10 lg:p-20 border border-neutral-300 max-w-4xl shadow-xl shadow-black/5">
            <h3 className="text-neutral-900 font-sans text-3xl lg:text-4xl font-light leading-[1.2] mb-12 tracking-tight">
              Propose New System Architecture
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Innovation Name</label>
                <input {...register("title", { required: true })} placeholder="e.g., Automated Ambient Moisture Controller" className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors placeholder:text-neutral-300" />
                {errors.title && <span className="text-red-500 text-xs mt-2 block tracking-wider">Field mandatory</span>}
              </div>

              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Technical Abstract</label>
                <textarea {...register("description", { required: true })} rows={3} placeholder="Comprehensive description of process workflows and technical metrics..." className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors resize-none placeholder:text-neutral-300" />
                {errors.description && <span className="text-red-500 text-xs mt-2 block tracking-wider">Abstract mandatory</span>}
              </div>

              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Core Problem Solved</label>
                <input {...register("problemSolved")} placeholder="e.g., High Regional Temperature Shock Mitigation" className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors placeholder:text-neutral-300" />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Lead Innovator</label>
                  <input {...register("innovator", { required: true })} placeholder="Full Authorized Legal Name" className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors placeholder:text-neutral-300" />
                </div>
                <div>
                  <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Classification Category</label>
                  <input {...register("category")} placeholder="e.g., Mycology Automation" className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors placeholder:text-neutral-300" />
                </div>
              </div>

              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Schematic Image URL</label>
                <input {...register("image")} placeholder="Cloudinary Asset Reference URL" className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors placeholder:text-neutral-300" />
              </div>

              <div className="pt-8">
                <button type="submit" className="group flex items-center justify-between w-full border border-neutral-900 bg-neutral-900 text-white px-8 py-6 text-[11px] lg:text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-neutral-900 transition-all duration-500 ease-out">
                  <span>Deploy System Blueprint</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Ledger Grid */}
        <div className="w-full border-t border-neutral-300 pt-16">
          <h2 className="text-[#B0926A] text-[13px] uppercase tracking-[0.2em] font-medium block mb-12">
            Verified Deployments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {innovations.length === 0 ? (
              <div className="col-span-full w-full bg-white border border-neutral-300 p-16 text-center text-neutral-500 font-light text-[18px]">
                No authenticated innovations verified on ledger yet. Check back shortly.
              </div>
            ) : (
              innovations.map((inv) => (
                <InnovationCard 
                  key={inv.id} 
                  title={inv.title}
                  description={inv.description}
                  innovator={inv.innovator}
                  image={inv.image || "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800"} 
                  status={inv.category || "General"} 
                />
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}