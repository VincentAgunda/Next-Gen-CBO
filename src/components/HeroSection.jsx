import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h7.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE // COGNITIVE CORE",
    title: "Empowering The Future.",
    description: "A youth-led initiative focused on building sustainable farming businesses and conducting careful, hands-on research for a better future.",
    buttonText: "DISCOVER MATRIX",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h1.jpeg", 
    subtitle: "AGRIBUSINESS OPTIMIZATION // VALUE CHAINS",
    title: "Cultivating Growth.",
    description: "Providing young leaders with the practical skills, tools, and business models they need to create profitable and lasting agricultural communities.",
    buttonText: "SYSTEM INDEX",
    link: "/programs"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-hidden flex flex-col md:flex-row">
      
      {/* RIGHT SIDE: High Fidelity Image Slider */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] h-[50vh] md:h-full z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, zIndex: 1 }}
            exit={{ opacity: 0, zIndex: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} 
            className="absolute inset-0"
          >
            <motion.img 
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src={slides[current].image}
              alt={slides[current].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-90 brightness-95"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LEFT SIDE: Diagonal Background Split matching off-white editorial theme */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[58%] bg-[#FAF9F6] z-10 hidden md:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
      ></div>
      
      {/* Mobile background fallback */}
      <div className="absolute top-[45vh] bottom-0 left-0 w-full bg-[#FAF9F6] z-10 md:hidden"></div>

      {/* CONTENT OVERLAY: Clean Minimal Typography */}
      <div className="relative z-20 w-full h-full min-h-screen max-w-[1400px] mx-auto flex flex-col md:flex-row pointer-events-none">
        
        <div className="w-full md:w-[52%] flex flex-col justify-center px-6 md:px-12 lg:px-20 h-full min-h-[55vh] md:min-h-screen mt-[45vh] md:mt-0 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`text-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl space-y-6 pt-8 md:pt-0"
            >
              {/* Eyebrow Subtitle using accent #B0926A */}
              <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#B0926A] font-medium">
                {slides[current].subtitle}
              </span>
              
              {/* Title with light font weight & tight tracking */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-[1.05]">
                {slides[current].title}
              </h1>
              
              {/* Modern muted body text */}
              <p className="max-w-lg text-neutral-600 font-light text-base md:text-lg leading-relaxed pt-1">
                {slides[current].description}
              </p>
              
              {/* Interactive link with offset arrow matching the Navigation section */}
              <div className="pt-6 pb-12 md:pb-0">
                <Link
                  to={slides[current].link}
                  className="group inline-flex items-center gap-4 text-neutral-900 hover:text-[#B0926A] transition-colors duration-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
                >
                  <span className="border-b border-neutral-900 group-hover:border-[#B0926A] pb-1 transition-colors duration-500">
                    {slides[current].buttonText}
                  </span>
                  <svg 
                    className="w-5 h-5 text-neutral-900 group-hover:text-[#B0926A] transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-500 ease-out" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Minimal progress indicators with dynamic width expanding on active */}
          <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 lg:left-20 flex gap-3 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="group py-2 focus:outline-none"
                aria-label={`Switch context framework to slide ${index + 1}`}
              >
                <div className={`h-[2px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  current === index ? "bg-[#B0926A] w-16" : "bg-neutral-300 w-10 group-hover:bg-neutral-400"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}