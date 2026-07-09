import { researchPublications } from "../data/research";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export default function ResearchCenter() {
  const [collabMsg, setCollabMsg] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onCollaborate = async (data) => {
    await addDoc(collection(db, "research_collaborations"), { ...data, createdAt: new Date() });
    setCollabMsg("Collaboration request successfully filed.");
    reset();
  };

  return (
    <div className="font-sans text-black bg-white antialiased selection:bg-black selection:text-white overflow-hidden min-h-screen">
      
      {/* TYPOGRAPHIC HERO */}
      <header className="pt-40 pb-28 px-[6vw] md:px-12 lg:px-24 max-w-[1440px] mx-auto border-b border-[#E5E5E5]">
        <span className="block text-[#757575] text-[13px] font-normal mb-8 uppercase tracking-wider">
          03 / Empirical Frameworks
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[0.95] tracking-tight text-black mb-12">
          Research & <br />
          Publications.
        </h1>
        <p className="max-w-3xl text-black opacity-85 font-normal text-[16px] md:text-[18px] leading-relaxed">
          Pursuant to our statutory charter, NGYAR coordinates evidence-based insights and scientific community trials to generate scalable answers for regional socioeconomic ecosystems.
        </p>
      </header>

      {/* PUBLICATIONS LIST (Structural Data Layout) */}
      <section className="py-28 px-[6vw] md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="mb-16">
            <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
              Archives
            </span>
            <h2 className="text-4xl md:text-[52px] font-normal text-black tracking-tight">
              Academic Submissions
            </h2>
          </div>

          <div className="w-full border-t border-black">
            {researchPublications.map((pub) => (
              <a
                key={pub.id}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-10 lg:py-12 flex flex-col lg:flex-row lg:items-start justify-between border-b border-[#D9D9D9] gap-6 lg:gap-12 hover:bg-[#f6f6f6] transition-colors duration-300 group px-4 -mx-4"
              >
                <div className="flex flex-col gap-2 lg:w-1/4 pt-1">
                  <span className="text-[13px] text-[#757575] uppercase tracking-wider font-normal block">
                    {pub.category}
                  </span>
                  <span className="text-[13px] text-black font-normal opacity-50 block">
                    Vol. {pub.year}
                  </span>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl lg:text-[32px] font-normal text-black tracking-tight leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">
                    {pub.title}
                  </h3>
                  <p className="text-[16px] text-black opacity-75 font-normal leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                <div className="lg:w-1/4 flex justify-start lg:justify-end items-start pt-2">
                  <span className="inline-flex items-center gap-2 text-[14px] text-black font-normal opacity-50 group-hover:opacity-100 transition-opacity">
                    Review Document 
                    <span className="flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION FORM */}
      <section className="py-28 bg-[#f6f6f6] px-[6vw] md:px-12 lg:px-24 border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-[#757575] text-[13px] uppercase tracking-wider font-normal block mb-4">
              Institutional Alignment
            </span>
            <h3 className="text-4xl lg:text-[52px] font-normal text-black tracking-tight leading-[1.05] mb-8">
              Propose a Research <br /> Collaboration
            </h3>
            <p className="text-[16px] text-black opacity-85 font-normal leading-relaxed">
              We actively partner with universities, legacy organizations, and development groups to accelerate climate-smart technologies. Outline your proposed scientific methodology or project objective in the registry provided.
            </p>
          </div>

          <div className="lg:col-span-7 pt-4">
            <form onSubmit={handleSubmit(onCollaborate)} className="space-y-8 border-t border-[#D9D9D9] pt-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <input 
                  {...register("name")} 
                  placeholder="Lead Researcher / Entity Name" 
                  required
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
                <input 
                  {...register("institution")} 
                  placeholder="Affiliated Institution" 
                  required
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
                />
              </div>
              <input 
                {...register("email")} 
                type="email" 
                placeholder="Institutional Email Address" 
                required
                className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black rounded-none" 
              />
              <textarea 
                {...register("proposal")} 
                placeholder="Methodology Outline & Scientific Objective..." 
                rows="4"
                required
                className="w-full bg-transparent border-b border-[#D9D9D9] py-4 text-[16px] focus:outline-none focus:border-black transition-colors font-normal placeholder:text-[#757575] text-black resize-none rounded-none" 
              />
              
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button className="w-full sm:w-auto inline-flex items-center justify-between border border-black text-black px-10 py-5 text-[15px] font-normal hover:bg-black hover:text-white transition-colors duration-300 group">
                  <span>Submit Proposal</span>
                  <span className="ml-8 leading-none flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </button>
                {collabMsg && (
                  <p className="text-[14px] text-[#757575] font-normal">{collabMsg}</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}