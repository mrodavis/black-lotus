import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "../constants/copy";
import { useCountUp } from "../hooks/useCountUp";

function AnimatedStat({ value, label, inView }) {
  const display = useCountUp(value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:border-amber-400/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="text-4xl font-black tracking-tight text-amber-200 lg:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-stone-400">{label}</p>
    </motion.div>
  );
}

export default function StatsSection({ lang }) {
  const t = copy[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map(([value, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <AnimatedStat value={value} label={label} inView={inView} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
