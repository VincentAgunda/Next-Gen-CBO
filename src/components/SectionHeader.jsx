export default function SectionHeader({ title, subtitle, eyebrow, center = true, dark = false }) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""} flex flex-col ${center ? "items-center" : "items-start"}`}>
      {eyebrow && (
        <span className="font-sans text-[#b8a898] text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 font-medium">
          {eyebrow}
        </span>
      )}
      <h2 
        className={`text-3xl md:text-5xl font-sans font-light mb-6 tracking-wide ${dark ? "text-white" : "text-[#333333]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-sm md:text-base max-w-2xl leading-[1.8] font-light ${dark ? "text-gray-300" : "text-[#666666]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}