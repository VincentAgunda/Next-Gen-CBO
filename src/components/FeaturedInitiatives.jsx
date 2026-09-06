import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Custom easing for premium Mercedes-style smooth animations
const premiumEasing = [0.16, 1, 0.3, 1];

const InitiativeItem = ({ initiative, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: premiumEasing }}
      className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
    >
      {/* ==================================================
          IMAGE
      ================================================== */}
      <div
        className={`relative group overflow-hidden bg-neutral-50 lg:col-span-7 ${
          index % 2 === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 1.4, ease: [0.215, 0.61, 0.355, 1] }}
            src={initiative.image}
            alt={initiative.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-700" />
        </div>

        {/* Image number */}
        <div className="absolute top-6 left-6 flex items-center gap-3 text-white drop-shadow-md">
          <span className="h-px w-5 bg-white" />
          <span className="text-[9px] uppercase tracking-[0.22em] font-medium">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* ==================================================
          TEXT & INTERACTION
      ================================================== */}
      <div
        className={`lg:col-span-5 space-y-7 ${
          index % 2 === 1
            ? "lg:order-1 lg:pr-6 xl:pr-10"
            : "lg:order-2 lg:pl-6 xl:pl-10"
        }`}
      >
        {/* Category */}
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-8 bg-[#B0926A]" />
          <span className="text-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold">
            {initiative.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-neutral-900 text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-medium tracking-tighter leading-[1.05]">
          {initiative.title}
        </h2>

        {/* Discover More Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-3 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-500 pt-2 focus:outline-none"
        >
          <span className="relative overflow-hidden pb-1">
            <span className="inline-block group-hover:text-[#B0926A] transition-colors duration-500">
              {isExpanded ? "Close Details" : "Discover More"}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B0926A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </span>
          <span
            className={`relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-400 group-hover:border-[#B0926A] group-hover:bg-[#B0926A] transition-all duration-500 ${
              isExpanded ? "rotate-45" : ""
            }`}
          >
            <svg
              className="w-3.5 h-3.5 text-neutral-700 group-hover:text-white transition-colors duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: premiumEasing }}
              className="overflow-hidden"
            >
              <p className="max-w-xl text-neutral-500 font-normal text-base md:text-lg leading-relaxed pt-2 pb-6">
                {initiative.description}
              </p>
              
              <Link
                to={initiative.link}
                className="inline-flex items-center gap-3 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold group/cta"
              >
                <span className="relative overflow-hidden pb-1">
                  <span className="inline-block group-hover/cta:text-[#B0926A] transition-colors duration-500">
                    {initiative.linkText}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B0926A] origin-left scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500" />
                </span>
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-400 group-hover/cta:border-[#B0926A] group-hover/cta:bg-[#B0926A] transition-all duration-500">
                  <svg
                    className="w-3.5 h-3.5 text-neutral-700 group-hover/cta:text-white transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all duration-500 ease-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default function FeaturedInitiatives() {
  const initiatives = [
    {
      category: "Strategic Agribusiness",
      title: (
        <>
          Cultivating <br className="hidden lg:block" />
          <span className="text-[#B0926A]">Visionary Leadership.</span>
        </>
      ),
      description:
        "Through synergistic agribusiness development, institutional youth empowerment, and empirical research, we equip emerging leaders with the precise competencies required to architect resilient community livelihoods.",
      image: "/Partner/lead.png",
      alt: "Agribusiness Development and Youth Leadership",
      link: "/programs",
      linkText: "Explore Strategic Programs",
    },
    {
      category: "Precision Mycology Hub",
      title: (
        <>
          Automated <br className="hidden lg:block" />
          <span className="text-[#B0926A]">Agaricus Bisporus.</span>
        </>
      ),
      description:
        "Our flagship Precision Mycology project integrates automated environmental regulation and precise substrate thermal-shock protocols—redefining high-yield vertical farming for localized economic sustainability.",
      image: "/Innovation/mush2.png",
      alt: "White Button Mushroom Automated Cultivation Systems",
      link: "/innovation-hub",
      linkText: "Examine Mycology Protocols",
    },
    {
      category: "Digital Architecture",
      title: (
        <>
          Advanced ICT <br className="hidden lg:block" />
          <span className="text-[#B0926A]">& Systems Literacy.</span>
        </>
      ),
      description:
        "Eradicating the digital divide through sophisticated computing frameworks. We deliver targeted curriculum modules encompassing software fundamentals, network architecture, and localized technology stacks to cultivate a highly competitive workforce.",
      image: "/Innovation/ict.png",
      alt: "Advanced ICT and Digital Systems Training",
      link: "/programs",
      linkText: "Review Technological Stacks",
    },
    {
      category: "Avian Development Hub",
      title: (
        <>
          Bio-secured <br className="hidden lg:block" />
          <span className="text-[#B0926A]">Avian Farming Operations.</span>
        </>
      ),
      description:
        "Maximizing operational yields via high-efficiency nutrient deployment and rigorous bio-security frameworks. This specialized system serves as an empirical blueprint for scalable community micro-enterprises.",
      image: "/Innovation/poultry.png",
      alt: "Bio-Secured Precision Poultry Farming",
      link: "/programs",
      linkText: "View Avian Methodologies",
    },
    {
      category: "Strategic Philanthropy",
      title: (
        <>
          Impact-Driven <br className="hidden lg:block" />
          <span className="text-[#B0926A]">Socio-Economic Relief.</span>
        </>
      ),
      description:
        "Executing targeted philanthropic interventions designed to stabilize vulnerable demographics. From foundational resource distribution to structured equity investments, we engineer robust socio-economic support frameworks.",
      image: "/Hero/h4.jpeg",
      alt: "Community Philanthropy and Outreach Initiatives",
      link: "/programs",
      linkText: "Review Impact Metrics",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white text-neutral-900 antialiased selection:bg-[#B0926A] selection:text-white">
      {/* ============================================================
          INTRODUCTION
      ============================================================ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: premiumEasing }}
        className="px-6 md:px-12 lg:px-24 pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7 md:mb-9">
            <span className="w-8 h-[1px] bg-[#B0926A]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
              Featured Initiatives
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium tracking-tighter leading-[1.02]">
            Building <span className="text-[#B0926A]">What Comes Next.</span>
          </h1>

          {/* Intro */}
          <p className="max-w-2xl mt-8 md:mt-10 text-neutral-500 font-normal text-base md:text-lg leading-relaxed">
            Explore the programs, research systems, and community initiatives
            shaping sustainable livelihoods through agriculture, technology,
            innovation, and practical research.
          </p>
        </div>
      </motion.div>

      {/* ============================================================
          INITIATIVES
      ============================================================ */}
      <div className="bg-white px-6 md:px-12 lg:px-24 pb-28 md:pb-36 lg:pb-44">
        <div className="max-w-[1400px] mx-auto">
          {/* Top line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: premiumEasing }}
            className="border-t border-neutral-200 pt-8 mb-20 md:mb-28 lg:mb-36 origin-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-7 h-[1px] bg-[#B0926A]" />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-medium">
                  Our Focus Areas
                </span>
              </div>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                05 Initiatives
              </span>
            </div>
          </motion.div>

          {/* Initiative List */}
          <div className="flex flex-col gap-28 md:gap-36 lg:gap-44">
            {initiatives.map((initiative, index) => (
              <InitiativeItem key={initiative.category} initiative={initiative} index={index} />
            ))}
          </div>

          {/* Bottom line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEasing, delay: 0.2 }}
            className="mt-28 md:mt-36 lg:mt-44 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500">
              Next-Gen Youth Initiative
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500">
              Agribusiness // Research // Innovation
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}