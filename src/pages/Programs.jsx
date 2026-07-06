import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import { useState } from "react";

const categories = ["All", "Agribusiness", "Youth Empowerment", "Research & Innovation"];

export default function Programs() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <div className="bg-[#F5F5F7] min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 font-sans tracking-wide">
      
      <header className="max-w-4xl mx-auto text-center space-y-6 mb-24">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Strategic Initiatives
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-light tracking-tight text-neutral-900 leading-tight">
          Our Operational Programs
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base leading-relaxed pt-2">
          Holistic portfolios driving youth development, digital-smart agriculture setups, and scalable research-backed interventions.
        </p>
      </header>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-20 max-w-3xl mx-auto border-b border-neutral-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative pb-2 ${
              filter === cat
                ? "text-neutral-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#B0926A]"
                : "text-neutral-400 hover:text-neutral-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((prog, idx) => (
          <div 
            key={idx} 
            className="border border-neutral-100 p-8 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all duration-500 bg-white shadow-sm"
          >
            <ProgramCard {...prog} />
          </div>
        ))}
      </div>
    </div>
  );
}