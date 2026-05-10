import { motion } from "framer-motion";
import { Star } from "lucide-react";
import GradientOrb from "./shared/GradientOrb";
import SectionLabel from "./shared/SectionLabel";

const stories = [
  { quote: "Black Lotus didn't give me charity. They gave me a blueprint. Today I run a crew of 8 and mentor three guys coming out of Rikers.", name: "Marcus T.", tag: "Employed → Employer",     color: "amber",   initials: "MT" },
  { quote: "I thought my record meant no future. They matched me with a trade program, found me a sponsor, and now I'm a licensed electrician.",  name: "Deja R.",   tag: "Reentry → Certification", color: "violet",  initials: "DR" },
  { quote: "At 16 I was heading the wrong way. The mentorship program changed my trajectory completely. Now I'm a first-generation college student.", name: "Elijah M.", tag: "Youth → Scholar",       color: "emerald", initials: "EM" },
];

const colorClasses = {
  amber:   { glow: "bg-amber-400",   avatar: "bg-amber-400/20 text-amber-200",   tag: "text-amber-400"   },
  violet:  { glow: "bg-violet-400",  avatar: "bg-violet-400/20 text-violet-200",  tag: "text-violet-400"  },
  emerald: { glow: "bg-emerald-400", avatar: "bg-emerald-400/20 text-emerald-200",tag: "text-emerald-400" },
};

export default function StoriesSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8">
      <GradientOrb className="right-0 top-1/2 h-[30rem] w-[30rem] bg-amber-500/8" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Stories</SectionLabel>
        <h2 className="mb-12 text-5xl font-black tracking-tight sm:text-6xl">
          Real lives. <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Real change.</span>
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map(({ quote, name, tag, color, initials }, i) => {
            const c = colorClasses[color];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all hover:border-white/20"
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 ${c.glow}`} />
                <div className="relative">
                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-300 text-amber-300" />)}
                  </div>
                  <p className="italic leading-7 text-stone-300">"{quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black ${c.avatar}`}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-black">{name}</p>
                      <p className={`text-xs font-semibold ${c.tag}`}>{tag}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
