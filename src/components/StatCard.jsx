import { motion } from "framer-motion";

export default function StatCard({
  icon,
  label,
  value,
  color = "bg-[#333333]",
  loading = false,
  suffix = "",
  trend = null, // optional: { value: "+12%", positive: true }
}) {
  const displayValue =
    typeof value === "number" ? value.toLocaleString() : value ?? "—";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative text-white p-5 rounded-xl shadow-md overflow-hidden ${color}`}
    >
      <div className="flex items-start justify-between">
        <div className="text-3xl mb-3 opacity-90">{icon}</div>

        {trend && !loading && (
          <span
            className={`text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full ${
              trend.positive
                ? "bg-white/20 text-white"
                : "bg-red-500/30 text-white"
            }`}
          >
            {trend.value}
          </span>
        )}
      </div>

      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-7 w-20 bg-white/20 rounded" />
          <div className="h-3 w-28 bg-white/10 rounded" />
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold tracking-tight">
            {displayValue}
            {suffix}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-2">
            {label}
          </div>
        </>
      )}
    </motion.div>
  );
}