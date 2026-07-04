import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InnovationCard({ title, description, innovator, image, status }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto bg-white"
    >
      {/* Image Side (Left) */}
      <div className="lg:w-[45%] relative min-h-[300px] lg:min-h-[450px]">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#e5e5e5]"></div>
        )}
      </div>

      {/* Text Side (Right) */}
      <div className="lg:w-[55%] flex flex-col justify-center p-10 lg:p-16 xl:p-24 items-start">
        {/* Eyebrow Text */}
        <span className="text-[#c2b4a3] font-sans text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-6 block font-medium">
          {status} • {innovator}
        </span>

        {/* Heading */}
        <h3 className="text-[#1a1a1a] font-sans text-3xl md:text-4xl lg:text-[2.5rem] font-normal leading-[1.2] mb-6 tracking-tight">
          {title}
        </h3>

        {/* Body Text  */}
        <p className="text-[#757575] font-sans text-[15px] lg:text-[16px] leading-[1.8] font-light mb-12 max-w-lg">
          {description}
        </p>

        {/* Button CTA routed to Innovation Hub */}
        <div>
          <Link 
            to="/innovation-hub"
            className="inline-block border border-[#e0e0e0] bg-transparent text-[#333333] px-8 py-4 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300"
          >
            Explore Innovation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}