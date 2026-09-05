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

    try {
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
    } catch (error) {
      console.error("Registration error:", error);
      setRegMsg("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-neutral-900 antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden">

      {/* ============================================================
          HERO / INTRODUCTION
      ============================================================ */}
      <header className="relative w-full px-6 md:px-12 lg:px-24 pt-36 md:pt-44 lg:pt-48 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7 md:mb-9">
            <span className="w-8 h-[1px] bg-[#B0926A]" />

            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
              Knowledge Ecosystems
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium text-neutral-900 tracking-tighter leading-[1.02]">
            Events &{" "}
            <span className="text-[#03A10E]">
              Symposia.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mt-8 md:mt-10 text-neutral-500 font-light text-base md:text-lg leading-relaxed">
            Join our structured field workshops, technology-transfer
            briefings, research presentations, and community forums designed
            to connect ideas with practical action.
          </p>

          {/* Decorative metadata */}
          <div className="mt-14 md:mt-20 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Next-Gen Youth Initiative
            </span>

            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Research // Innovation // Community
            </span>
          </div>
        </div>
      </header>

      {/* ============================================================
          EVENTS
      ============================================================ */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 pb-28 md:pb-36 lg:pb-40">
        <div className="max-w-[1400px] mx-auto">

          {/* Section heading */}
          <div className="border-t border-neutral-200 pt-8 md:pt-10 mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <span className="w-7 h-[1px] bg-[#B0926A]" />

              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B0926A] font-semibold">
                Upcoming Programs
              </span>
            </div>
          </div>

          {/* Event grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16">
            {events.map((evt, index) => (
              <article
                key={evt.id}
                className="group relative bg-white border border-neutral-200 overflow-hidden transition-all duration-700 hover:border-[#03A10E] hover:-translate-y-1 rounded-none"
              >
                {/* Event number */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                  <span className="w-5 h-[1px] bg-[#B0926A]" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Event content */}
                <div className="p-8 pt-20 md:p-9 md:pt-20 min-h-[360px] flex flex-col">

                  <div className="flex-1">
                    <EventCard {...evt} />
                  </div>

                  {/* Bottom line */}
                  <div className="mt-10 pt-5 border-t border-neutral-200 flex items-center justify-between group-hover:border-[#03A10E] transition-colors duration-700">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-neutral-400 group-hover:text-neutral-900 transition-colors duration-700">
                      Event Registry
                    </span>

                    <span className="text-[#03A10E] text-sm">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          REGISTRATION FORM
      ============================================================ */}
      {registerEventId && (
        <section className="relative w-full bg-[#F2F0EB] px-6 md:px-12 lg:px-24 py-28 md:py-36 lg:py-40 border-t border-neutral-200">

          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-7">
                <span className="w-8 h-[1px] bg-[#B0926A]" />

                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
                  Event Registry
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-neutral-900 tracking-tighter leading-[1.05]">
                Secure
                <br />
                <span className="text-[#03A10E]">
                  Access Pass.
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-xl mt-7 text-neutral-500 font-light text-base md:text-lg leading-relaxed">
                Complete the registration details below to reserve your place
                at this event.
              </p>

              {/* Form */}
              <form
                onSubmit={handleRegister}
                className="mt-14 md:mt-20 border-t border-neutral-300 pt-10 md:pt-12 space-y-10"
              >
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <label className="block mb-2 text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                      Full Name
                    </label>

                    <input
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#03A10E] transition-colors duration-500 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                      Affiliation
                    </label>

                    <input
                      name="organization"
                      placeholder="Institution or organization"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#03A10E] transition-colors duration-500 rounded-none"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <label className="block mb-2 text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                      Phone
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      placeholder="Mobile number"
                      required
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#03A10E] transition-colors duration-500 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      required
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#03A10E] transition-colors duration-500 rounded-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between gap-8 w-full sm:w-auto px-8 md:px-10 py-4 border border-neutral-900 bg-neutral-900 text-white text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-500 hover:bg-[#03A10E] hover:border-[#03A10E]"
                  >
                    <span>
                      Register Reservation
                    </span>

                    <span className="text-base transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </button>

                  {regMsg && (
                    <p
                      className={`text-[13px] font-medium ${
                        regMsg.includes("successful")
                          ? "text-[#03A10E]"
                          : "text-red-500"
                      }`}
                    >
                      {regMsg}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FOOTER DETAIL
      ============================================================ */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto py-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
            Next-Gen Youth Initiative
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
            Agribusiness // Research // Innovation
          </span>
        </div>
      </div>
    </div>
  );
}