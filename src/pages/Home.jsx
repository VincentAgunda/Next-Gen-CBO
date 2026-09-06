import React, { useEffect, useRef, useCallback, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import ProgramCard from "../components/ProgramCard";
import InnovationCard from "../components/InnovationCard";
import EventCard from "../components/EventCard";
import FeaturedInitiatives from "../components/FeaturedInitiatives";
import CallAction from "./call-action"; 
import { programs } from "../data/programs";
import { Link } from "react-router-dom";

// Firebase imports
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/config"; // Ensure this matches your project structure

const sectionsConfig = [
  { id: "hero", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "who-we-are", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "pillars", color: "#e5e5e5", dotColor: "bg-black" },
  { id: "typography", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "featured", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "innovation", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "events", color: "#858689", dotColor: "bg-white" },
  { id: "membership", color: "#e5e5e5", dotColor: "bg-black" },
  { id: "partners", color: "#7a787d", dotColor: "bg-white" },
  { id: "action", color: "#3B3A38", dotColor: "bg-white" },
];

export default function Home() {
  const sectionRefs = useRef([]);
  const dotRefs = useRef([]);
  
  // State to hold real-time Firebase events
  const [liveEvents, setLiveEvents] = useState([]);

  // Fetch events from Firebase
  useEffect(() => {
    // Query the newest 3 events based on creation time
    const q = query(
      collection(db, "events"), 
      orderBy("createdAt", "desc"), 
      limit(3)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLiveEvents(fetchedEvents);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            
            if (index !== -1) {
              dotRefs.current.forEach((dot, idx) => {
                if (dot) {
                  const isActive = idx === index;
                  dot.className = `h-[2px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${sectionsConfig[idx].dotColor} ${
                    isActive ? "w-8 opacity-100" : "w-3 opacity-30"
                  }`;
                }
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0,
      }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setSectionRef = useCallback((index) => (el) => {
    sectionRefs.current[index] = el;
  }, []);

  const setDotRef = useCallback((index) => (el) => {
    dotRefs.current[index] = el;
  }, []);

  return (
    <div className="font-sans text-[#111111] antialiased selection:bg-[#d2b79b] selection:text-black overflow-hidden scroll-smooth bg-[#F5F5F7]">
      
      {/* Scroll Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {sectionsConfig.map((config, idx) => (
          <div
            key={idx}
            ref={setDotRef(idx)}
            className={`h-[2px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${config.dotColor} ${
              idx === 0 ? "w-8 opacity-100" : "w-3 opacity-30"
            }`}
          />
        ))}
      </div>

      <section ref={setSectionRef(0)} className="bg-[#F5F5F7]">
        <HeroSection />
      </section>

      {/* WHO WE ARE */}
      <section className="relative py-28 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#F5F5F7] border-b border-neutral-200 antialiased selection:bg-[#03A10E] selection:text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 bg-[#B0926A]"></span>
              <span className="block text-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-neutral-900 tracking-tighter leading-[1.05]">
              Transforming communities through <span className="text-[#03A10E]">youth innovation.</span>
            </h2>

            <div className="pt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 border border-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900 hover:bg-[#03A10E] hover:border-[#03A10E] hover:text-white transition-all duration-500 ease-out rounded-none group shadow-sm"
              >
                <span>Learn more about us</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 items-stretch">
            <div className="group bg-white p-8 md:p-10 border border-neutral-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-pointer rounded-none">
              <span className="text-4xl font-light text-[#B0926A] mb-8 block transition-transform duration-500 ease-out group-hover:scale-105 origin-left">
                01
              </span>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-neutral-900">Grassroots Action</h3>
                <p className="text-neutral-500 font-light text-sm md:text-base leading-relaxed">
                  Next-Generation Youth Agribusiness & Research CBO is a youth-led organization in Makueni County, Kenya, committed to transforming communities through sustainable agriculture, environmental conservation, and youth empowerment.
                </p>
              </div>
            </div>

            <div className="group bg-white p-8 md:p-10 border border-neutral-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-pointer rounded-none">
              <span className="text-4xl font-light text-[#B0926A] mb-8 block transition-transform duration-500 ease-out group-hover:scale-105 origin-left">
                02
              </span>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-neutral-900">
                  Evidence-Based
                </h3>
                <p className="text-neutral-500 font-light text-sm md:text-base leading-relaxed">
                  We unite young innovators, researchers, and entrepreneurs to architect practical solutions to environmental and economic challenges, driving sustainable development and improving regional livelihoods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Wrapper */}
        <div className="max-w-7xl mx-auto mt-24 lg:mt-36 overflow-hidden border border-neutral-200 rounded-sm shadow-sm group relative bg-[#1a1a1a]">
          <img
            src="/Hero/h4.jpeg"
            alt="Who We Are Team"
            loading="lazy"
            decoding="async"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover object-[center_30%] opacity-80 grayscale contrast-[1.15] transform-gpu will-change-[transform,filter,opacity] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-[transform,filter,opacity] duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-[#FAF9F6]/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-1000 ease-in-out"></div>
        </div>
      </section>

      {/* Section 2: Three Pillars */}
      <section ref={setSectionRef(2)} className="py-28 lg:py-36 bg-[#e5e5e5] border-b border-neutral-300/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#B0926A] font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
                Our Foundation
              </span>
              <h2 className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight">
                Strategic Pillars
              </h2>
            </div>
            <Link 
              to="/programs" 
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-900 hover:text-[#B0926A] transition-colors duration-300"
            >
              <span>Explore All Programs</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 shadow-sm overflow-hidden rounded-none">
            <div className="bg-[#f0f0f0]/90 backdrop-blur-sm hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
              <div>
                <span className="text-xs font-mono text-[#B0926A] block mb-6">01 // PILLAR</span>
                <h3 className="text-2xl lg:text-3xl font-medium md:font-normal text-neutral-900 mb-4 tracking-tight leading-snug">
                  Agribusiness Development
                </h3>
                <p className="text-neutral-600 font-normal lg:font-light text-sm lg:text-base leading-relaxed">
                  Supporting sustainable agricultural enterprises, modern farming techniques, and income-generating opportunities for rural youth.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between border-t border-neutral-300 mt-8">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500">Learn more</span>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </div>
            </div>

            <div className="bg-[#f0f0f0]/90 backdrop-blur-sm hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
              <div>
                <span className="text-xs font-mono text-[#B0926A] block mb-6">02 // PILLAR</span>
                <h3 className="text-2xl lg:text-3xl font-medium md:font-normal text-neutral-900 mb-4 tracking-tight leading-snug">
                  Youth Empowerment
                </h3>
                <p className="text-neutral-600 font-normal lg:font-light text-sm lg:text-base leading-relaxed">
                  Building future leaders through rigorous technical training, mentorship, leadership development, and hands-on entrepreneurship.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between border-t border-neutral-300 mt-8">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500">Learn more</span>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </div>
            </div>

            <div className="bg-[#f0f0f0]/90 backdrop-blur-sm hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
              <div>
                <span className="text-xs font-mono text-[#B0926A] block mb-6">03 // PILLAR</span>
                <h3 className="text-2xl lg:text-3xl font-medium md:font-normal text-neutral-900 mb-4 tracking-tight leading-snug">
                  Research & Innovation
                </h3>
                <p className="text-neutral-600 font-normal lg:font-light text-sm lg:text-base leading-relaxed">
                  Driving evidence-based agricultural solutions, climate-smart technologies, and supporting scalable youth-led innovations.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between border-t border-neutral-300 mt-8">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500">Learn more</span>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 3: Massive Typography Navigation */}
      <section ref={setSectionRef(3)} className="bg-[#F5F5F7] py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-300/50">
        <div className="max-w-[1400px] mx-auto divide-y divide-neutral-300">
          <Link
            to="/programs"
            className="group py-12 flex items-center justify-between transition-all duration-500 ease-out hover:px-8"
          >
            <span className="text-4xl sm:text-6xl lg:text-7xl font-medium sm:font-normal lg:font-light text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-500 tracking-tight">
              Explore All Programs
            </span>
            <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-neutral-400 group-hover:text-[#B0926A] transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </Link>

          <Link
            to="/innovation-hub"
            className="group py-12 flex items-center justify-between transition-all duration-500 ease-out hover:px-8"
          >
            <span className="text-4xl sm:text-6xl lg:text-7xl font-medium sm:font-normal lg:font-light text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-500 tracking-tight">
              The Innovation Hub
            </span>
            <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-neutral-400 group-hover:text-[#B0926A] transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </Link>

          <Link
            to="/membership"
            className="group py-12 flex items-center justify-between transition-all duration-500 ease-out hover:px-8"
          >
            <span className="text-4xl sm:text-6xl lg:text-7xl font-medium sm:font-normal lg:font-light text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-500 tracking-tight">
              Become A Member
            </span>
            <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-neutral-400 group-hover:text-[#B0926A] transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FEATURED INITIATIVES */}
      <section ref={setSectionRef(4)} className="bg-[#F5F5F7]">
        <FeaturedInitiatives />
      </section>

      {/* Section 6: Upcoming Events (Skipped in CallAction, Rendered Here) */}
      <section ref={setSectionRef(6)} className="py-28 lg:py-36 px-6 lg:px-12 bg-[#858689] text-white border-b border-neutral-600/30">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-white/20 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#e2dacd] text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                Gatherings & Action
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white">
                Upcoming Events
              </h2>
            </div>
            <Link 
              to="/events" 
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-white hover:text-[#e2dacd] transition-colors duration-300"
            >
              <span>View Calendar</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </Link>
          </div>

          {liveEvents.length === 0 ? (
            <div className="text-center py-12 text-white/60 text-sm tracking-wider uppercase">
              No upcoming events scheduled at this time.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {liveEvents.map((evt) => (
                <div key={evt.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between hover:border-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out rounded-none">
                  <EventCard {...evt} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Includes Section 5, 7, 8 & 9 */}
      <CallAction setSectionRef={setSectionRef} />

    </div>
  );
}