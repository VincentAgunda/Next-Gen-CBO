import SectionHeader from "../components/SectionHeader";

const governance = [
  { role: "Chairperson", name: "Jane Doe" },
  { role: "Vice Chairperson", name: "John Smith" },
  { role: "Secretary", name: "Alice Wanjiku" },
  { role: "Assistant Secretary", name: "Peter Otieno" },
  { role: "Treasurer", name: "Grace Muthoni" },
];

export default function About() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-16">
      {/* Organization Profile */}
      <section>
        <SectionHeader title="About Next-Gen Youth" subtitle="Our story, vision, and mission." center={false} />
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Background</h3>
            <p className="text-gray-700">
              Founded in 2020, Next-Gen Youth Agribusiness & Research CBO works to
              empower young people by combining agriculture, technology, and
              entrepreneurship.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Objectives</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Promote sustainable agribusiness among youth.</li>
              <li>Enhance research and innovation capacity.</li>
              <li>Facilitate community development through climate action.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-gray-700">
              A prosperous, self-reliant youth driving Africa's agricultural
              transformation.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Mission</h3>
            <p className="text-gray-700">
              To provide youth with skills, resources, and platforms for
              agribusiness success, innovation, and climate resilience.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Core Values</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Inclusivity</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section>
        <SectionHeader title="Governance Structure" center={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {governance.map((person) => (
            <div key={person.role} className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-bold">{person.role}</h4>
              <p className="text-gray-600">{person.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Constitution Download */}
      <div className="text-center">
        <a
          href="https://res.cloudinary.com/your-cloud/raw/upload/v1/constitution.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-blue-600"
        >
          Download Our Constitution (PDF)
        </a>
      </div>
    </div>
  );
}