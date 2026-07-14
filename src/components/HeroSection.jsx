import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h7.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE // COGNITIVE CORE",
    title: "Empowering The Future.",
    description: "An autonomous, youth-driven operational framework deploying high-performance systems across sustainable agribusiness development and precision empirical research.",
    buttonText: "DISCOVER MATRIX",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h1.jpeg", 
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

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      
      {/* Top Section: High Fidelity Image Slider */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#f4f4f4] overflow-hidden">
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
              initial={{ scale: 1.02 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src={slides[current].image}
              alt={slides[current].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Section: Typographic Content */}
      <div className="flex-grow relative flex flex-col px-6 md:px-12 lg:px-24 pt-12 pb-24 max-w-7xl mx-auto w-full">
        {/* mode="wait" ensures text fades out completely before fading in to prevent overlap jumps */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`text-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            {/* Subtitle */}
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#b3b1aa] font-medium">
              {slides[current].subtitle}
            </p>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-black leading-[1.1]">
              {slides[current].title}
            </h1>
            
            {/* Description */}
            <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light max-w-2xl pt-2">
              {slides[current].description}
            </p>
            
            {/* Action Button */}
            <div className="pt-6">
              <Link
                to={slides[current].link}
                className="inline-block border border-[#d5d2cc] text-black px-8 py-3.5 text-[11px] md:text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#f9f9f9] hover:border-gray-400 transition-all duration-300"
              >
                {slides[current].buttonText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Centered Precision Linear Progress Sequence Bars */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group py-2 focus:outline-none"
              aria-label={`Switch context framework to slide ${index + 1}`}
            >
              <div className={`h-[2px] w-12 transition-colors duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                current === index ? "bg-[#c4c0b5]" : "bg-[#ebebeb] group-hover:bg-[#d5d2cc]"
              }`} />
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
}