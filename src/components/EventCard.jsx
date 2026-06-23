import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventCard({ title, date, venue, description, id }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white border border-gray-200 p-8 flex flex-col hover:border-[#b8a898] transition-colors duration-500"
    >
      <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4 font-heading">
        <div className="text-[#b8a898] text-[10px] uppercase tracking-[0.2em] font-medium">
          {date}
        </div>
        <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
          {venue}
        </div>
      </div>
      
      <h3 className="text-2xl font-heading font-normal mb-4 text-[#333333]">
        {title}
      </h3>
      
      <p className="font-sans text-sm text-[#666666] font-light leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <Link
        to={`/events?register=${id}`}
        className="font-heading text-xs uppercase tracking-[0.2em] text-[#333333] border-b border-[#333333] pb-1 w-max hover:text-[#b8a898] hover:border-[#b8a898] transition-colors font-medium"
      >
        Register Now
      </Link>
    </motion.div>
  );
}