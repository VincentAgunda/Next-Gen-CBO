import { Link } from "react-router-dom";
// Swapped the contact icons for the Social icons required at the bottom-right
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-white text-[#555555] font-sans pt-28 pb-16 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[90%] mx-auto">
        
        {/* Top Grid: Asymmetrical layout with extreme right-side negative space */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-24">
          
          {/* Column 1 */}
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#a3a3a3] mb-6 block font-normal">
              About Next-Gen
            </span>
            <ul className="space-y-3.5 text-sm font-light">
              <li><Link to="/about" className="hover:text-black transition-colors">Our Mission</Link></li>
              <li><Link to="/programs" className="hover:text-black transition-colors">Programs</Link></li>
              <li><Link to="/innovation-hub" className="hover:text-black transition-colors">Innovation Hub</Link></li>
              <li><Link to="/events" className="hover:text-black transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#a3a3a3] mb-6 block font-normal">
              Get Involved
            </span>
            <ul className="space-y-3.5 text-sm font-light">
              <li><Link to="/membership" className="hover:text-black transition-colors">Membership</Link></li>
              <li><Link to="/partnerships" className="hover:text-black transition-colors">Partner With Us</Link></li>
              <li><Link to="/support-us" className="hover:text-black transition-colors">Support Us</Link></li>
              <li><Link to="/support-us" className="hover:text-black transition-colors">Volunteer</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact info converted to pure editorial text */}
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#a3a3a3] mb-6 block font-normal">
              Direct Contact
            </span>
            <ul className="space-y-3.5 text-sm font-light text-[#777777]">
              <li><a href="mailto:info@nextgenyouth.org" className="hover:text-black transition-colors">info@nextgenyouth.org</a></li>
              <li><a href="tel:+254700000000" className="hover:text-black transition-colors">+254 700 000 000</a></li>
              <li className="pt-2 text-xs uppercase tracking-wider text-[#a3a3a3]">Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Column 4: Intentionally left empty to mimic Burmester's wide open right flank */}
          <div className="hidden md:block"></div>

        </div>

        {/* Bottom Row: Copyright & Outlined Socials */}
        <div className="pt-12 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 text-xs text-[#888888] font-light">
          
          {/* Left Side: Copyright + inline links */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Next-Gen Youth. All rights reserved.</span>
            <span className="text-[#cccccc]">&middot;</span>
            <Link to="/imprint" className="hover:text-black transition-colors">Imprint</Link>
            <span className="text-[#cccccc]">&middot;</span>
            <Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy policy</Link>
            <span className="text-[#cccccc]">&middot;</span>
            <Link to="/app" className="hover:text-black transition-colors">Conduct App</Link>
          </div>

          {/* Right Side: 1:1 match of the circular social icon buttons */}
          <div className="flex items-center gap-3">
            <a 
              href="#facebook" 
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#666] hover:border-black hover:text-black transition-all"
            >
              <Facebook sx={{ fontSize: 17 }} />
            </a>
            <a 
              href="#instagram" 
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#666] hover:border-black hover:text-black transition-all"
            >
              <Instagram sx={{ fontSize: 17 }} />
            </a>
            <a 
              href="#youtube" 
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#666] hover:border-black hover:text-black transition-all"
            >
              <YouTube sx={{ fontSize: 17 }} />
            </a>
            <a 
              href="#linkedin" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#666] hover:border-black hover:text-black transition-all"
            >
              <LinkedIn sx={{ fontSize: 17 }} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}