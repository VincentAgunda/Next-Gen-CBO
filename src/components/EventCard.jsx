import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EventCard({
  title,
  date,
  venue,
  description,
  id,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative w-full h-full flex flex-col min-h-[440px] md:min-h-[470px] lg:min-h-[500px] overflow-hidden rounded-none bg-white border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] antialiased"
    >
      <div className="relative z-10 flex flex-col flex-grow p-8 sm:p-10 lg:p-12">
        
        {/* META */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
              Date
            </span>
            <span className="mt-3 block text-[11px] md:text-xs uppercase tracking-[0.15em] text-[#1d1d1f] font-medium leading-none">
              {date}
            </span>
          </div>

          <div className="text-right max-w-[140px]">
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
              Location
            </span>
            <span className="mt-3 block text-[11px] md:text-xs uppercase tracking-[0.15em] text-[#1d1d1f] font-medium leading-relaxed">
              {venue}
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 w-full h-[1px] bg-neutral-100 group-hover:bg-[#B0926A]/20 transition-colors duration-700" />

        {/* TITLE */}
        <div className="mt-10 md:mt-12">
          <Link to={`/events?register=${id}`}>
            <h3 className="max-w-[520px] text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] font-medium text-[#1d1d1f] hover:text-[#B0926A] transition-colors duration-300 tracking-tighter leading-[1.05]">
              {title}
            </h3>
          </Link>
        </div>

        {/* DESCRIPTION w/ SMOOTH REVEAL */}
        <div className="mt-6 mb-12">
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "72px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden relative"
          >
            <p 
              className={`max-w-[430px] text-sm md:text-base text-[#86868b] font-light leading-relaxed transition-all duration-500 ${!isExpanded ? 'line-clamp-3' : ''}`}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* ACTION / FOOTER */}
        <div className="mt-auto pt-6 border-t border-transparent flex items-center justify-between w-full">
          <div className="mb-1 md:mb-1.5">
            <Link 
              to={`/events?register=${id}`}
              className="text-[10px] uppercase tracking-[0.25em] text-[#86868b] hover:text-[#B0926A] font-semibold transition-colors duration-300"
            >
              Event Registry
            </Link>
          </div>

          <div className="flex-shrink-0 z-20">
            <button
              onClick={toggleExpand}
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#1d1d1f] hover:bg-[#B0926A] transition-colors duration-300 shadow-sm"
            >
              <motion.svg
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V19" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H19" />
              </motion.svg>
            </button>
          </div>
        </div>

      </div>
    </motion.article>
  );
}