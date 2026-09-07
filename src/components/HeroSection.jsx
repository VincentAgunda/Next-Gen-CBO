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

// 1. Replaced static easing with a dynamic, highly-polished bouncy spring
const bouncySpring = {
  type: "spring",
  stiffness: 120, // Higher stiffness = faster snap
  damping: 12,    // Lower damping = more bounce/oscillation
  mass: 0.9,      // Slight weight for realism
  restDelta: 0.001
};

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
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// 2. Added a slight scale down to the hidden state to amplify the bounce effect on reveal
const textVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: bouncySpring 
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Interval logic that resets accurately on manual interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-hidden flex flex-col md:flex-row antialiased selection:bg-[#03A10E] selection:text-white">
      
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
                zIndex: isActive ? 10 : 0,
              }}
              // Smoothed the crossfade to blend perfectly with the bouncy text
              transition={{ duration: 0.8, ease: "easeInOut" }} 
              className="absolute inset-0 overflow-hidden"
            >
              <motion.img 
                initial={false}
                animate={{
                  scale: isActive ? 1 : 1.15, // Increased scale difference for a more dramatic, smooth settle
                }}
                transition={{ 
                  // Adding a slow, heavy spring to the image scale creates a luxurious feel
                  scale: isActive 
                    ? { type: "spring", stiffness: 40, damping: 20, mass: 2 }
                    : { duration: 1.5, ease: "easeOut" }
                }} 
                src={slide.image}
                alt={`Hero background ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"} 
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-95 origin-center"
              />
            </motion.div>
          );
        })}
      </div>

      {/* LEFT SIDE: Diagonal Background Split (Premium & Sharp) */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[58%] z-10 hidden md:block"
        style={{ 
          filter: "drop-shadow(15px 0px 25px rgba(0, 0, 0, 0.25))" 
        }}
      >
        <div 
          className="w-full h-full bg-white relative overflow-hidden"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)", willChange: "transform" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neutral-100 opacity-60"></div>
        </div>
      </div>
      
      {/* Mobile background fallback */}
      <div className="absolute top-[45vh] bottom-0 left-0 w-full bg-white z-10 md:hidden bg-gradient-to-t from-white via-white to-transparent"></div>

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
              {/* Eyebrow Subtitle (Gold Accent) */}
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
                className="max-w-md text-neutral-500 font-normal text-base md:text-lg leading-relaxed"
              >
                {slides[current].description}
              </motion.p>
              
              {/* Interactive Button */}
              {/* 3. Added whileHover and whileTap spring properties to the button wrapper */}
              <motion.div 
                variants={textVariant} 
                className="pt-4 pb-12 md:pb-0 origin-left inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={slides[current].link}
                  className="group inline-flex items-center gap-3 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold transition-all"
                >
                  <span className="relative overflow-hidden pb-1">
                    <span className="inline-block group-hover:text-[#B0926A] transition-colors duration-500">
                      {slides[current].buttonText}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B0926A] transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></span>
                  </span>
                  
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 group-hover:border-[#03A10E] group-hover:bg-[#03A10E] transition-colors duration-500">
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

          {/* Animated Progress Indicators (Green Accent) */}
          <div className="absolute bottom-8 md:bottom-16 left-6 md:left-12 lg:left-24 flex gap-4 pointer-events-auto">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className="group py-4 flex items-center focus:outline-none origin-center"
                aria-label={`Go to slide ${index + 1}`}
                // 4. Added tiny interaction springs to the navigation dots
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-[2px] w-12 md:w-16 bg-neutral-200 relative overflow-hidden rounded-full">
                  {current === index && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-[#03A10E]"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}