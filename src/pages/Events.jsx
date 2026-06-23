import { events } from "../data/events";
import EventCard from "../components/EventCard";
import SectionHeader from "../components/SectionHeader";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Events() {
  const [searchParams] = useSearchParams();
  const registerEventId = searchParams.get("register");
  const [regMsg, setRegMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await addDoc(collection(db, "event_registrations"), {
      eventId: registerEventId,
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      createdAt: new Date(),
    });
    setRegMsg("Registration successful!");
    e.target.reset();
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Events & Training" subtitle="Join our upcoming activities." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((evt) => (
          <EventCard key={evt.id} {...evt} />
        ))}
      </div>

      {registerEventId && (
        <div className="mt-12 max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Event Registration</h3>
          <form onSubmit={handleRegister} className="space-y-4">
            <input name="fullName" placeholder="Full Name" required className="w-full border p-2 rounded" />
            <input name="phone" placeholder="Phone Number" required className="w-full border p-2 rounded" />
            <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
            <input name="organization" placeholder="Organization" className="w-full border p-2 rounded" />
            <button className="bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-blue-600">Register</button>
          </form>
          {regMsg && <p className="text-green-600 mt-2">{regMsg}</p>}
        </div>
      )}
    </div>
  );
}