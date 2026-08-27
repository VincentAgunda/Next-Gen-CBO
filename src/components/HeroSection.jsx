import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h7.png",
    subtitle: "NEXT-GEN YOUTH INITIATIVE // COGNITIVE CORE",
    title: "Empowering The Future.",
    description:
      "A youth-led initiative focused on building sustainable farming businesses and conducting careful, hands-on research for a better future.",
    buttonText: "DISCOVER MATRIX",
    link: "/about",
  },
  {
    id: 2,
    image: "/Hero/h1.jpeg",
    subtitle: "AGRIBUSINESS OPTIMIZATION // VALUE CHAINS",
    title: "Cultivating Growth.",
    description:
      "Providing young leaders with the practical skills, tools, and business models they need to create profitable and lasting agricultural communities.",
    buttonText: "SYSTEM INDEX",
    link: "/programs",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  /*
   * Preload all hero images so the transition between slides
   * remains smooth and does not wait for the next image.
   */
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  /*
   * Automatic slide progression.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A2132] text-white flex flex-col">

      {/* =========================================================
          HERO IMAGE
      ========================================================= */}
      <div className="relative w-full h-[52vh] md:h-[60vh] overflow-hidden bg-[#0A2132]">

        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              zIndex: 1,
            }}
            exit={{
              opacity: 0,
              zIndex: 0,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={activeSlide.image}
              alt={activeSlide.title}
              initial={{
                scale: 1.04,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 8,
                ease: "easeOut",
              }}
              loading={current === 0 ? "eager" : "lazy"}
              decoding="async"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            {/* Subtle cinematic overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/5
                via-transparent
                to-[#0A2132]/25
                pointer-events-none
              "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          CONTENT AREA
          EXACT REFERENCE BLUE: #0A2132
      ========================================================= */}
      <div
        className="
          relative
          flex-1
          flex
          flex-col
          px-6
          md:px-12
          lg:px-24
          pt-14
          md:pt-20
          pb-28
          bg-[#0A2132]
        "
      >

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeSlide.id}`}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              w-full
              max-w-7xl
              mx-auto
            "
          >

            {/* =====================================================
                SUBTITLE
            ===================================================== */}
            <p
              className="
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[0.24em]
                text-white/55
                font-medium
                mb-7
              "
            >
              {activeSlide.subtitle}
            </p>

            {/* =====================================================
                TITLE
            ===================================================== */}
            <h1
              className="
                text-white
                font-normal
                tracking-[-0.025em]
                leading-[0.98]
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[82px]
                xl:text-[92px]
                max-w-5xl
              "
            >
              {activeSlide.title}
            </h1>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}
            <p
              className="
                mt-8
                max-w-2xl
                text-white/65
                text-sm
                md:text-base
                lg:text-[17px]
                font-light
                leading-[1.75]
              "
            >
              {activeSlide.description}
            </p>

            {/* =====================================================
                ACTION BUTTON
            ===================================================== */}
            <div className="mt-9">
              <Link
                to={activeSlide.link}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-white/25
                  text-white
                  px-8
                  py-4
                  text-[10px]
                  md:text-[11px]
                  uppercase
                  tracking-[0.2em]
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-[#0A2132]
                  hover:border-white
                "
              >
                <span>{activeSlide.buttonText}</span>

                <span
                  className="
                    ml-5
                    inline-block
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =========================================================
            SLIDE CONTROLS
        ========================================================= */}
        <div
          className="
            absolute
            bottom-8
            md:bottom-10
            left-6
            right-6
            md:left-12
            md:right-12
            lg:left-24
            lg:right-24
            flex
            items-center
            justify-between
            max-w-7xl
            mx-auto
          "
        >

          {/* Slide number */}
          <div
            className="
              text-[10px]
              tracking-[0.18em]
              text-white/45
              font-medium
            "
          >
            <span className="text-white">
              0{current + 1}
            </span>

            <span className="mx-2 text-white/20">
              /
            </span>

            <span>
              0{slides.length}
            </span>
          </div>

          {/* Progress bars */}
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                className="
                  group
                  py-3
                  focus:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-white/50
                "
                aria-label={`Switch to slide ${index + 1}`}
                aria-current={
                  current === index ? "true" : "false"
                }
              >
                <div
                  className={`
                    relative
                    h-[1px]
                    w-12
                    md:w-16
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      current === index
                        ? "bg-white/25"
                        : "bg-white/15 group-hover:bg-white/30"
                    }
                  `}
                >
                  {current === index && (
                    <motion.div
                      key={`progress-${current}`}
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 8,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        inset-0
                        origin-left
                        bg-white
                      "
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          SUBTLE BOTTOM EDGE
      ========================================================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-white/10
          pointer-events-none
        "
      />
    </section>
  );
}