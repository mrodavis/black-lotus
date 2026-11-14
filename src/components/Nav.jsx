import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { copy } from "../constants/copy";

export default function Nav({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/50 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Black Lotus Foundation home">
          <img src="/brand/black-lotus-mark.svg" alt="" className="h-10 w-auto transition group-hover:scale-105" width="51" height="40" />
          <div>
            <p className="font-cinzel text-[15px] font-semibold uppercase tracking-[0.18em]">Black Lotus</p>
            <p className="text-[10px] uppercase tracking-widest text-amber-300/70">Rise. Rebuild. Reinvest.</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {t.navLinks.map(({ label, href }) => (
            <a key={href} href={`#${href}`} className="text-sm font-medium text-stone-300 transition hover:text-amber-200">
              {label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-stone-200 transition hover:border-amber-300/50 hover:text-amber-200"
          >
            <Languages className="h-4 w-4" /> {lang === "en" ? "ES" : "EN"}
          </button>
          <a
            href="#donate"
            className="rounded-full bg-amber-300 px-6 py-2.5 text-sm font-black text-black transition hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-900/30"
          >
            {t.donateNav}
          </a>
        </div>

        <button className="p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/98 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/brand/black-lotus-mark.svg" alt="" className="h-8 w-auto" width="41" height="32" />
                <p className="font-cinzel font-semibold uppercase tracking-[0.18em] text-amber-200">Black Lotus</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full border border-white/15 p-2">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-12 grid gap-8">
              {t.navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={`#${href}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-3xl font-black text-stone-200 transition hover:text-amber-200"
                >
                  {label}
                </motion.a>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8">
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="rounded-2xl border border-white/15 px-5 py-3 text-left font-semibold text-stone-300"
              >
                {lang === "en" ? "🇲🇽 Cambiar a Español" : "🇺🇸 Switch to English"}
              </button>
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="rounded-full bg-amber-300 py-4 text-center font-black text-black"
              >
                {t.donateNav}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
