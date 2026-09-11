import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/Hero/h12.png", 
    subtitle: "NEXT-GEN YOUTH INITIATIVE",
    title: (
      <>
        Empowering The <span className="text-[#03A10E] font-normal">Future.</span>
      </>
    ),
    description: "A youth-led initiative focused on building sustainable farming businesses and conducting careful, hands-on research for a better future.",
    buttonText: "Discover Matrix",
    link: "/about"
  },
  {
    id: 2,
    image: "/Hero/h10.png", 
    subtitle: "AGRIBUSINESS OPTIMIZATION",
    title: <span className="text-[#03A10E] font-normal">Cultivating Growth.</span>,
    description: "Providing young leaders with the practical skills, tools, and business models they need to create profitable and lasting agricultural communities.",
    buttonText: "System Index",
    link: "/programs"
  }
];

// Apple-like sleek cubic-bezier easing
const customEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1, // Reduced delay for snappier entry
    },
  },
  exit: { 
    opacity: 0,
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: -1, 
      duration: 0.2, 
      ease: "easeOut" 
    }
  }
};

const textVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: customEase } 
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    filter: "blur(4px)",
    transition: { duration: 0.2, ease: "easeIn" } 
  }
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 1. Preload images to prevent lag/flashing on first slide change
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // 2. Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [current, isPlaying]);

  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-hidden flex flex-col md:flex-row antialiased selection:bg-[#03A10E] selection:text-white font-sans">
      
      {/* RIGHT SIDE: High Fidelity Image Slider */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] h-[55vh] md:h-full z-0 bg-[#FAFAFA]">
        {slides.map((slide, index) => {
          const isActive = current === index;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 1, 
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: customEase }, // Extended fade duration for premium feel
                zIndex: { duration: 0 } 
              }} 
              className="absolute inset-0 overflow-hidden bg-neutral-900 will-change-[opacity]"
            >
              <motion.img 
                initial={{ scale: 1.15 }}
                animate={{ scale: isActive ? 1 : 1.15 }}
                transition={{ 
                  scale: { 
                    duration: isActive ? 10 : 1.2, // Slow continuous zoom while active
                    ease: isActive ? "linear" : customEase 
                  } 
                }} 
                style={{ WebkitTransform: "translateZ(0)" }} // Force GPU acceleration
                src={slide.image}
                alt={`Hero background ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"} 
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-95 origin-center will-change-transform"
              />
            </motion.div>
          );
        })}
      </div>

      {/* LEFT SIDE: Diagonal Background Split */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[58%] z-10 hidden md:block pointer-events-none"
        style={{ filter: "drop-shadow(15px 0px 25px rgba(0, 0, 0, 0.15))" }}
      >
        <div 
          className="w-full h-full bg-white relative overflow-hidden will-change-transform"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neutral-50 opacity-80"></div>
        </div>
      </div>
      
      {/* Mobile background fallback */}
      <div className="absolute top-[45vh] bottom-0 left-0 w-full bg-white z-10 md:hidden bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-20 w-full h-full min-h-screen max-w-[1400px] mx-auto flex flex-col md:flex-row pointer-events-none">
        
        <div className="w-full md:w-[52%] flex flex-col px-6 md:px-12 lg:px-24 h-full min-h-[55vh] md:min-h-screen mt-[45vh] md:mt-0 pointer-events-auto">
          
          {/* TEXT CONTENT WRAPPER */}
          <div className="flex-grow flex flex-col justify-center py-10 md:py-0">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`text-${current}`}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="max-w-xl flex flex-col gap-6 will-change-[opacity,transform]"
              >
                {/* Eyebrow Subtitle */}
                <motion.div variants={textVariant} className="flex items-center gap-4">
                  <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400 font-medium">
                    {slides[current].subtitle}
                  </span>
                </motion.div>
                
                {/* Title */}
                <motion.h1 
                  variants={textVariant}
                  className="text-4xl sm:text-5xl lg:text-[4.25rem] font-light text-neutral-800 tracking-tight leading-[1.1]"
                >
                  {slides[current].title}
                </motion.h1>
                
                {/* Body Text */}
                <motion.p 
                  variants={textVariant}
                  className="max-w-md text-neutral-500 font-light text-base md:text-[1.05rem] leading-[1.8]"
                >
                  {slides[current].description}
                </motion.p>
                
                {/* Premium Button */}
                <motion.div 
                  variants={textVariant} 
                  className="pt-4 origin-left inline-block"
                >
                  <Link
                    to={slides[current].link}
                    className="group inline-flex items-center gap-2 bg-[#B0926A] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#a69375] transition-all duration-300 shadow-lg shadow-[#B0926A]/20 hover:shadow-[#B0926A]/40 hover:-translate-y-0.5"
                  >
                    <span>{slides[current].buttonText}</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PROGRESS INDICATORS */}
          <div className="pb-8 md:pb-16 flex items-center gap-3 shrink-0 pointer-events-auto">
            
            {/* Pill Container for Dots */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-200/60 backdrop-blur-md rounded-full border border-white/40 shadow-sm">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setIsPlaying(false); // Pause on manual interaction
                  }}
                  className={`rounded-full transition-all duration-500 ease-out focus:outline-none ${
                    current === index
                      ? "w-7 h-2 bg-neutral-600" 
                      : "w-2 h-2 bg-neutral-400 hover:bg-neutral-500" 
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-10 h-10 bg-neutral-200/60 backdrop-blur-md rounded-full border border-white/40 shadow-sm text-neutral-800 hover:bg-neutral-300/60 transition-colors focus:outline-none group"
              aria-label={isPlaying ? "Pause slider" : "Play slider"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 ml-0.5 text-neutral-600 group-hover:text-neutral-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}