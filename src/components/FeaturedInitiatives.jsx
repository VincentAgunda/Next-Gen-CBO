import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ============================================================
// ANIMATION VARIANTS (Premium Apple-style ease)
// ============================================================
const premiumEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

const fadeUpImage = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: premiumEase },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function FeaturedInitiatives() {
  const initiatives = [
    {
      category: "Strategic Agribusiness",
      title: (
        <>
          Cultivating <br className="hidden lg:block" />
          <span className="text-[#03A10E]">Visionary Leadership.</span>
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
          <span className="text-[#03A10E]">Agaricus Bisporus.</span>
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
          <span className="text-[#03A10E]">& Systems Literacy.</span>
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
          <span className="text-[#03A10E]">Avian Farming Operations.</span>
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
          <span className="text-[#03A10E]">Socio-Economic Relief.</span>
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
    <section
      className="
        relative w-full overflow-hidden
        bg-white
        text-neutral-900
        antialiased
        selection:bg-[#03A10E]
        selection:text-white
      "
    >
      {/* ============================================================
          INTRODUCTION
      ============================================================ */}
      <div className="px-6 md:px-12 lg:px-24 pt-28 md:pt-36 lg:pt-40 pb-24 md:pb-32">
        <motion.div 
          className="max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-7 md:mb-9">
            <span className="w-8 h-[1px] bg-[#03A10E]" />
            <span
              className="
                text-[10px] md:text-xs
                uppercase
                tracking-[0.25em]
                text-[#03A10E]
                font-semibold
              "
            >
              Featured Initiatives
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="
              max-w-5xl
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[4.5rem]
              xl:text-[5.5rem]
              font-medium
              tracking-tighter
              leading-[1.02]
            "
          >
            Building{" "}
            <span className="text-[#03A10E]">
              What Comes Next.
            </span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            className="
              max-w-2xl
              mt-8 md:mt-10
              text-neutral-500
              font-light
              text-base md:text-lg
              leading-relaxed
            "
          >
            Explore the programs, research systems, and community initiatives
            shaping sustainable livelihoods through agriculture, technology,
            innovation, and practical research.
          </motion.p>
        </motion.div>
      </div>

      {/* ============================================================
          INITIATIVES
      ============================================================ */}
      <div
        className="
          bg-white
          px-6 md:px-12 lg:px-24
          pt-12 md:pt-16
          pb-28 md:pb-36 lg:pb-44
        "
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Top line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase }}
            className="
              border-t border-neutral-200
              pt-8
              mb-20 md:mb-28 lg:mb-36
              origin-left
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-7 h-[1px] bg-[#03A10E]" />
                <span
                  className="
                    text-[10px] md:text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-neutral-500
                    font-medium
                  "
                >
                  Our Focus Areas
                </span>
              </div>
              <span
                className="
                  hidden sm:block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                05 Initiatives
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              INITIATIVE LIST
          ======================================================== */}
          <div className="flex flex-col gap-28 md:gap-36 lg:gap-44">
            {initiatives.map((initiative, index) => (
              <motion.article
                key={initiative.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
                variants={staggerContainer}
                className="
                  grid
                  lg:grid-cols-12
                  gap-12 lg:gap-16
                  items-center
                "
              >
                {/* ==================================================
                    IMAGE
                ================================================== */}
                <motion.div
                  variants={fadeUpImage}
                  className={`
                    relative
                    group
                    overflow-hidden
                    bg-neutral-100
                    lg:col-span-7
                    ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                  `}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={initiative.image}
                      alt={initiative.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transform-gpu
                        scale-[1.001]
                        group-hover:scale-[1.035]
                        transition-transform
                        duration-[1400ms]
                        ease-[cubic-bezier(0.215,0.61,0.355,1)]
                      "
                    />

                    {/* Apple-style restrained hover overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-black/0
                        group-hover:bg-black/[0.035]
                        transition-colors
                        duration-700
                      "
                    />
                  </div>

                  {/* Image number */}
                  <div
                    className="
                      absolute
                      top-6 left-6
                      flex items-center gap-3
                      text-white
                      drop-shadow-md
                    "
                  >
                    <span className="h-px w-5 bg-white" />
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        font-medium
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>

                {/* ==================================================
                    TEXT
                ================================================== */}
                <motion.div
                  variants={staggerContainer}
                  className={`
                    lg:col-span-5
                    space-y-7
                    ${
                      index % 2 === 1
                        ? "lg:order-1 lg:pr-6 xl:pr-10"
                        : "lg:order-2 lg:pl-6 xl:pl-10"
                    }
                  `}
                >
                  {/* Category */}
                  <motion.div variants={fadeUp} className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-[#03A10E]" />
                    <span
                      className="
                        text-[#03A10E]
                        text-[10px] md:text-xs
                        uppercase
                        tracking-[0.25em]
                        font-semibold
                      "
                    >
                      {initiative.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    variants={fadeUp}
                    className="
                      text-neutral-900
                      text-4xl
                      sm:text-5xl
                      lg:text-[4rem]
                      xl:text-[4.5rem]
                      font-medium
                      tracking-tighter
                      leading-[1.05]
                    "
                  >
                    {initiative.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    variants={fadeUp}
                    className="
                      max-w-xl
                      text-neutral-500
                      font-light
                      text-base
                      md:text-lg
                      leading-relaxed
                    "
                  >
                    {initiative.description}
                  </motion.p>

                  {/* CTA */}
                  <motion.div variants={fadeUp} className="pt-3">
                    <Link
                      to={initiative.link}
                      className="
                        group/cta
                        inline-flex
                        items-center
                        gap-3
                        text-neutral-900
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[0.15em]
                        font-semibold
                        transition-all
                        duration-500
                      "
                    >
                      {/* Text */}
                      <span className="relative overflow-hidden pb-1">
                        <span className="inline-block group-hover/cta:text-[#03A10E] transition-colors duration-500">
                          {initiative.linkText}
                        </span>

                        {/* Green underline */}
                        <span
                          className="
                            absolute
                            bottom-0
                            left-0
                            w-full
                            h-[1px]
                            bg-[#03A10E]
                            origin-left
                            scale-x-0
                            group-hover/cta:scale-x-100
                            transition-transform
                            duration-500
                          "
                        />
                      </span>

                      {/* Arrow */}
                      <span
                        className="
                          relative
                          flex
                          items-center
                          justify-center
                          w-8
                          h-8
                          rounded-full
                          border
                          border-neutral-300
                          group-hover/cta:border-[#03A10E]
                          group-hover/cta:bg-[#03A10E]
                          transition-all
                          duration-500
                        "
                      >
                        <svg
                          className="
                            w-3.5
                            h-3.5
                            text-neutral-700
                            group-hover/cta:text-white
                            transform
                            group-hover/cta:translate-x-0.5
                            group-hover/cta:-translate-y-0.5
                            transition-all
                            duration-500
                            ease-out
                          "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H9M17 7v8"
                          />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* ========================================================
              BOTTOM LINE
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="
              mt-28 md:mt-36 lg:mt-44
              pt-8
              border-t border-neutral-200
              flex flex-col
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-4
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Next-Gen Youth Initiative
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              Agribusiness // Research // Innovation
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}