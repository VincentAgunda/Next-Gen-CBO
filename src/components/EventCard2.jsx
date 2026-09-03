import { motion } from "framer-motion"; 
import { Link } from "react-router-dom"; 
 
export default function EventCard({ title, date, venue, description, id }) { 
  return ( 
    <motion.div 
      whileHover={{ scale: 1.01, y: -4 }} 
      className="bg-[#d2b79b] border border-[#d2b79b] p-8 flex flex-col hover:bg-[#B0926A] hover:border-[#B0926A] hover:shadow-xl transition-all duration-500" 
    > 
      <div className="flex justify-between items-start mb-6 border-b border-white/20 pb-4 font-heading"> 
        {/* Updated date color to match your beige/gold accents */} 
        <div className="text-[#d2b79b] text-[10px] uppercase tracking-[0.2em] font-medium"> 
          {date} 
        </div> 
        {/* Updated venue color to a slightly faded white for contrast */} 
        <div className="text-white/70 text-[10px] uppercase tracking-[0.2em]"> 
          {venue} 
        </div> 
      </div> 
       
      {/* Updated title to white */} 
      <h3 className="text-2xl font-heading font-normal mb-4 text-white"> 
        {title} 
      </h3> 
       
      {/* Updated description to highly readable off-white */} 
      <p className="font-sans text-sm text-white/90 font-light leading-relaxed mb-8 flex-grow"> 
        {description} 
      </p> 
       
      <Link 
        to={`/events?register=${id}`} 
        className="font-heading text-xs uppercase tracking-[0.2em] text-white border-b border-white pb-1 w-max hover:text-[#d2b79b] hover:border-[#d2b79b] transition-colors font-medium" 
      > 
        Register Now 
      </Link> 
    </motion.div> 
  ); 
} 