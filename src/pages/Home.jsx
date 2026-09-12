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
import { motion } from "framer-motion";

// Firebase imports
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/config"; 

// --- PILLARS & SECTIONS ANIMATION CONFIG & DATA ---
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: customEase } 
  },
};

const pillars = [
  {
    id: "01",
    title: "Agribusiness Development",
    description: "Supporting sustainable agricultural enterprises, modern farming techniques, and income-generating opportunities for rural youth.",
    link: "/programs"
  },
  {
    id: "02",
    title: "Youth Empowerment",
    description: "Building future leaders through rigorous technical training, mentorship, leadership development, and hands-on entrepreneurship.",
    link: "/programs"
  },
  {
    id: "03",
    title: "Research & Innovation",
    description: "Driving evidence-based agricultural solutions, climate-smart technologies, and supporting scalable youth-led innovations.",
    link: "/programs"
  }
];

const sectionsConfig = [
  { id: "hero", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "who-we-are", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "pillars", color: "#FAFAFA", dotColor: "bg-black" },
  { id: "typography", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "featured", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "innovation", color: "#F5F5F7", dotColor: "bg-black" },
  { id: "events", color: "#858689", dotColor: "bg-white" },
  { id: "membership", color: "#e5e5e5", dotColor: "bg-black" },
  { id: "partners", color: "#7a787d", dotColor: "bg-white" },
  { id: "action", color: "#3B3A38", dotColor: "bg-white" },
];

const massiveTypographyLinks = [
  { title: "Explore All Programs", path: "/programs" },
  { title: "The Innovation Hub", path: "/innovation-hub" },
  { title: "Become A Member", path: "/membership" },
];

export default function Home() {
  const sectionRefs = useRef([]);
  const dotRefs = useRef([]);
  
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
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
    <div className="font-sans text-[#111111] antialiased selection:bg-[#03A10E] selection:text-white overflow-x-hidden scroll-smooth bg-[#F5F5F7]">
      
      {/* Scroll Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pointer-events-none hidden md:flex">
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

      {/* SECTION 0: Hero */}
      <section ref={setSectionRef(0)} className="bg-[#F5F5F7]">
        <HeroSection />
      </section>

      {/* SECTION 1: WHO WE ARE */}
      <section ref={setSectionRef(1)} className="py-28 lg:py-36 bg-[#F5F5F7] border-b border-neutral-200/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 pt-2">
              <div className="flex flex-col gap-3">
                <motion.span 
                  variants={itemVariant}
                  className="inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-medium"
                >
                  Who We Are
                </motion.span>
                <motion.h2 
                  variants={itemVariant}
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-neutral-800 tracking-tight leading-[1.1]"
                >
                  Transforming communities through <span className="text-[#03A10E] font-normal">youth innovation.</span>
                </motion.h2>
              </div>

              <motion.div variants={itemVariant} className="pt-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                >
                  <span>Learn more about us</span>
                  <div className="w-8 h-[1px] bg-neutral-300 group-hover:bg-[#03A10E] group-hover:w-12 transition-all duration-500 ease-out relative">
                    <svg 
                      className="absolute -right-1 -top-[5px] w-3 h-3 text-transparent group-hover:text-[#03A10E] transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Cards */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-[1px] bg-neutral-200/70 overflow-hidden shadow-sm shadow-black/5 rounded-2xl md:rounded-none">
              
              {/* Card 1 */}
              <motion.div 
                variants={itemVariant}
                className="bg-[#fafafa] hover:bg-white p-10 lg:p-14 flex flex-col justify-between min-h-[380px] group transition-colors duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#B0926A] block mb-8 transition-colors duration-500 tracking-widest">
                    01 // ACTION
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-normal text-neutral-800 mb-5 tracking-tight leading-snug group-hover:text-neutral-900 transition-colors duration-500">
                    Grassroots Action
                  </h3>
                  <p className="text-neutral-500 font-normal text-sm lg:text-[1.05rem] leading-[1.8] group-hover:text-neutral-600 transition-colors duration-500">
                    Next-Generation Youth Agribusiness & Research CBO is a youth-led organization in Makueni County, Kenya, committed to transforming communities through sustainable agriculture, environmental conservation, and youth empowerment.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={itemVariant}
                className="bg-[#fafafa] hover:bg-white p-10 lg:p-14 flex flex-col justify-between min-h-[380px] group transition-colors duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#B0926A] block mb-8 transition-colors duration-500 tracking-widest">
                    02 // METHOD
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-normal text-neutral-800 mb-5 tracking-tight leading-snug group-hover:text-neutral-900 transition-colors duration-500">
                    Evidence-Based
                  </h3>
                  <p className="text-neutral-500 font-normal text-sm lg:text-[1.05rem] leading-[1.8] group-hover:text-neutral-600 transition-colors duration-500">
                    We unite young innovators, researchers, and entrepreneurs to architect practical solutions to environmental and economic challenges, driving sustainable development and improving regional livelihoods.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Image Wrapper */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-24 lg:mt-36"
          >
            <motion.div variants={itemVariant} className="overflow-hidden border border-neutral-200 rounded-sm shadow-sm group relative bg-transparent">
              <img
                src="/Hero/h4.jpeg"
                alt="Who We Are Team"
                loading="lazy"
                decoding="async"
                className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover object-[center_30%] transform-gpu will-change-[transform] group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THREE PILLARS */}
      <section ref={setSectionRef(2)} className="py-28 lg:py-36 bg-[#FAFAFA] border-b border-neutral-200/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* HEADER SECTION */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="flex flex-col gap-3">
              <motion.span 
                variants={itemVariant}
                className="inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-medium"
              >
                Our Foundation
              </motion.span>
              <motion.h2 
                variants={itemVariant}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-neutral-800 tracking-tight leading-[1.1]"
              >
                Strategic <span className="text-[#03A10E] font-normal">Pillars.</span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariant} className="pb-2">
              <Link 
                to="/programs" 
                className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                <span>Explore All Programs</span>
                <div className="w-8 h-[1px] bg-neutral-300 group-hover:bg-[#03A10E] group-hover:w-12 transition-all duration-500 ease-out relative">
                  <svg 
                    className="absolute -right-1 -top-[5px] w-3 h-3 text-transparent group-hover:text-[#03A10E] transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* PILLARS GRID */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-[1px] bg-neutral-200/70 overflow-hidden shadow-sm shadow-black/5 rounded-2xl md:rounded-none"
          >
            {pillars.map((pillar) => (
              <motion.div 
                key={pillar.id}
                variants={itemVariant}
                className="bg-[#F5F5F7] hover:bg-white p-10 lg:p-14 flex flex-col justify-between min-h-[380px] group transition-colors duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#B0926A] block mb-8 transition-colors duration-500 tracking-widest">
                    {pillar.id} // PILLAR
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-normal text-neutral-800 mb-5 tracking-tight leading-snug group-hover:text-neutral-900 transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-500 font-normal text-sm lg:text-[1.05rem] leading-[1.8] group-hover:text-neutral-600 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
                
                <Link to={pillar.link} className="pt-10 flex items-center justify-between border-t border-neutral-200 mt-10 group-hover:border-neutral-300 transition-colors duration-500">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 group-hover:text-[#03A10E] transition-colors duration-500">
                    Learn more
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-neutral-100 transition-all duration-500 ease-out overflow-hidden">
                    <svg 
                      className="w-5 h-5 text-neutral-300 group-hover:text-[#03A10E] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      
      {/* SECTION 3: Massive Typography Navigation */}
      <section ref={setSectionRef(3)} className="bg-[#F5F5F7] py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col w-full border-t border-neutral-200">
          {massiveTypographyLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="group py-12 md:py-16 flex items-center justify-between border-b border-neutral-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:px-8 hover:bg-white/40"
            >
              <span className="text-4xl sm:text-6xl lg:text-[6rem] font-normal text-neutral-900 tracking-tighter leading-none transition-colors duration-500 group-hover:text-[#B0926A]">
                {link.title}
              </span>
              <svg 
                className="w-10 h-10 md:w-16 md:h-16 text-neutral-300 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[#B0926A] group-hover:translate-x-4 group-hover:-translate-y-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURED INITIATIVES */}
      <section ref={setSectionRef(4)} className="bg-[#F5F5F7]">
        <FeaturedInitiatives />
      </section>

      {/* Section 6: Upcoming Events */}
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