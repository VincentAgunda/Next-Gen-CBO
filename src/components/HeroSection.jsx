import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h3.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE // COGNITIVE CORE",
    title: "Empowering The Future.",
    description: "An autonomous, youth-driven operational framework deploying high-performance systems across sustainable agribusiness development and precision empirical research.",
    buttonText: "DISCOVER MATRIX",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h3.png", 
    subtitle: "AGRIBUSINESS OPTIMIZATION // VALUE CHAINS",
    title: "Cultivating Growth.",
    description: "Equipping generation-next regional leaders with technical capabilities, hardware resources, and scalable modular framework models to secure self-sustaining economic yields.",
    buttonText: "SYSTEM INDEX",
    link: "/programs"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Preload background assets instantaneously
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Automate frame sequence transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-[95vh] bg-[#0c0c0d] overflow-hidden border-b border-neutral-900">
      
      {/* High Fidelity Spatial Crossfade Image Container */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, zIndex: 1 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }} 
          className="absolute inset-0"
        >
          {/* Hardware accelerated image with a subtle cinematic scale down */}
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={slides[current].image}
            alt={slides[current].title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
          />
          {/* Symmetrical dark mathematical layout shielding - adjusted for true color imagery */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c0c0d] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Typographic Technical Content Block */}
      {/* Added pointer-events-none to the wrapper to prevent it from blocking slider interactions, re-enabling it on the content */}
      <div className="relative z-10 h-full max-w-[92%] mx-auto px-4 lg:px-12 flex flex-col justify-center pointer-events-none">
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-white space-y-8 pointer-events-auto"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d2b79b] font-semibold">
            {slides[current].subtitle}
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-light tracking-tighter text-white leading-[0.95] max-w-3xl">
            {slides[current].title}
          </h1>
          
          <p className="text-sm md:text-base text-neutral-300 max-w-xl leading-relaxed font-light tracking-wide pt-2">
            {slides[current].description}
          </p>
          
          <div className="pt-6">
            <Link
              to={slides[current].link}
              className="group inline-flex items-center justify-between border border-[#d2b79b] text-[#d2b79b] px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-[#d2b79b] hover:text-black transition-colors duration-500 font-medium min-w-[220px]"
            >
              <span>{slides[current].buttonText}</span>
              <span className="text-sm transform group-hover:translate-x-1.5 transition-transform duration-500 ease-out">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Symmetrical Architectural Manual Vectors (Polestar Style Fine Line Chevron Switches) */}
      <div className="absolute right-4 lg:right-16 bottom-12 z-20 flex gap-2">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-sm hover:border-white/60 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-500 ease-out group"
          aria-label="Previous Data Frame"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-500 ease-out font-light text-sm">←</span>
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-sm hover:border-white/60 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-500 ease-out group"
          aria-label="Next Data Frame"
        >
          <span className="transform group-hover:translate-x-1 transition-transform duration-500 ease-out font-light text-sm">→</span>
        </button>
      </div>

      {/* Precision Linear Progress Sequence Bars */}
      <div className="absolute bottom-12 left-4 lg:left-16 z-20 flex gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group py-2 focus:outline-none"
            aria-label={`Switch context framework to slide ${index + 1}`}
          >
            <div className={`h-[2px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              current === index ? "w-20 bg-[#d2b79b]" : "w-10 bg-white/20 group-hover:bg-white/40 group-hover:w-14"
            }`} />
          </button>
        ))}
      </div>
      
    </section>
  );
}