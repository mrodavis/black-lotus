import { Heart, TrendingUp, Users } from "lucide-react";
import { copy } from "../constants/copy";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

export default function MissionSection({ lang }) {
  const t = copy[lang];

  return (
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
  );
}
