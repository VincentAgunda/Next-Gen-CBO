import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white border-b border-gray-100 transition-all duration-500 ease-out ${
        open ? "shadow-lg" : "shadow-none"
      }`}
    >
      {/* Header */}
      <div className="relative z-50 flex items-center justify-between w-full h-20 px-6 bg-white md:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl italic tracking-wide text-black transition-all duration-300 font-serif hover:opacity-60 hover:scale-[1.02]"
        >
          NGYAR
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#666666] transition-colors duration-300 hover:text-black group"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d2b79b] transition-all duration-500 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="items-center hidden gap-3 text-[#333333] lg:flex xl:gap-4">
          <Link
            to="/gallery"
            title="Gallery"
            aria-label="Gallery"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d2b79b] hover:bg-[#d2b79b]/10 hover:text-[#0A2132]"
          >
            <CollectionsOutlined sx={{ fontSize: 21 }} />
          </Link>

          <Link
            to="/membership"
            title="Membership"
            aria-label="Membership"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d2b79b] hover:bg-[#d2b79b]/10 hover:text-[#0A2132]"
          >
            <PeopleAltOutlined sx={{ fontSize: 21 }} />
          </Link>

          <button
            aria-label="Locations"
            className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:text-black hover:-translate-y-0.5"
          >
            <LocationOn sx={{ fontSize: 20 }} />
          </button>

          <button
            aria-label="Change language"
            className="flex items-center gap-1 px-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-black"
          >
            <span>EN</span>

            <svg
              className="w-3 h-3 text-[#666666]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <Link
            to="/support-us"
            className="ml-2 bg-[#0A2132] text-white px-6 xl:px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-[#d2b79b] hover:text-black hover:-translate-y-0.5 hover:shadow-lg"
          >
            Support Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex items-center justify-center w-11 h-11 -mr-2 overflow-hidden rounded-full lg:hidden transition-all duration-300 hover:bg-gray-50 active:scale-95"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <span
            className={`absolute transition-all duration-500 ease-out ${
              open
                ? "rotate-90 scale-75 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu />
          </span>

          <span
            className={`absolute transition-all duration-500 ease-out ${
              open
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-75 opacity-0"
            }`}
          >
            <Close />
          </span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 top-20 z-30 bg-[#0A2132]/20 backdrop-blur-[2px] transition-all duration-500 lg:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 z-40 w-full bg-white border-b border-gray-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-[calc(100vh-80px)] overflow-y-auto px-6 py-8">
          {/* Mobile Links */}
          <div className="flex flex-col gap-1 pb-8 mb-6 border-b border-gray-100">
            {navLinks.map((link, index) => (
              <div
                key={link.to}
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: open
                    ? `${120 + index * 55}ms`
                    : "0ms",
                }}
              >
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="group flex items-center justify-between py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-all duration-300 hover:pl-3 hover:text-[#d2b79b]"
                >
                  {link.label}

                  <span className="w-0 h-px bg-[#d2b79b] transition-all duration-300 group-hover:w-6" />
                </Link>
              </div>
            ))}
          </div>

          {/* Gallery and Membership */}
          <div
            className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "500ms" : "0ms",
            }}
          >
            <Link
              to="/gallery"
              onClick={closeMenu}
              className="group flex flex-col items-center justify-center gap-3 p-5 border border-gray-100 rounded-xl text-[#0A2132] transition-all duration-300 hover:-translate-y-1 hover:border-[#d2b79b] hover:bg-[#d2b79b]/10"
            >
              <div className="flex items-center justify-center w-11 h-11 text-white rounded-full bg-[#0A2132] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d2b79b] group-hover:text-black">
                <CollectionsOutlined sx={{ fontSize: 20 }} />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.15em]">
                Gallery
              </span>
            </Link>

            <Link
              to="/membership"
              onClick={closeMenu}
              className="group flex flex-col items-center justify-center gap-3 p-5 border border-gray-100 rounded-xl text-[#0A2132] transition-all duration-300 hover:-translate-y-1 hover:border-[#d2b79b] hover:bg-[#d2b79b]/10"
            >
              <div className="flex items-center justify-center w-11 h-11 text-white rounded-full bg-[#0A2132] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d2b79b] group-hover:text-black">
                <PeopleAltOutlined sx={{ fontSize: 20 }} />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.15em]">
                Membership
              </span>
            </Link>
          </div>

          {/* Support */}
          <div
            className={`transition-all duration-700 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "580ms" : "0ms",
            }}
          >
            <Link
              to="/support-us"
              onClick={closeMenu}
              className="flex items-center justify-center w-full py-4 text-xs font-medium text-white uppercase tracking-[0.2em] bg-[#0A2132] transition-all duration-300 hover:bg-[#d2b79b] hover:text-black active:scale-[0.98]"
            >
              Support Us
            </Link>
          </div>

          {/* Utilities */}
          <div
            className={`flex flex-col gap-6 pt-8 mt-8 text-[#666666] border-t border-gray-100 transition-all duration-700 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "650ms" : "0ms",
            }}
          >
            <button className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-black">
              <LocationOn sx={{ fontSize: 20 }} />
              <span>Locations</span>
            </button>

            <button className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-black">
              <span className="flex justify-center w-5 font-bold leading-none border-b border-current">
                EN
              </span>
              <span>Language</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}