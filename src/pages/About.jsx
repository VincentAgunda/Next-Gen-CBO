import SectionHeader from "../components/SectionHeader";

const governance = [
  { role: "Chairperson", name: "Shadrach Munuve" },
  { role: "Vice Chairperson", name: "Ochieng’ Samuel Owino" },
  { role: "Secretary", name: "Veronica Mwende" },
  { role: "Assistant Secretary", name: "Patrick Otieno" },
  { role: "Treasurer", name: "Erick Muthonzwe" },
  { role: "Executive Council Member", name: "Vincent Agunda" },
];

export default function About() {
  return (
    <div className="bg-[#FAFAFC] min-h-screen py-24 px-6 space-y-32 antialiased selection:bg-black selection:text-white">
      {/* Structural Organization Overview and Footprint */}
      <section className="max-w-6xl mx-auto">
        <SectionHeader 
          title="About Next-Gen Youth" 
          subtitle="Constitutional history, legal frameworks, and macro agendas guiding NGYAR." 
          center={false} 
        />
        
        <div className="grid lg:grid-cols-12 gap-16 mt-16 items-start">
          <div className="lg:col-span-7 space-y-10 bg-white p-10 border border-gray-200/80 rounded-2xl shadow-sm">
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-normal tracking-tight text-neutral-900">Background & Legal Identity</h3>
              <p className="text-gray-500 font-light text-base leading-relaxed">
                Formally constituted and registered pursuant to the Community-Based Organizations provisions of the Organization Act (No. 30 of 2022, Laws of Kenya). Next-Generation Youth Agribusiness and Researchers CBO maintains an operational footprint headquartered within the Emali-Sultan Humud Municipality, Makueni County.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-normal tracking-tight text-neutral-900">Constitutional Objectives</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-500 font-light">
                <li className="flex items-start gap-2 bg-[#FAFAFC] p-4 rounded-xl border border-gray-100"><span className="text-emerald-700 font-bold">•</span> Promote youth-led research in sustainable systems and climate fields.</li>
                <li className="flex items-start gap-2 bg-[#FAFAFC] p-4 rounded-xl border border-gray-100"><span className="text-emerald-700 font-bold">•</span> Conduct, translate, and broadcast scientific development frameworks.</li>
                <li className="flex items-start gap-2 bg-[#FAFAFC] p-4 rounded-xl border border-gray-100"><span className="text-emerald-700 font-bold">•</span> Adapt precision tools like digital agriculture and mushroom/poultry microclimates.</li>
                <li className="flex items-start gap-2 bg-[#FAFAFC] p-4 rounded-xl border border-gray-100"><span className="text-emerald-700 font-bold">•</span> Establish cross-boundary alliances with universities and state ministries.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 bg-neutral-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#D2B79B] font-semibold font-heading">The Vision Blueprint</h3>
              <p className="text-neutral-200 text-lg font-sans font-light leading-relaxed">
                "To be a leading youth-driven research and innovation group, advancing sustainable agriculture, climate resilience, and inclusive development within the organization as well as to the community."
              </p>
            </div>
            <hr className="border-neutral-800" />
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#D2B79B] font-semibold font-heading">The Mission Parameter</h3>
              <p className="text-neutral-200 text-sm font-sans font-light leading-relaxed">
                "To empower young innovators, researchers and communities focused in agribusiness to generate evidence-based solutions that promote sustainable agriculture, climate action, and poverty eradication through research, innovation, and community engagement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Governance Structure */}
      <section className="max-w-6xl mx-auto space-y-12">
        <SectionHeader title="Authorized Executive Secretariat" subtitle="Founding council members tasked with operational compliance execution and statutory leadership." center={false} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {governance.map((person) => (
            <div key={person.role} className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between transform-gpu hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-heading tracking-widest text-emerald-700 font-semibold block">{person.role}</span>
                <h4 className="text-xl font-heading font-normal tracking-tight text-neutral-900">{person.name}</h4>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span>NGYAR Council Member</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Constitution Asset Verification Trigger */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs text-gray-400 font-light">
          Verify operational rules, indemnity parameters, and exit criteria detailed in our founding constitutional document.
        </p>
        <a
          href="https://res.cloudinary.com/your-cloud/raw/upload/v1/constitution.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-10 py-4 text-xs uppercase tracking-widest font-heading font-medium hover:bg-neutral-800 transition-all duration-300 shadow-md"
        >
          Download Signed NGYAR Constitution (PDF)
        </a>
      </div>
    </div>
  );
}