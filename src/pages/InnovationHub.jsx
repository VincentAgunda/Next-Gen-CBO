import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import InnovationCard from "../components/InnovationCard";
import SectionHeader from "../components/SectionHeader";
import { useForm } from "react-hook-form";

export default function InnovationHub() {
  const [innovations, setInnovations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const q = query(collection(db, "innovation_submissions"), where("status", "==", "approved"));
    const unsub = onSnapshot(q, (snap) => {
      setInnovations(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const onSubmit = async (data) => {
    await addDoc(collection(db, "innovation_submissions"), {
      ...data,
      status: "pending",
      createdAt: new Date(),
    });
    reset();
    setShowForm(false);
    alert("Innovation submitted for review!");
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Innovation Hub" subtitle="Youth-led solutions driving agricultural transformation." />
      <div className="text-right mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          {showForm ? "Close Form" : "Submit an Innovation"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
          <input {...register("title", { required: true })} placeholder="Innovation Name" className="w-full border p-2 rounded" />
          <textarea {...register("description", { required: true })} placeholder="Description" className="w-full border p-2 rounded" />
          <input {...register("problemSolved")} placeholder="Problem Solved" className="w-full border p-2 rounded" />
          <input {...register("innovator", { required: true })} placeholder="Your Name" className="w-full border p-2 rounded" />
          <input {...register("image")} placeholder="Cloudinary Image URL" className="w-full border p-2 rounded" />
          <input {...register("category")} placeholder="Category" className="w-full border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Submit</button>
        </form>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((inv) => (
          <InnovationCard key={inv.id} {...inv} />
        ))}
      </div>
    </div>
  );
}