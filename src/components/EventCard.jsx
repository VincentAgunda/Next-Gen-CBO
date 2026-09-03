import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventCard({
  title,
  date,
  venue,
  description,
  id,
}) {
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
      className="
        group
        relative
        w-full
        h-full
      "
    >
      <Link
        to={`/events?register=${id}`}
        aria-label={`Register for ${title}`}
        className="
          relative
          block
          w-full
          min-h-[440px]
          md:min-h-[470px]
          lg:min-h-[500px]
          overflow-hidden
          rounded-[28px]
          bg-white
          border
          border-black/[0.055]
          shadow-[0_8px_40px_rgba(0,0,0,0.035)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-2
          hover:shadow-[0_28px_80px_rgba(0,0,0,0.10)]
        "
      >
        {/* ============================================================
            SOFT ATMOSPHERIC BACKGROUND
        ============================================================ */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_80%_85%,rgba(210,183,155,0.22),transparent_42%)]
            opacity-70
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />

        {/* ============================================================
            TOP CONTENT
        ============================================================ */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            min-h-[440px]
            md:min-h-[470px]
            lg:min-h-[500px]
            flex-col
            p-7
            sm:p-9
            md:p-10
            lg:p-11
          "
        >
          {/* ----------------------------------------------------------
              TOP META
          ----------------------------------------------------------- */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-6
            "
          >
            {/* Date */}

            <div>
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-neutral-400
                  font-medium
                  leading-none
                "
              >
                Date
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-neutral-800
                  font-medium
                  leading-none
                "
              >
                {date}
              </span>
            </div>

            {/* Venue */}

            <div className="text-right max-w-[120px]">
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-neutral-400
                  font-medium
                  leading-none
                "
              >
                Location
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.13em]
                  text-neutral-800
                  font-medium
                  leading-relaxed
                "
              >
                {venue}
              </span>
            </div>
          </div>

          {/* ----------------------------------------------------------
              EDITORIAL DIVIDER
          ----------------------------------------------------------- */}

          <div
            className="
              mt-8
              w-full
              h-px
              bg-neutral-100
            "
          />

          {/* ----------------------------------------------------------
              MAIN TITLE
          ----------------------------------------------------------- */}

          <div className="mt-12 md:mt-14">
            <h3
              className="
                max-w-[520px]
                text-[2.15rem]
                sm:text-[2.5rem]
                md:text-[2.8rem]
                lg:text-[3rem]
                xl:text-[3.15rem]
                font-medium
                tracking-[-0.055em]
                leading-[0.98]
                text-neutral-900
                transition-transform
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:translate-x-1
              "
            >
              {title}
            </h3>
          </div>

          {/* ----------------------------------------------------------
              DESCRIPTION
          ----------------------------------------------------------- */}

          <div className="mt-auto pr-10 pt-10">
            <p
              className="
                max-w-[430px]
                text-[14px]
                md:text-[15px]
                leading-[1.7]
                font-light
                text-neutral-500
              "
            >
              {description}
            </p>
          </div>

          {/* ==========================================================
              PLUS BUTTON
          =========================================================== */}

          <div
            className="
              absolute
              right-7
              bottom-7
              sm:right-9
              sm:bottom-9
              md:right-10
              md:bottom-10
              lg:right-11
              lg:bottom-11
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                md:w-11
                md:h-11
                rounded-full
                bg-neutral-900
                text-white
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:bg-[#B0926A]
                group-hover:scale-110
              "
            >
              <svg
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:rotate-90
                "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 5V19"
                  strokeLinecap="round"
                />

                <path
                  d="M5 12H19"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          {/* ==========================================================
              HOVER INDEX
          =========================================================== */}

          <div
            className="
              absolute
              left-7
              bottom-7
              sm:left-9
              sm:bottom-9
              md:left-10
              md:bottom-10
              lg:left-11
              lg:bottom-11
              opacity-0
              -translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
              pointer-events-none
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-[#B0926A]
                font-semibold
              "
            >
              Explore Event
            </span>
          </div>
        </div>

        {/* ============================================================
            BOTTOM ACCENT
        ============================================================ */}

        <div
          className="
            absolute
            left-0
            bottom-0
            w-0
            h-[2px]
            bg-[#B0926A]
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:w-full
          "
        />
      </Link>
    </motion.article>
  );
}