import React from "react";

const governance = [
  { role: "Chairperson", name: "Shadrach Munuve", image: "/images/governance/shadrach-munuve.jpg" },
  { role: "Vice Chairperson", name: "Ochieng’ Samuel Owino", image: "/images/governance/ochieng-owino.jpg" },
  { role: "Secretary", name: "Veronica Mwende", image: "/images/governance/veronica-mwende.jpg" },
  { role: "Assistant Secretary", name: "Patrick Otieno", image: "/images/governance/patrick-otieno.jpg" },
  { role: "Treasurer", name: "Erick Muthonzwe", image: "/images/governance/erick-muthonzwe.jpg" },
  { role: "Founding Member", name: "Vincent Agunda", image: "/images/governance/vincent-agunda.jpg" },
  { role: "Founding Member", name: "William Mikaia", image: "/images/governance/william-mikaia.jpg" },
  { role: "Founding Member", name: "Diana Mulusa", image: "/images/governance/diana-mulusa.jpg" },
  { role: "Founding Member", name: "Cleophas Mwendwa", image: "/images/governance/cleophas-mwendwa.jpg" },
  { role: "Founding Member", name: "Esther Muia", image: "/images/governance/esther-muia.jpg" },
  { role: "Founding Member", name: "Roselevina Wao", image: "/images/governance/roselevina-wao.jpg" },
  { role: "Founding Member", name: "Sarah Kalekye", image: "/images/governance/sarah-kalekye.jpg" },
  { role: "Founding Member", name: "Evans Nzomo", image: "/images/governance/evans-nzomo.jpg" },
  { role: "Founding Member", name: "Doreen Wangari", image: "/images/governance/doreen-wangari.jpg" },
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
    <div className="font-sans text-black bg-white antialiased selection:bg-black selection:text-white overflow-hidden min-h-screen">
      
      {/* 01. TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-28 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <span className="block text-[#757575] text-[13px] font-normal mb-8 uppercase tracking-wider">
          01 / Framework
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Foundation & <br />
          Philosophy.
        </h1>
        <p className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Formally constituted and registered under the Organization Act (No. 30 of 2022, Laws of Kenya), 
          the Next-Generation Youth Agribusiness & Researchers CBO operates as a premium catalyst for 
          evidence-based sustainable development from its regional seat in the Emali-Sultan Humud Municipality, Makueni County.
        </p>
      </header>

      {/* 02. DUAL IMAGE BLOCK (Vision & Mission) */}
      <section className="py-28 bg-[#f6f6f6] px-[6vw] md:px-12 lg:px-24 border-t border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Vision */}
          <div className="flex flex-col border-t border-[#D9D9D9] pt-6">
            <span className="text-[13px] text-[#757575] mb-8 font-normal uppercase tracking-wider">
              02.1 / Horizon
            </span>
            <div className="aspect-[16/10] w-full bg-[#E5E5E5] mb-10 overflow-hidden relative group">
              <img 
                src="/images/about/vision-blueprint.jpg" 
                alt="Strategic agricultural research fields" 
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            <h3 className="text-3xl lg:text-[40px] font-normal text-black mb-6 tracking-tight leading-none">
              The Vision Blueprint
            </h3>
            <p className="text-[16px] text-black opacity-75 font-normal leading-relaxed max-w-md">
              To be a leading youth-driven research and innovation group, advancing sustainable agriculture, 
              climate resilience, and inclusive development within the young Organization as well as to the community.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col border-t border-[#D9D9D9] pt-6">
            <span className="text-[13px] text-[#757575] mb-8 font-normal uppercase tracking-wider">
              02.2 / Mandate
            </span>
            <div className="aspect-[16/10] w-full bg-[#E5E5E5] mb-10 overflow-hidden relative group">
              <img 
                src="/images/about/mission-parameter.jpg" 
                alt="Youth researchers collecting data" 
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            <h3 className="text-3xl lg:text-[40px] font-normal text-black mb-6 tracking-tight leading-none">
              The Mission Parameter
            </h3>
            <p className="text-[16px] text-black opacity-75 font-normal leading-relaxed max-w-md">
              To empower young innovators, researchers and communities focused in agribusiness to generate 
              evidence-based solutions that promote sustainable agriculture, climate action, and poverty 
              eradication through research, innovation, and community engagement.
            </p>
          </div>

        </div>
      </section>

      {/* 03. ASYMMETRICAL ROW (Constitutional Objectives) */}
      <section className="bg-white py-28 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7 w-full bg-[#f6f6f6] overflow-hidden aspect-[4/3]">
            <img 
              src="/images/about/objectives-manifesto.jpg" 
              alt="Close up of structural botany and research tools" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>

          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-center">
            <span className="text-[#757575] text-[13px] uppercase block mb-6 font-normal tracking-wider">
              03 / Statutory Charter
            </span>
            
            <h2 className="text-black text-4xl lg:text-[52px] font-normal mb-10 leading-[1.05] tracking-tight flex items-start gap-3">
              <span className="text-3xl lg:text-5xl font-light translate-y-1.5 select-none">↗</span>
              <span>Constitutional <br/> Objectives</span>
            </h2>
            
            <p className="text-black opacity-85 text-[16px] leading-relaxed mb-10 font-normal border-b border-[#E5E5E5] pb-8">
              Pursuant to Section 3.3 of our founding charter, NGYAR maps its resource allocation against rigorous scientific benchmarks to ensure sustainable livelihoods and environmental stewardship across local ecosystems.
            </p>
            
            <ul className="space-y-4 text-[14px] text-black opacity-75 font-normal">
              <li className="flex gap-4 border-b border-[#f6f6f6] pb-4">
                <span className="opacity-50">01</span>
                <span>Promote youth-led research and innovation in sustainable agriculture and climate resilience.</span>
              </li>
              <li className="flex gap-4 border-b border-[#f6f6f6] pb-4">
                <span className="opacity-50">02</span>
                <span>Conduct and deploy scientific, community-based research for localized development.</span>
              </li>
              <li className="flex gap-4 border-b border-[#f6f6f6] pb-4">
                <span className="opacity-50">03</span>
                <span>Build capacity through advanced technical training and academic collaboration frameworks.</span>
              </li>
              <li className="flex gap-4">
                <span className="opacity-50">04</span>
                <span>Accelerate the adoption of climate-smart, high-yield agricultural technologies.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 04. ABSOLUTE HIGH-CONTRAST STATEMENT */}
      <section className="bg-black text-white py-32 lg:py-48 px-[6vw] md:px-12 lg:px-24 flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-normal leading-[1.1] tracking-tight">
            “To empower young innovators, researchers and communities focused in agribusiness to generate evidence-based solutions that promote sustainable development.”
          </h2>
          <span className="block mt-12 text-[#858585] text-[13px] uppercase tracking-wider font-normal">
            — Section 3.2, National Regulatory Filing
          </span>
        </div>
      </section>

      {/* 05. CORE VALUES LIST */}
      <section className="py-28 lg:py-40 px-[6vw] md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="mb-16">
            <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
              04 / Ethics
            </span>
            <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
              Institutional Discipline
            </h2>
          </div>

          <div className="w-full border-t border-black">
            {coreValues.map((value, index) => (
              <div 
                key={value.term}
                className="w-full py-8 lg:py-12 flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[#D9D9D9] gap-4 lg:gap-12 hover:opacity-60 transition-opacity duration-300"
              >
                <div className="flex items-baseline gap-6 lg:w-1/3">
                  <span className="text-[13px] text-[#757575] font-normal block min-w-[30px]">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-black tracking-tight leading-none">
                    {value.term}
                  </h3>
                </div>
                <p className="text-[16px] text-black opacity-85 font-normal leading-relaxed lg:w-2/3 lg:max-w-2xl">
                  {value.definition}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06. GOVERNANCE MATRIX (Rigid grid architecture with minimal rounded profiles) */}
      <section className="py-28 bg-[#f6f6f6] px-[6vw] md:px-12 lg:px-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
            <div>
              <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
                05 / Leadership
              </span>
              <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
                Governance Matrix
              </h2>
            </div>
            <p className="text-[15px] text-black opacity-75 max-w-sm">
              The founding executive secretariat strictly governs operational strategy and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-[#D9D9D9] pt-12">
            {governance.map((person) => (
              <div key={person.name} className="flex flex-col border-b border-[#E5E5E5] pb-8 group">
                
                {/* Minimalist Circular Profile Image Frame */}
                <div className="w-20 h-20 rounded-full bg-[#E5E5E5] overflow-hidden mb-6 relative border border-[#E5E5E5]">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback visual implementation if image source is physically missing
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <span className="text-[12px] uppercase tracking-wider text-[#757575] block font-normal mb-2">
                  {person.role}
                </span>
                <h4 className="text-[20px] font-normal text-black tracking-tight mb-2">
                  {person.name}
                </h4>
                <span className="text-[11px] uppercase text-[#757575] font-normal block opacity-50">
                  ID: NGYAR-{person.name.substring(0, 3).toUpperCase()}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 07. MINIMALIST CTA */}
      <section className="py-28 px-[6vw] md:px-12 lg:px-24 bg-white text-center flex flex-col items-center">
        <div className="max-w-2xl mx-auto space-y-10">
          <p className="text-[16px] text-[#757575] font-normal leading-relaxed">
            Review structural bylaws, official asset registration guidelines, financial indemnity rules, 
            and foundational protocols outlined in the signed legal registry.
          </p>
          
          <a
            href="https://res.cloudinary.com/your-cloud/raw/upload/v1/constitution.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between border border-black text-black px-8 py-4 text-[15px] font-normal hover:bg-black hover:text-white transition-colors duration-300 w-full max-w-[320px]"
          >
            <span>Download Constitution</span>
            <span className="text-lg leading-none">↓</span>
          </a>
        </div>
      </section>
      
    </div>
  );
}