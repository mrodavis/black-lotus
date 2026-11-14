import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, CheckCircle2 } from "lucide-react";
import { copy } from "../constants/copy";
import { measures, mailto } from "../constants/data";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

export default function ImpactSection({ lang }) {
  const t = copy[lang];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="impact" ref={ref} className="relative px-5 py-24 lg:px-8">
      <GradientOrb className="left-1/2 top-0 h-[20rem] w-[50rem] -translate-x-1/2 bg-amber-400/8" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <SectionLabel>Impact</SectionLabel>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl">{t.impactTitle}</h2>
          <p className="mt-3 text-xl text-stone-500">{t.impactSubtitle}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {measures.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-[1.5rem] border border-amber-400/15 bg-gradient-to-br from-amber-400/8 via-white/[0.03] to-transparent p-6"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-amber-300" />
              <p className="text-lg font-bold">{lang === "en" ? m.label : m.es}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.03] p-7 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-400/15">
              <BarChart3 className="h-6 w-6 text-violet-300" />
            </div>
            <div>
              <p className="text-lg font-black">{lang === "en" ? "Funder reporting, built in" : "Reportes para donantes, integrados"}</p>
              <p className="mt-0.5 text-sm text-stone-400">{lang === "en" ? "Founding partners get outcome reports as soon as the first cohort starts." : "Los aliados fundadores reciben reportes de resultados desde la primera cohorte."}</p>
            </div>
          </div>
          <a
            href={mailto("Funder reporting")}
            className="shrink-0 whitespace-nowrap rounded-full border border-white/15 px-6 py-3 text-sm font-bold transition hover:border-amber-300/40 hover:text-amber-200"
          >
            {lang === "en" ? "Talk to us →" : "Hablemos →"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
