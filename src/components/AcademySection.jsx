import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { copy } from "../constants/copy";
import { academyTracks, academyFoundations, mailto } from "../constants/data";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

export default function AcademySection({ lang }) {
  const t = copy[lang];

  return (
    <section id="academy" className="relative scroll-mt-24 px-5 py-24 lg:px-8">
      <GradientOrb className="right-[-8rem] top-10 h-[28rem] w-[28rem] bg-amber-500/10" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>{t.academyLabel}</SectionLabel>
            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">{t.academyTitle}</h2>
            <p className="mt-5 text-xl leading-8 text-stone-400">{t.academySubtitle}</p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200 lg:self-auto">
            <span className="h-2 w-2 rounded-full bg-amber-300" /> {t.academyStatus}
          </span>
        </div>

        <p className="mt-14 text-xs font-bold uppercase tracking-[0.3em] text-stone-500">{t.academyTracksLabel}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {academyTracks.map((track, i) => (
            <motion.article
              key={track.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-amber-300/30"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 to-amber-500 text-sm font-black text-black">
                  {track.code}
                </span>
                <h3 className="text-2xl font-black">{lang === "en" ? track.title : track.es}</h3>
              </div>
              <ol className="mt-6 grid gap-2.5">
                {track.modules.map((m, j) => (
                  <li key={m} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm text-stone-300">
                    <span className="text-xs font-black tabular-nums text-amber-300">M{j + 1}</span>
                    {m}
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7 lg:p-9">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="h-5 w-5 text-amber-300" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">{t.academyFoundationsLabel}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {academyFoundations.map((f) => (
              <span key={f.code} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/30 py-2 pl-2 pr-4 text-sm font-semibold text-stone-200">
                <span className="grid h-7 min-w-7 place-items-center rounded-full bg-white/10 px-1.5 text-[10px] font-black text-amber-200">{f.code}</span>
                {lang === "en" ? f.title : f.es}
              </span>
            ))}
          </div>
          <a
            href={mailto("Black Lotus Academy enrollment")}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-amber-300 px-7 py-3.5 font-black text-black transition hover:bg-white"
          >
            {t.academyCta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
