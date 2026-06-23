import { motion } from "framer-motion";

export default function StatCard({ icon, label, value, color = "bg-brand-primary" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`text-white p-5 rounded-xl shadow ${color}`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="opacity-90">{label}</div>
    </motion.div>
  );
}