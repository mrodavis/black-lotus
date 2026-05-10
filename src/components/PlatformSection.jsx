import { motion } from "framer-motion";
import { Globe2, Languages, LockKeyhole, Zap } from "lucide-react";
import { copy } from "../constants/copy";
import { platformFeatures } from "../constants/data";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

export default function PlatformSection({ lang }) {
  const t = copy[lang];

  return (
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
                  { icon: Globe2,      label: "Mobile-first PWA",          sub: "Works offline, installs like a native app"         },
                  { icon: LockKeyhole, label: "Encrypted PII + Role Access",sub: "HIPAA-adjacent data protection"                   },
                  { icon: Languages,   label: "English / Spanish UX",       sub: "Fully bilingual, culturally aware"                 },
                  { icon: Zap,         label: "AI-assisted matching",       sub: "Connects participants to best-fit opportunities"   },
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
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 text-sm text-stone-200 transition-all hover:border-emerald-400/20 hover:bg-white/[0.06]"
                >
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
  );
}
