import React, { useEffect } from "react";
import { motion } from "framer-motion";

const governance = [
  { role: "Chairperson", name: "Shadrach Nzoka Munuve", image: "/team/shadrac.png" },
  { role: "Vice Chairperson", name: "Samuel Ochieng ", image: "/team/samuel.png" },
  { role: "Secretary", name: "Veronica Mwende", image: "/team/veronica.png" },
  { role: "Assistant Secretary", name: "Patrick Otieno Ochieng ", image: "/team/patrick.png" },
  { role: "Treasurer", name: "Erick Muthonzwe", image: "/team/erick.png" },
  { role: "Founding Member", name: "Vincent Agunda", image: "/Hero/h5.png" },
  { role: "Founding Member", name: "William Mikaia Mbuvi", image: "/team/william.png" },
  { role: "Founding Member", name: "Diana Mulusa", image: "/team/diana.png" },
  { role: "Founding Member", name: "Cleaphas mwendwa Mbatha", image: "/team/cleo.png" },
  { role: "Founding Member", name: "Esther Muia", image: "/team/esther.png" },
  { role: "Founding Member", name: "Roselevina Wao", image: "/images/governance/roselevina-wao.jpg" },
  { role: "Founding Member", name: "Serah Kalekye Peter", image: "/team/serah.png" },
  { role: "Founding Member", name: "Evans Nzomo", image: "/images/governance/evans-nzomo.jpg" },
  { role: "Founding Member", name: "Doreen Wangari", image: "/images/governance/doreen-wangari.jpg" },
  { role: "Founding Member", name: "Daniel kyanui Kituku", image: "/team/kyan.png" },
  { role: "Founding Member", name: "Faith Mutheu Muthini", image: "/team/faith.png" },
  { role: "Founding Member", name: "John waweru Ngigi", image: "/team/john.png" },
  { role: "Founding Member", name: "Purity wavinya Mati", image: "/team/purity.png" },
];

const coreValues = [
  { term: "Discipline", definition: "Consistent savings, structural operational execution, and individual responsibility." },
  { term: "Integrity", definition: "Absolute transparency, corporate honesty, and compliance across all records." },
  { term: "Unity", definition: "Collective strength through disciplined teamwork and shared community alignment." },
  { term: "Growth", definition: "Continuous financial, technical, and personal progress for every single member." },
  { term: "Accountability", definition: "Upholding institutional trust, fiscal diligence, and stringent auditing standards." },
  { term: "Empowerment", definition: "Creating self-sustaining, evidence-based socioeconomic opportunities for youth." },
];

// --- Animation Configs ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export default function About() {
  // Ensure page always starts at the top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="font-sans text-black bg-[#F5F5F7] antialiased selection:bg-[#03A10E] selection:text-white overflow-hidden min-h-screen">
      
      {/* 01. TYPOGRAPHIC HERO */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="pt-40 pb-28 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto transform-gpu"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
          <span className="w-8 h-[1px] bg-[#B0926A]"></span>
          <span className="block text-[#B0926A] text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em]">
            01 / Framework
          </span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Foundation & <br />
          <span className="text-[#03A10E]">Philosophy.</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Formally constituted and registered under the Organization Act (No. 30 of 2022, Laws of Kenya), 
          the Next-Generation Youth Agribusiness & Researchers CBO operates as a premium catalyst for 
          evidence-based sustainable development from its regional seat in the Emali-Sultan Humud Municipality, Makueni County.
        </motion.p>
      </motion.header>

      {/* 02. DUAL IMAGE BLOCK (Vision & Mission) */}
      <section className="py-28 bg-[#f6f6f6] px-[6vw] md:px-12 lg:px-24 border-t border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Vision */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
            className="flex flex-col border-t border-[#D9D9D9] pt-6 transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-[1px] bg-[#B0926A]"></span>
              <span className="text-[10px] md:text-xs text-[#B0926A] font-semibold uppercase tracking-[0.25em]">
                02.1 / Horizon
              </span>
            </div>
            
            <div className="aspect-[16/10] w-full bg-[#E5E5E5] mb-10 overflow-hidden relative group">
              <motion.img 
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                src="/images/about/vision-blueprint.jpg" 
                alt="Strategic agricultural research fields" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
              />
            </div>
            <h3 className="text-3xl lg:text-[40px] font-normal text-black mb-6 tracking-tight leading-none">
              The <span className="text-[#03A10E]">Vision</span> Blueprint
            </h3>
            <p className="text-[16px] text-black opacity-75 font-normal leading-relaxed max-w-md">
              To be a leading youth-driven research and innovation group, advancing sustainable agriculture, 
              climate resilience, and inclusive development within the young Organization as well as to the community.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
            className="flex flex-col border-t border-[#D9D9D9] pt-6 transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-[1px] bg-[#B0926A]"></span>
              <span className="text-[10px] md:text-xs text-[#B0926A] font-semibold uppercase tracking-[0.25em]">
                02.2 / Mandate
              </span>
            </div>
            <div className="aspect-[16/10] w-full bg-[#E5E5E5] mb-10 overflow-hidden relative group">
              <motion.img 
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                src="/Hero/h1.jpeg" 
                alt="Youth researchers collecting data" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
              />
            </div>
            <h3 className="text-3xl lg:text-[40px] font-normal text-black mb-6 tracking-tight leading-none">
              The <span className="text-[#03A10E]">Mission</span> Parameter
            </h3>
            <p className="text-[16px] text-black opacity-75 font-normal leading-relaxed max-w-md">
              To empower young innovators, researchers and communities focused in agribusiness to generate 
              evidence-based solutions that promote sustainable agriculture, climate action, and poverty 
              eradication through research, innovation, and community engagement.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 03. ASYMMETRICAL ROW (Constitutional Objectives) */}
      <section className="bg-white py-28 lg:py-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 w-full bg-[#f6f6f6] overflow-hidden aspect-[4/3] transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              src="/images/about/objectives-manifesto.jpg" 
              alt="Close up of structural botany and research tools" 
              className="w-full h-full object-cover will-change-transform"
            />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="lg:col-span-5 lg:pl-8 flex flex-col justify-center transform-gpu"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#B0926A]"></span>
              <span className="text-[#B0926A] text-[10px] md:text-xs uppercase font-semibold tracking-[0.25em]">
                03 / Statutory Charter
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-black text-4xl lg:text-[52px] font-normal mb-10 leading-[1.05] tracking-tight flex items-start gap-3">
              <span className="translate-y-1.5 select-none text-[#B0926A]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 lg:w-12 lg:h-12">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span>Constitutional <br/> <span className="text-[#03A10E]">Objectives</span></span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-black opacity-85 text-[16px] leading-relaxed mb-10 font-normal border-b border-[#E5E5E5] pb-8">
              Pursuant to Section 3.3 of our founding charter, NGYAR maps its resource allocation against rigorous scientific benchmarks to ensure sustainable livelihoods and environmental stewardship across local ecosystems.
            </motion.p>
            
            <motion.ul variants={staggerContainer} className="space-y-4 text-[14px] text-black opacity-85 font-normal">
              {[
                "Promote youth-led research and innovation in sustainable agriculture and climate resilience.",
                "Conduct and deploy scientific, community-based research for localized development.",
                "Build capacity through advanced technical training and academic collaboration frameworks.",
                "Accelerate the adoption of climate-smart, high-yield agricultural technologies."
              ].map((item, i) => (
                <motion.li variants={fadeInUp} key={i} className="flex gap-4 border-b border-[#f6f6f6] pb-4 last:border-0 last:pb-0">
                  <span className="text-[#B0926A] font-medium">0{i + 1}</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </section>

      {/* 04. ABSOLUTE HIGH-CONTRAST STATEMENT */}
      <motion.section 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}
        className="bg-black text-white py-32 lg:py-48 px-[6vw] md:px-12 lg:px-24 flex items-center justify-center transform-gpu"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-[64px] font-normal leading-[1.1] tracking-tight transform-gpu"
          >
            “To empower young innovators, researchers and communities focused in agribusiness to generate <span className="text-[#03A10E]">evidence-based solutions</span> that promote sustainable development.”
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12 transform-gpu"
          >
            <span className="w-8 h-[1px] bg-[#B0926A]/50"></span>
            <span className="block text-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold">
              Section 3.2, National Regulatory Filing
            </span>
            <span className="w-8 h-[1px] bg-[#B0926A]/50"></span>
          </motion.div>
        </div>
      </motion.section>

      {/* 05. CORE VALUES LIST */}
      <section className="py-28 lg:py-40 px-[6vw] md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 transform-gpu">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#B0926A]"></span>
              <span className="text-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold block">
                04 / Ethics
              </span>
            </div>
            <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
              Institutional <span className="text-[#03A10E]">Discipline</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
            className="w-full border-t border-black transform-gpu"
          >
            {coreValues.map((value, index) => (
              <motion.div 
                variants={fadeInUp}
                key={value.term}
                className="w-full py-8 lg:py-12 flex flex-col lg:flex-row lg:items-baseline justify-between border-b border-[#D9D9D9] gap-4 lg:gap-12 hover:bg-[#FAF9F6] transition-colors duration-300 transform-gpu px-4 lg:px-0 group"
              >
                <div className="flex items-baseline gap-6 lg:w-1/3">
                  <span className="text-[13px] text-[#B0926A] font-medium block min-w-[30px] group-hover:text-[#03A10E] transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-black tracking-tight leading-none">
                    {value.term}
                  </h3>
                </div>
                <p className="text-[16px] text-black opacity-85 font-normal leading-relaxed lg:w-2/3 lg:max-w-2xl">
                  {value.definition}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 06. GOVERNANCE MATRIX */}
      <section className="py-28 bg-[#f6f6f6] border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8 transform-gpu"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-[#B0926A]"></span>
                <span className="text-[#B0926A] text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold block">
                  05 / Leadership
                </span>
              </div>
              <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
                <span className="text-[#03A10E]">Governance</span> Matrix
              </h2>
            </div>
            <p className="text-[15px] text-black opacity-75 max-w-sm">
              The founding executive secretariat strictly governs operational strategy and regulatory compliance.
            </p>
          </motion.div>
        </div>

        {/* Executive Section - Kept Original Background */}
        <div className="bg-[#45263C] w-full py-20 px-[6vw] md:px-12 lg:px-24 mb-16">
          <div className="max-w-[1440px] mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-12">
              Executive
            </h3>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 transform-gpu"
            >
              {governance
                .filter((person) => person.role !== "Founding Member")
                .map((person) => (
                  <motion.div variants={fadeInUp} key={person.name} className="flex flex-col border-b border-white/20 pb-8 group transform-gpu">
                    <div className="w-20 h-20 rounded-full bg-white/10 overflow-hidden mb-6 relative border border-[#B0926A]/30 group-hover:border-[#B0926A] transition-colors duration-500">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#B0926A] block font-semibold mb-2">
                      {person.role}
                    </span>
                    <h4 className="text-[20px] font-normal text-white tracking-tight mb-2">
                      {person.name}
                    </h4>
                    <span className="text-[11px] uppercase text-white/50 font-normal block">
                      ID: NGYAR-{person.name.substring(0, 3).toUpperCase()}
                    </span>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Members Section */}
        <div className="max-w-[1440px] mx-auto px-[6vw] md:px-12 lg:px-24">
          <h3 className="text-3xl md:text-4xl font-normal text-black tracking-tight mb-10">
            Founding Members
          </h3>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 transform-gpu"
          >
            {governance
              .filter((person) => person.role === "Founding Member")
              .map((person) => (
                <motion.div variants={fadeInUp} key={person.name} className="flex flex-col border-b border-[#E5E5E5] pb-8 group transform-gpu">
                  <div className="w-20 h-20 rounded-full bg-[#E5E5E5] overflow-hidden mb-6 relative border border-transparent group-hover:border-[#03A10E] transition-colors duration-500">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#B0926A] block font-semibold mb-2">
                    {person.role}
                  </span>
                  <h4 className="text-[20px] font-normal text-black tracking-tight mb-2">
                    {person.name}
                  </h4>
                  <span className="text-[11px] uppercase text-[#757575] font-normal block opacity-50 group-hover:text-[#03A10E] transition-colors duration-300">
                    ID: NGYAR-{person.name.substring(0, 3).toUpperCase()}
                  </span>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07. MINIMALIST CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}
        className="py-28 px-[6vw] md:px-12 lg:px-24 bg-white text-center flex flex-col items-center transform-gpu"
      >
        <div className="max-w-2xl mx-auto space-y-10">
          <motion.p variants={fadeInUp} className="text-[16px] text-[#757575] font-normal leading-relaxed">
            Review structural bylaws, official asset registration guidelines, financial indemnity rules, 
            and foundational protocols outlined in the signed legal registry.
          </motion.p>
          
          <motion.a
            variants={fadeInUp}
            href="https://res.cloudinary.com/your-cloud/raw/upload/v1/constitution.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between border border-[#B0926A] text-black px-8 py-4 text-[13px] uppercase tracking-[0.15em] font-semibold hover:bg-[#03A10E] hover:border-[#03A10E] hover:text-white transition-all duration-300 w-full max-w-[340px] group"
          >
            <span>Download Constitution</span>
            <span className="leading-none flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300">
                <path d="M12 5v14" />
                <path d="M19 12l-7 7-7-7" />
              </svg>
            </span>
          </motion.a>
        </div>
      </motion.section>
      
    </div>
  );
}