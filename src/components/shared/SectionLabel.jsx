import { Sparkles } from "lucide-react";

export default function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </div>
  );
}
