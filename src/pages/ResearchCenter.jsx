import { researchPublications } from "../data/research";
import SectionHeader from "../components/SectionHeader";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function ResearchCenter() {
  const [collabMsg, setCollabMsg] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onCollaborate = async (data) => {
    await addDoc(collection(db, "research_collaborations"), { ...data, createdAt: new Date() });
    setCollabMsg("Collaboration request sent!");
    reset();
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Research Center" subtitle="Evidence-based insights for sustainable development." />
      {/* Publications */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {researchPublications.map((pub) => (
          <a
            key={pub.id}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold mb-1">{pub.title}</h3>
            <p className="text-sm text-gray-500">{pub.category} | {pub.year}</p>
            <p className="mt-2 text-gray-700">{pub.description}</p>
          </a>
        ))}
      </div>

      {/* Collaboration Form */}
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Research Collaboration</h3>
        <form onSubmit={handleSubmit(onCollaborate)} className="space-y-4">
          <input {...register("name")} placeholder="Your Name" className="w-full border p-2 rounded" />
          <input {...register("institution")} placeholder="Institution" className="w-full border p-2 rounded" />
          <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <textarea {...register("proposal")} placeholder="Collaboration proposal" className="w-full border p-2 rounded" />
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">Submit</button>
          {collabMsg && <p className="text-green-600">{collabMsg}</p>}
        </form>
      </div>
    </div>
  );
}