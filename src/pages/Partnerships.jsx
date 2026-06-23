import { partners } from "../data/partners";
import SectionHeader from "../components/SectionHeader";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function Partnerships() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    await addDoc(collection(db, "partnership_requests"), { ...data, createdAt: new Date() });
    setMsg("Application submitted!");
    reset();
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Our Partners" subtitle="Collaborating for greater impact." />
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {partners.map((p, i) => (
          <img key={i} src={p.logo} alt={p.name} className="h-16" />
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Become a Partner</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("organization")} placeholder="Organization Name" required className="w-full border p-2 rounded" />
          <input {...register("contactPerson")} placeholder="Contact Person" required className="w-full border p-2 rounded" />
          <input {...register("email")} type="email" placeholder="Email" required className="w-full border p-2 rounded" />
          <textarea {...register("proposal")} placeholder="Proposed Partnership" className="w-full border p-2 rounded" />
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">Submit</button>
        </form>
        {msg && <p className="text-green-600 mt-2">{msg}</p>}
      </div>
    </div>
  );
}