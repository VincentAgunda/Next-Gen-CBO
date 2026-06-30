import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import SectionHeader from "../components/SectionHeader";
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
    <div className="bg-[#FAFAFC] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 pb-8 border-b border-gray-200/80">
          <div className="max-w-xl">
            <SectionHeader 
              title="Innovation Hub" 
              subtitle="Pioneering systems and hardware architectures driving deep agricultural automation." 
            />
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="font-heading text-xs uppercase tracking-[0.2em] font-medium bg-black text-white px-8 py-4 rounded-none hover:bg-neutral-800 transition-all duration-300 transform-gpu shadow-md hover:-translate-y-0.5"
          >
            {showForm ? "Close Form Protocol" : "Submit Enterprise Spec"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-10 border border-gray-200/80 rounded-2xl shadow-xl max-w-2xl mx-auto mb-16 transform-gpu transition-all duration-500">
            <h3 className="text-xl font-heading font-medium text-neutral-900 mb-6">Propose New Agricultural System</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Innovation Name</label>
                <input {...register("title", { required: true })} placeholder="e.g., automated ambient moisture controller" className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                {errors.title && <span className="text-red-500 text-xs mt-1 block">Field mandatory</span>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Technical Abstract</label>
                <textarea {...register("description", { required: true })} rows={4} placeholder="Comprehensive description of process workflows and technical metrics..." className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                {errors.description && <span className="text-red-500 text-xs mt-1 block">Abstract mandatory</span>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Core Problem Solved</label>
                <input {...register("problemSolved")} placeholder="e.g., high regional temperature shock mitigation" className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Lead Innovator Name</label>
                  <input {...register("innovator", { required: true })} placeholder="Full Authorized Legal Name" className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">System Classification Category</label>
                  <input {...register("category")} placeholder="e.g., Mycology Automation" className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium">Schematic Image URL</label>
                <input {...register("image")} placeholder="Cloudinary Asset Reference URL" className="w-full bg-[#FAFAFC] border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>

              <button type="submit" className="w-full font-heading bg-emerald-700 text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-emerald-800 transition-all duration-300">
                Deploy System Blueprint for Authorization
              </button>
            </form>
          </div>
        )}

        {/* Oversized Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {innovations.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl border border-gray-200/80 p-16 text-center text-gray-400 font-light">
              No authenticated innovations verified on ledger yet. Check back shortly.
            </div>
          ) : (
            innovations.map((inv) => (
              <div key={inv.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transform-gpu hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500">
                <div className="h-64 w-full bg-neutral-100 overflow-hidden relative">
                  <img src={inv.image || "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800"} alt={inv.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] tracking-widest uppercase font-heading px-3 py-1">{inv.category || "General"}</span>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-heading font-medium text-neutral-900 tracking-tight">{inv.title}</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 leading-relaxed">{inv.description}</p>
                  <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                    <span>By: <strong className="text-neutral-700 font-normal">{inv.innovator}</strong></span>
                    <span className="text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded">{inv.problemSolved ? "Problem Resolved" : "Active Trial"}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}