import React, { useState } from "react";
import { partners } from "../data/partners";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

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
    <div className="bg-[#F5F5F7] min-h-screen pt-40 pb-32 px-6 md:px-12 lg:px-24 antialiased selection:bg-neutral-900 selection:text-white">
      
      <header className="max-w-[1400px] mx-auto mb-28">
        <span className="block text-[#B0926A] text-[13px] font-medium mb-8 uppercase tracking-[0.2em]">
          Consortium Networks
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-light leading-[0.95] tracking-tight text-neutral-900 mb-8 max-w-5xl">
          Strategic Institutional Alliances.
        </h1>
        <p className="max-w-3xl text-neutral-500 font-light text-[18px] md:text-[22px] leading-relaxed">
          Co-building high-value sustainable agribusiness systems, advanced research pipelines, and empowering agricultural value hubs with global frameworks.
        </p>
      </header>

      {/* Alliance Grid */}
      <section className="max-w-[1400px] mx-auto border-y border-neutral-300 bg-white/50 py-20 mb-32">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-50 grayscale filter contrast-125 px-8">
          {partners && partners.map((p, i) => (
            <img key={i} src={p.logo} alt={p.name} className="h-12 md:h-16 object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
          ))}
        </div>
      </section>

      {/* Massive Form Section */}
      <section className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="text-[#B0926A] text-[13px] uppercase tracking-[0.2em] font-medium block mb-4">
            Alliance Charter
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight mb-6">
            Initiate Affiliation
          </h2>
          <p className="text-[18px] text-neutral-500 font-light max-w-2xl">
            Register your corporate framework to establish shared cooperative projects and operational setups.
          </p>
        </div>

        <div className="bg-white p-10 lg:p-20 border border-neutral-300 shadow-xl shadow-black/5 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Organization Name</label>
                <input 
                  {...register("organization")} 
                  required 
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors rounded-none" 
                />
              </div>
              <div>
                <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Contact Delegate</label>
                <input 
                  {...register("contactPerson")} 
                  required 
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors rounded-none" 
                />
              </div>
            </div>

            <div>
              <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Corporate Email Address</label>
              <input 
                {...register("email")} 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors rounded-none" 
              />
            </div>
            
            <div>
              <label className="block text-[#B0926A] font-sans text-[11px] uppercase tracking-[0.2em] mb-4 font-medium">Proposal Scope</label>
              <textarea 
                {...register("proposal")} 
                placeholder="Outline structural terms of the proposed developmental collaboration..." 
                rows="4"
                className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg lg:text-xl font-light text-neutral-900 focus:outline-none focus:border-[#B0926A] transition-colors resize-none rounded-none placeholder:text-neutral-300" 
              />
            </div>
            
            <div className="pt-8">
              <button className="group flex items-center justify-between w-full border border-neutral-900 bg-neutral-900 text-white px-8 py-6 text-[11px] lg:text-[13px] uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-neutral-900 transition-all duration-500 ease-out">
                <span>Submit Partnership Request</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </button>
              {msg && (
                <p className="text-sm text-[#B0926A] font-light tracking-wide mt-6 text-center">{msg}</p>
              )}
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}