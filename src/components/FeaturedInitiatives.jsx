import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedInitiatives() {
  const initiatives = [
    {
      category: "Strategic Agribusiness",
      title: (
        <>
          Cultivating <br className="hidden lg:block" />
          Visionary Leadership.
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
          Agaricus Bisporus.
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
          & Systems Literacy.
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
          Bio-secured Avian <br className="hidden lg:block" />
          Farming Operations.
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
          Socio-Economic Relief.
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
        relative
        w-full
        overflow-hidden
        bg-[#0A2132]
        text-white
        py-28
        md:py-32
        lg:py-40
        px-6
        md:px-12
        lg:px-24
      "
    >
      {/* ============================================================
          BACKGROUND DETAILS
      ============================================================ */}

      {/* Very subtle radial atmosphere */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-40
          bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.055),transparent_42%)]
        "
      />

      {/* Top hairline */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-white/10
        "
      />

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          flex
          flex-col
          gap-28
          md:gap-36
          lg:gap-44
        "
      >
        {initiatives.map((initiative, index) => (
          <article
            key={initiative.category}
            className="
              grid
              lg:grid-cols-12
              gap-12
              lg:gap-16
              items-center
            "
          >
            {/* ======================================================
                IMAGE
            ====================================================== */}

            <div
              className="
                lg:col-span-7
                order-1
                relative
                group
                overflow-hidden
                border
                border-white/10
                bg-[#081B2A]
              "
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={initiative.image}
                  alt={initiative.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transform-gpu
                    scale-[1.001]
                    group-hover:scale-[1.045]
                    transition-transform
                    duration-[1400ms]
                    ease-[cubic-bezier(0.215,0.61,0.355,1)]
                  "
                />

                {/* Cinematic image treatment */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-black/0
                    transition-colors
                    duration-700
                  "
                />

                {/* Bottom gradient */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-[#0A2132]/30
                    to-transparent
                    pointer-events-none
                  "
                />
              </div>

              {/* Image index */}
              <div
                className="
                  absolute
                  top-5
                  left-5
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  font-medium
                  text-white/75
                "
              >
                <span className="h-px w-5 bg-white/50" />

                <span>
                  0{index + 1}
                </span>
              </div>
            </div>

            {/* ======================================================
                TEXT CONTENT
            ====================================================== */}

            <div
              className="
                lg:col-span-5
                order-2
                space-y-7
                lg:pl-6
                xl:pl-10
              "
            >
              {/* Category */}
              <div className="flex items-center gap-4">
                <span
                  className="
                    h-px
                    w-7
                    bg-white/60
                  "
                />

                <span
                  className="
                    text-white/55
                    text-[10px]
                    md:text-[11px]
                    uppercase
                    tracking-[0.28em]
                    font-medium
                  "
                >
                  {initiative.category}
                </span>
              </div>

              {/* Title */}
              <h2
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  lg:text-[54px]
                  xl:text-[60px]
                  font-normal
                  tracking-[-0.025em]
                  leading-[1.02]
                "
              >
                {initiative.title}
              </h2>

              {/* Description */}
              <p
                className="
                  max-w-xl
                  text-white/60
                  font-light
                  text-[15px]
                  md:text-base
                  lg:text-[17px]
                  leading-[1.75]
                "
              >
                {initiative.description}
              </p>

              {/* Link */}
              <div className="pt-2">
                <Link
                  to={initiative.link}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    text-white
                    text-[10px]
                    md:text-[11px]
                    uppercase
                    tracking-[0.2em]
                    font-medium
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className="
                      relative
                      pb-2
                    "
                  >
                    {initiative.linkText}

                    {/* Animated underline */}
                    <span
                      className="
                        absolute
                        left-0
                        bottom-0
                        h-px
                        w-full
                        bg-white/30
                        origin-left
                        transition-transform
                        duration-500
                        group-hover:scale-x-0
                      "
                    />

                    <span
                      className="
                        absolute
                        left-0
                        bottom-0
                        h-px
                        w-full
                        bg-white
                        origin-left
                        scale-x-0
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                    />
                  </span>

                  {/* Arrow */}
                  <svg
                    className="
                      w-4
                      h-4
                      transform
                      group-hover:translate-x-2
                      transition-transform
                      duration-500
                      ease-out
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ============================================================
          BOTTOM DECORATIVE LINE
      ============================================================ */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          mt-28
          md:mt-36
          lg:mt-44
          pt-8
          border-t
          border-white/10
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/30
          "
        >
          Next-Gen Youth Initiative
        </span>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/30
          "
        >
          Agribusiness // Research // Innovation
        </span>
      </div>
    </section>
  );
}