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
    <div className="font-sans text-neutral-900 bg-[#FFFFFF] antialiased selection:bg-[#b8a898] selection:text-white overflow-hidden">
      <HeroSection />

      {/* WHO WE ARE - Clean Architectural Grid */}
      <section className="relative py-24 lg:py-36 px-6 md:px-12 lg:px-24 bg-[#FFFFFF] border-b border-neutral-200">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#B0926A]"></span>
              <span className="block text-[#B0926A] text-xs uppercase tracking-[0.25em] font-semibold">
                01 / Who We Are
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.08]">
              The catalyst for sustainable youth innovation.
            </h2>

            <div className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#B0926A] transition-colors"
              >
                <span>Read Our Full Story</span>
                <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 lg:pl-8 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-8 lg:pt-0">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-900">
                Evidence-Based Action
              </h3>
              <p className="text-neutral-600 font-light text-base leading-relaxed">
                Next-Generation Youth Agribusiness & Research CBO is a youth-led engine based in Makueni County, Kenya. We reject outdated farming norms in favor of climate-smart agriculture, empirical research, and environmental preservation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-900">
                Community Transformation
              </h3>
              <p className="text-neutral-600 font-light text-base leading-relaxed">
                We bridge the gap between academic research and rural execution. By deploying young researchers and entrepreneurs directly into community ecosystems, we turn complex sustainability challenges into profitable, scalable livelihoods.
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist Visual Anchor */}
        <div className="max-w-7xl mx-auto mt-16 lg:mt-24 border border-neutral-200 p-2 bg-[#F8F8FA]">
          <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src="/Hero/h1.png"
              alt="Youth transforming communities in Makueni County"
              className="w-full h-full object-cover grayscale contrast-115 hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>
      </section>

      {/* THREE PILLARS - Polestar Light Concrete Style (#F8F8FA) */}
      <section className="py-24 lg:py-32 bg-[#F8F8FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                02 / Core Methodology
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-neutral-900">
                Our Strategic Pillars
              </h2>
            </div>
            <Link 
              to="/programs" 
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#B0926A] transition-colors"
            >
              <span>Explore All Programs</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-neutral-200 p-10 flex flex-col justify-between h-full group hover:border-neutral-400 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#b8a898] block mb-6 font-semibold">/ 01</span>
                <h3 className="text-2xl font-light tracking-tight text-neutral-900 mb-4">
                  Agribusiness Development
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
                  Transforming traditional farming into scalable, modern commercial enterprises. We provide seed capital access, value-chain optimization, and market linkage for high-yield crops.
                </p>
              </div>
              <div className="w-full h-[1px] bg-neutral-100 group-hover:bg-[#b8a898] transition-colors duration-500"></div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-neutral-200 p-10 flex flex-col justify-between h-full group hover:border-neutral-400 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#b8a898] block mb-6 font-semibold">/ 02</span>
                <h3 className="text-2xl font-light tracking-tight text-neutral-900 mb-4">
                  Youth Empowerment
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
                  Building the next generation of rural visionaries through intensive technical training, leadership incubation, and peer-to-peer mentorship ecosystems.
                </p>
              </div>
              <div className="w-full h-[1px] bg-neutral-100 group-hover:bg-[#b8a898] transition-colors duration-500"></div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-neutral-200 p-10 flex flex-col justify-between h-full group hover:border-neutral-400 transition-all duration-300">
              <div>
                <span className="text-xs font-mono text-[#b8a898] block mb-6 font-semibold">/ 03</span>
                <h3 className="text-2xl font-light tracking-tight text-neutral-900 mb-4">
                  Research & Innovation
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
                  Deploying empirical scientific methods to develop climate-resilient agricultural techniques, soil restoration frameworks, and clean energy farm applications.
                </p>
              </div>
              <div className="w-full h-[1px] bg-neutral-100 group-hover:bg-[#b8a898] transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED INITIATIVES - Light Architectural Grey (#F0F0F3) */}
      <section className="bg-[#F0F0F3] py-24 lg:py-36 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 lg:gap-32">
          
          {/* Row 1: Text Left, Image Right */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] block font-semibold">
                03 / Agribusiness Initiative
              </span>
              <h2 className="text-neutral-900 text-4xl lg:text-5xl font-light tracking-tighter leading-tight">
                Empowering <br className="hidden lg:block" />
                Future Leaders.
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed font-light">
                Through precision agribusiness development and research-driven innovation, we equip young entrepreneurs with the exact technical specifications needed to dominate sustainable value chains and uplift rural economies.
              </p>
              <div className="pt-2">
                <Link to="/programs" className="group inline-flex items-center gap-3 bg-white border border-neutral-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:border-neutral-900 transition-all">
                  <span>Explore Agribusiness</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2 border border-neutral-300 p-2 bg-white">
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src="/Innovation/mushroom.png"
                  alt="Agribusiness Development"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-1 border border-neutral-300 p-2 bg-white">
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src="/Innovation/mush2.png" 
                  alt="Research & Innovation"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-2 space-y-6 lg:pl-6">
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] block font-semibold">
                04 / Youth Innovation Hub
              </span>
              <h2 className="text-neutral-900 text-4xl lg:text-5xl font-light tracking-tighter leading-tight">
                Redefining the <br className="hidden lg:block" />
                Agricultural Sector.
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed font-light">
                Our innovation incubator marks the frontier of community-led scientific advancement. We provide the testing grounds, agronomic data, and modern tech required to disrupt traditional farming models.
              </p>
              <div className="pt-2">
                <Link to="/innovation-hub" className="group inline-flex items-center gap-3 bg-white border border-neutral-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:border-neutral-900 transition-all">
                  <span>View Innovation Projects</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INNOVATION PREVIEW - Pure White (#FFFFFF) */}
      <section className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                05 / Future Forward
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-neutral-900">
                The Innovation Hub
              </h2>
            </div>
            <p className="text-neutral-500 font-light max-w-md text-sm md:text-base">
              Explore the youth-led scientific breakthroughs and environmental frameworks shaping the future of East African agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.slice(0, 3).map((inv) => (
              <div key={inv.id} className="border border-neutral-200 p-4 bg-[#F8F8FA] hover:border-neutral-400 transition-all duration-300">
                <InnovationCard {...inv} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/innovation-hub" 
              className="inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#B0926A] hover:border-[#B0926A] transition-all"
            >
              <span>Access Full Innovation Archive</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS - Ultra-Light Concrete (#F4F4F6) */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F4F4F6] border-b border-neutral-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                06 / Field Gatherings
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-neutral-900">
                Upcoming Events
              </h2>
            </div>
            
            <Link 
              to="/events" 
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#B0926A] transition-colors"
            >
              <span>View Schedule</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((evt) => (
              <div key={evt.id} className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-all duration-300">
                <EventCard {...evt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA - Architectural Minimalist (#FFFFFF) */}
      <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#FFFFFF] border-b border-neutral-200 relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <span className="text-[#B0926A] text-xs uppercase tracking-[0.3em] font-semibold block mb-6">
            07 / Join The Network
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 mb-8 leading-[1.1]">
            Ready to engineer the future of agricultural resilience?
          </h2>

          <p className="text-neutral-500 font-light text-base md:text-lg max-w-2xl mb-12">
            Gain immediate access to empirical research data, specialized field training, seed funding networks, and a community of relentless innovators.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/membership" 
              className="bg-neutral-900 border border-neutral-900 text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-transparent hover:text-neutral-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Apply for Membership
            </Link>
            <Link 
              to="/membership" 
              className="bg-transparent border border-neutral-300 text-neutral-900 px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:border-neutral-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Benefits →
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS - Light Concrete Palette (#F8F8FA) */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#F8F8FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#B0926A] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
                08 / Collaborative Network
              </span>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tighter text-neutral-900">
                Our Institutional Partners
              </h2>
            </div>
            <Link 
              to="/partnerships" 
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Become a Partner ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center border-t border-neutral-200 pt-12">
            {partners.slice(0, 4).map((p, i) => (
              <div key={i} className="w-full flex justify-center items-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img 
                  src={p.image || p.logo} 
                  alt={p.name} 
                  className="max-h-12 md:max-h-16 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT US CTA - Engineered Light Minimalist (#EAEAEF) */}
      <section className="py-28 lg:py-40 bg-[#EAEAEF] px-6 lg:px-12 flex flex-col items-center justify-center border-b border-neutral-300">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#B0926A] text-xs uppercase tracking-[0.3em] mb-6 block font-semibold">
            09 / Make An Impact
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-8 text-neutral-900 leading-[1.05]">
            Invest in sustainable community transformation.
          </h2>
          
          <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed max-w-2xl mb-12 mx-auto">
            Your funding, technical expertise, or research mentorship directly fuels youth-led agricultural solutions in East Africa. Let's build resilience together.
          </p>
          
          <Link 
            to="/support-us" 
            className="group inline-flex items-center gap-4 bg-neutral-900 text-white px-10 py-5 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#B0926A] transition-all duration-300 shadow-sm"
          >
            <span>Support Our Mission</span>
            <span className="text-base transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
      
    </div>
  );
}