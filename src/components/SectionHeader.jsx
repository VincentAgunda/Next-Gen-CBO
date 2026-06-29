export default function SectionHeader({ title, subtitle, eyebrow, center = true, dark = false }) {
  return (
    <div className={`mb-20 ${center ? "text-center" : ""} flex flex-col ${center ? "items-center" : "items-start"}`}>
      {eyebrow && (
        <span className="font-sans text-[#b8a898] text-[9px] md:text-[10px] uppercase tracking-[0.35em] mb-5 font-medium">
          {eyebrow}
        </span>
      )}
      <h2 
        className={`text-4xl md:text-6xl font-sans font-light mb-8 tracking-tight ${dark ? "text-white" : "text-[#111]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-sm md:text-base max-w-2xl leading-relaxed font-light ${dark ? "text-gray-300" : "text-[#666]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}