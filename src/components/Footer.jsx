import { Link } from "react-router-dom";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] text-[#333333] font-sans pt-28 pb-16 px-6 md:px-12 border-t border-[#E5E5E5]">
      <div className="max-w-[90%] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-24">
          
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C6D53] mb-6 block font-bold">
              About Next-Gen
            </span>
            <ul className="space-y-3.5 text-sm font-light text-[#555555]">
              <li><Link to="/about" className="hover:text-[#8C6D53] transition-colors duration-300">Our Mission</Link></li>
              <li><Link to="/programs" className="hover:text-[#8C6D53] transition-colors duration-300">Programs</Link></li>
              <li><Link to="/innovation-hub" className="hover:text-[#8C6D53] transition-colors duration-300">Innovation Hub</Link></li>
              <li><Link to="/events" className="hover:text-[#8C6D53] transition-colors duration-300">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C6D53] mb-6 block font-bold">
              Get Involved
            </span>
            <ul className="space-y-3.5 text-sm font-light text-[#555555]">
              <li><Link to="/membership" className="hover:text-[#8C6D53] transition-colors duration-300">Membership</Link></li>
              <li><Link to="/partnerships" className="hover:text-[#8C6D53] transition-colors duration-300">Partner With Us</Link></li>
              <li><Link to="/support-us" className="hover:text-[#8C6D53] transition-colors duration-300">Support Us</Link></li>
              <li><Link to="/support-us" className="hover:text-[#8C6D53] transition-colors duration-300">Volunteer</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C6D53] mb-6 block font-bold">
              Direct Contact
            </span>
            <ul className="space-y-3.5 text-sm font-light text-[#555555]">
              <li><a href="mailto:info@nextgenyouth.org" className="hover:text-[#8C6D53] transition-colors duration-300">info@nextgenyouth.org</a></li>
              <li><a href="tel:+254700000000" className="hover:text-[#8C6D53] transition-colors duration-300">+254 700 000 000</a></li>
              <li className="pt-2 text-[10px] uppercase tracking-[0.2em] text-[#888888]">Nairobi, Kenya</li>
            </ul>
          </div>

          <div className="hidden md:block"></div>
        </div>

        <div className="pt-12 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 text-xs text-[#777777] font-light border-t border-[#E5E5E5]">
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Next-Gen Youth. All rights reserved.</span>
            <span className="text-[#CCCCCC]">&middot;</span>
            <Link to="/imprint" className="hover:text-[#8C6D53] transition-colors duration-300">Imprint</Link>
            <span className="text-[#CCCCCC]">&middot;</span>
            <Link to="/privacy-policy" className="hover:text-[#8C6D53] transition-colors duration-300">Privacy policy</Link>
            <span className="text-[#CCCCCC]">&middot;</span>
            <Link to="/app" className="hover:text-[#8C6D53] transition-colors duration-300">Conduct App</Link>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#facebook" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#666666] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-white transition-all duration-300"
            >
              <Facebook sx={{ fontSize: 18 }} />
            </a>
            <a 
              href="#instagram" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#666666] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-white transition-all duration-300"
            >
              <Instagram sx={{ fontSize: 18 }} />
            </a>
            <a 
              href="#youtube" 
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#666666] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-white transition-all duration-300"
            >
              <YouTube sx={{ fontSize: 18 }} />
            </a>
            <a 
              href="#linkedin" 
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#666666] hover:border-[#8C6D53] hover:bg-[#8C6D53] hover:text-white transition-all duration-300"
            >
              <LinkedIn sx={{ fontSize: 18 }} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}