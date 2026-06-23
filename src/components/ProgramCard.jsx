import { motion } from "framer-motion";

export default function ProgramCard({ title, description, image }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white group cursor-pointer border border-transparent hover:border-gray-100 transition-all font-sans"
    >
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div className="pt-6 pb-4 px-2">
        <h3 className="text-2xl font-sans font-light mb-3 text-[#333333]">
          {title}
        </h3>
        <p className="font-sans text-sm text-[#666666] font-light leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}