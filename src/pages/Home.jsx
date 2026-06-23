import { useEffect, useRef } from "react";
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

/* 
  THE ENGINE: 
  This calculates exactly how many pixels of the section are visible, 
  and mixes 'baseHex' and 'lightHex' live on the GPU. Zero React re-renders.
*/
const ScrollScrubSection = ({ baseHex, lightHex, className = "", children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The "Fade Window": Starts fading when the section is 15% up from the bottom,
      // and finishes fading to 100% light once it reaches 35% from the top.
      const startFadePx = windowHeight * 0.85; 
      const endFadePx = windowHeight * 0.35;   

      const currentPx = rect.top;

      let lightPercentage = 0;

      if (currentPx <= endFadePx) {
        lightPercentage = 100;
      } else if (currentPx < startFadePx) {
        const totalDistance = startFadePx - endFadePx;
        const traveled = startFadePx - currentPx;
        lightPercentage = (traveled / totalDistance) * 100;
      }

      // We inject the math directly into the DOM node. React never knows this happened.
      section.style.backgroundColor = `color-mix(in srgb, ${lightHex} ${lightPercentage.toFixed(1)}%, ${baseHex})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // paint initial frame

    return () => window.removeEventListener("scroll", handleScroll);
  }, [baseHex, lightHex]);

  return (
    <section 
      ref={sectionRef} 
      className={className} 
      style={{ backgroundColor: baseHex }}
    >
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <div className="font-sans text-[#333333]">
      <HeroSection />

      {/* About Preview */}
      <ScrollScrubSection 
        baseHex="#DFDFDF" 
        lightHex="#FFFFFF" 
        className="py-24 px-4 max-w-5xl mx-auto text-center"
      >
        <SectionHeader
          eyebrow="Our Mission"
          title="About Us"
          subtitle="We are a youth-driven CBO dedicated to creating sustainable livelihoods through agribusiness, research, and innovation."
        />
        <Link
          to="/about"
          className="inline-block font-heading border border-[#979797] text-[#333333] px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#333333] hover:text-white transition-all duration-500"
        >
          Learn More
        </Link>
      </ScrollScrubSection>

      {/* Three Pillars */}
      <ScrollScrubSection 
        baseHex="#C8C8C8" 
        lightHex="#E5E5E5" 
        className="py-24"
      >
        <div className="max-w-[90%] mx-auto px-4">
          <SectionHeader eyebrow="Our Foundation" title="Our Strategic Pillars" />
          <div className="grid md:grid-cols-3 gap-12 text-center mt-16">
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-[#b8a898] mb-8"></div>
              <h3 className="text-2xl font-heading font-normal text-[#333333] mb-4">
                Agribusiness Development
              </h3>
              <p className="font-sans text-sm text-[#666666] font-light leading-relaxed max-w-xs">
                Supporting sustainable agricultural enterprises and income-generating opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-[#b8a898] mb-8"></div>
              <h3 className="text-2xl font-heading font-normal text-[#333333] mb-4">
                Youth Empowerment
              </h3>
              <p className="font-sans text-sm text-[#666666] font-light leading-relaxed max-w-xs">
                Building future leaders through rigorous training, mentorship, and entrepreneurship.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-[#b8a898] mb-8"></div>
              <h3 className="text-2xl font-heading font-normal text-[#333333] mb-4">
                Research & Innovation
              </h3>
              <p className="font-sans text-sm text-[#666666] font-light leading-relaxed max-w-xs">
                Driving evidence-based solutions and supporting youth-led innovations.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/programs" className="inline-block font-heading border border-black bg-black text-white px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-black transition-all duration-500">
              View Programs
            </Link>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Featured Programs */}
      <ScrollScrubSection 
        baseHex="#17141A" 
        lightHex="#2D2932" 
        className="py-32"
      >
        <div className="max-w-[90%] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <span className="text-[#d2b79b] font-heading text-xs uppercase tracking-[0.3em] block mb-10 font-medium">
              Featured Programs
            </span>
            <h2 className="text-white font-heading text-5xl md:text-6xl font-light mb-10 leading-tight">
              Empowering
              <br />
              Future Leaders
            </h2>
            <p className="text-[#a9a5ac] font-sans text-xl leading-relaxed mb-16 font-light">
              Through agribusiness development, youth empowerment and
              research-driven innovation, we equip young people with the
              skills and opportunities needed to create sustainable livelihoods
              and transform communities.
            </p>
            <Link to="/programs" className="inline-block group font-heading">
              <span className="text-[#d2b79b] uppercase tracking-[0.2em] text-sm">
                Explore Programs
              </span>
              <div className="w-28 h-[1px] bg-[#d2b79b] mt-4 group-hover:w-40 transition-all duration-500"></div>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden">
              <img
                src="/Innovation/mushroom.png"
                alt="Featured Programs"
                className="w-full max-w-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Innovation Preview */}
      <ScrollScrubSection 
        baseHex="#D6D6DC" 
        lightHex="#F5F5F7" 
        className="py-24"
      >
        <div className="max-w-[90%] mx-auto px-4">
          <SectionHeader 
            eyebrow="Future Forward" 
            title="Innovation Hub" 
            subtitle="Youth-led innovations shaping the future of agriculture." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {innovations.slice(0, 3).map((inv) => (
              <InnovationCard key={inv.id} {...inv} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/innovation-hub" className="font-heading text-xs uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-all pb-1">
              Explore Innovation Hub
            </Link>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Upcoming Events */}
      <ScrollScrubSection 
        baseHex="#4A4B4E" 
        lightHex="#858689" 
        className="py-24 px-4"
      >
        <div className="max-w-[90%] mx-auto">
          <div className="mb-12 text-left">
            <span className="text-[#b8a898] font-heading text-xs uppercase tracking-[0.25em] font-medium block mb-3">
              Gatherings
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-white tracking-wide mb-4">
              Upcoming Events
            </h2>
            <p className="font-sans text-white/90 text-sm md:text-base font-light leading-relaxed max-w-xl">
              Join our exclusive trainings, conferences, and community activities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {events.slice(0, 3).map((evt) => (
              <EventCard key={evt.id} {...evt} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/events" 
              className="font-heading text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#b8a898] border-b border-white hover:border-[#b8a898] transition-all duration-300 pb-1"
            >
              View All Events
            </Link>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Membership CTA */}
      <ScrollScrubSection 
        baseHex="#C2C2C2" 
        lightHex="#E5E5E5" 
        className="py-32 px-4"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-8 h-8 border border-[#b8a898] rotate-45 mb-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#b8a898]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-normal text-[#333333] mb-12 leading-snug tracking-wide">
            Become a member, join our community and gain access to training, mentorship, and networking.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/membership" className="font-heading border border-black bg-black text-white px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-transparent hover:text-black transition-all duration-500">
              Join Now
            </Link>
            <Link to="/membership" className="font-heading border border-[#979797] text-[#333333] px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:border-black transition-all duration-500">
              Membership Benefits
            </Link>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Partners Preview */}
      <ScrollScrubSection 
        baseHex="#424045" 
        lightHex="#7A787D" 
        className="py-24 px-4"
      >
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#d2b79b] font-heading text-xs uppercase tracking-[0.25em] font-medium block mb-3">
              Collaborations
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-white tracking-wide">
              Our Partners
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center mt-12">
            {partners.map((p, i) => (
              <img 
                key={i} 
                src={p.logo} 
                alt={p.name} 
                className="h-12 grayscale invert brightness-200 opacity-75 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:opacity-100 transition-all duration-500 cursor-pointer" 
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/partnerships" 
              className="font-heading text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </ScrollScrubSection>

      {/* Support Us CTA */}
      <ScrollScrubSection 
        baseHex="#1A1918" 
        lightHex="#3B3A38" 
        className="py-32 md:py-48 text-center px-4 flex flex-col items-center justify-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#94938F] font-heading text-[11px] uppercase tracking-[0.25em] mb-6 block font-medium">
            Make An Impact
          </span>
          <h2 className="text-5xl md:text-[64px] font-heading font-normal mb-10 text-[#D4CBB6] tracking-wide">
            Support Our Mission
          </h2>
          <p className="text-[#94938F] font-sans text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-16 mx-auto">
            Your donation or volunteer effort can change lives. Help us build a sustainable future for the next generation.
          </p>
          <Link 
            to="/support-us" 
            className="text-[#D4CBB6] font-heading text-[11px] uppercase tracking-[0.2em] font-medium border-b border-[#D4CBB6] pb-1.5 hover:text-white hover:border-white transition-colors duration-300"
          >
            Support Us
          </Link>
        </div>
      </ScrollScrubSection>
      
    </div>
  );
}