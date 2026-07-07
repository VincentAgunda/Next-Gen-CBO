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
    <div className="font-sans text-[#333333] bg-[#F5F5F7] antialiased selection:bg-[#b8a898] selection:text-white overflow-hidden">
      <HeroSection />

      <section className="relative py-24 lg:py-36 px-6 md:px-12 lg:px-24 bg-[#F5F5F7] flex items-center min-h-[80vh] antialiased text-neutral-800 font-sans tracking-wide">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch w-full relative max-w-7xl mx-auto">
        
        <div className="w-full relative min-h-[400px] lg:min-h-0 border border-neutral-100 shadow-sm overflow-hidden group">
          <img
            src="/Hero/h1.png"
            alt="Youth transforming communities in Makueni County"
            className="absolute inset-0 w-full h-full object-cover block grayscale opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>

        <div className="flex flex-col justify-center py-6 max-w-xl">
          <div className="mb-6 space-y-3">
            <span className="block text-[#B0926A] text-[11px] uppercase tracking-[0.3em] font-medium">
              Who We Are
            </span>
            
            <h2 className="text-neutral-900 font-sans text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
              Transforming Communities Through Youth Innovation
            </h2>
          </div>

          <div className="space-y-6 text-neutral-500 font-light text-sm md:text-base leading-relaxed">
            <p>
              Next-Generation Youth Agribusiness & Research CBO is a youth-led community-based organization based in Makueni County, Kenya, committed to transforming communities through sustainable agriculture, research, innovation, environmental conservation, and youth empowerment.
            </p>
            <p>
              We bring together young innovators, researchers, entrepreneurs, and community members who are passionate about creating practical, evidence-based solutions to today's social, environmental, and economic challenges. By combining research with real-world action, we empower young people to become drivers of sustainable development while improving livelihoods within our communities.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/about"
              className="inline-block border border-neutral-900 text-neutral-900 px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white transition-all duration-500 ease-out shadow-sm"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-[-40px] top-1/2 -translate-y-1/2 flex-col items-end gap-[8px]">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`h-[1px] transition-all duration-500 ${
                index === 2 ? 'w-8 bg-neutral-900' : 'w-4 bg-neutral-200'
              }`}
            />
          ))}
        </div>
        
      </div>
    </section>

      {/* Three Pillars */}
      <section className="py-24 lg:py-32 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Our Foundation" title="Our Strategic Pillars" />
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 text-center mt-20">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#b8a898]/20 via-[#b8a898] to-[#b8a898]/20 mb-8 group-hover:scale-y-125 transition-transform duration-500"></div>
              <h3 className="text-2xl font-heading font-medium text-[#333333] mb-4">
                Agribusiness Development
              </h3>
              <p className="font-sans text-base text-[#666666] font-light leading-relaxed max-w-sm">
                Supporting sustainable agricultural enterprises and income-generating opportunities.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#b8a898]/20 via-[#b8a898] to-[#b8a898]/20 mb-8 group-hover:scale-y-125 transition-transform duration-500"></div>
              <h3 className="text-2xl font-heading font-medium text-[#333333] mb-4">
                Youth Empowerment
              </h3>
              <p className="font-sans text-base text-[#666666] font-light leading-relaxed max-w-sm">
                Building future leaders through rigorous training, mentorship, and entrepreneurship.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-[1px] h-16 bg-gradient-to-b from-[#b8a898]/20 via-[#b8a898] to-[#b8a898]/20 mb-8 group-hover:scale-y-125 transition-transform duration-500"></div>
              <h3 className="text-2xl font-heading font-medium text-[#333333] mb-4">
                Research & Innovation
              </h3>
              <p className="font-sans text-base text-[#666666] font-light leading-relaxed max-w-sm">
                Driving evidence-based solutions and supporting youth-led innovations.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link 
              to="/programs" 
              className="inline-block font-heading border border-[#333333] bg-[#333333] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#333333] transition-all duration-500"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs (Updated to match alternating design pattern) */}
      <section className="bg-[#2d2932] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 lg:gap-40">
          
          {/* Row 1: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="max-w-lg order-2 lg:order-1">
              <span className="text-[#d2b79b] font-heading text-xs uppercase tracking-[0.3em] block mb-4 font-medium">
                Agribusiness Initiative
              </span>
              <h2 className="text-white font-heading text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Empowering <br className="hidden lg:block" />
                Future Leaders
              </h2>
              <p className="text-[#c1bdc4] font-sans text-lg leading-relaxed mb-10 font-light">
                Through agribusiness development, youth empowerment and
                research-driven innovation, we equip young people with the
                skills and opportunities needed to create sustainable livelihoods
                and transform communities.
              </p>
              <Link to="/programs" className="inline-flex flex-col group font-heading w-max">
                <span className="text-[#d2b79b] uppercase tracking-[0.2em] text-xs font-medium group-hover:text-white transition-colors duration-300">
                  Explore Programs
                </span>
                <div className="w-full h-[1px] bg-[#d2b79b] mt-2 group-hover:bg-white transition-all duration-500 ease-in-out"></div>
              </Link>
            </div>
            <div className="w-full order-1 lg:order-2">
              <img
                src="/Innovation/mushroom.png"
                alt="Agribusiness Development"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="w-full order-1">
              <img
                src="/Innovation/mush2.png" // Replace with your actual second image path
                alt="Research & Innovation"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="max-w-lg order-2 lg:pl-8">
              <span className="text-[#d2b79b] font-heading text-xs uppercase tracking-[0.3em] block mb-4 font-medium">
                Youth Innovation Hub
              </span>
              <h2 className="text-white font-heading text-4xl lg:text-5xl font-light mb-6 leading-tight">
                First steps into the <br className="hidden lg:block" />
                agricultural sector
              </h2>
              <p className="text-[#c1bdc4] font-sans text-lg leading-relaxed mb-10 font-light">
                Our innovation projects mark the start of community-led agricultural 
                advancements, redefining how young entrepreneurs approach sustainable 
                farming and local economic growth.
              </p>
              <Link to="/innovation-hub" className="inline-flex flex-col group font-heading w-max">
                <span className="text-[#d2b79b] uppercase tracking-[0.2em] text-xs font-medium group-hover:text-white transition-colors duration-300">
                  To The Project
                </span>
                <div className="w-full h-[1px] bg-[#d2b79b] mt-2 group-hover:bg-white transition-all duration-500 ease-in-out"></div>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Innovation Preview */}
      <section className="py-24 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeader 
            eyebrow="Future Forward" 
            title="Innovation Hub" 
            subtitle="Youth-led innovations shaping the future of agriculture." 
          />
          
          <div className="flex flex-col gap-12 lg:gap-16 mt-16 items-center">
            {innovations.slice(0, 3).map((inv) => (
              <InnovationCard key={inv.id} {...inv} />
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link 
              to="/innovation-hub" 
              className="inline-block font-heading text-xs uppercase tracking-[0.2em] font-medium text-[#666666] hover:text-[#333333] border-b border-[#cccccc] hover:border-[#333333] transition-all pb-1.5"
            >
              Explore Innovation Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#858689]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="text-left max-w-2xl">
              <span className="text-[#e2dacd] font-heading text-xs uppercase tracking-[0.25em] font-medium block mb-4">
                Gatherings
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-wide mb-4">
                Upcoming Events
              </h2>
              <p className="font-sans text-white/80 text-base md:text-lg font-light leading-relaxed">
                Join our exclusive trainings, conferences, and community activities designed to foster growth and connection.
              </p>
            </div>
            
            <div className="hidden md:block">
              <Link 
                to="/events" 
                className="font-heading text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#d2b79b] border-b border-white/50 hover:border-[#d2b79b] transition-all duration-300 pb-1.5 whitespace-nowrap"
              >
                View All Events
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((evt) => (
              <EventCard key={evt.id} {...evt} />
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Link 
              to="/events" 
              className="font-heading text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#d2b79b] border-b border-white/50 hover:border-[#d2b79b] transition-all duration-300 pb-1.5"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-10 h-10 border border-[#b8a898] rotate-45 mb-12 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#b8a898]"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-[#333333] mb-12 leading-[1.3] tracking-wide">
            Become a member, join our community and gain access to training, mentorship, and networking.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <Link 
              to="/membership" 
              className="font-heading border border-[#333333] bg-[#333333] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-[#333333] transition-all duration-500 w-full sm:w-auto text-center"
            >
              Join Now
            </Link>
            <Link 
              to="/membership" 
              className="font-heading border border-[#979797] bg-transparent text-[#333333] px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:border-[#333333] transition-all duration-500 w-full sm:w-auto text-center"
            >
              Membership Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#7a787d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#d2b79b] font-heading text-xs uppercase tracking-[0.25em] font-medium block mb-4">
              Collaborations
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-wide">
              Our Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-4xl mx-auto items-center justify-items-center">
            {partners.slice(0, 2).map((p, i) => (
              <div key={i} className="w-full flex justify-center items-center py-4">
                <img 
                  src={p.image || p.logo} 
                  alt={p.name} 
                  className="w-auto h-auto max-h-36 md:max-h-48 lg:max-h-56 object-contain grayscale invert brightness-200 opacity-75 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer" 
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link 
              to="/partnerships" 
              className="inline-block font-heading text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1.5"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Support Us CTA */}
      <section className="py-32 md:py-48 bg-[#3B3A38] px-6 lg:px-12 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#94938F] font-heading text-[11px] uppercase tracking-[0.3em] mb-6 block font-medium">
            Make An Impact
          </span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light mb-10 text-[#D4CBB6] tracking-wide">
            Support Our Mission
          </h2>
          
          <p className="text-[#94938F] font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-16 mx-auto">
            Your donation or volunteer effort can change lives. Help us build a sustainable future for the next generation.
          </p>
          
          <Link 
            to="/support-us" 
            className="inline-flex flex-col group text-[#D4CBB6] font-heading text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            <span className="group-hover:text-white transition-colors duration-300">
              Support Us
            </span>
            <div className="w-full h-[1px] bg-[#D4CBB6] mt-2 group-hover:bg-white transition-all duration-500"></div>
          </Link>
        </div>
      </section>
      
    </div>
  );
}