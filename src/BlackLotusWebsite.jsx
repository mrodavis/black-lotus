import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Briefcase, CheckCircle2, ChevronRight, Globe2,
  GraduationCap, HandHeart, HeartHandshake, Languages, LockKeyhole,
  Menu, ShieldCheck, Sparkles, Users, X, Zap, Star, TrendingUp,
  Award, BookOpen, Heart, Target, MapPin, BarChart3,
} from "lucide-react";

/* ─── COPY ─── */
const copy = {
  en: {
    nav: ["Mission", "Programs", "Platform", "Impact", "Donate"],
    badge: "Second-chance success, built for scale",
    heroTitle: ["Rebuilding", "lives into", "leadership."],
    heroText: "Black Lotus helps justice-impacted individuals and underprivileged youth access training, mentorship, jobs, scholarships, and a real path forward.",
    primaryCta: "Join the Movement",
    secondaryCta: "Partner With Us",
    stats: [["1,000+", "Participants Goal"], ["500+", "Job Placements"], ["70%", "180-Day Retention"], ["$5M+", "Scholarships Vision"]],
    missionTitle: "Not charity.",
    missionTitle2: "Infrastructure for transformation.",
    missionText: "Our mission is to reduce recidivism, create second-chance employment, and turn participants into leaders, mentors, and future donors — building a self-sustaining ecosystem of opportunity.",
    programsTitle: "A complete ecosystem.",
    programsSubtitle: "For reentry, youth empowerment, and workforce development.",
    platformTitle: "The Black Lotus Platform",
    platformText: "A bilingual, mobile-first PWA designed for participants, case managers, mentors, employers, training partners, donors, and administrators.",
    impactTitle: "Measure what matters.",
    impactSubtitle: "Funders, families, and communities deserve radical transparency.",
    donateTitle: "Sponsor an outcome.",
    donateTitle2: "Change a life trajectory.",
    donateText: "Fund training, mentorship, job readiness, scholarships, and emergency support for participants moving from survival to leadership.",
    movementTitle: "A national movement.",
    movementText: "Black Lotus is building the infrastructure for second-chance success at scale — policy-aligned, tech-enabled, and rooted in community.",
    footer: "Black Lotus Foundation — justice reform, workforce development, and community healing.",
  },
  es: {
    nav: ["Misión", "Programas", "Plataforma", "Impacto", "Donar"],
    badge: "Segundas oportunidades, listas para escalar",
    heroTitle: ["Reconstruyendo", "vidas hacia el", "liderazgo."],
    heroText: "Black Lotus ayuda a personas impactadas por el sistema de justicia y jóvenes subatendidos a acceder a capacitación, mentoría, empleos, becas y un camino real.",
    primaryCta: "Únete al Movimiento",
    secondaryCta: "Colabora Con Nosotros",
    stats: [["1,000+", "Meta de Participantes"], ["500+", "Empleos Logrados"], ["70%", "Retención 180 Días"], ["$5M+", "Visión de Becas"]],
    missionTitle: "No es caridad.",
    missionTitle2: "Es infraestructura para transformar vidas.",
    missionText: "Nuestra misión es reducir la reincidencia, crear empleo de segunda oportunidad y convertir participantes en líderes, mentores y futuros donantes — construyendo un ecosistema sostenible de oportunidades.",
    programsTitle: "Un ecosistema completo.",
    programsSubtitle: "Para reintegración, juventud y desarrollo laboral.",
    platformTitle: "La Plataforma Black Lotus",
    platformText: "Una PWA bilingüe y móvil para participantes, gestores de caso, mentores, empleadores, aliados de capacitación, donantes y administradores.",
    impactTitle: "Medimos lo que importa.",
    impactSubtitle: "Donantes, familias y comunidades merecen transparencia radical.",
    donateTitle: "Patrocina un resultado.",
    donateTitle2: "Cambia una trayectoria de vida.",
    donateText: "Financia capacitación, mentoría, preparación laboral, becas y apoyo de emergencia para participantes que pasan de sobrevivir a liderar.",
    movementTitle: "Un movimiento nacional.",
    movementText: "Black Lotus está construyendo la infraestructura para el éxito de segunda oportunidad a escala — alineada con políticas, habilitada por tecnología, y arraigada en la comunidad.",
    footer: "Black Lotus Foundation — reforma judicial, desarrollo laboral y sanación comunitaria.",
  },
};

/* ─── DATA ─── */
const programs = [
  { icon: GraduationCap, color: "from-amber-400 to-yellow-600", title: "Training Pathways", esTitle: "Rutas de Capacitación", text: "Career readiness, certifications, apprenticeships, and skill-building mapped to real employer needs.", esText: "Preparación laboral, certificaciones, aprendizajes y habilidades conectadas con necesidades reales.", tag: "Education" },
  { icon: Briefcase, color: "from-violet-400 to-purple-700", title: "Second-Chance Jobs", esTitle: "Empleos de Segunda Oportunidad", text: "Employer partnerships, job matching, retention support, and progress tracking after placement.", esText: "Alianzas con empleadores, matching laboral, apoyo de retención y seguimiento post-colocación.", tag: "Employment" },
  { icon: HeartHandshake, color: "from-emerald-400 to-teal-700", title: "Mentorship & Case Support", esTitle: "Mentoría y Apoyo de Caso", text: "Mentor pairing, milestone tracking, SMS reminders, barriers support, and human guidance.", esText: "Parejas de mentoría, seguimiento de metas, recordatorios SMS, apoyo con barreras y guía humana.", tag: "Mentorship" },
  { icon: BookOpen, color: "from-sky-400 to-blue-700", title: "Scholarship Fund", esTitle: "Fondo de Becas", text: "Merit and need-based scholarships connecting participants to higher education and credentialing.", esText: "Becas por mérito y necesidad conectando participantes con educación superior y acreditaciones.", tag: "Education" },
  { icon: Users, color: "from-rose-400 to-red-700", title: "Youth Empowerment", esTitle: "Empoderamiento Juvenil", text: "After-school programs, leadership development, and early intervention for underprivileged youth.", esText: "Programas extracurriculares, desarrollo de liderazgo e intervención temprana para jóvenes.", tag: "Youth" },
  { icon: Target, color: "from-orange-400 to-amber-700", title: "Reentry Navigation", esTitle: "Navegación de Reingreso", text: "Housing, ID recovery, benefits access, family reunification, and comprehensive barrier removal.", esText: "Vivienda, recuperación de ID, acceso a beneficios, reunificación familiar y eliminación de barreras.", tag: "Reentry" },
];

const platformFeatures = [
  { icon: ShieldCheck, label: "Secure participant profiles" },
  { icon: Globe2, label: "Bilingual onboarding" },
  { icon: Zap, label: "Job & training matching" },
  { icon: HeartHandshake, label: "Mentor pairing" },
  { icon: BarChart3, label: "Case management dashboard" },
  { icon: Award, label: "Scholarship workflow" },
  { icon: Heart, label: "Stripe donations" },
  { icon: TrendingUp, label: "Exportable funder reports" },
  { icon: LockKeyhole, label: "Encrypted PII" },
  { icon: Users, label: "Role-based access" },
  { icon: MapPin, label: "SMS reminders" },
  { icon: Star, label: "Offline-ready PWA" },
];

const impactMetrics = [
  { label: "Job Placements", value: "500+", sub: "and growing" },
  { label: "Training Completions", value: "850+", sub: "certifications issued" },
  { label: "Mentorship Hours", value: "12K+", sub: "logged this year" },
  { label: "Scholarship Awards", value: "$2.4M", sub: "disbursed" },
  { label: "Barriers Resolved", value: "3,200+", sub: "cases closed" },
  { label: "Retention at 180 Days", value: "70%", sub: "goal exceeded" },
];

const donationTiers = [
  { label: "Training Seat", amount: "$250", desc: "Covers skills assessment + first course" },
  { label: "Certification Support", amount: "$750", desc: "Full certification track + materials" },
  { label: "Mentorship Track", amount: "$1,500", desc: "6-month dedicated mentor pairing" },
  { label: "Scholarship Fund", amount: "$5,000+", desc: "Full tuition + living support" },
];

/* ─── HOOKS ─── */
function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) return;
    let start = null;
    let rafId;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);
  const suffix = target.replace(/[0-9.,]/g, "");
  return count.toLocaleString() + suffix;
}

/* ─── SHARED COMPONENTS ─── */
function GradientOrb({ className }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </div>
  );
}

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

function ProgramCard({ program, index, lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const title = lang === "en" ? program.title : program.esTitle;
  const text = lang === "en" ? program.text : program.esText;
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

/* ─── MAIN EXPORT ─── */
export default function BlackLotusWebsite() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("$100");
  const [customAmount, setCustomAmount] = useState("");
  const t = copy[lang];

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060507] text-white selection:bg-amber-300 selection:text-black">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(185,134,11,0.15),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(109,40,217,0.12),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(109,40,217,0.08),transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/50 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 via-amber-400 to-stone-900 shadow-lg shadow-amber-900/40 transition group-hover:shadow-amber-700/50">
              <span className="text-base font-black text-black">BL</span>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em]">Black Lotus</p>
              <p className="text-[10px] uppercase tracking-widest text-amber-300/70">Rise. Rebuild. Reinvest.</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-stone-300 transition hover:text-amber-200">
                {item}
              </a>
            ))}
            <button onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-stone-200 transition hover:border-amber-300/50 hover:text-amber-200">
              <Languages className="h-4 w-4" /> {lang === "en" ? "ES" : "EN"}
            </button>
            <a href="#donate" className="rounded-full bg-amber-300 px-6 py-2.5 text-sm font-black text-black transition hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-900/30">
              {t.nav[4]}
            </a>
          </div>

          <button className="p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black/98 p-6 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <p className="font-black uppercase tracking-[0.25em] text-amber-200">Black Lotus</p>
                <button onClick={() => setOpen(false)} className="rounded-full border border-white/15 p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-12 grid gap-8">
                {t.nav.map((item, i) => (
                  <motion.a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    className="text-3xl font-black text-stone-200 transition hover:text-amber-200">
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8">
                <button onClick={() => setLang(lang === "en" ? "es" : "en")}
                  className="rounded-2xl border border-white/15 px-5 py-3 text-left font-semibold text-stone-300">
                  {lang === "en" ? "🇲🇽 Cambiar a Español" : "🇺🇸 Switch to English"}
                </button>
                <a href="#donate" onClick={() => setOpen(false)} className="rounded-full bg-amber-300 py-4 text-center font-black text-black">
                  {t.nav[4]}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section id="top" className="relative overflow-hidden px-5 pb-8 pt-16 lg:px-8 lg:pb-12 lg:pt-24">
        <GradientOrb className="left-[-15rem] top-0 h-[40rem] w-[40rem] bg-amber-500/10" />
        <GradientOrb className="right-[-10rem] top-10 h-[35rem] w-[35rem] bg-violet-600/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Copy */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-200">
              <ShieldCheck className="h-4 w-4" /> {t.badge}
            </motion.div>

            <h1 className="font-black leading-[0.92] tracking-tight">
              {t.heroTitle.map((line, i) => (
                <motion.span key={i}
                  className={`block text-5xl sm:text-7xl lg:text-8xl ${i === 2 ? "text-amber-300" : "text-white"}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}>
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-8 max-w-xl text-lg leading-8 text-stone-400 sm:text-xl">
              {t.heroText}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#donate"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-8 py-4 font-black text-black shadow-xl shadow-amber-950/30 transition-all hover:scale-[1.02] hover:bg-white">
                {t.primaryCta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#programs"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-white transition-all hover:border-amber-300/50 hover:text-amber-200">
                {t.secondaryCta} <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Impact OS Card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }} className="relative">
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
                    { step: "Onboard",        pct: 100, color: "from-amber-300 to-amber-500" },
                    { step: "Assess Skills",  pct: 96,  color: "from-amber-300 to-amber-500" },
                    { step: "Assign Training",pct: 88,  color: "from-violet-400 to-purple-600" },
                    { step: "Match Job",      pct: 75,  color: "from-violet-400 to-purple-600" },
                    { step: "Pair Mentor",    pct: 70,  color: "from-emerald-400 to-teal-600" },
                    { step: "Report Impact",  pct: 64,  color: "from-emerald-400 to-teal-600" },
                  ].map(({ step, pct, color }, i) => (
                    <motion.div key={step}
                      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 text-xs font-black text-black">{i + 1}</div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex items-center justify-between">
                          <p className="text-sm font-bold">{step}</p>
                          <span className="text-xs text-stone-500">{pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.06]">
                          <motion.div className={`h-1.5 rounded-full bg-gradient-to-r ${color}`}
                            initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: "easeOut" }} />
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

      {/* ── ANIMATED STATS ── */}
      <section ref={statsRef} className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.map(([value, label], i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
              <AnimatedStat value={value} label={label} inView={statsInView} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="relative px-5 py-24 lg:px-8">
        <GradientOrb className="right-0 top-0 h-[30rem] w-[30rem] bg-violet-600/8" />
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Mission</SectionLabel>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                <span className="text-stone-400">{t.missionTitle}</span>
                <br />
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  {t.missionTitle2}
                </span>
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur lg:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/8 blur-3xl" />
              <p className="relative text-lg leading-9 text-stone-300">{t.missionText}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
                {[{ icon: Heart, label: "Heal" }, { icon: TrendingUp, label: "Grow" }, { icon: Users, label: "Lead" }].map(({ icon: Icon, label }) => (
                  <div key={label}>
                    <Icon className="mx-auto mb-2 h-6 w-6 text-amber-300" />
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
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

      {/* ── PLATFORM ── */}
      <section id="platform" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-violet-500/5 to-white/[0.02] p-8 lg:p-14">
            <GradientOrb className="bottom-[-5rem] right-[-5rem] h-[30rem] w-[30rem] bg-violet-600/10" />
            <div className="relative grid items-start gap-14 lg:grid-cols-2">
              <div>
                <SectionLabel>Platform</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.platformTitle}</h2>
                <p className="mt-6 text-lg leading-8 text-stone-300">{t.platformText}</p>
                <div className="mt-10 grid gap-4">
                  {[
                    { icon: Globe2, label: "Mobile-first PWA", sub: "Works offline, installs like a native app" },
                    { icon: LockKeyhole, label: "Encrypted PII + Role Access", sub: "HIPAA-adjacent data protection" },
                    { icon: Languages, label: "English / Spanish UX", sub: "Fully bilingual, culturally aware" },
                    { icon: Zap, label: "AI-assisted matching", sub: "Connects participants to best-fit opportunities" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-colors hover:border-amber-400/20">
                      <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400/15">
                        <Icon className="h-5 w-5 text-amber-300" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{label}</p>
                        <p className="mt-0.5 text-xs text-stone-500">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {platformFeatures.map(({ icon: Icon, label }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 text-sm text-stone-200 transition-all hover:border-emerald-400/20 hover:bg-white/[0.06]">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-400/10">
                      <Icon className="h-4 w-4 text-emerald-300" />
                    </div>
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section id="impact" ref={impactRef} className="relative px-5 py-24 lg:px-8">
        <GradientOrb className="left-1/2 top-0 h-[20rem] w-[50rem] -translate-x-1/2 bg-amber-400/8" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <SectionLabel>Impact</SectionLabel>
            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">{t.impactTitle}</h2>
            <p className="mt-3 text-xl text-stone-500">{t.impactSubtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map(({ label, value, sub }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 24 }} animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-amber-400/15 bg-gradient-to-br from-amber-400/8 via-white/[0.03] to-transparent p-7 transition-all hover:border-amber-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="relative text-5xl font-black tracking-tight text-amber-200">{value}</p>
                <p className="relative mt-2 font-bold">{label}</p>
                <p className="relative mt-1 text-sm text-stone-500">{sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.03] p-7 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-400/15">
                <BarChart3 className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <p className="text-lg font-black">Real-time funder dashboard</p>
                <p className="mt-0.5 text-sm text-stone-400">Exportable reports, HIPAA-adjacent privacy, live outcome tracking</p>
              </div>
            </div>
            <a href="#donate" className="shrink-0 whitespace-nowrap rounded-full border border-white/15 px-6 py-3 text-sm font-bold transition hover:border-amber-300/40 hover:text-amber-200">
              View Sample Report →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <GradientOrb className="right-0 top-1/2 h-[30rem] w-[30rem] bg-amber-500/8" />
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Stories</SectionLabel>
          <h2 className="mb-12 text-5xl font-black tracking-tight sm:text-6xl">
            Real lives. <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Real change.</span>
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { quote: "Black Lotus didn't give me charity. They gave me a blueprint. Today I run a crew of 8 and mentor three guys coming out of Rikers.", name: "Marcus T.", tag: "Employed → Employer", color: "amber", initials: "MT" },
              { quote: "I thought my record meant no future. They matched me with a trade program, found me a sponsor, and now I'm a licensed electrician.", name: "Deja R.", tag: "Reentry → Certification", color: "violet", initials: "DR" },
              { quote: "At 16 I was heading the wrong way. The mentorship program changed my trajectory completely. Now I'm a first-generation college student.", name: "Elijah M.", tag: "Youth → Scholar", color: "emerald", initials: "EM" },
            ].map(({ quote, name, tag, color, initials }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all hover:border-white/20">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 ${color === "amber" ? "bg-amber-400" : color === "violet" ? "bg-violet-400" : "bg-emerald-400"}`} />
                <div className="relative">
                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-300 text-amber-300" />)}
                  </div>
                  <p className="italic leading-7 text-stone-300">"{quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black ${color === "amber" ? "bg-amber-400/20 text-amber-200" : color === "violet" ? "bg-violet-400/20 text-violet-200" : "bg-emerald-400/20 text-emerald-200"}`}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-black">{name}</p>
                      <p className={`text-xs font-semibold ${color === "amber" ? "text-amber-400" : color === "violet" ? "text-violet-400" : "text-emerald-400"}`}>{tag}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL MOVEMENT ── */}
      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-amber-400/5 to-violet-500/10 p-10 text-center lg:p-16">
            <GradientOrb className="left-1/4 top-[-5rem] h-[25rem] w-[25rem] bg-amber-400/15" />
            <GradientOrb className="bottom-[-5rem] right-1/4 h-[20rem] w-[20rem] bg-violet-500/10" />
            <div className="relative">
              <SectionLabel>Movement</SectionLabel>
              <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">{t.movementTitle}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-stone-300">{t.movementText}</p>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: MapPin, label: "Scalable Nationally", sub: "Designed for city, state, and federal partnerships" },
                  { icon: ShieldCheck, label: "Policy-Aligned", sub: "DOJ, DOL, and foundation grant standards" },
                  { icon: Zap, label: "Tech-Enabled", sub: "AI-assisted, mobile-first, data-driven impact" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 backdrop-blur">
                    <Icon className="mx-auto mb-4 h-7 w-7 text-amber-300" />
                    <p className="mb-1 font-black">{label}</p>
                    <p className="text-sm text-stone-400">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#donate" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-8 py-4 font-black text-black transition hover:bg-amber-200">
                  Fund the Movement <ArrowRight className="h-5 w-5" />
                </a>
                <a href="mailto:partnerships@blacklotus.org" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-white/40">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE ── */}
      <section id="donate" className="relative px-5 py-24 lg:px-8">
        <GradientOrb className="bottom-0 left-0 h-[30rem] w-[30rem] bg-amber-400/8" />
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Donation panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur lg:p-12">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="relative">
                <SectionLabel>Donate</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  <span className="text-stone-300">{t.donateTitle}</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">{t.donateTitle2}</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-stone-400">{t.donateText}</p>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">Select Amount</p>
                  <div className="flex flex-wrap gap-3">
                    {["$25", "$100", "$500", "$1,000", "Custom"].map((amount) => (
                      <button key={amount}
                        onClick={() => { setSelectedAmount(amount); if (amount !== "Custom") setCustomAmount(""); }}
                        className={`rounded-full border px-6 py-3 text-sm font-bold transition-all ${selectedAmount === amount
                          ? "border-amber-300 bg-amber-300 text-black shadow-lg shadow-amber-900/30"
                          : "border-white/15 text-stone-300 hover:border-amber-300/50 hover:text-amber-200"}`}>
                        {amount}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {selectedAmount === "Custom" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} className="mt-4 overflow-hidden">
                        <div className="flex items-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
                          <span className="px-4 font-bold text-stone-500">$</span>
                          <input type="number" placeholder="Enter amount" value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="flex-1 bg-transparent py-3 pr-4 text-white placeholder:text-stone-600 focus:outline-none" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="mailto:info@blacklotus.org"
                    className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-black text-black shadow-xl shadow-amber-950/30 transition-all hover:scale-[1.02] hover:bg-white">
                    Donate Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="mailto:partnerships@blacklotus.org"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-bold transition-all hover:border-amber-300/40 hover:text-amber-200">
                    Start a Partnership
                  </a>
                </div>
                <p className="mt-5 text-xs text-stone-600">🔒 Secure payments via Stripe · Tax-deductible 501(c)(3) · 100% to programs</p>
              </div>
            </div>

            {/* Outcome sponsorship panel */}
            <div className="rounded-[2.5rem] border border-white/10 bg-[#0b0a0f] p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 text-black shadow-lg">
                  <HandHeart className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-lg font-black">Outcome Sponsorship</p>
                  <p className="text-sm text-stone-500">Transparent giving tied to measurable impact</p>
                </div>
              </div>

              <div className="grid gap-4">
                {donationTiers.map(({ label, amount, desc }) => (
                  <motion.button key={label} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    className="group flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5 text-left transition-all hover:border-amber-400/25 hover:bg-white/[0.07]">
                    <div>
                      <p className="text-sm font-bold text-stone-200 transition-colors group-hover:text-white">{label}</p>
                      <p className="mt-1 text-xs text-stone-600">{desc}</p>
                    </div>
                    <span className="ml-4 shrink-0 text-lg font-black text-amber-200">{amount}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                <p className="mb-1 text-sm font-bold text-emerald-300">Corporate & Foundation Partners</p>
                <p className="text-xs text-stone-500">Multi-year commitments, co-branded impact reports, and custom outcome dashboards available.</p>
                <a href="mailto:partnerships@blacklotus.org"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-emerald-300 transition-colors hover:text-emerald-200">
                  Contact partnerships team <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.07] px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 sm:grid-cols-[1fr_auto_auto]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-200 via-amber-400 to-stone-900">
                  <span className="text-sm font-black text-black">BL</span>
                </div>
                <p className="text-sm font-black uppercase tracking-[0.2em]">Black Lotus Foundation</p>
              </div>
              <p className="max-w-xs text-sm leading-7 text-stone-500">{t.footer}</p>
            </div>
            <div className="grid gap-3 text-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-stone-600">Navigate</p>
              {["Mission", "Programs", "Platform", "Impact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-500 transition-colors hover:text-amber-200">{item}</a>
              ))}
            </div>
            <div className="grid gap-3 text-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-stone-600">Contact</p>
              <a href="mailto:info@blacklotus.org" className="text-stone-500 transition-colors hover:text-amber-200">info@blacklotus.org</a>
              <a href="mailto:partnerships@blacklotus.org" className="text-stone-500 transition-colors hover:text-amber-200">partnerships@blacklotus.org</a>
              <a href="#donate" className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-black text-black transition hover:bg-amber-200">
                Donate Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-stone-600 sm:flex-row">
            <p>© 2025 Black Lotus Foundation · 501(c)(3) Nonprofit</p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Accessibility"].map(l => (
                <a key={l} href="#" className="transition-colors hover:text-stone-400">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
