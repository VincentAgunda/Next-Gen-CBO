import SectionHeader from "../components/SectionHeader";

const governance = [
  { role: "Chairperson", name: "Shadrach Munuve" },
  { role: "Vice Chairperson", name: "Ochieng’ Samuel Owino" },
  { role: "Secretary", name: "Veronica Mwende" },
  { role: "Assistant Secretary", name: "Patrick Otieno" },
  { role: "Treasurer", name: "Erick Muthonzwe" },
  { role: "Founding Member", name: "Vincent Agunda" },
  { role: "Founding Member", name: "William Mikaia" },
  { role: "Founding Member", name: "Diana Mulusa" },
  { role: "Founding Member", name: "Cleophas Mwendwa" },
  { role: "Founding Member", name: "Esther Muia" },
  { role: "Founding Member", name: "Roselevina Wao" },
  { role: "Founding Member", name: "Sarah Kalekye" },
  { role: "Founding Member", name: "Evans Nzomo" },
  { role: "Founding Member", name: "Doreen Wangari" },
];

const coreValues = [
  { term: "Discipline", definition: "Consistent savings, structural operational execution, and individual responsibility." },
  { term: "Integrity", definition: "Absolute transparency, corporate honesty, and compliance across all records." },
  { term: "Unity", definition: "Collective strength through disciplined teamwork and shared community alignment." },
  { term: "Growth", definition: "Continuous financial, technical, and personal progress for every single member." },
  { term: "Accountability", definition: "Upholding institutional trust, fiscal diligence, and stringent auditing standards." },
  { term: "Empowerment", definition: "Creating self-sustaining, evidence-based socioeconomic opportunities for youth." },
];

export default function About() {
  return (
    <div className="bg-[#F5F5F7] min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 selection:bg-neutral-900 selection:text-white font-sans tracking-wide">
      
      {/* 1. HERO HEADER: Mimicking Burmester's Centered Elegance */}
      <header className="max-w-4xl mx-auto text-center space-y-6 mb-32">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Institutional Framework
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-900 leading-tight">
          Our Foundation & Philosophy
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base md:text-lg leading-relaxed pt-2">
          Formally constituted and registered under the Organization Act (No. 30 of 2022, Laws of Kenya), 
          the Next-Generation Youth Agribusiness & Researchers CBO operates as a premium catalyst for 
          evidence-based sustainable development from its regional seat in the Emali-Sultan Humud Municipality, Makueni County.
        </p>
      </header>

      {/* 2. DUAL IMAGE / BLOCK ROW: Symmetrical Column Layout */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 mb-40">
        <div className="space-y-6 group">
          <div className="aspect-[4/3] w-full bg-white overflow-hidden relative border border-neutral-100 shadow-sm">
            <img 
              src="/images/about/vision-blueprint.jpg" 
              alt="Strategic agricultural research fields" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="space-y-2 max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Strategic Horizon</span>
            <h3 className="text-xl font-serif font-normal text-neutral-900">The Vision Blueprint</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              To be a leading youth-driven research and innovation group, advancing sustainable agriculture, 
              climate resilience, and inclusive development within the young Organization as well as to the community.
            </p>
          </div>
        </div>

        <div className="space-y-6 group md:pt-12">
          <div className="aspect-[4/3] w-full bg-white overflow-hidden relative border border-neutral-100 shadow-sm">
            <img 
              src="/images/about/mission-parameter.jpg" 
              alt="Youth researchers collecting data" 
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="space-y-2 max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Operational Mandate</span>
            <h3 className="text-xl font-serif font-normal text-neutral-900">The Mission Parameter</h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              To empower young innovators, researchers and communities focused in agribusiness to generate 
              evidence-based solutions that promote sustainable agriculture, climate action, and poverty 
              eradication through research, innovation, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRICAL ROW (LEFT IMAGE / RIGHT TEXT): Innovation for Eternity Style */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-44">
        <div className="lg:col-span-5 aspect-[3/4] w-full bg-white overflow-hidden border border-neutral-100 shadow-sm">
          <img 
            src="/images/about/objectives-manifesto.jpg" 
            alt="Close up of structural botany and research tools" 
            className="w-full h-full object-cover grayscale contrast-115"
          />
        </div>
        <div className="lg:col-span-7 space-y-8 lg:pl-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B0926A] block font-medium">Statutory Charter</span>
            <h2 className="text-3xl font-serif font-light text-neutral-900 tracking-tight">Constitutional Objectives</h2>
          </div>
          <div className="space-y-6 text-neutral-600 font-light text-sm leading-relaxed max-w-xl">
            <p>
              Pursuant to Section 3.3 of our founding charter, NGYAR maps its resource allocation against rigorous scientific benchmarks to ensure sustainable livelihoods and environmental stewardship across local ecosystems.
            </p>
            <ul className="space-y-4 border-l border-[#B0926A]/30 pl-6 text-neutral-500">
              <li>• Promote youth-led research and innovation in sustainable agriculture, climate change, and environmental conservation.</li>
              <li>• Conduct, support, and disseminate scientific and community-based research for sustainable local development.</li>
              <li>• Build research capacity and advanced technical skills among young innovators through verified training and academic collaborations.</li>
              <li>• Support the immediate development, deployment, and community adoption of climate-smart, high-yield agricultural technologies.</li>
              <li>• Actively engage communities, legacy institutions, and regional policymakers in evidence-based decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM TYPOGRAPHIC PULL QUOTE: Completely Clean & Grand */}
      <section className="max-w-4xl mx-auto text-center my-52 py-12 border-y border-neutral-100">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-neutral-800 font-light max-w-3xl mx-auto leading-relaxed">
          “To empower young innovators, researchers and communities focused in agribusiness to generate evidence-based solutions that promote sustainable development.”
        </blockquote>
        <cite className="text-[10px] uppercase tracking-[0.3em] text-[#B0926A] font-medium not-italic mt-6 block">
          — Section 3.2, National Regulatory Filing
        </cite>
      </section>

      {/* 5. ASYMMETRICAL ROW (RIGHT IMAGE / LEFT TEXT): Customized Design Style */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-52">
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 lg:pr-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B0926A] block font-medium">Operational Framework</span>
            <h2 className="text-3xl font-serif font-light text-neutral-900 tracking-tight">Proposed Focus Initiatives</h2>
          </div>
          <p className="text-neutral-500 font-light text-sm leading-relaxed max-w-xl">
            Our multi-tiered execution pipeline transforms foundational academic studies into physical community infrastructure. 
            By merging tech-driven research frameworks with intensive regional output programs, we establish scalable solutions 
            for sustainable, high-value agricultural ecosystems.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-medium text-neutral-900">Agribusiness Value Chains</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">High-density organic poultry frameworks, precision mushroom cultivation tech, custom feed formulations, and tech-driven apiary management matrices.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-medium text-neutral-900">Digital Agriculture & Hubs</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Deployment of custom smart-farming machinery, automated hydroponics layouts, GIS ecosystem mapping, and precision community data collection tools.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] w-full bg-white overflow-hidden order-1 lg:order-2 border border-neutral-100 shadow-sm">
          <img 
            src="/images/about/pillars-execution.jpg" 
            alt="Modern automated agricultural installation" 
            className="w-full h-full object-cover grayscale opacity-95"
          />
        </div>
      </section>

      {/* 6. VERTICAL DETAIL SECTION: Commitment to Quality Style Layout */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 pt-24 border-t border-neutral-100 mb-52">
        <div className="lg:col-span-4 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B0926A] block font-medium">Ethical Benchmarks</span>
          <h2 className="text-2xl font-serif font-light text-neutral-900 tracking-tight">Core Values & Institutional Discipline</h2>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {coreValues.map((value) => (
            <div key={value.term} className="space-y-2 border-b border-neutral-50 pb-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-900">{value.term}</h3>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">{value.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HIGH-END EXECUTIVE DIRECTORY: Board Member Registry Layout */}
      <section className="max-w-6xl mx-auto space-y-16 mb-44">
        <div className="border-b border-neutral-200 pb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B0926A] block font-medium mb-2">Governance Matrix</span>
          <h2 className="text-3xl font-serif font-light text-neutral-900 tracking-tight">Founding Members & Executive Secretariat</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {governance.map((person) => (
            <div key={person.name} className="group border-b border-neutral-100 pb-4 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B0926A] block font-medium">
                  {person.role}
                </span>
                <h4 className="text-base font-serif font-normal text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-300">
                  {person.name}
                </h4>
              </div>
              <span className="text-[9px] tracking-widest uppercase text-neutral-300 font-light font-mono block pt-1">
                NGYAR.SEC.2026
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MINIMALIST CALL TO ACTION: Fine Bordered Action Block */}
      <footer className="text-center max-w-2xl mx-auto space-y-8 pt-12 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed tracking-wide">
          Review structural bylaws, official asset registration guidelines, financial indemnity rules, 
          and foundational protocols outlined in the signed legal registry.
        </p>
        <div>
          <a
            href="https://res.cloudinary.com/your-cloud/raw/upload/v1/constitution.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white hover:border-transparent transition-all duration-500 ease-out font-sans shadow-sm"
          >
            Download Signed Constitution (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}