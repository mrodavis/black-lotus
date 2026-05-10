import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap, HeartHandshake, BookOpen } from "lucide-react";
import { copy } from "../constants/copy";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

/* ── Pure calculation functions ── */
function calculateImpact(amount) {
  const scholarships    = Math.floor(amount / 5000);
  const r1              = amount % 5000;
  const mentorshipPairs = Math.floor(r1 / 1500);
  const r2              = r1 % 1500;
  const certifications  = Math.floor(r2 / 750);
  const r3              = r2 % 750;
  const trainingSeats   = Math.floor(r3 / 250);
  return { scholarships, mentorshipPairs, certifications, trainingSeats };
}

function progressToScholarship(amount) {
  const mod = amount % 5000;
  return mod === 0 && amount >= 5000 ? 100 : (mod / 5000) * 100;
}

/* ── Animated number that smoothly transitions between values ── */
function ImpactNumber({ value }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current === value) return;
    const start = prevRef.current;
    const end = value;
    let rafId;
    let startTime;
    const duration = 400;

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (p < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        prevRef.current = end;
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return <>{display}</>;
}

/* ── Impact card ── */
const cardConfig = [
  { key: "trainingSeats",  labelKey: "trainingSeats",  icon: GraduationCap, color: "amber",   border: "border-amber-400/30",   bg: "bg-amber-400/10",   text: "text-amber-300"   },
  { key: "certifications", labelKey: "certifications", icon: Award,         color: "violet",  border: "border-violet-400/30",  bg: "bg-violet-400/10",  text: "text-violet-300"  },
  { key: "mentorshipPairs",labelKey: "mentorshipPairs",icon: HeartHandshake,color: "emerald", border: "border-emerald-400/30", bg: "bg-emerald-400/10", text: "text-emerald-300" },
  { key: "scholarships",   labelKey: "fullScholarships",icon: BookOpen,     color: "amber",   border: "border-amber-400/40",   bg: "bg-amber-400/15",   text: "text-amber-200"   },
];

function ImpactCard({ config, count, label }) {
  const { icon: Icon, border, bg, text } = config;
  const active = count > 0;

  return (
    <div className={`flex flex-col items-center rounded-[1.75rem] border p-6 text-center transition-all duration-300 ${
      active ? `${border} ${bg}` : "border-white/10 bg-white/[0.03] opacity-30"
    }`}>
      <div className={`mb-3 grid h-12 w-12 place-items-center rounded-2xl ${active ? bg : "bg-white/5"}`}>
        <Icon className={`h-6 w-6 ${active ? text : "text-stone-600"}`} />
      </div>
      <p className={`text-4xl font-black tabular-nums ${active ? text : "text-stone-600"}`}>
        <ImpactNumber value={count} />
      </p>
      <p className={`mt-2 text-xs font-bold uppercase tracking-wider ${active ? "text-stone-300" : "text-stone-600"}`}>
        {label}
      </p>
    </div>
  );
}

const PRESETS = [250, 750, 1500, 5000, 10000];

export default function SponsorCalculator({ lang }) {
  const [amount, setAmount] = useState(1000);
  const t = copy[lang];

  const impact   = calculateImpact(amount);
  const progress = progressToScholarship(amount);
  const isFullScholarship = amount >= 5000 && amount % 5000 === 0;
  const nextThreshold = Math.ceil(Math.max(amount + 1, 5001) / 5000) * 5000;
  const amountAway = nextThreshold - amount;

  return (
    <section id="donate" className="relative px-5 py-24 lg:px-8">
      <GradientOrb className="bottom-0 left-0 h-[30rem] w-[30rem] bg-amber-400/8" />
      <GradientOrb className="right-[-5rem] top-1/4 h-[25rem] w-[25rem] bg-violet-600/6" />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel>{t.calculatorLabel}</SectionLabel>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
            <span className="text-stone-300">{t.calculatorTitle}</span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              {t.calculatorTitle2}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-stone-400">{t.calculatorSubtitle}</p>
        </div>

        {/* Main calculator card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur lg:p-12">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-amber-400/8 blur-3xl" />
          <div className="relative">

            {/* Contribution display */}
            <div className="mb-6 flex items-baseline justify-between">
              <p className="text-sm font-bold uppercase tracking-widest text-stone-500">{t.yourContribution}</p>
              <motion.p
                key={Math.round(amount / 25)}
                initial={{ scale: 0.9, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="text-4xl font-black text-amber-200 tabular-nums"
              >
                ${amount.toLocaleString()}
              </motion.p>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={25}
              max={10000}
              step={25}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ accentColor: "#fcd34d" }}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10"
            />

            {/* Preset buttons */}
            <div className="mt-5 flex flex-wrap gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition-all ${
                    amount === preset
                      ? "border-amber-300 bg-amber-300 text-black shadow-lg shadow-amber-900/30"
                      : "border-white/15 text-stone-400 hover:border-amber-400/40 hover:text-amber-200"
                  }`}
                >
                  ${preset >= 1000 ? `${preset / 1000}K` : preset}
                </button>
              ))}
            </div>

            {/* Impact breakdown */}
            <div className="mt-10">
              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-stone-500">{t.impactBreakdown}</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cardConfig.map((config) => (
                  <ImpactCard
                    key={config.key}
                    config={config}
                    count={impact[config.key]}
                    label={t[config.labelKey]}
                  />
                ))}
              </div>
            </div>

            {/* Scholarship progress */}
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <p className="font-bold text-stone-300">
                  {isFullScholarship ? (
                    <span className="text-amber-300">{t.scholarshipFunded}</span>
                  ) : (
                    <span>${amountAway.toLocaleString()} {t.awayFromScholarship}</span>
                  )}
                </p>
                <span className="font-black tabular-nums text-amber-300">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@blacklotus.org"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-black text-black shadow-xl shadow-amber-950/30 transition-all hover:scale-[1.02] hover:bg-white"
              >
                {t.sponsorCta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:partnerships@blacklotus.org"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-bold transition-all hover:border-amber-300/40 hover:text-amber-200"
              >
                {t.partnerCta}
              </a>
            </div>

            <p className="mt-5 text-xs text-stone-600">{t.secureNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
