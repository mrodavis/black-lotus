import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { copy } from "../constants/copy";
import GradientOrb from "./shared/GradientOrb";

export default function HeroSection({ lang }) {
  const t = copy[lang];

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-8 pt-16 lg:px-8 lg:pb-12 lg:pt-24">
      <GradientOrb className="left-[-15rem] top-0 h-[40rem] w-[40rem] bg-amber-500/10" />
      <GradientOrb className="right-[-10rem] top-10 h-[35rem] w-[35rem] bg-violet-600/10" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Copy */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-200"
          >
            <ShieldCheck className="h-4 w-4" /> {t.badge}
          </motion.div>

          <h1 className="font-black leading-[0.92] tracking-tight">
            {t.heroTitle.map((line, i) => (
              <motion.span
                key={i}
                className={`block text-5xl sm:text-7xl lg:text-8xl ${i === 2 ? "text-amber-300" : "text-white"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-8 text-stone-400 sm:text-xl"
          >
            {t.heroText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#donate"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-8 py-4 font-black text-black shadow-xl shadow-amber-950/30 transition-all hover:scale-[1.02] hover:bg-white"
            >
              {t.primaryCta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-white transition-all hover:border-amber-300/50 hover:text-amber-200"
            >
              {t.secondaryCta} <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Impact OS Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-amber-400/20 via-violet-500/10 to-transparent blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b0a0f]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Impact OS · Live</p>
                  <p className="mt-1 text-xl font-black">Participant Journey</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Active</span>
                </div>
              </div>

              <div className="grid gap-3 p-5">
                {[
                  { step: "Onboard",         pct: 100, color: "from-amber-300 to-amber-500"    },
                  { step: "Assess Skills",   pct: 96,  color: "from-amber-300 to-amber-500"    },
                  { step: "Assign Training", pct: 88,  color: "from-violet-400 to-purple-600"  },
                  { step: "Match Job",       pct: 75,  color: "from-violet-400 to-purple-600"  },
                  { step: "Pair Mentor",     pct: 70,  color: "from-emerald-400 to-teal-600"   },
                  { step: "Report Impact",   pct: 64,  color: "from-emerald-400 to-teal-600"   },
                ].map(({ step, pct, color }, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 text-xs font-black text-black">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex items-center justify-between">
                        <p className="text-sm font-bold">{step}</p>
                        <span className="text-xs text-stone-500">{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06]">
                        <motion.div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07]">
                {[["247", "Active"], ["94%", "On Track"], ["18", "Placed"]].map(([v, l]) => (
                  <div key={l} className="py-4 text-center">
                    <p className="text-lg font-black text-amber-200">{v}</p>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
