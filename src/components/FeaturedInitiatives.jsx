import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedInitiatives() {
  return (
    <section className="bg-[#E4DFD8] text-neutral-900 py-28 lg:py-40 px-6 lg:px-24 border-b border-[#d1c8bd]">
      <div className="max-w-7xl mx-auto flex flex-col gap-28 lg:gap-40">
        
        {/* Row 1: Strategic Agribusiness Development */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image (Left) */}
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-[#d1c8bd] rounded-sm">
            <img
              src="/Partner/lead.png"
              alt="Agribusiness Development and Youth Leadership"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 ease-out"></div>
          </div>

          {/* Text (Right) */}
          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8b6845]"></span>
              <span className="text-[#8b6845] text-xs uppercase tracking-[0.3em] font-semibold">
                Strategic Agribusiness
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-neutral-900">
              Cultivating <br className="hidden lg:block" />
              Visionary Leadership.
            </h2>
            
            <p className="text-neutral-700 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Through synergistic agribusiness development, institutional youth empowerment, and empirical research, we equip emerging leaders with the precise competencies required to architect resilient community livelihoods.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6845] hover:text-neutral-900 transition-colors duration-300 group"
              >
                <span>Explore Strategic Programs</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Precision Mycology Hub */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image (Left) */}
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-[#d1c8bd] rounded-sm">
            <img
              src="/Innovation/mush2.png" 
              alt="White Button Mushroom Automated Cultivation Systems"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 ease-out"></div>
          </div>

          {/* Text (Right) */}
          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8b6845]"></span>
              <span className="text-[#8b6845] text-xs uppercase tracking-[0.3em] font-semibold">
                Precision Mycology Hub
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-neutral-900">
              Automated <br className="hidden lg:block" />
              Agaricus Bisporus.
            </h2>
            
            <p className="text-neutral-700 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Our flagship Precision Mycology project integrates automated environmental regulation and precise substrate thermal-shock protocols—redefining high-yield vertical farming for localized economic sustainability.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/innovation-hub" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6845] hover:text-neutral-900 transition-colors duration-300 group"
              >
                <span>Examine Mycology Protocols</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 3: ICT & Systems Literacy */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image (Left) */}
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-[#d1c8bd] rounded-sm">
            <img
              src="/Innovation/ict.png"
              alt="Advanced ICT and Digital Systems Training"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 ease-out"></div>
          </div>

          {/* Text (Right) */}
          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8b6845]"></span>
              <span className="text-[#8b6845] text-xs uppercase tracking-[0.3em] font-semibold">
                Digital Architecture
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-neutral-900">
              Advanced ICT <br className="hidden lg:block" />
              & Systems Literacy.
            </h2>
            
            <p className="text-neutral-700 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Eradicating the digital divide through sophisticated computing frameworks. We deliver targeted curriculum modules encompassing software fundamentals, network architecture, and localized technology stacks to cultivate a highly competitive workforce.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6845] hover:text-neutral-900 transition-colors duration-300 group"
              >
                <span>Review Technological Stacks</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 4: Precision Avian Agronomy */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image (Left) */}
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-[#d1c8bd] rounded-sm">
            <img
              src="/Innovation/poultry.png" 
              alt="Bio-Secured Precision Poultry Farming"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 ease-out"></div>
          </div>

          {/* Text (Right) */}
          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8b6845]"></span>
              <span className="text-[#8b6845] text-xs uppercase tracking-[0.3em] font-semibold">
                Avian Development Hub
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-neutral-900">
              Bio-secured Avian <br className="hidden lg:block" />
              Farming Operations.
            </h2>
            
            <p className="text-neutral-700 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Maximizing operational yields via high-efficiency nutrient deployment and rigorous bio-security frameworks. This specialized system serves as an empirical blueprint for scalable community micro-enterprises.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6845] hover:text-neutral-900 transition-colors duration-300 group"
              >
                <span>View Avian Methodologies</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 5: Strategic Philanthropy & Outreach */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image (Left) */}
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-[#d1c8bd] rounded-sm">
            <img
              src="/Hero/h4.jpeg"
              alt="Community Philanthropy and Outreach Initiatives"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 ease-out"></div>
          </div>
          
          {/* Text (Right) */}
          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#8b6845]"></span>
              <span className="text-[#8b6845] text-xs uppercase tracking-[0.3em] font-semibold">
                Strategic Philanthropy
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-neutral-900">
              Impact-Driven <br className="hidden lg:block" />
              Socio-Economic Relief.
            </h2>
            
            <p className="text-neutral-700 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Executing targeted philanthropic interventions designed to stabilize vulnerable demographics. From foundational resource distribution to structured equity investments, we engineer robust socio-economic support frameworks.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8b6845] hover:text-neutral-900 transition-colors duration-300 group"
              >
                <span>Review Impact Metrics</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}