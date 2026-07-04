import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    image: "/Innovation/mushroom.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: "Empowering The Future.",
    description: "A youth-driven organization creating sustainable livelihoods through agribusiness development and scientific innovation.",
    buttonText: "DISCOVER MORE",
    link: "/about"
  },
  {
    id: 2,
    image: "/Innovation/mushroom.png", 
    subtitle: "AGRIBUSINESS DEVELOPMENT",
    title: "Cultivating Growth.",
    description: "Equipping young leaders with the tools, knowledge, and resources to build thriving agricultural enterprises.",
    buttonText: "OUR PROGRAMS",
    link: "/programs"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // 1. Preload images on initial mount so they render instantly upon transition
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 2. Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-[90vh] bg-[#111] overflow-hidden">
      {/* 3. Removed mode="wait" to allow smooth crossfading without background peek-through */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }} 
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-10 h-full max-w-[95%] mx-auto px-4 lg:px-12 flex flex-col justify-center">
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl text-white mt-16"
        >
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-6 text-[#d2b79b] font-medium">
            {slides[current].subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-light mb-8 tracking-tight text-white leading-[1.1]">
            {slides[current].title}
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mb-12 max-w-xl leading-relaxed font-light">
            {slides[current].description}
          </p>
          
          <Link
            to={slides[current].link}
            className="inline-block border border-[#d2b79b] text-[#d2b79b] px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-[#d2b79b] hover:text-white hover:border-[#d2b79b] transition-all duration-700 font-medium"
          >
            {slides[current].buttonText}
          </Link>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-[#d2b79b] transition-colors duration-500 p-4 group"
        aria-label="Previous Slide"
      >
        <ArrowBackIosNew fontSize="large" className="font-light transform group-hover:-translate-x-1 transition-transform duration-500" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-[#d2b79b] transition-colors duration-500 p-4 group"
        aria-label="Next Slide"
      >
        <ArrowForwardIos fontSize="large" className="font-light transform group-hover:translate-x-1 transition-transform duration-500" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-10 left-4 lg:left-16 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[1px] transition-all duration-700 ${
              current === index ? "w-16 bg-[#d2b79b]" : "w-8 bg-white/30 hover:bg-[#d2b79b]/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}