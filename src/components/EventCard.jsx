import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventCard({ title, date, venue, description, id }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full antialiased"
    >
      <Link
        to={`/events?register=${id}`}
        aria-label={`Register for ${title}`}
        className="relative block w-full flex flex-col min-h-[440px] md:min-h-[470px] lg:min-h-[500px] overflow-hidden rounded-none bg-white border border-neutral-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#03A10E]"
      >
        {/* ============================================================
            ATMOSPHERIC BACKGROUND (Subtle Green on Hover)
        ============================================================ */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(3,161,14,0.04),transparent_50%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* ============================================================
            CONTENT CONTAINER
        ============================================================ */}
        <div className="relative z-10 flex flex-col flex-grow p-8 sm:p-10 lg:p-12">
          
          {/* ----------------------------------------------------------
              TOP META 
          ----------------------------------------------------------- */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                Date
              </span>
              <span className="mt-3 block text-[11px] md:text-xs uppercase tracking-[0.15em] text-neutral-900 font-medium leading-none">
                {date}
              </span>
            </div>

            <div className="text-right max-w-[140px]">
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                Location
              </span>
              <span className="mt-3 block text-[11px] md:text-xs uppercase tracking-[0.15em] text-neutral-900 font-medium leading-relaxed">
                {venue}
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------
              EDITORIAL DIVIDER
          ----------------------------------------------------------- */}
          <div className="mt-8 w-full h-[1px] bg-neutral-200 group-hover:bg-[#03A10E]/20 transition-colors duration-700" />

          {/* ----------------------------------------------------------
              MAIN TITLE
          ----------------------------------------------------------- */}
          <div className="mt-10 md:mt-12">
            <h3 className="max-w-[520px] text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem] font-medium text-neutral-900 tracking-tighter leading-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-[#03A10E]">
              {title}
            </h3>
          </div>

          {/* ----------------------------------------------------------
              DESCRIPTION
          ----------------------------------------------------------- */}
          <div className="mt-6 mb-12">
            <p className="max-w-[430px] text-sm md:text-base text-neutral-500 font-light leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* ==========================================================
              BOTTOM ACTION ROW
          =========================================================== */}
          <div className="mt-auto pt-6 border-t border-transparent group-hover:border-[#03A10E]/20 transition-colors duration-700 flex items-center justify-between w-full">
            
            {/* HOVER INDEX */}
            <div className="transition-all duration-500 pointer-events-none mb-1 md:mb-1.5">
              <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 group-hover:text-neutral-900 font-semibold transition-colors duration-500">
                Event Registry
              </span>
            </div>

            {/* ACTION BUTTON (Rounded Plus) */}
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-neutral-200 bg-white group-hover:border-[#03A10E] group-hover:bg-[#03A10E] transition-all duration-500 ease-out shadow-sm">
                <svg
                  className="w-4 h-4 text-neutral-900 group-hover:text-white transition-transform duration-500 ease-out group-hover:rotate-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5V19" strokeLinecap="round" />
                  <path d="M5 12H19" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            
          </div>
        </div>

        {/* ============================================================
            BOTTOM ACCENT
        ============================================================ */}
        <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#03A10E] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
      </Link>
    </motion.article>
  );
}