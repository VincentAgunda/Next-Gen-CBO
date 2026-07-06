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
    <div className="bg-white min-h-screen py-32 px-6 md:px-12 lg:px-24 antialiased text-neutral-800 font-sans tracking-wide">
      
      {/* Header block */}
      <header className="max-w-4xl mx-auto text-center space-y-6 mb-32">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#B0926A] font-medium block">
          Empirical Frameworks
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-900 leading-tight">
          Research Center & Publications
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-base leading-relaxed pt-2">
          Pursuant to our statutory charter, NGYAR coordinates evidence-based insights and scientific community trials to generate scalable answers for regional socioeconomic ecosystems.
        </p>
      </header>

      {/* Publications Grid modeled as structural archival listings */}
      <section className="max-w-6xl mx-auto mb-40 space-y-8">
        <div className="border-b border-neutral-200 pb-4">
          <h2 className="text-xs uppercase tracking-[0.25em] font-medium text-neutral-900">Archived Academic Publications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {researchPublications.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-100 p-8 bg-white flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all duration-500 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                  <span>{pub.category}</span>
                  <span>{pub.year}</span>
                </div>
                <h3 className="text-lg font-serif font-normal text-neutral-900 group-hover:text-[#B0926A] transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {pub.description}
                </p>
              </div>
              <span className="inline-block text-[10px] uppercase tracking-wider text-neutral-900 font-medium border-b border-neutral-900 w-max pb-0.5">
                Review Document →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Clean Structured Collaboration Form Container */}
      <section className="max-w-3xl mx-auto border border-neutral-100 p-10 md:p-16 bg-white shadow-sm">
        <div className="space-y-3 mb-12 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[#B0926A] block font-medium">Institutional Alignment</span>
          <h3 className="text-2xl font-serif font-light text-neutral-900">Propose a Research Collaboration</h3>
          <p className="text-xs text-neutral-400 font-light max-w-md mx-auto">We partner with universities, legacy organizations, and development groups to accelerate climate-smart technologies.</p>
        </div>

        <form onSubmit={handleSubmit(onCollaborate)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input 
              {...register("name")} 
              placeholder="Your Name" 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
            <input 
              {...register("institution")} 
              placeholder="Affiliated Institution" 
              className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
            />
          </div>
          <input 
            {...register("email")} 
            type="email" 
            placeholder="Institutional Email Address" 
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 rounded-none" 
          />
          <textarea 
            {...register("proposal")} 
            placeholder="Outline of proposed scientific methodology or project objective..." 
            rows="4"
            className="w-full bg-white border-b border-neutral-200 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors font-light placeholder:text-neutral-300 text-neutral-800 resize-none rounded-none" 
          />
          
          <div className="text-center pt-4">
            <button className="border border-neutral-900 text-neutral-900 px-12 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-neutral-900 hover:text-white transition-all duration-500 ease-out rounded-none">
              Submit Proposal
            </button>
            {collabMsg && (
              <p className="text-xs text-neutral-500 font-mono tracking-wider mt-4">{collabMsg}</p>
            )}
          </div>
        </form>
      </section>

    </div>
  );
}