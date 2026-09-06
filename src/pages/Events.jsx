import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import EventCard from "../components/EventCard";
import { db } from "../firebase/config";

export default function Events() {
  const [searchParams] = useSearchParams();

  const registerEventId =
    searchParams.get("register");

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [regMsg, setRegMsg] = useState("");

  // ============================================================
  // LOAD EVENTS DIRECTLY FROM FIREBASE
  // ============================================================

  useEffect(() => {
    const eventsRef = collection(db, "events");

    const unsubscribe = onSnapshot(
      eventsRef,
      (snapshot) => {
        const firebaseEvents = snapshot.docs.map(
          (eventDoc) => ({
            id: eventDoc.id,
            ...eventDoc.data(),
          })
        );

        setEvents(firebaseEvents);
        setLoading(false);
      },
      (error) => {
        console.error(
          "Error loading public events:",
          error
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ============================================================
  // EVENT REGISTRATION
  // ============================================================

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      await addDoc(
        collection(db, "event_registrations"),
        {
          eventId: registerEventId,
          fullName: formData.get("fullName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          organization:
            formData.get("organization"),
          createdAt: serverTimestamp(),
        }
      );

      setRegMsg(
        "Registration successful! Seat allocated."
      );

      e.target.reset();
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      setRegMsg(
        "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-neutral-900 antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden">

      {/* ============================================================
          HERO
      ============================================================ */}

      <header className="relative w-full px-6 md:px-12 lg:px-24 pt-36 md:pt-44 lg:pt-48 pb-24 md:pb-32">

        <div className="max-w-[1400px] mx-auto">

          <div className="flex items-center gap-4 mb-7 md:mb-9">

            <span className="w-8 h-[1px] bg-[#B0926A]" />

            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
              Knowledge Ecosystems
            </span>

          </div>

          <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium text-neutral-900 tracking-tighter leading-[1.02]">
            Events &{" "}
            <span className="text-[#03A10E]">
              Symposia.
            </span>
          </h1>

          <p className="max-w-2xl mt-8 md:mt-10 text-neutral-600 font-normal text-base md:text-lg leading-relaxed">
            Join our structured field workshops,
            technology-transfer briefings, research
            presentations, and community forums designed
            to connect ideas with practical action.
          </p>

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

          <div className="border-t border-neutral-200 pt-8 md:pt-10 mb-12 md:mb-16">

            <div className="flex items-center gap-4">

              <span className="w-7 h-[1px] bg-[#B0926A]" />

              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B0926A] font-semibold">
                Upcoming Programs
              </span>

            </div>

          </div>

          {/* LOADING */}

          {loading && (
            <div className="py-20 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Loading events...
              </p>
            </div>
          )}

          {/* EMPTY */}

          {!loading && events.length === 0 && (
            <div className="py-20 text-center border border-neutral-200 bg-white">
              <p className="text-sm text-neutral-400">
                No upcoming events at the moment.
              </p>
            </div>
          )}

          {/* EVENTS */}

          {!loading && events.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16">

              {events.map((event, index) => (
                <article
                  key={event.id}
                  className="group relative overflow-hidden"
                >

                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 pointer-events-none">

                    <span className="w-5 h-[1px] bg-[#B0926A]" />

                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#B0926A] font-semibold">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                  </div>

                  <EventCard {...event} />

                </article>
              ))}

            </div>
          )}

        </div>

      </section>

      {/* ============================================================
          REGISTRATION FORM
      ============================================================ */}

      {registerEventId && (
        <section className="relative w-full bg-[#F2F0EB] px-6 md:px-12 lg:px-24 py-28 md:py-36 lg:py-40 border-t border-neutral-200">

          <div className="max-w-[1400px] mx-auto">

            <div className="max-w-3xl">

              <div className="flex items-center gap-4 mb-7">

                <span className="w-8 h-[1px] bg-[#B0926A]" />

                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
                  Event Registry
                </span>

              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-neutral-900 tracking-tighter leading-[1.05]">
                Secure
                <br />
                <span className="text-[#03A10E]">
                  Access Pass.
                </span>
              </h2>

              <p className="max-w-xl mt-7 text-neutral-500 font-light text-base md:text-lg leading-relaxed">
                Complete the registration details below
                to reserve your place at this event.
              </p>

              <form
                onSubmit={handleRegister}
                className="mt-14 md:mt-20 border-t border-neutral-300 pt-10 md:pt-12 space-y-10"
              >

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