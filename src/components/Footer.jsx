import { ArrowRight } from "lucide-react";
import { copy } from "../constants/copy";
import { CONTACT_EMAIL, mailto } from "../constants/data";

export default function Footer({ lang }) {
  const t = copy[lang];

  return (
    <footer className="border-t border-white/[0.07] px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 sm:grid-cols-[1fr_auto_auto]">
          <div>
            <img src="/brand/black-lotus-logo.svg" alt="Black Lotus Foundation" className="mb-5 h-28 w-auto" width="129" height="112" />
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
            <a href={mailto("Hello from the website")} className="break-all text-stone-500 transition-colors hover:text-amber-200">{CONTACT_EMAIL}</a>
            <a href="https://www.linkedin.com/company/theblacklotusfoundation" target="_blank" rel="noopener noreferrer" className="text-stone-500 transition-colors hover:text-amber-200">LinkedIn</a>
            <a href="https://www.instagram.com/blacklotus.academy" target="_blank" rel="noopener noreferrer" className="text-stone-500 transition-colors hover:text-amber-200">Instagram @blacklotus.academy</a>
            <a href="#donate" className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-xs font-black text-black transition hover:bg-amber-200">
              {t.donateNav} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-stone-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Black Lotus Foundation</p>
          <p>Rise. Rebuild. Reinvest.</p>
        </div>
      </div>
    </footer>
  );
}
