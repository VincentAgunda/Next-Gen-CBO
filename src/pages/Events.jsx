import { events } from "../data/events";
import EventCard from "../components/EventCard";
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
    setRegMsg("Registration successful! Seat allocated.");
    e.target.reset();
  };

  return (
    <div className="bg-white min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 font-sans tracking-wide">
      
      {/* Header section */}
      <header className="max-w-4xl mx-auto text-center space-y-6 mb-24">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Knowledge Ecosystems
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-900 leading-tight">
          Events & Technical Symposia
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base leading-relaxed pt-2">
          Join our structured fields workshops, tech-transfer operations briefings, and evidence-based rural research presentations.
        </p>
      </header>

      {/* Grid container formatting events logs cleanly */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((evt) => (
          <div 
            key={evt.id} 
            className="border border-neutral-100 p-8 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all duration-500 bg-white shadow-sm"
          >
            <EventCard {...evt} />
          </div>
        ))}
      </div>

      {/* Structured Minimal Registration Interface via URL parameter trigger */}
      {registerEventId && (
        <section className="mt-32 max-w-2xl mx-auto border border-neutral-100 p-10 md:p-14 bg-white shadow-sm">
          <div className="space-y-3 mb-10 text-center">
            <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Reservation Registry</span>
            <h3 className="text-2xl font-serif font-light text-neutral-900">Secure Access Pass</h3>
          </div>

          <form onSubmit={handleRegister} className="space-y-8">
            <input 
              name="fullName" 
              placeholder="Full Legal Name" 
              required 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
            <div className="grid md:grid-cols-2 gap-8">
              <input 
                name="phone" 
                placeholder="Mobile Verification Number" 
                required 
                className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Active Email Address" 
                required 
                className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
              />
            </div>
            <input 
              name="organization" 
              placeholder="Institutional / Organizational Affiliation" 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
            
            <div className="text-center pt-4">
              <button className="border border-neutral-900 text-neutral-900 px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white transition-all duration-500 ease-out rounded-none">
                Register Reservation
              </button>
              {regMsg && (
                <p className="text-xs text-neutral-500 font-mono tracking-wider mt-4">{regMsg}</p>
              )}
            </div>
          </form>
        </section>
      )}
    </div>
  );
}