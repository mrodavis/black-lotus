import { ArrowRight } from "lucide-react";
import { copy } from "../constants/copy";

export default function Footer({ lang }) {
  const t = copy[lang];

  return (
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
            {t.navLinks.map(({ label, href }) => (
              <a key={href} href={`#${href}`} className="text-stone-500 transition-colors hover:text-amber-200">{label}</a>
            ))}
          </div>
          <div className="grid gap-3 text-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-stone-600">Contact</p>
            <a href="mailto:info@blacklotus.org" className="text-stone-500 transition-colors hover:text-amber-200">info@blacklotus.org</a>
            <a href="mailto:partnerships@blacklotus.org" className="text-stone-500 transition-colors hover:text-amber-200">partnerships@blacklotus.org</a>
            <a href="#donate" className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-black text-black transition hover:bg-amber-200">
              {t.donateNav} <ArrowRight className="h-3.5 w-3.5" />
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
  );
}
