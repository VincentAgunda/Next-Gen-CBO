import { partners } from "../data/partners";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function Partnerships() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    await addDoc(collection(db, "partnership_requests"), { ...data, createdAt: new Date() });
    setMsg("Partnership request securely catalogued.");
    reset();
  };

  return (
    <div className="bg-white min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 font-sans tracking-wide">
      
      <header className="max-w-4xl mx-auto text-center space-y-6 mb-28">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Consortium Networks
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-light tracking-tight text-neutral-900 leading-tight">
          Strategic Institutional Alliances
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base leading-relaxed pt-2">
          Co-building high-value sustainable agribusiness systems, advanced research pipelines, and empowering agricultural value hubs with global frameworks.
        </p>
      </header>

      <section className="max-w-5xl mx-auto border-y border-neutral-100 py-16 mb-40">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale filter contrast-200">
          {partners.map((p, i) => (
            <img key={i} src={p.logo} alt={p.name} className="h-12 object-contain hover:opacity-100 transition-opacity duration-300" />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto border border-neutral-100 p-10 md:p-16 bg-white shadow-sm">
        <div className="space-y-3 mb-12 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Alliance Charter</span>
          <h3 className="text-2xl font-sans font-light text-neutral-900">Initiate Partnership Affiliation</h3>
          <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto">Register your corporate framework to establish shared cooperative projects and operational setups.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input 
              {...register("organization")} 
              placeholder="Organization Name" 
              required 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
            <input 
              {...register("contactPerson")} 
              placeholder="Contact Delegate / Title" 
              required 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
          </div>
          <input 
            {...register("email")} 
            type="email" 
            placeholder="Official Corporate Email Address" 
            required 
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
          />
          <textarea 
            {...register("proposal")} 
            placeholder="Outline structural terms of the proposed developmental collaboration or joint venture scope..." 
            rows="4"
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 resize-none rounded-none" 
          />
          
          <div className="text-center pt-4">
            <button className="border border-neutral-900 text-neutral-900 px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white transition-all duration-500 ease-out rounded-none">
              Submit Request
            </button>
            {msg && (
              <p className="text-xs text-neutral-500 font-mono tracking-wider mt-4">{msg}</p>
            )}
          </div>
        </form>
      </section>

    </div>
  );
}