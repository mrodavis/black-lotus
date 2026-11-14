import { motion } from "framer-motion";
import { copy } from "../constants/copy";
import { lotusLevels, donorLevels } from "../constants/data";
import SectionLabel from "./shared/SectionLabel";

export default function LotusPathSection({ lang }) {
  const t = copy[lang];

  return (
    <section id="lotus-path" className="relative scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>{t.lotusLabel}</SectionLabel>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl">{t.lotusTitle}</h2>
          <p className="mt-5 text-xl leading-8 text-stone-400">{t.lotusSubtitle}</p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lotusLevels.map((lvl, i) => (
            <motion.div
              key={lvl.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <span className="mt-0.5 h-10 w-10 shrink-0 rounded-full border border-white/25 shadow-inner" style={{ background: lvl.hex }} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="text-lg font-black">{lvl.name} Lotus</p>
                  <p className="text-sm font-bold tabular-nums text-amber-200">{lvl.band}</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-stone-400">{lvl.roles}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent p-7 lg:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">{t.donorTitle}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {donorLevels.map((d) => (
              <div key={d.name} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                <p className="text-sm font-black">{d.name}</p>
                <p className="mt-1 text-xl font-black text-amber-200">{d.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
