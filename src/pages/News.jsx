import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Youth Empowerment Workshop", date: "2026-05-10", category: "Community", excerpt: "..." },
  { id: 2, title: "New Mushroom Farming Project Launched", date: "2026-04-22", category: "Agribusiness", excerpt: "..." },
];

export default function News() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <SectionHeader title="News & Insights" subtitle="Latest updates from our community." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <div key={a.id} className="bg-white p-5 rounded-xl shadow">
            <span className="text-sm text-brand-primary">{a.category}</span>
            <h3 className="text-lg font-bold mt-1 mb-2">{a.title}</h3>
            <p className="text-gray-500 text-sm">{a.date}</p>
            <p className="mt-2">{a.excerpt}</p>
            <Link to="#" className="text-brand-primary font-semibold hover:underline mt-2 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}