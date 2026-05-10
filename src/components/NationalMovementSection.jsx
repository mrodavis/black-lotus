import { ArrowRight, MapPin, ShieldCheck, Zap } from "lucide-react";
import { copy } from "../constants/copy";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

export default function NationalMovementSection({ lang }) {
  const t = copy[lang];

  return (
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
                { icon: MapPin,      label: "Scalable Nationally", sub: "Designed for city, state, and federal partnerships" },
                { icon: ShieldCheck, label: "Policy-Aligned",      sub: "DOJ, DOL, and foundation grant standards"          },
                { icon: Zap,         label: "Tech-Enabled",        sub: "AI-assisted, mobile-first, data-driven impact"     },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 backdrop-blur">
                  <Icon className="mx-auto mb-4 h-7 w-7 text-amber-300" />
                  <p className="mb-1 font-black">{label}</p>
                  <p className="text-sm text-stone-400">{sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-8 py-4 font-black text-black transition hover:bg-amber-200"
              >
                Fund the Movement <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:partnerships@blacklotus.org"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-white/40"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
