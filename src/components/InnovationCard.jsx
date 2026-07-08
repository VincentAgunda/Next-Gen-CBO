import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InnovationCard({ title, description, innovator, image, status = "Active Prototype" }) {
  // Determine telemetry dot color based on status string
  const isCompleted = status?.toLowerCase().includes("complete") || status?.toLowerCase().includes("deployed");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col lg:flex-row w-full max-w-[1280px] mx-auto bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-500 overflow-hidden"
    >
      {/* =========================================================================
          LEFT COLUMN: Visual Viewport & Telemetry Overlays
      ========================================================================== */}
      <div className="lg:w-[48%] relative min-h-[340px] lg:min-h-[480px] bg-[#F4F4F4] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
        
        {/* Top Telemetry Bar */}
        <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-transparent pointer-events-none">
          <div className="flex items-center space-x-2.5 bg-[#111111]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10">
            {/* Live Status Indicator Dot */}
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isCompleted ? 'bg-[#38BDF8]' : 'bg-[#22C55E]'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isCompleted ? 'bg-[#38BDF8]' : 'bg-[#22C55E]'}`}></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white font-medium">
              {status}
            </span>
          </div>

          <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest hidden sm:inline-block">
            [ FIELD TEST ]
          </span>
        </div>

        {/* Dynamic Image - Grayscale removed for clarity */}
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#111111] flex items-center justify-center">
            <div className="w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <span className="text-xs font-mono text-white/40 tracking-[0.3em] uppercase">
              No Visual Telemetry Available
            </span>
          </div>
        )}

        {/* Bottom Technical Figure Label */}
        <div className="absolute bottom-4 left-4 z-10 bg-[#FFFFFF]/95 backdrop-blur-sm px-3 py-1 text-[11px] font-mono tracking-wider text-[#111111] border border-[#E5E5E5] shadow-2xl">
          FIG. // R&D PROTOCOL
        </div>
      </div>

      {/* =========================================================================
          RIGHT COLUMN: Polestar Editorial Specs & Copy
      ========================================================================== */}
      <div className="lg:w-[52%] flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 bg-[#FFFFFF]">
        
        <div>
          {/* Technical Eyebrow / Innovator Attribution */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[1px] w-8 bg-[#111111]"></span>
            <span className="text-[#707070] font-mono text-[11px] uppercase tracking-[0.25em] font-medium block">
              LEAD INVESTIGATOR: <span className="text-[#111111] font-semibold">{innovator || "Research Team"}</span>
            </span>
          </div>

          {/* Hyper-Scaled Heading */}
          <h3 className="text-[#111111] font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.1] mb-6 tracking-tight group-hover:text-[#555555] transition-colors duration-300">
            {title}
          </h3>

          {/* High-Legibility Editorial Copy */}
          <p className="text-[#555555] font-sans text-base lg:text-lg leading-[1.75] font-light mb-10 max-w-xl">
            {description}
          </p>
        </div>

        {/* =========================================================================
            CTA: Polestar Vector Arrow Action Link
        ========================================================================== */}
        <div className="pt-6 border-t border-[#F0F0F0] flex items-center justify-between">
          <Link 
            to="/innovation-hub"
            className="inline-flex items-center space-x-4 group/btn py-2 text-xs font-mono uppercase tracking-[0.25em] text-[#111111] font-medium"
          >
            <span className="border-b-[1.5px] border-[#111111] pb-1 group-hover/btn:border-[#E08D3C] group-hover/btn:text-[#E08D3C] transition-all duration-300">
              Examine Telemetry & Specs
            </span>
            {/* Polestar-Style 45-Degree North-East Arrow */}
            <span className="text-lg transform group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 text-[#111111] group-hover/btn:text-[#E08D3C]">
              ↗
            </span>
          </Link>

          {/* Subtle System Index */}
          <span className="text-[11px] font-mono text-[#A0A0A0] hidden sm:inline-block">
            SYS // MKU-KENYA
          </span>
        </div>

      </div>
    </motion.div>
  );
}