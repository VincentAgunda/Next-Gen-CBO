import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "About Next-Gen",
      links: [
        { name: "Our Mission", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Innovation Hub", path: "/innovation-hub" },
        { name: "News & Events", path: "/events" },
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Membership", path: "/membership" },
        { name: "Partner With Us", path: "/partnerships" },
        { name: "Support Us", path: "/support-us" },
        { name: "Volunteer", path: "/volunteer" },
      ]
    },
    {
      title: "Direct Contact",
      links: [
        { name: "info@nextgenyouth.org", path: "mailto:info@nextgenyouth.org", isExternal: true },
        { name: "+254 700 000 000", path: "tel:+254700000000", isExternal: true },
        { name: "Nairobi, Kenya", path: null, isStatic: true },
      ]
    },
    {
      title: "Social",
      links: [
        { name: "Instagram", path: "#instagram", isExternal: true },
        { name: "Facebook", path: "#facebook", isExternal: true },
        { name: "YouTube", path: "#youtube", isExternal: true },
        { name: "LinkedIn", path: "#linkedin", isExternal: true },
      ]
    }
  ];

  const renderLink = (link) => {
    if (link.isStatic) {
      return <span className="text-[#555555] font-normal">{link.name}</span>;
    }
    const className = "hover:underline underline-offset-4 decoration-1 block w-full text-black font-normal";
    if (link.isExternal) {
      return <a href={link.path} className={className}>{link.name}</a>;
    }
    return <Link to={link.path} className={className}>{link.name}</Link>;
  };

  return (
    <footer className="bg-[#f0f0f0] text-black font-sans pt-16 lg:pt-24 pb-12 px-[6vw] md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 pb-12 lg:pb-24">
          
          {/* Left Block: Heading & Subscribe Action */}
          <div className="lg:col-span-4 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-[26px] lg:text-[32px] font-normal leading-[1.2] mb-6 tracking-tight max-w-[340px] lg:max-w-none">
              Stay up to date on the latest Next-Gen news
            </h2>
            <button className="border border-black px-6 py-[11px] text-[15px] font-normal hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-between w-[150px]">
              Subscribe <span className="text-lg leading-none select-none">→</span>
            </button>
          </div>

          {/* --- DESKTOP VIEW GRID --- */}
          <div className="hidden lg:grid lg:col-span-8 grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <span className="text-[15px] font-normal text-[#555555] mb-6 block">
                  {section.title}
                </span>
                <ul className="space-y-4 text-[15px]">
                  {section.links.map((link, index) => (
                    <li key={index}>{renderLink(link)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- MOBILE VIEW ACCORDION --- */}
          <div className="lg:hidden w-full border-t border-[#D9D9D9]">
            {footerSections.map((section) => (
              <div key={section.title} className="border-b border-[#D9D9D9]">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex justify-between items-center py-[22px] text-left focus:outline-none"
                >
                  <span className="text-[16px] font-normal text-black">{section.title}</span>
                  <span className="text-black flex items-center justify-center w-4 h-4 transition-transform duration-200">
                    {openSection === section.title ? (
                      // Ultra-thin Premium Minus Sign SVG
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      // Ultra-thin Premium Plus Sign SVG
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === section.title ? 'max-h-[280px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-[14px] text-[16px]">
                    {section.links.map((link, index) => (
                      <li key={index}>{renderLink(link)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Metadata & Legal Links Section */}
        <div className="pt-8 lg:pt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4 text-[13px] text-[#555555] lg:border-t lg:border-[#D9D9D9]">
          
          {/* Polestar Style Region Selection Wrapper */}
          <div className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity duration-300 cursor-pointer self-start order-1 lg:order-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[18px] h-[18px]">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            <span className="font-normal text-[15px] tracking-tight">Global</span>
          </div>

          {/* Copyright Metadata */}
          <span className="block text-[13px] text-[#757575] font-normal order-2 lg:order-1 mt-2 lg:mt-0">
            Next-Gen Youth &copy; {new Date().getFullYear()} All rights reserved
          </span>

          {/* Horizontal Legal Anchors */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#555555] font-normal order-3 mt-1 lg:mt-0">
            <Link to="/imprint" className="hover:text-black transition-colors duration-200">Imprint</Link>
            <Link to="/privacy-policy" className="hover:text-black transition-colors duration-200">Privacy policy</Link>
            <Link to="/app" className="hover:text-black transition-colors duration-200">Conduct App</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}