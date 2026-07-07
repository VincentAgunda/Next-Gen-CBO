import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    image: "/Hero/h3.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: "Empowering The Future.",
    description: "A youth-driven organization creating sustainable livelihoods through agribusiness development and scientific innovation.",
    buttonText: "Discover More",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h3.png", 
    subtitle: "AGRIBUSINESS DEVELOPMENT",
    title: "Cultivating Growth.",
    description: "Equipping young leaders with the tools, knowledge, and resources to build thriving agricultural enterprises.",
    buttonText: "Our Programs",
    link: "/programs"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // 1. Preload images on initial mount
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
    <section className="relative w-full h-[95vh] bg-black overflow-hidden font-sans antialiased selection:bg-white selection:text-black">
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
            className="absolute inset-0 bg-cover bg-center grayscale contrast-110 opacity-70"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24 flex flex-col justify-center pt-20">
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl text-white"
        >
          <span className="block text-[#A3A3A3] text-[13px] font-normal mb-8 uppercase tracking-wider">
            {slides[current].subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-white mb-10">
            {slides[current].title}
          </h1>
          <p className="text-[16px] md:text-[18px] text-white opacity-85 font-normal mb-12 max-w-2xl leading-relaxed">
            {slides[current].description}
          </p>
          
          <Link
            to={slides[current].link}
            className="inline-flex items-center justify-between border border-white text-white px-8 py-4 text-[15px] font-normal hover:bg-white hover:text-black transition-colors duration-300 min-w-[240px]"
          >
            <span>{slides[current].buttonText}</span>
            <span className="text-lg leading-none">↗</span>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-[6vw] md:right-12 lg:right-24 bottom-24 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ArrowBackIosNew fontSize="small" className="transform group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ArrowForwardIos fontSize="small" className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-24 left-[6vw] md:left-12 lg:left-24 z-20 flex items-center gap-4">
        <span className="text-[13px] text-white font-normal">
          0{current + 1}
        </span>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[1px] transition-all duration-700 ${
                current === index ? "w-16 bg-white" : "w-8 bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}