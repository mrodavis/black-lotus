import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "../constants/copy";

export default function StatsSection({ lang }) {
  const t = copy[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.pillars.map(([title, sub], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:border-amber-400/30"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300/80">0{i + 1}</p>
            <p className="mt-3 text-2xl font-black tracking-tight text-white lg:text-3xl">{title}</p>
            <p className="mt-2 text-sm text-stone-400">{sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
