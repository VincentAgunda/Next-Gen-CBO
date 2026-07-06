import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function SupportUs() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const volunteerSubmit = async (data) => {
    await addDoc(collection(db, "volunteers"), { ...data, status: "pending", createdAt: new Date() });
    setMsg("Volunteer record registered under pending verification status.");
    reset();
  };

  return (
    <div className="bg-white min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 font-sans tracking-wide space-y-40">
      
      <header className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Resource Mobilization
        </span>
        <h1 className="text-4xl md:text-5xl font-[_sans-serif] font-light tracking-tight text-neutral-900 leading-tight">
          Support Our Mission Framework
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base leading-relaxed pt-2">
          Invest in youth-led scientific innovation, strategic local field hubs, and transparent socioeconomic transformation projects.
        </p>
      </header>

      <section className="max-w-xl mx-auto border border-neutral-100 p-10 bg-white shadow-sm space-y-8">
        <div className="text-center border-b border-neutral-100 pb-6 space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#B0926A] font-medium block">M-Pesa Integration gateway</span>
          <h3 className="text-xl font-['Helvetica_Neue',_Helvetica,_sans-serif] font-light text-neutral-900">Direct Institutional Donation</h3>
        </div>
        
        <div className="space-y-4 max-w-xs mx-auto text-sm font-light">
          <div className="flex justify-between border-b border-neutral-50 pb-2">
            <span className="text-neutral-400">Paybill Number</span>
            <span className="font-mono font-medium text-neutral-900">123456</span>
          </div>
          <div className="flex justify-between border-b border-neutral-50 pb-2">
            <span className="text-neutral-400">Account Parameter</span>
            <span className="font-mono font-medium text-neutral-900">NEXTGEN</span>
          </div>
        </div>

        <div className="text-center pt-4">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium font-mono block">
            Online card processing via Flutterwave / Stripe pending clearance.
          </span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto border border-neutral-100 p-10 md:p-16 bg-white shadow-sm">
        <div className="space-y-3 mb-12 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Human Capital</span>
          <h3 className="text-2xl font-['Helvetica_Neue',_Helvetica,_sans-serif] font-light text-neutral-900">Join the Volunteer Cadre</h3>
          <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto">Lend your technical expertise, research focus, or operations capability to regional field setups.</p>
        </div>

        <form onSubmit={handleSubmit(volunteerSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input 
              {...register("fullName")} 
              placeholder="Full Legal Name" 
              required 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
            <input 
              {...register("email")} 
              type="email" 
              placeholder="Email Address" 
              required 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
          </div>
          <input 
            {...register("phone")} 
            placeholder="Mobile Number (M-Pesa Registered Code)" 
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
          />
          <textarea 
            {...register("message")} 
            placeholder="Specify your field of interest or technical statement of motivation..." 
            rows="4"
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 resize-none rounded-none" 
          />
          
          <div className="text-center pt-4">
            <button className="border border-neutral-900 text-neutral-900 px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white transition-all duration-500 ease-out rounded-none">
              Submit Application
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