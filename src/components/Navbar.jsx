import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Close, Search,  LocationOn } from "@mui/icons-material";

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

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-6 md:px-12 mx-auto flex justify-between items-center h-[80px]">
        
        {/* Logo - Refined serif style for a premium feel */}
        <Link 
          to="/" 
          className="text-2xl text-black font-serif italic tracking-wide hover:opacity-70 transition-opacity"
        >
          Next-Gen Youth
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

        {/* Right side icons */}
        <div className="hidden lg:flex gap-6 items-center text-[#333333]">
           
           <LocationOn sx={{ fontSize: 20 }} className="cursor-pointer hover:text-black transition-colors" />
           <Search sx={{ fontSize: 20 }} className="cursor-pointer hover:text-black transition-colors" />
           <div className="flex items-center gap-1 cursor-pointer font-sans text-[11px] uppercase tracking-[0.2em] ml-2 hover:text-black transition-colors font-medium">
             <span>EN</span>
             <svg className="w-3 h-3 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
           </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-black" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 py-8 bg-white absolute w-full left-0 border-b border-gray-100 shadow-lg">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#333333] font-sans text-xs uppercase tracking-[0.2em] font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}