import { useState, useEffect } from "react";

export function useCountUp(target, inView, duration = 2000) {
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
