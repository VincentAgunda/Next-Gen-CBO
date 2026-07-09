import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import ProgramCard from "../components/ProgramCard";
import InnovationCard from "../components/InnovationCard";
import EventCard from "../components/EventCard";
import { programs } from "../data/programs";
import { innovations } from "../data/innovations";
import { events } from "../data/events";
import { partners } from "../data/partners";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans text-[#111111] bg-[#F5F5F7] antialiased selection:bg-[#d2b79b] selection:text-black overflow-hidden scroll-smooth">
      <HeroSection />

     {/* WHO WE ARE: Architectural High-Contrast Layout */}
      <section className="relative py-28 lg:py-40 px-6 md:px-12 lg:px-24 bg-[#F5F5F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#B0926A]"></span>
              <span className="block text-[#B0926A] text-xs uppercase tracking-[0.3em] font-semibold">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight leading-[1.1]">
              Transforming communities through youth innovation.
            </h2>

            <div className="pt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 border border-[#111111] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-out rounded-none group shadow-sm"
              >
                <span>Learn more about us</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-8 md:p-10 border border-neutral-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500 ease-out">
              <span className="text-4xl font-normal md:font-light text-[#B0926A] mb-8 block">01</span>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-[#111111]"> Grassroots Action</h3>
                <p className="text-neutral-600 font-normal md:font-light text-sm md:text-base leading-relaxed">
                  Next-Generation Youth Agribusiness & Research CBO is a youth-led organization in Makueni County, Kenya, committed to transforming communities through sustainable agriculture, environmental conservation, and youth empowerment.
                </p>
              </div>
            </div>

            <div className="bg-[#111111] text-white p-8 md:p-10 border border-neutral-800 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-neutral-700 transition-all duration-500 ease-out">
              <span className="text-4xl font-normal md:font-light text-[#d2b79b] mb-8 block">02</span>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-white">Evidence-Based</h3>
                <p className="text-neutral-400 font-normal md:font-light text-sm md:text-base leading-relaxed">
                  We unite young innovators, researchers, and entrepreneurs to architect practical solutions to environmental and economic challenges, driving sustainable development and improving regional livelihoods.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Updated Image Wrapper with custom 30% Y-axis object position */}
        <div className="max-w-7xl mx-auto mt-24 lg:mt-36 overflow-hidden border border-neutral-200 rounded-sm shadow-sm group relative bg-[#1a1a1a]">
          <img
            src="/Hero/h4.jpeg" 
            alt="Who We Are Team"
            loading="lazy"
            decoding="async"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover object-[center_30%] opacity-80 grayscale contrast-[1.15] transform-gpu will-change-[transform,filter,opacity] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-[transform,filter,opacity] duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
          />
          {/* Refraction Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-[#F5F5F7]/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-1000 ease-in-out"></div>
        </div>
      </section>

      {/* Section 2: Three Pillars — Polestar Grid Boxes */}
      <section className="py-28 lg:py-36 bg-[#e5e5e5] border-b border-neutral-300">
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
          
          <div className="grid md:grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 shadow-sm overflow-hidden">
            
            {/* Pillar 1 */}
            <div className="bg-[#f0f0f0] hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
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

            {/* Pillar 2 */}
            <div className="bg-[#f0f0f0] hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
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

            {/* Pillar 3 */}
            <div className="bg-[#f0f0f0] hover:bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[340px] group transition-colors duration-700 ease-out">
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
      
      {/* SECTION 5: Massive Typography Navigation */}
      <section className="bg-[#F5F5F7] py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-300">
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

      {/* FEATURED INITIATIVES: High-Contrast Dark Theme */}
      <section className="bg-[#2d2932] text-white py-28 lg:py-40 px-6 lg:px-24 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto flex flex-col gap-28 lg:gap-40">
          
          {/* Row 1 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
                <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                  Agribusiness Initiative
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
                Empowering <br className="hidden lg:block" />
                Future Leaders.
              </h2>
              
              <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
                Through agribusiness development, youth empowerment, and research-driven innovation, we equip young people with the precision skills and resources needed to architect sustainable livelihoods.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/programs" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
                >
                  <span>Explore programs</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden border border-neutral-700 rounded-sm">
              <img
                src="/Partner/lead.png"
                alt="Agribusiness Development"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
            </div>
          </div>

         {/* Row 2: White Button Mushroom Innovation */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-neutral-700 rounded-sm">
              <img
                src="/Innovation/mush2.png" 
                alt="White Button Mushroom Automated Cultivation"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
            </div>

            <div className="lg:col-span-5 order-2 space-y-6 lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
                <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                  Precision Mycology Hub
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
                Next-gen white button <br className="hidden lg:block" />
                mushroom cultivation.
              </h2>
              
              <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
                Our flagship White Button Mushroom (<em>Agaricus bisporus</em>) project integrates automated ambient humidity regulation and precision substrate thermal-shocking—redefining high-yield vertical farming for local economic resilience.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/innovation-hub" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
                >
                  <span>Examine Mycology Spec</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Innovation Hub Preview */}
      <section className="py-28 lg:py-36 bg-[#F5F5F7] border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#B0926A] font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
                Future Forward
              </span>
              <h2 className="text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight">
                Innovation Hub
              </h2>
            </div>
            <p className="text-neutral-500 max-w-md font-normal sm:font-light text-sm sm:text-base">
              Youth-led scientific innovations and climate-smart agricultural prototypes shaping the future of farming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 mt-12">
            {innovations.slice(0, 3).map((inv) => (
              <div key={inv.id} className="border border-neutral-300 bg-white p-2 hover:border-neutral-900 hover:shadow-lg transition-all duration-700 ease-out">
                <InnovationCard {...inv} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/innovation-hub" 
              className="group inline-flex items-center gap-3 bg-neutral-900 text-white hover:bg-[#B0926A] px-10 py-5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500"
            >
              <span>Explore All Innovations</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Upcoming Events */}
      <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#858689] text-white border-b border-neutral-600">
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

          <div className="grid md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((evt) => (
              <div key={evt.id} className="bg-[#757679] border border-white/10 p-6 flex flex-col justify-between hover:border-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out">
                <EventCard {...evt} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="py-32 lg:py-48 px-6 lg:px-24 bg-[#e5e5e5] border-b border-neutral-300">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#B0926A] text-xs uppercase tracking-[0.3em] font-semibold block mb-8">
            Join The Network
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium md:font-normal text-[#111111] tracking-tight leading-[1.05] mb-16">
            Become a member. <br />
            Shape the future of <br className="hidden sm:block" />
            agribusiness.
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6 border-t border-neutral-400">
            <Link 
              to="/membership" 
              className="inline-flex items-center justify-center gap-4 bg-[#111111] text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B0926A] transition-colors duration-500 rounded-none group"
            >
              <span>Join our community now</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link 
              to="/membership" 
              className="inline-flex items-center justify-center gap-4 border border-[#111111] bg-transparent text-[#111111] px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition-colors duration-500 rounded-none group"
            >
              <span>Explore benefits</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Partners — Premium Smooth Logo Grayscale */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#7a787d] text-white border-b border-neutral-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/20 gap-6">
            <div>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                Collaborations
              </span>
              <h2 className="text-4xl lg:text-5xl font-medium sm:font-normal tracking-tight text-white">
                Partner With Us
              </h2>
            </div>
            <Link 
              to="/partnerships" 
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white transition-colors duration-300"
            >
              <span>Become a Partner</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20 overflow-hidden">
            {partners.slice(0, 2).map((p, i) => (
              <div 
                key={i} 
                className="relative bg-[#6e6c71] h-[280px] md:h-[360px] w-full group overflow-hidden cursor-pointer"
              >
                <img 
                  src={p.image || p.logo} 
                  alt={p.name}
                  loading="lazy"
                  decoding="async" 
                  className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 will-change-transform transition-transform duration-[800ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Membership & Support Call to Action */}
      <section className="py-32 lg:py-48 bg-[#3B3A38] text-white px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/15">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block w-3 h-3 bg-[#d2b79b] rotate-45 mb-4" />
          
          <span className="text-[#d2b79b] font-mono text-xs uppercase tracking-[0.35em] block font-medium">
            08 / Take Action
          </span>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal lg:font-light tracking-tight leading-[1.08] text-white">
            Support our mission. <br />
            <span className="text-neutral-500 font-light sm:font-extralight">Empower the next generation.</span>
          </h2>
          
          <p className="text-neutral-400 text-base sm:text-lg font-normal sm:font-light leading-relaxed max-w-2xl mx-auto pt-4">
            Whether through direct mentorship, institutional funding, or active community membership, your involvement accelerates sustainable agricultural reform.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/support-us"
              className="group w-full sm:w-auto border border-[#d2b79b] bg-[#d2b79b] text-[#0A0A0A] px-10 py-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-[#d2b79b] transition-colors duration-500"
            >
              <span>Support Us Today</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/membership"
              className="w-full sm:w-auto border border-white/30 bg-transparent text-white px-10 py-5 text-xs uppercase tracking-[0.25em] font-medium hover:border-white hover:bg-white/5 transition-all duration-500 ease-out"
            >
              Become A Member
            </Link>
          </div>
        </div>

        {/* Added Image at the bottom of Support Our Mission section */}
        <div className="max-w-5xl mx-auto mt-20 relative z-10 overflow-hidden border border-white/10 rounded-sm group shadow-2xl">
          <img
            src="/Hero/h6.png"
            alt="Support Our Mission"
            loading="lazy"
            decoding="async"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

    </div>
  );
}