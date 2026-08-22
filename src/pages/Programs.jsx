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
    <div className="font-sans text-neutral-900 bg-[#F5F5F7] antialiased selection:bg-[#B0926A] selection:text-white overflow-hidden min-h-screen">
      
      {/* TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-b border-neutral-300/50">
        <span className="block text-neutral-500 text-sm font-medium mb-8 uppercase tracking-widest">
          02 / Strategic Initiatives
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-medium sm:font-normal lg:font-light leading-[0.95] tracking-tight text-neutral-900 mb-12 transition-all duration-500">
          Operational <br />
          Programs.
        </h1>
        <p className="max-w-3xl text-neutral-600 font-light text-lg md:text-xl leading-relaxed">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </p>
      </header>

      {/* FILTER CONTROLS */}
      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-[1400px] mx-auto border-b border-neutral-300/50">
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm uppercase tracking-widest transition-all duration-500 pb-2 border-b-2 ${
                filter === cat
                  ? "text-[#B0926A] border-[#B0926A]"
                  : "text-neutral-400 border-transparent hover:text-[#B0926A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROGRAM GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((prog, idx) => (
              <ProgramCard key={idx} {...prog} />
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-32 text-neutral-400 text-lg tracking-wide font-light">
              No programs currently scheduled in this tier.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}