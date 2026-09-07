import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h7.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: (
      <>
        Empowering The <span className="text-[#03A10E]">Future.</span>
      </>
    ),
    description: "A youth-led initiative focused on building sustainable farming businesses and conducting careful, hands-on research for a better future.",
    buttonText: "DISCOVER MATRIX",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h1.jpeg", 
    subtitle: "AGRIBUSINESS OPTIMIZATION",
    title: <span className="text-[#03A10E]">Cultivating Growth.</span>,
    description: "Providing young leaders with the practical skills, tools, and business models they need to create profitable and lasting agricultural communities.",
    buttonText: "SYSTEM INDEX",
    link: "/programs"
  }
];

// Custom easing for Apple-like spring/deceleration feel
const smoothEasing = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" } 
  }
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: smoothEasing } 
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(timer);
  }, [current]); 

  return (
    <section className="relative w-full min-h-screen bg-[#F8F9FA] overflow-hidden flex flex-col md:flex-row antialiased selection:bg-[#03A10E] selection:text-white">
      
      {/* RIGHT SIDE: High Fidelity Image Slider */}
      {/* Adjusted to 45% width for a sophisticated editorial split */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[45%] h-[55vh] md:h-full z-0 bg-neutral-900">
        {slides.map((slide, index) => {
          const isActive = current === index;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }} 
              className="absolute inset-0 overflow-hidden"
            >
              <motion.img 
                initial={false}
                animate={{
                  scale: isActive ? 1 : 1.05, 
                }}
                transition={{ 
                  scale: { duration: 10, ease: "linear" } 
                }} 
                src={slide.image}
                alt={`Hero background ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"} 
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-95"
              />
            </motion.div>
          );
        })}
      </div>

      {/* LEFT SIDE: Sharp, Premium Background Split */}
      {/* Removed diagonal clip-path and heavy shadows. Added a subtle border for a crisp edge. */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-[#F8F9FA] z-10 hidden md:block border-r border-neutral-200/60"></div>
      
      {/* Mobile background fallback - Cleaned up to be solid */}
      <div className="absolute top-[45vh] bottom-0 left-0 w-full bg-[#F8F9FA] z-10 md:hidden"></div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-20 w-full h-full min-h-screen max-w-[1600px] mx-auto flex flex-col md:flex-row pointer-events-none">
        
        {/* Increased horizontal padding (px-16 to px-28) to create premium whitespace */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-28 xl:px-32 h-full min-h-[55vh] md:min-h-screen mt-[45vh] md:mt-0 pointer-events-auto">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`text-${current}`}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-xl flex flex-col gap-8 pt-12 md:pt-0"
            >
              {/* Eyebrow Subtitle */}
              <motion.div variants={textVariant} className="flex items-center gap-4">
                <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#B0926A] font-semibold">
                  {slides[current].subtitle}
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                variants={textVariant}
                className="text-4xl sm:text-5xl lg:text-[4rem] font-medium text-neutral-900 tracking-tight leading-[1.1]"
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
              <motion.div variants={textVariant} className="pt-2 pb-12 md:pb-0">
                <Link
                  to={slides[current].link}
                  className="group inline-flex items-center gap-4 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all"
                >
                  <span className="relative overflow-hidden pb-1">
                    <span className="inline-block group-hover:text-[#B0926A] transition-colors duration-500">
                      {slides[current].buttonText}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B0926A] transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></span>
                  </span>
                  
                  <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 group-hover:border-[#03A10E] group-hover:bg-[#03A10E] transition-colors duration-500">
                    <svg 
                      className="w-4 h-4 text-neutral-900 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-out" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Animated Progress Indicators */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-16 lg:left-28 xl:left-32 flex gap-4 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="group py-4 flex items-center focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="h-[2px] w-12 md:w-16 bg-neutral-300 relative overflow-hidden rounded-full">
                  {current === index && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-[#03A10E]"
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