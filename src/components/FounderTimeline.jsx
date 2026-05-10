import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "../constants/copy";
import { founderChapters } from "../constants/data";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

const colorMap = {
  amber:   { border: "border-amber-400/30",   bg: "bg-amber-400/10",   text: "text-amber-300",   dot: "bg-amber-400",   number: "text-amber-300",  quote: "border-amber-400/40"   },
  violet:  { border: "border-violet-400/30",  bg: "bg-violet-400/10",  text: "text-violet-300",  dot: "bg-violet-400",  number: "text-violet-300", quote: "border-violet-400/40"  },
  emerald: { border: "border-emerald-400/30", bg: "bg-emerald-400/10", text: "text-emerald-300", dot: "bg-emerald-400", number: "text-emerald-300",quote: "border-emerald-400/40" },
};

function Chapter({ chapter, index, lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const c = colorMap[chapter.color];

  const heading  = lang === "en" ? chapter.heading   : chapter.esHeading;
  const location = lang === "en" ? chapter.location  : chapter.esLocation;
  const body     = lang === "en" ? chapter.body      : chapter.esBody;
  const quote    = lang === "en" ? chapter.pullQuote : chapter.esPullQuote;

  return (
    <div ref={ref} className="relative grid lg:grid-cols-2 lg:gap-16">
      {/* Desktop: timeline dot on the center line */}
      <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 lg:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.2 }}
          className={`h-4 w-4 rounded-full ring-4 ring-[#060507] ${c.dot}`}
        />
      </div>

      {/* Card — alternates sides on desktop */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative rounded-[2rem] border ${c.border} bg-white/[0.04] p-7 backdrop-blur lg:p-9 ${
          isEven ? "lg:col-start-1" : "lg:col-start-2"
        }`}
      >
        {/* Ambient glow */}
        <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-15 ${c.dot}`} />

        <div className="relative">
          {/* Chapter number */}
          <motion.p
            initial={{ scale: 0.4, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.05 }}
            className={`mb-3 font-black text-6xl leading-none ${c.number} opacity-20`}
          >
            {chapter.id}
          </motion.p>

          {/* Location */}
          <div className={`mb-3 inline-flex items-center gap-2 rounded-full border ${c.border} ${c.bg} px-3 py-1`}>
            <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{location}</span>
          </div>

          {/* Heading */}
          <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">{heading}</h3>

          {/* Body */}
          <p className="mt-4 text-base leading-8 text-stone-400">{body}</p>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`mt-6 border-l-2 ${c.quote} pl-4`}
          >
            <p className={`text-sm italic leading-7 font-medium ${c.text}`}>"{quote}"</p>
          </motion.blockquote>
        </div>
      </motion.div>
    </div>
  );
}

export default function FounderTimeline({ lang }) {
  const t = copy[lang];

  return (
    <section id="founder" className="relative overflow-hidden px-5 py-32 lg:px-8">
      <GradientOrb className="left-[-10rem] top-1/3 h-[40rem] w-[40rem] bg-violet-600/6" />
      <GradientOrb className="right-[-10rem] top-2/3 h-[30rem] w-[30rem] bg-amber-500/6" />

      <div className="mx-auto max-w-5xl">
        {/* Section intro */}
        <div className="mb-20 text-center">
          <SectionLabel>{t.founderSectionLabel}</SectionLabel>
          <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">{t.founderTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-stone-400">{t.founderSubtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
          />

          <div className="grid gap-14 lg:gap-20">
            {founderChapters.map((chapter, index) => (
              <Chapter key={chapter.id} chapter={chapter} index={index} lang={lang} />
            ))}
          </div>
        </div>

        {/* Closing founding statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[2.5rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/8 to-violet-500/5 p-10 text-center"
        >
          <p className="text-2xl font-black italic text-amber-200 sm:text-3xl lg:text-4xl">
            "{t.founderClosingQuote}"
          </p>
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-amber-400/40" />
            <p className="text-sm font-bold uppercase tracking-widest text-stone-500">{t.founderByline}</p>
            <div className="h-px w-14 bg-amber-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
