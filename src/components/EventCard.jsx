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
        className="relative block w-full min-h-[440px] md:min-h-[470px] lg:min-h-[500px] overflow-hidden rounded-[24px] bg-white border border-neutral-200 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl hover:border-neutral-300"
      >
        {/* ============================================================
            SOFT ATMOSPHERIC BACKGROUND (Subtle Gold)
        ============================================================ */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(176,146,106,0.12),transparent_42%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* ============================================================
            CONTENT CONTAINER
        ============================================================ */}
        <div className="relative z-10 flex h-full min-h-[440px] md:min-h-[470px] lg:min-h-[500px] flex-col p-8 sm:p-10 lg:p-12">
          
          {/* ----------------------------------------------------------
              TOP META 
          ----------------------------------------------------------- */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                Date
              </span>
              <span className="mt-2.5 block text-xs uppercase tracking-widest text-neutral-900 font-medium leading-none">
                {date}
              </span>
            </div>

            <div className="text-right max-w-[140px]">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold leading-none">
                Location
              </span>
              <span className="mt-2.5 block text-xs uppercase tracking-widest text-neutral-900 font-medium leading-relaxed">
                {venue}
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------
              EDITORIAL DIVIDER
          ----------------------------------------------------------- */}
          <div className="mt-8 w-full h-[1px] bg-neutral-100" />

          {/* ----------------------------------------------------------
              MAIN TITLE
          ----------------------------------------------------------- */}
          <div className="mt-10 md:mt-12">
            <h3 className="max-w-[520px] text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-neutral-900 tracking-tighter leading-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              {title}
            </h3>
          </div>

          {/* ----------------------------------------------------------
              DESCRIPTION
          ----------------------------------------------------------- */}
          {/* mt-auto pushes this container (and the action row below it) to the bottom safely */}
          <div className="mt-auto pt-8">
            <p className="max-w-[430px] text-sm md:text-base text-neutral-500 font-light leading-relaxed">
              {description}
            </p>
          </div>

          {/* ==========================================================
              BOTTOM ACTION ROW (Fixes Overlap Issue)
          =========================================================== */}
          {/* This row stays in the document flow, guaranteeing it never overlaps the description */}
          <div className="mt-8 md:mt-10 flex items-end justify-between w-full">
            
            {/* HOVER INDEX */}
            <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none mb-1.5 md:mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B0926A] font-semibold">
                Explore Event
              </span>
            </div>

            {/* PLUS BUTTON */}
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
        <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B0926A] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
      </Link>
    </motion.article>
  );
}