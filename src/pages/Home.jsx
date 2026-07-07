import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import ProgramCard from "../components/ProgramCard";
import InnovationCard from "../components/InnovationCard";
import EventCard from "../components/EventCard";
import { programs } from "../data/programs";
import { innovations } from "../data/innovations";
import { events } from "../data/events";
import { partners } from "../data/partners";

export default function Home() {
  return (
    <div className="font-sans text-black bg-white antialiased selection:bg-black selection:text-white overflow-hidden">
      
      {/* 01. HERO SECTION */}
      <HeroSection />

      {/* 02. MANIFESTO SECTION (Who We Are) */}
      <section className="relative py-28 lg:py-40 px-[6vw] md:px-12 lg:px-24 bg-white flex items-center min-h-[85vh]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full max-w-[1440px] mx-auto">
          
          {/* Left Column: Image with minimal framing */}
          <div className="lg:col-span-7 w-full aspect-[16/10] bg-[#f6f6f6] overflow-hidden relative">
            <img
              src="/Hero/h1.png"
              alt="Youth transforming communities in Makueni County"
              className="absolute inset-0 w-full h-full object-cover block grayscale contrast-110 hover:scale-102 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: High-contrast Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center max-w-xl">
            <span className="block text-[#757575] text-[13px] font-normal mb-6 uppercase tracking-wider">
              01 / Perspective
            </span>
            
            <h2 className="text-black text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.05] tracking-tight mb-8">
              Community <br />
              agriculture, <br />
              reconfigured.
            </h2>

            <div className="space-y-6 text-black font-normal text-[15px] md:text-[16px] leading-relaxed opacity-85">
              <p>
                Next-Generation Youth Agribusiness & Research CBO operates as an open ecosystem based in Makueni County, Kenya. We exist to scale sustainable cultivation systems, ecological conservation initiatives, and local economic resilience.
              </p>
              <p>
                By linking rigorous empirical research with field-level implementation, we shift raw youth potential into definitive community action. The objective is clean, sustainable progression.
              </p>
            </div>

            <div className="mt-12">
              <Link
                to="/about"
                className="inline-flex items-center justify-between border border-black text-black px-6 py-3.5 text-[15px] font-normal hover:bg-black hover:text-white transition-colors duration-300 w-[220px]"
              >
                <span>Read the manifesto</span>
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* 03. CORE PILLARS SECTION (Strategic Pillars) */}
      <section className="py-28 lg:py-36 bg-[#f6f6f6] border-t border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24">
          <span className="block text-[#757575] text-[13px] font-normal mb-4 uppercase tracking-wider">
            02 / Parameters
          </span>
          <h2 className="text-4xl md:text-[52px] font-normal tracking-tight text-black mb-20">
            Strategic Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-20">
            {/* Pillar 1 */}
            <div className="flex flex-col border-t border-[#D9D9D9] pt-6">
              <span className="text-[13px] text-[#757575] mb-8 font-normal">02.1</span>
              <h3 className="text-[22px] font-normal text-black mb-4 tracking-tight">
                Agribusiness Development
              </h3>
              <p className="text-[15px] text-black opacity-75 font-normal leading-relaxed max-w-sm">
                Engineering high-efficiency agricultural enterprises to protect regional food security and construct real commercial careers.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="flex flex-col border-t border-[#D9D9D9] pt-6">
              <span className="text-[13px] text-[#757575] mb-8 font-normal">02.2</span>
              <h3 className="text-[22px] font-normal text-black mb-4 tracking-tight">
                Leadership Systems
              </h3>
              <p className="text-[15px] text-black opacity-75 font-normal leading-relaxed max-w-sm">
                Systematic asset incubation through advanced analytical training frameworks, technical workspace optimization, and applied peer mentorship.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="flex flex-col border-t border-[#D9D9D9] pt-6">
              <span className="text-[13px] text-[#757575] mb-8 font-normal">02.3</span>
              <h3 className="text-[22px] font-normal text-black mb-4 tracking-tight">
                Empirical Analytics
              </h3>
              <p className="text-[15px] text-black opacity-75 font-normal leading-relaxed max-w-sm">
                Deploying research methodologies directly into field trials to generate empirical validation parameters for modern farming solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. FEATURED CASE STUDIES (Mimics the dynamic style of Screenshot 171) */}
      <section className="bg-white py-28 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24 flex flex-col gap-32 lg:gap-48">
          
          {/* Row 1: Copy with Polestar-style Inline Header Symbol */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:pr-12">
              <span className="text-[#757575] text-[13px] uppercase block mb-4 font-normal tracking-wider">
                03 / Initiative
              </span>
              
              {/* Heading featuring the signature Polestar inline top-right arrow layout from Screenshot 171 */}
              <h2 className="text-black text-4xl lg:text-[54px] font-normal mb-8 leading-[1.05] tracking-tight flex items-start gap-3">
                <span className="text-3xl lg:text-5xl font-light translate-y-2 select-none">↗</span>
                <span>Empowering Future Leaders</span>
              </h2>
              
              <p className="text-black opacity-85 text-[16px] leading-relaxed mb-10 font-normal">
                Through optimized enterprise development, community-first leadership models, and technological research integrations, we provide regional operators with the tools required to form a sustainable path forward.
              </p>
              
              <Link to="/programs" className="inline-flex items-center gap-1.5 group font-normal text-[15px]">
                <span className="hover:underline underline-offset-4 decoration-1">
                  Explore deep initiatives
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
            
            <div className="lg:col-span-7 w-full bg-[#f6f6f6] overflow-hidden aspect-[16/10]">
              <img
                src="/Innovation/mushroom.png"
                alt="Agribusiness Development"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Row 2: Alternating Block */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 w-full bg-[#f6f6f6] overflow-hidden aspect-[16/10] order-2 lg:order-1">
              <img
                src="/Innovation/mush2.png"
                alt="Research & Innovation"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            <div className="lg:col-span-5 lg:pl-12 order-1 lg:order-2">
              <span className="text-[#757575] text-[13px] uppercase block mb-4 font-normal tracking-wider">
                04 / Incubation
              </span>
              <h2 className="text-black text-4xl lg:text-[54px] font-normal mb-8 leading-[1.05] tracking-tight flex items-start gap-3">
                <span className="text-3xl lg:text-5xl font-light translate-y-2 select-none">↗</span>
                <span>The Agriculture Innovation Hub</span>
              </h2>
              <p className="text-black opacity-85 text-[16px] leading-relaxed mb-10 font-normal">
                Our collaborative spaces provide a dedicated point of origin for localized agricultural technology concepts, completely defining how regional micro-enterprises design high-yield local distribution networks.
              </p>
              <Link to="/innovation-hub" className="inline-flex items-center gap-1.5 group font-normal text-[15px]">
                <span className="hover:underline underline-offset-4 decoration-1">
                  View structural projects
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 05. INNOVATION DISPLAY COMPONENT */}
      <section className="py-28 lg:py-36 bg-[#f6f6f6] border-t border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-[6vw] md:px-12 lg:px-24">
          <SectionHeader 
            eyebrow="05 / R&D Pipelines" 
            title="Innovation Matrix" 
            subtitle="Evaluating the active tech paradigms driving next-gen operational yields." 
          />
          
          <div className="flex flex-col gap-6 mt-16 items-center">
            {innovations.slice(0, 3).map((inv) => (
              <InnovationCard key={inv.id} {...inv} />
            ))}
          </div>
          
          <div className="mt-16 border-t border-[#D9D9D9] pt-8 text-left">
            <Link 
              to="/innovation-hub" 
              className="inline-flex items-center gap-1.5 font-normal text-[15px] hover:underline underline-offset-4 decoration-1"
            >
              <span>Explore full data index</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 06. HIGH-IMPACT TYPOGRAPHIC INTERFACE (Perfectly mimicking Screenshot 168) */}
      <section className="py-28 lg:py-40 px-[6vw] md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="mb-16">
            <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
              06 / Calendar
            </span>
            <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
              Operational Gatherings
            </h2>
          </div>

          {/* Stacked Interactive Links mimicking Screenshot 168 exactly */}
          <div className="w-full border-t border-black">
            {events.slice(0, 3).map((evt) => (
              <Link 
                key={evt.id}
                to={`/events`}
                className="w-full py-10 lg:py-14 flex justify-between items-center border-b border-[#D9D9D9] group hover:opacity-60 transition-opacity duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 max-w-[85%]">
                  <span className="text-3xl md:text-5xl lg:text-[64px] font-normal text-black tracking-tight block leading-none">
                    {evt.title}
                  </span>
                  <span className="text-[14px] text-[#757575] uppercase tracking-wider font-normal whitespace-nowrap">
                    {evt.date || "Scheduled"}
                  </span>
                </div>
                {/* Minimal clean thin right chevron from image 168 */}
                <span className="text-2xl md:text-4xl font-light text-black select-none pl-4 transition-transform duration-300 group-hover:translate-x-2">
                  &gt;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-right">
            <Link 
              to="/events" 
              className="inline-flex items-center gap-1.5 font-normal text-[15px] border-b border-black pb-1 hover:opacity-60 transition-opacity duration-200"
            >
              <span>View all scheduled events</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 07. MINIMALIST ENGAGEMENT BLOCKS */}
      <section className="py-28 lg:py-36 bg-[#f6f6f6] border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24 text-left">
          <span className="text-[#757575] text-[13px] uppercase tracking-wider block mb-6">
            07 / Cohesion
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-black mb-14 leading-[1.15] tracking-tight max-w-4xl">
            Register as an active component inside our network ecosystem. Gain instant access to continuous empirical field documentation and scalable infrastructure resources.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/membership" 
              className="border border-black bg-black text-white px-6 py-3.5 text-[15px] font-normal hover:bg-transparent hover:text-black transition-colors duration-300 text-center sm:w-[180px]"
            >
              Join network
            </Link>
            <Link 
              to="/membership" 
              className="border border-[#B5B5B5] bg-transparent text-black px-6 py-3.5 text-[15px] font-normal hover:border-black transition-colors duration-300 text-center sm:w-[220px]"
            >
              Review specifications
            </Link>
          </div>
        </div>
      </section>

      {/* 08. ECOSYSTEM PARTNERS PREVIEW */}
      <section className="py-24 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 gap-4">
            <h2 className="text-2xl font-normal text-black tracking-tight">
              Institutional Integration
            </h2>
            <Link to="/partnerships" className="text-[14px] font-normal hover:underline underline-offset-4">
              Become a verified partner →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.slice(0, 4).map((p, i) => (
              <div key={i} className="w-full flex justify-start items-center py-4">
                <img 
                  src={p.image || p.logo} 
                  alt={p.name} 
                  className="max-h-12 w-auto object-contain grayscale text-black filter contrast-200" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. FULL-BLEED CTA WRAPPER (Support Us) */}
      <section className="py-36 md:py-48 bg-black text-white px-[6vw] md:px-12 lg:px-24 flex flex-col items-start justify-center">
        <div className="max-w-[1440px] mx-auto w-full">
          <span className="text-[#858585] text-[13px] uppercase tracking-wider mb-6 block font-normal">
            08 / Sustainability
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal mb-8 text-white leading-none tracking-tighter max-w-4xl">
            Fund the transition.
          </h2>
          
          <p className="text-[#858585] text-[16px] md:text-[18px] font-normal leading-relaxed max-w-xl mb-16">
            Direct alternative capital allocations toward localized climate development models and scientific equipment provisioning for smallholder networks.
          </p>
          
          <Link 
            to="/support-us" 
            className="inline-flex items-center justify-between border border-white text-white px-6 py-4 text-[15px] font-normal hover:bg-white hover:text-black transition-colors duration-300 w-[240px]"
          >
            <span>Initiate contribution</span>
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </section>
      
    </div>
  );
}