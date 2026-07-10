import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedInitiatives() {
  return (
    <section className="bg-[#2d2932] text-white py-28 lg:py-40 px-6 lg:px-24 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto flex flex-col gap-28 lg:gap-40">
        
        {/* Row 1: Youth Empowerment & Agribusiness */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                Agribusiness Initiative
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
              Empowering <br className="hidden lg:block" />
              Future Leaders.
            </h2>
            
            <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Through agribusiness development, youth empowerment, and research-driven innovation, we equip young people with the precision skills and resources needed to architect sustainable livelihoods.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
              >
                <span>Explore programs</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden border border-neutral-700 rounded-sm">
            <img
              src="/Partner/lead.png"
              alt="Agribusiness Development"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
          </div>
        </div>

        {/* Row 2: White Button Mushroom Innovation */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-neutral-700 rounded-sm">
            <img
              src="/Innovation/mush2.png" 
              alt="White Button Mushroom Automated Cultivation"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
          </div>

          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                Precision Mycology Hub
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
              Next-gen white button <br className="hidden lg:block" />
              mushroom cultivation.
            </h2>
            
            <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Our flagship White Button Mushroom (<em>Agaricus bisporus</em>) project integrates automated ambient humidity regulation and precision substrate thermal-shocking—redefining high-yield vertical farming for local economic resilience.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/innovation-hub" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
              >
                <span>Examine Mycology Spec</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 3: ICT Training & Infrastructure */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                Digital Architecture
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
              Advanced ICT <br className="hidden lg:block" />
              & Systems Literacy.
            </h2>
            
            <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Bridging the digital divide via modern computing frameworks. We deliver targeted modules in software basics, networking infrastructure, and localized technology stacks to build a competitive digital workforce.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
              >
                <span>Review Tech Stack</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden border border-neutral-700 rounded-sm">
            <img
              src="/Innovation/ict.png"
              alt="ICT Training Infrastructure"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
          </div>
        </div>

        {/* Row 4: Precision Poultry Farming */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-1 relative group overflow-hidden border border-neutral-700 rounded-sm">
            <img
              src="/Innovation/poultry.png" 
              alt="Bio-Secured Poultry Systems"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
          </div>

          <div className="lg:col-span-5 order-2 space-y-6 lg:pl-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                Avian Development Hub
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
              Bio-secured poultry <br className="hidden lg:block" />
              farming operations.
            </h2>
            
            <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Optimizing poultry yields using high-efficiency nutrient deployment and robust bio-security strategies. This system acts as an operational blueprint for community micro-enterprises.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
              >
                <span>View Avian Protocols</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 5: Charity & Socio-Economic Relief */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#d2b79b]"></span>
              <span className="text-[#d2b79b] text-xs uppercase tracking-[0.3em] font-semibold">
                Socio-Economic Development
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-medium md:font-normal tracking-tight leading-tight text-white">
              Impact-Driven Charity <br className="hidden lg:block" />
              & Outreaches.
            </h2>
            
            <p className="text-neutral-300 font-normal md:font-light text-base md:text-lg leading-relaxed">
              Targeted philanthropic interventions designed to support vulnerable community circles. From foundational resource supply runs to structured equity investments, we build stable support frameworks.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#d2b79b] hover:text-white transition-colors duration-300 group"
              >
                <span>See Impact Metrics</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden border border-neutral-700 rounded-sm">
            <img
              src="/Hero/h4.jpeg"
              alt="Community Philanthropy Initiatives"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10] transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out"></div>
          </div>
        </div>

      </div>
    </section>
  );
}