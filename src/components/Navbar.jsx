import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Close,
  LocationOn,
  PeopleAltOutlined,
  CollectionsOutlined,
} from "@mui/icons-material";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/innovation-hub", label: "Innovation" },
  { to: "/research", label: "Research" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-20px",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: -18,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const utilityVariants = {
  closed: {
    opacity: 0,
    y: 12,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`sticky top-0 z-[100] w-full bg-white border-b border-[#e9e9e7] transition-shadow duration-500 ${
        open ? "shadow-none" : "shadow-[0_4px_20px_rgba(0,0,0,0.035)]"
      }`}
    >
      {/* -------------------------------------------------- */}
      {/* DESKTOP / MAIN HEADER                              */}
      {/* -------------------------------------------------- */}

      <div className="relative z-[110] flex items-center justify-between w-full h-[72px] md:h-[78px] px-5 sm:px-7 md:px-10 lg:px-14 xl:px-16 bg-white">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3 shrink-0"
          aria-label="NGYAR Home"
        >
          <span className="text-[21px] md:text-[23px] font-serif italic tracking-[-0.03em] text-[#0a0a0a] transition-opacity duration-300 group-hover:opacity-60">
            NGYAR
          </span>

          <span className="hidden sm:block w-px h-4 bg-[#d8d8d5]" />

          <span className="hidden sm:block text-[8px] uppercase tracking-[0.28em] text-[#858581] font-medium">
            Youth Initiative
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative py-2 text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.19em] text-[#62625f] transition-colors duration-300 hover:text-[#080808]"
              >
                {link.label}

                <span className="absolute left-0 right-0 bottom-0 h-px origin-left scale-x-0 bg-[#bda887] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Link
            to="/gallery"
            title="Gallery"
            aria-label="Gallery"
            className="group flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 border border-[#e2e2df] rounded-full text-[#333331] transition-all duration-400 hover:border-[#bda887] hover:bg-[#f8f6f2] hover:-translate-y-[1px]"
          >
            <CollectionsOutlined
              sx={{
                fontSize: 19,
                transition: "transform 400ms ease",
              }}
              className="group-hover:scale-90"
            />
          </Link>

          <Link
            to="/membership"
            title="Membership"
            aria-label="Membership"
            className="group flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 border border-[#e2e2df] rounded-full text-[#333331] transition-all duration-400 hover:border-[#bda887] hover:bg-[#f8f6f2] hover:-translate-y-[1px]"
          >
            <PeopleAltOutlined
              sx={{
                fontSize: 19,
              }}
            />
          </Link>

          <button
            type="button"
            aria-label="Locations"
            className="flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 text-[#454542] transition-all duration-300 hover:text-[#bda887] hover:-translate-y-[1px]"
          >
            <LocationOn sx={{ fontSize: 19 }} />
          </button>

          <button
            type="button"
            aria-label="Change language"
            className="flex items-center gap-1.5 ml-1 px-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#555552] transition-colors duration-300 hover:text-[#bda887]"
          >
            <span>EN</span>

            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <Link
            to="/support-us"
            className="ml-2 xl:ml-3 relative overflow-hidden bg-[#bda887] text-white px-5 xl:px-6 py-3 text-[10px] uppercase tracking-[0.19em] font-medium transition-all duration-500 hover:-translate-y-[1px] group"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#111]" >
              Support Us
            </span>

            <span className="absolute inset-0 bg-[#bda887] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[120] flex lg:hidden items-center justify-center w-10 h-10 -mr-1 text-[#111] transition-transform duration-300 active:scale-90"
        >
          <motion.span
            animate={{
              rotate: open ? 90 : 0,
              scale: open ? 0.8 : 1,
              opacity: open ? 0 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="absolute"
          >
            <Menu sx={{ fontSize: 24 }} />
          </motion.span>

          <motion.span
            animate={{
              rotate: open ? 0 : -90,
              scale: open ? 1 : 0.8,
              opacity: open ? 1 : 0,
            }}
            transition={{ duration: 0.35 }}
            className="absolute"
          >
            <Close sx={{ fontSize: 24 }} />
          </motion.span>
        </button>
      </div>

      {/* -------------------------------------------------- */}
      {/* MOBILE MENU                                        */}
      {/* -------------------------------------------------- */}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[72px] md:top-[78px] z-[90] bg-[#07121b]/25 backdrop-blur-[3px] lg:hidden"
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 z-[100] w-full overflow-hidden bg-white border-b border-[#e7e7e4] shadow-[0_20px_50px_rgba(0,0,0,0.10)] lg:hidden"
            >
              <div className="max-h-[calc(100vh-72px)] md:max-h-[calc(100vh-78px)] overflow-y-auto px-6 sm:px-8 py-8">
                {/* Mobile Navigation */}
                <div className="border-t border-[#ecece9]">
                  {navLinks.map((link, index) => (
                    <motion.div
                      variants={linkVariants}
                      key={link.to}
                      className="border-b border-[#ecece9]"
                    >
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        className="group flex items-center justify-between py-[18px] text-[11px] font-medium uppercase tracking-[0.22em] text-[#252523] transition-all duration-300 hover:pl-2 hover:text-[#a98f6d]"
                      >
                        <span>{link.label}</span>

                        <span className="flex items-center gap-2 text-[9px] text-[#aaa9a5]">
                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="w-5 h-px bg-[#d8d8d4] transition-all duration-300 group-hover:w-8 group-hover:bg-[#bda887]" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Secondary Actions */}
                <motion.div
                  variants={utilityVariants}
                  className="grid grid-cols-2 gap-3 mt-7"
                >
                  <Link
                    to="/gallery"
                    onClick={closeMenu}
                    className="group flex items-center gap-3 px-4 py-4 border border-[#e5e5e2] text-[#222] transition-all duration-300 hover:border-[#bda887] hover:bg-[#faf8f4]"
                  >
                    <CollectionsOutlined
                      sx={{
                        fontSize: 19,
                        color: "#77756f",
                      }}
                    />

                    <span className="text-[9px] font-medium uppercase tracking-[0.17em]">
                      Gallery
                    </span>
                  </Link>

                  <Link
                    to="/membership"
                    onClick={closeMenu}
                    className="group flex items-center gap-3 px-4 py-4 border border-[#e5e5e2] text-[#222] transition-all duration-300 hover:border-[#bda887] hover:bg-[#faf8f4]"
                  >
                    <PeopleAltOutlined
                      sx={{
                        fontSize: 19,
                        color: "#77756f",
                      }}
                    />

                    <span className="text-[9px] font-medium uppercase tracking-[0.17em]">
                      Membership
                    </span>
                  </Link>
                </motion.div>

                {/* Support */}
                <motion.div
                  variants={utilityVariants}
                  className="mt-3"
                >
                  <Link
                    to="/support-us"
                    onClick={closeMenu}
                    className="relative overflow-hidden flex items-center justify-center w-full py-[17px] bg-[#bda887] text-white text-[10px] font-medium uppercase tracking-[0.22em] group"
                  >
                    <span className="relative z-10 transition-colors duration-400 group-hover:text-[#111]">
                      Support Us
                    </span>

                    <span className="absolute inset-0 bg-[#bda887] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                  </Link>
                </motion.div>

                {/* Utilities */}
                <motion.div
                  variants={utilityVariants}
                  className="flex items-center justify-between pt-6 mt-7 border-t border-[#ecece9]"
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#777570] transition-colors duration-300 hover:text-[#111]"
                  >
                    <LocationOn sx={{ fontSize: 18 }} />
                    Locations
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#777570] transition-colors duration-300 hover:text-[#111]"
                  >
                    <span>EN</span>

                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}