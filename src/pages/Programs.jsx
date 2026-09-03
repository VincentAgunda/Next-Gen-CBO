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
    <div className="font-sans text-neutral-900 bg-[#f4f4f4] antialiased selection:bg-[#C0A175] selection:text-white overflow-hidden min-h-screen">
      
      {/* TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-b border-neutral-200">
        <span className="block text-[#C0A175] text-xs font-medium mb-8 uppercase tracking-[0.3em]">
          02 / Strategic Initiatives
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-light leading-[0.95] tracking-tight text-neutral-900 mb-12 transition-all duration-500">
          Operational <br />
          Programs.
        </h1>
        <p className="max-w-3xl text-neutral-500 font-light text-lg md:text-xl leading-relaxed">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </p>
      </header>

      {/* FILTER CONTROLS */}
      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-[1400px] mx-auto border-b border-neutral-200 bg-[#f4f4f4]">
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.25em] transition-all duration-500 pb-2 border-b font-medium ${
                filter === cat
                  ? "text-[#C0A175] border-[#C0A175]"
                  : "text-neutral-400 border-transparent hover:text-[#C0A175]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROGRAM GRID */}
      <section className="py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((prog, idx) => (
              <ProgramCard key={idx} {...prog} />
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-32 text-neutral-400 text-sm uppercase tracking-[0.2em] font-light">
              No programs currently scheduled in this tier.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}