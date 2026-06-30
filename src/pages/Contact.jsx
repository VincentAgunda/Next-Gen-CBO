import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

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
    <div className="bg-[#FAFAFC] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Core Identity Parameters Panel */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-700 font-semibold font-heading block">Interface Terminal</span>
            <h1 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-neutral-900">Contact Secretariat</h1>
            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
              Route structural ecosystem questions or operational ledger verifications directly to our registered Makueni office location[cite: 292].
            </p>
          </div>

          <div className="space-y-6 bg-white p-8 border border-gray-200/70 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                <Phone className="text-emerald-700 group-hover:text-white transition-colors text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Voice Prefix Line</span>
                <span className="text-sm font-medium text-neutral-800">+254 792 823 182</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                <Email className="text-emerald-700 group-hover:text-white transition-colors text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Electronic Mail Routing</span>
                <span className="text-sm font-medium text-neutral-800">info@ngyar-agri.org</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#FAFAFC] border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                <LocationOn className="text-emerald-700 group-hover:text-white transition-colors text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Headquarters Seat</span>
                <span className="text-sm font-medium text-neutral-800 leading-tight">
                  Emali-Sultan Humud Municipality, Makueni County, Kenya [cite: 389, 390]
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
          <h2 className="text-2xl font-heading text-neutral-900 font-normal tracking-tight">Transmit Digital Correspondence</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1">Your Identity Name</label>
              <input {...register("name")} placeholder="Full Corporate / Individual Legal Title" required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1">Return Mail Link</label>
              <input {...register("email")} type="email" placeholder="correspondent@domain.com" required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-1">Secure Text Message Body</label>
              <textarea {...register("message")} rows={6} placeholder="Provide explicit details regarding your structural request or consultation terms..." required className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
            </div>
            <button className="w-full font-heading bg-black text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-all duration-300 shadow-md">
              Dispatch Correspondence Assets
            </button>
          </form>
          {sent && (
            <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-xl border border-emerald-100 transition-all animate-fade-in">
              Data packet safely dispatched into the communications queue.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}