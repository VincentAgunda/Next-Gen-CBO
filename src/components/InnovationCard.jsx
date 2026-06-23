import { motion } from "framer-motion";

export default function InnovationCard({ title, description, innovator, image, status }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="bg-transparent border-t border-gray-300 pt-6 pb-8 font-sans"
    >
      {image && (
        <div className="overflow-hidden mb-6">
          <img src={image} alt={title} className="h-48 w-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
        </div>
      )}
      <span className="font-sans text-[#b8a898] text-[10px] uppercase tracking-[0.2em] block mb-2 font-medium">
        {status}
      </span>
      <h3 className="text-2xl font-sans font-light mb-2 text-[#333333]">
        {title}
      </h3>
      <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-4 font-light">By {innovator}</p>
      <p className="font-sans text-sm text-[#666666] font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}