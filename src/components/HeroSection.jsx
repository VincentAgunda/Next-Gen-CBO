import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h7.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: "Empowering The Future.",
    description: "A youth-led initiative focused on building sustainable farming businesses and conducting careful, hands-on research for a better future.",
    buttonText: "DISCOVER MATRIX",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h1.jpeg", 
    subtitle: "AGRIBUSINESS OPTIMIZATION",
    title: "Cultivating Growth.",
    description: "Providing young leaders with the practical skills, tools, and business models they need to create profitable and lasting agricultural communities.",
    buttonText: "SYSTEM INDEX",
    link: "/programs"
  }
];

// Custom easing for Apple-like spring/deceleration feel
const smoothEasting = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: smoothEasting }
  }
};

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: smoothEasting } 
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Preload images for seamless transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Interval logic that resets on manual interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-hidden flex flex-col md:flex-row antialiased selection:bg-[#B0926A] selection:text-white">
      
      {/* RIGHT SIDE: High Fidelity Image Slider */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] h-[55vh] md:h-full z-0 bg-neutral-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} 
            className="absolute inset-0 overflow-hidden"
          >
            <motion.img 
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }} // Continuous slow zoom
              src={slides[current].image}
              alt={slides[current].title}
              loading="lazy"
              decoding="async"
              // Removed mix-blend-luminosity to restore full color
              className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-95"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LEFT SIDE: Diagonal Background Split */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[58%] bg-[#FAF9F6] z-10 hidden md:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
      >
        {/* Subtle inner shadow for depth against the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 opacity-50 drop-shadow-2xl"></div>
      </div>
      
      {/* Mobile background fallback */}
      <div className="absolute top-[45vh] bottom-0 left-0 w-full bg-[#FAF9F6] z-10 md:hidden bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-transparent"></div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-20 w-full h-full min-h-screen max-w-[1400px] mx-auto flex flex-col md:flex-row pointer-events-none">
        
        <div className="w-full md:w-[52%] flex flex-col justify-center px-6 md:px-12 lg:px-24 h-full min-h-[55vh] md:min-h-screen mt-[45vh] md:mt-0 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`text-${current}`}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-xl flex flex-col gap-6 pt-12 md:pt-0"
            >
              {/* Eyebrow Subtitle */}
              <motion.div variants={textVariant} className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#B0926A]"></span>
                <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
                  {slides[current].subtitle}
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                variants={textVariant}
                className="text-4xl sm:text-6xl lg:text-[4.5rem] font-medium text-neutral-900 tracking-tighter leading-[1.05]"
              >
                {slides[current].title}
              </motion.h1>
              
              {/* Body Text */}
              <motion.p 
                variants={textVariant}
                className="max-w-md text-neutral-500 font-light text-base md:text-lg leading-relaxed"
              >
                {slides[current].description}
              </motion.p>
              
              {/* Interactive Button */}
              <motion.div variants={textVariant} className="pt-4 pb-12 md:pb-0">
                <Link
                  to={slides[current].link}
                  className="group inline-flex items-center gap-3 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold transition-all"
                >
                  <span className="relative overflow-hidden pb-1">
                    {slides[current].buttonText}
                    {/* Hover animated underline */}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></span>
                  </span>
                  
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 group-hover:border-[#B0926A] group-hover:bg-[#B0926A] transition-colors duration-500">
                    <svg 
                      className="w-3.5 h-3.5 text-neutral-900 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-out" 
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
            </motion.div>
          </AnimatePresence>

          {/* Animated Progress Indicators */}
          <div className="absolute bottom-8 md:bottom-16 left-6 md:left-12 lg:left-24 flex gap-4 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="group py-4 flex items-center focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="h-[2px] w-12 md:w-16 bg-neutral-200 relative overflow-hidden rounded-full">
                  {current === index && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-[#B0926A]"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}