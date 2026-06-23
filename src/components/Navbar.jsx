import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Close, Search, ShoppingBag, LocationOn } from "@mui/icons-material";

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
    <nav className="bg-[#fafafa] border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[95%] mx-auto px-4 flex justify-between items-center h-20">
        
        {/* Logo updated to Two-Font rule */}
        <Link 
          to="/" 
          className="text-2xl text-[#222] font-heading font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Next-Gen Youth
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[#333333] font-heading text-[11px] uppercase tracking-[0.2em] hover:text-[#b8a898] transition-colors duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="hidden lg:flex gap-5 items-center text-[#333333]">
           <ShoppingBag fontSize="small" className="cursor-pointer hover:text-[#b8a898] transition-colors" />
           <LocationOn fontSize="small" className="cursor-pointer hover:text-[#b8a898] transition-colors" />
           <Search fontSize="small" className="cursor-pointer hover:text-[#b8a898] transition-colors" />
           <div className="flex items-center gap-1 cursor-pointer font-heading text-[11px] uppercase tracking-widest ml-2 hover:text-[#b8a898] transition-colors font-medium">
             <span>EN</span>
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
           </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#333333]" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 py-8 bg-[#fafafa] absolute w-full left-0 border-b border-gray-200 shadow-lg">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#333333] font-heading text-xs uppercase tracking-[0.2em] font-medium"
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