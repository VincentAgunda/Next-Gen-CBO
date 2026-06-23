import { programs } from "../data/programs";
import ProgramCard from "../components/ProgramCard";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";

const categories = ["All", "Agribusiness", "Youth Empowerment", "Research & Innovation"];

export default function Programs() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="Our Programs" subtitle="Holistic initiatives driving youth transformation." />
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-brand-primary text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prog, idx) => (
          <ProgramCard key={idx} {...prog} />
        ))}
      </div>
    </div>
  );
}