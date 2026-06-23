import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    image: "Hero/h1.png", 
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-[85vh] bg-black overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-[95%] mx-auto px-4 flex flex-col justify-center">
        <motion.div 
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-white mt-12"
        >
          <p className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] mb-4 text-gray-300 font-medium">
            {slides[current].subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal mb-6 tracking-wide text-white">
            {slides[current].title}
          </h1>
          <p className="text-sm md:text-base font-sans text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
            {slides[current].description}
          </p>
          
          <Link
            to={slides[current].link}
            className="inline-block font-sans border border-white text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-medium"
          >
            {slides[current].buttonText}
          </Link>
        </motion.div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4"
        aria-label="Previous Slide"
      >
        <ArrowBackIosNew fontSize="large" strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4"
        aria-label="Next Slide"
      >
        <ArrowForwardIos fontSize="large" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] transition-all duration-500 ${
              current === index ? "w-12 bg-white" : "w-8 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}