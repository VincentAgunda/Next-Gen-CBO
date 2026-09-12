import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { innovations } from "../data/innovations";
import { partners } from "../data/partners";

// Hardware-accelerated, physics-based parallax component
const PhysicsImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring physics configuration for buttery smoothness
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Move image from -10% to 10% on the Y axis as you scroll
  const y = useTransform(smoothY, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden transform-gpu will-change-transform"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
        decoding="async"
        // h-[120%] ensures we have extra room for the parallax movement without revealing the background
        className={`absolute inset-0 w-full h-[120%] -top-[10%] object-cover transform-gpu will-change-transform ${className}`}
      />
    </div>
  );
};

export default function CallAction({ setSectionRef }) {
  const setRef = setSectionRef || (() => () => {});

  return (
    <>
      {/* Section 5: Innovation Hub Preview */}
      <section
        ref={setRef(5)}
        className="py-28 lg:py-36 bg-[#f4f4f4] border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-24 md:mb-32 lg:mb-36">
            <div className="flex items-center gap-4 mb-7 md:mb-9">
              <span className="w-8 h-[1px] bg-[#B0926A]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
                Future Forward
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium tracking-tighter leading-[1.02] transform-gpu">
                Innovation{" "}
                <span className="text-neutral-400">Hub.</span>
              </h2>

              <p className="max-w-xl lg:pb-2 text-neutral-500 font-light text-base md:text-lg leading-relaxed transform-gpu">
                We are a youth-led initiative developing scientific innovations
                and climate-smart agricultural prototypes to shape the future of
                farming through practical research, technology, and localized
                systems.
              </p>
            </div>
          </div>

          {/* Burmester Style Cards Grid */}
          <div className="flex flex-col gap-12 mt-12">
            {innovations.slice(0, 3).map((inv) => (
              <motion.div
                key={inv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="bg-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 rounded-none transform-gpu will-change-transform"
              >
                {/* Left Column: Image with Physics Parallax */}
                <div className="relative h-72 lg:h-auto min-h-[360px] overflow-hidden bg-neutral-100 transform-gpu">
                  <PhysicsImage
                    src={inv.image || "/api/placeholder/800/600"}
                    alt={inv.title}
                    className="hover:scale-105 transition-transform duration-[1500ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
                  />
                </div>

                {/* Right Column: Content */}
                <div className="p-10 sm:p-14 lg:p-20 flex flex-col justify-center items-start text-left transform-gpu">
                  <span className="text-[#C0A175] font-light text-xs uppercase tracking-[0.25em] mb-4 block">
                    {inv.category || "Innovation"}
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-normal text-neutral-900 tracking-tight mb-6 leading-tight">
                    {inv.title}
                  </h3>

                  <p className="text-neutral-500 font-light text-sm lg:text-base leading-relaxed mb-10 max-w-md">
                    {inv.description}
                  </p>

                  <Link
                    to={`/innovation-hub/${inv.id}`}
                    className="inline-block border border-neutral-300 hover:border-[#C0A175] text-neutral-900 hover:text-[#C0A175] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 transition-colors duration-300 rounded-none"
                  >
                    Explore Innovation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Hub CTA */}
          <div className="text-center mt-20 transform-gpu">
            <Link
              to="/innovation-hub"
              className="group inline-flex items-center gap-3 bg-neutral-900 text-white hover:bg-[#C0A175] px-10 py-5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 rounded-none"
            >
              <span>Explore All Innovations</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ease-out will-change-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA (Section 7) */}
      <section
        ref={setRef(7)}
        className="py-32 lg:py-48 px-6 lg:px-24 bg-[#e5e5e5] border-b border-neutral-300/50 transform-gpu will-change-transform"
      >
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
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out will-change-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-4 border border-[#111111] bg-transparent text-[#111111] px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition-colors duration-500 rounded-none group"
            >
              <span>Explore benefits</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out will-change-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Partners */}
      <section
        ref={setRef(8)}
        className="py-24 lg:py-32 px-6 lg:px-12 bg-[#7a787d] text-white border-b border-neutral-600/30 transform-gpu"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/20 gap-6">
            <div>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                Collaborations
              </span>
              <h2 className="text-4xl lg:text-5xl font-medium sm:font-normal tracking-tight text-white">
                Our Partners
              </h2>
            </div>
            <Link
              to="/partnerships"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white transition-colors duration-300 rounded-none"
            >
              <span>Become a Partner</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out will-change-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20 overflow-hidden rounded-none transform-gpu">
            {partners.slice(0, 2).map((p, i) => (
              <div
                key={i}
                className="relative bg-[#6e6c71]/50 backdrop-blur-sm h-[280px] md:h-[360px] w-full group overflow-hidden cursor-pointer"
              >
                <img
                  src={p.image || p.logo}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Membership & Support Call to Action */}
      <section
        ref={setRef(9)}
        className="py-32 lg:py-48 bg-[#3B3A38] text-white px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/15"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 transform-gpu">
          <div className="inline-block w-3 h-3 bg-[#d2b79b] rotate-45 mb-4" />

          <span className="text-[#d2b79b] font-mono text-xs uppercase tracking-[0.35em] block font-medium">
            08 / Take Action
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal lg:font-light tracking-tight leading-[1.08] text-white">
            Support our mission. <br />
            <span className="text-neutral-500 font-light sm:font-extralight">
              Empower the next generation.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg font-normal sm:font-light leading-relaxed max-w-2xl mx-auto pt-4">
            Whether through direct mentorship, institutional funding, or active
            community membership, your involvement accelerates sustainable
            agricultural reform.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/support-us"
              className="group w-full sm:w-auto border border-[#d2b79b] bg-[#d2b79b] text-[#0A0A0A] px-10 py-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-medium hover:bg-transparent hover:text-[#d2b79b] transition-colors duration-500 rounded-none transform-gpu"
            >
              <span>Support Us Today</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out will-change-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/membership"
              className="w-full sm:w-auto border border-white/30 bg-transparent text-white px-10 py-5 text-xs uppercase tracking-[0.25em] font-medium hover:border-white hover:bg-white/5 transition-all duration-500 ease-out rounded-none transform-gpu"
            >
              Become A Member
            </Link>
          </div>
        </div>

        {/* Physics-driven Parallax Bottom Image */}
        <div className="max-w-5xl mx-auto mt-20 relative z-10 overflow-hidden border border-white/10 rounded-sm group shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]">
          <PhysicsImage
            src="/Hero/h1.jpeg"
            alt="Support Our Mission"
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </section>
    </>
  );
}