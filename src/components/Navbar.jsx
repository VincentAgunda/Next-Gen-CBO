import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Close, Search, LocationOn } from "@mui/icons-material";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/innovation-hub", label: "Innovation" },
  { to: "/research", label: "Research" },
  { to: "/events", label: "Events" },
  { to: "/membership", label: "Membership" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open (UX Best Practice)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      {/* 
        Main Header Bar 
        Added relative and z-20 so the mobile menu smoothly slides out from *under* this bar
      */}
      <div className="w-full px-6 md:px-12 mx-auto flex justify-between items-center h-[80px] relative z-20 bg-white">
        
        {/* Logo - Refined serif style for a premium feel */}
        <Link 
          to="/" 
          onClick={() => setOpen(false)}
          className="text-2xl text-black font-serif italic tracking-wide hover:opacity-70 transition-opacity"
        >
          NGYER
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[#666666] font-sans text-[11px] uppercase tracking-[0.2em] hover:text-black transition-colors duration-500 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons (Desktop) */}
        <div className="hidden lg:flex gap-6 items-center text-[#333333]">
           <LocationOn sx={{ fontSize: 20 }} className="cursor-pointer hover:text-black transition-colors" />
           <Search sx={{ fontSize: 20 }} className="cursor-pointer hover:text-black transition-colors" />
           <div className="flex items-center gap-1 cursor-pointer font-sans text-[11px] uppercase tracking-[0.2em] ml-2 hover:text-black transition-colors font-medium">
             <span>EN</span>
             <svg className="w-3 h-3 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path>
             </svg>
           </div>
        </div>

        {/* Mobile Toggle with subtle icon rotation */}
        <button 
          className="lg:hidden text-black p-2 -mr-2 rounded-full hover:bg-gray-50 transition-colors" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle Menu"
        >
          {open ? (
            <Close className="transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* 
        Mobile menu 
        Always rendered, but visually hidden when closed via opacity, transform, and pointer-events.
      */}
      <div 
        className={`lg:hidden absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        {/* Added dynamic height and scrolling in case the screen is very small */}
        <div className="flex flex-col px-6 py-8 h-[calc(100vh-80px)] overflow-y-auto">
          
          {/* Mobile Links */}
          <div className="flex flex-col gap-6 mb-8 border-b border-gray-100 pb-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#333333] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:text-[#d2b79b] transition-colors py-1 inline-block w-fit"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Utilities (Previously missing for mobile users) */}
          <div className="flex flex-col gap-6 text-[#666666]">
            <button className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:text-black transition-colors">
              <LocationOn sx={{ fontSize: 20 }} />
              <span>Locations</span>
            </button>
            <button className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:text-black transition-colors">
              <Search sx={{ fontSize: 20 }} />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:text-black transition-colors">
              <div className="w-5 flex justify-center border-b border-current leading-none font-bold">
                EN
              </div>
              <span>Language</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}