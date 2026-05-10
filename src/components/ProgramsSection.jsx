import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "../constants/copy";
import { programs } from "../constants/data";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

function ProgramCard({ program, index, lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const title = lang === "en" ? program.title : program.esTitle;
  const text  = lang === "en" ? program.text  : program.esText;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${program.color} opacity-10 blur-3xl`} />
      </div>
      <div className="relative">
        <div className={`mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${program.color} shadow-lg`}>
          <program.icon className="h-7 w-7 text-white" />
        </div>
        <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-500">
          {program.tag}
        </span>
        <h3 className="mt-2 text-xl font-black">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-400">{text}</p>
      </div>
    </motion.div>
  );
}

export default function ProgramsSection({ lang }) {
  const t = copy[lang];

  return (
    <section id="programs" className="relative px-5 py-24 lg:px-8">
      <GradientOrb className="left-[-5rem] top-1/2 h-[25rem] w-[25rem] bg-amber-500/8" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Programs</SectionLabel>
        <h2 className="text-5xl font-black tracking-tight sm:text-6xl">{t.programsTitle}</h2>
        <p className="mt-3 text-xl text-stone-500">{t.programsSubtitle}</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
