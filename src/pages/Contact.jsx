import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    await addDoc(collection(db, "contact_messages"), { ...data, createdAt: new Date() });
    setSent(true);
    reset();
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="flex items-center gap-3 mb-4">
          <Phone className="text-brand-primary" /> <span>+254 700 000 000</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Email className="text-brand-primary" /> <span>info@nextgenyouth.org</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <LocationOn className="text-brand-primary" /> <span>Nairobi, Kenya</span>
        </div>
        <div className="mt-8 h-64 bg-gray-200 rounded-xl">
          {/* Embed Google Maps iframe or placeholder */}
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("name")} placeholder="Your Name" required className="w-full border p-3 rounded" />
          <input {...register("email")} type="email" placeholder="Email" required className="w-full border p-3 rounded" />
          <textarea {...register("message")} rows={5} placeholder="Your Message" required className="w-full border p-3 rounded" />
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">Send</button>
        </form>
        {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
      </div>
    </div>
  );
}