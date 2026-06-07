import { useMemo } from "react";
import { motion } from "motion/react";
import { content } from "@/content/portfolio";

// Decorative GitHub-style contribution strip (visual element, not live data).
const WEEKS = 30;
const DAYS = 7;

export function ContributionGraph() {
  const cells = useMemo(() => {
    // Deterministic pseudo-random so SSR and client match.
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: WEEKS * DAYS }, () => {
      const r = rand();
      if (r > 0.78) return 4;
      if (r > 0.6) return 3;
      if (r > 0.4) return 2;
      if (r > 0.22) return 1;
      return 0;
    });
  }, []);

  const levelColor = (l: number) => {
    if (l === 0) return "color-mix(in oklab, var(--muted-foreground) 18%, transparent)";
    if (l === 1) return "color-mix(in oklab, var(--teal) 35%, transparent)";
    if (l === 2) return "color-mix(in oklab, var(--teal) 60%, transparent)";
    if (l === 3) return "var(--teal)";
    return "var(--coral)";
  };

  return (
    <a
      href={content.github.url}
      target="_blank"
      rel="noreferrer"
      className="block w-full overflow-x-auto rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-teal/40"
      aria-label="GitHub contribution graph"
    >
      <div
        className="grid w-max grid-flow-col gap-1"
        style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
      >
        {cells.map((lvl, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % WEEKS) * 0.01, duration: 0.2 }}
            className="h-[11px] w-[11px] rounded-[3px]"
            style={{ backgroundColor: levelColor(lvl) }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-muted-foreground">
        less
        {[0, 1, 2, 3, 4].map((l) => (
          <span
            key={l}
            className="h-[10px] w-[10px] rounded-[2px]"
            style={{ backgroundColor: levelColor(l) }}
          />
        ))}
        more
      </div>
    </a>
  );
}
