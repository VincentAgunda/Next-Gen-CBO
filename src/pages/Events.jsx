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
    <div className="font-sans text-black bg-white antialiased selection:bg-black selection:text-white overflow-hidden min-h-screen">
      
      {/* TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-28 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <span className="block text-[#757575] text-[13px] font-normal mb-8 uppercase tracking-wider">
          01 / Knowledge Ecosystems
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Events & <br />
          Symposia.
        </h1>
        <p className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Join our structured fields workshops, tech-transfer operations briefings, and evidence-based rural research presentations designed to scale localized innovation.
        </p>
      </header>

      {/* EVENT GRID */}
      <section className="pb-28 px-[6vw] md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto border-t border-[#E5E5E5] pt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {events.map((evt) => (
              <div 
                key={evt.id} 
                className="group border border-[#E5E5E5] bg-[#f6f6f6] hover:bg-black hover:text-white transition-colors duration-500 overflow-hidden"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  {/* Assuming EventCard inherits the parent text color nicely, if not, adjust inside EventCard */}
                  <EventCard {...evt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM (Conditional) */}
      {registerEventId && (
        <section className="py-28 bg-[#f6f6f6] px-[6vw] md:px-12 lg:px-24 border-t border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-16">
              <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
                Registry 
              </span>
              <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight leading-none">
                Secure Access Pass
              </h2>
            </div>

            <form onSubmit={handleRegister} className="space-y-8 border-t border-[#D9D9D9] pt-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <input 
                  name="fullName" 
                  placeholder="Full Legal Name" 
                  required 
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
                <input 
                  name="organization" 
                  placeholder="Institutional Affiliation" 
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <input 
                  name="phone" 
                  placeholder="Mobile Verification Number" 
                  required 
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Active Email Address" 
                  required 
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
              </div>
              
              <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button className="w-full sm:w-auto inline-flex items-center justify-between border border-black bg-black text-white px-10 py-5 text-[15px] font-normal hover:bg-white hover:text-black transition-colors duration-300">
                  <span>Register Reservation</span>
                  <span className="ml-8 text-lg leading-none">↗</span>
                </button>
                {regMsg && (
                  <p className="text-[14px] text-[#757575] font-normal">{regMsg}</p>
                )}
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}