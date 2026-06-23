import SectionHeader from "../components/SectionHeader";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function SupportUs() {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");

  const volunteerSubmit = async (data) => {
    await addDoc(collection(db, "volunteers"), { ...data, status: "pending", createdAt: new Date() });
    setMsg("Volunteer application received!");
    reset();
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-16">
      {/* Donation Info */}
      <section>
        <SectionHeader title="Support Us" subtitle="Help us empower youth." />
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-4">M-Pesa Donation</h3>
          <p><strong>Paybill:</strong> 123456</p>
          <p><strong>Account Number:</strong> NEXTGEN</p>
          <p className="mt-4 text-sm text-gray-500">Online card payments coming soon via Flutterwave / Stripe.</p>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Volunteer With Us</h3>
        <form onSubmit={handleSubmit(volunteerSubmit)} className="space-y-4">
          <input {...register("fullName")} placeholder="Full Name" required className="w-full border p-2 rounded" />
          <input {...register("email")} type="email" placeholder="Email" required className="w-full border p-2 rounded" />
          <input {...register("phone")} placeholder="Phone" className="w-full border p-2 rounded" />
          <textarea {...register("message")} placeholder="Why do you want to volunteer?" className="w-full border p-2 rounded" />
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">Submit</button>
        </form>
        {msg && <p className="text-green-600 mt-2">{msg}</p>}
      </section>
    </div>
  );
}