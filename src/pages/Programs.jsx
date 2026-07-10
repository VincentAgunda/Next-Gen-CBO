import React, { useState } from "react";
import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";

// Updated premium categories to encompass the entire CBO spectrum
const categories = ["All", "Agribusiness", "Youth Empowerment", "ICT & Digital", "Charity & Outreach"];

export default function Programs() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <div className="font-sans text-black bg-[#F5F5F7] antialiased selection:bg-black selection:text-white overflow-hidden min-h-screen">
      
      {/* TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-20 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto border-b border-[#E5E5E5]">
        <span className="block text-[#757575] text-[13px] font-normal mb-8 uppercase tracking-wider">
          02 / Strategic Initiatives
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Operational <br />
          Programs.
        </h1>
        <p className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </p>
      </header>

      {/* FILTER CONTROLS */}
      <div className="px-[6vw] md:px-12 lg:px-24 py-12 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[13px] uppercase tracking-wider font-normal transition-all duration-300 pb-1 border-b ${
                filter === cat
                  ? "text-black border-black"
                  : "text-[#757575] border-transparent hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROGRAM GRID */}
      <section className="pb-32 px-[6vw] md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Cleaned layout grid allowing ProgramCard to handle its premium styling seamlessly */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((prog, idx) => (
              <ProgramCard key={idx} {...prog} />
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#757575] text-sm tracking-wide">
              No programs currently scheduled in this tier.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}