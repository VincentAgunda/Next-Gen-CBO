import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    image: "/Hero/h3.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: "Engineered for Impact.",
    description: "A youth-led architectural shift in sustainable agriculture. Combining scientific rigor with community action to build resilient, self-sustaining economies in Makueni County.",
    buttonText: "Discover the Mission",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h3.png", 
    subtitle: "AGRIBUSINESS DEVELOPMENT",
    title: "Cultivating Tomorrow.",
    description: "Equipping the next generation of agricultural entrepreneurs with advanced tools, evidence-based research, and scalable enterprise models.",
    buttonText: "Explore Programs",
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
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-[88vh] bg-[#0A0A0A] overflow-hidden font-sans border-b border-neutral-200">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-70"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Subtle architectural gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-28">
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#d2b79b]"></span>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d2b79b] font-medium">
              {slides[current].subtitle}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tighter text-white leading-[1.05]">
            {slides[current].title}
          </h1>

          <p className="text-base md:text-lg text-neutral-300 mb-10 max-w-xl leading-relaxed font-light">
            {slides[current].description}
          </p>
          
          <Link
            to={slides[current].link}
            className="group inline-flex items-center gap-4 bg-transparent border border-white/40 hover:border-[#d2b79b] text-white hover:text-[#d2b79b] px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium backdrop-blur-sm"
          >
            <span>{slides[current].buttonText}</span>
            <span className="text-base transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Controls - Minimalist Polestar Style */}
      <div className="absolute right-6 lg:right-12 bottom-12 z-20 flex border border-white/20 bg-black/40 backdrop-blur-md">
        <button 
          onClick={prevSlide}
          className="p-4 text-white/60 hover:text-[#d2b79b] hover:bg-white/5 transition-all duration-300 border-r border-white/20"
          aria-label="Previous Slide"
        >
          <ArrowBackIosNew className="!w-4 !h-4" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 text-white/60 hover:text-[#d2b79b] hover:bg-white/5 transition-all duration-300"
          aria-label="Next Slide"
        >
          <ArrowForwardIos className="!w-4 !h-4" />
        </button>
      </div>

      {/* Engineered Pagination Lines */}
      <div className="absolute top-12 right-6 lg:right-12 z-20 flex gap-2 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] transition-all duration-500 ${
              current === index ? "w-12 bg-[#d2b79b]" : "w-4 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}