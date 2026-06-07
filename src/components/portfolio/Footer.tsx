import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { content } from "@/content/portfolio";

export function Footer() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const answer = content.footer.whoami;
  const full = `$ whoami\n→ ${answer}`;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setTyped(full);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [inView, full, reduce]);

  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className="mx-auto max-w-md rounded-lg border border-border bg-card/70 font-mono text-sm shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal" />
            <span className="ml-2 text-xs text-muted-foreground">bash</span>
          </div>
          <pre className="whitespace-pre-wrap p-4 leading-relaxed">
            <span className="text-teal">{typed.split("\n")[0]}</span>
            {typed.includes("\n") && (
              <>
                {"\n"}
                <span className="text-coral">{typed.split("\n")[1]}</span>
              </>
            )}
            <span className="ml-0.5 inline-block w-2 animate-pulse bg-foreground/70">
              &nbsp;
            </span>
          </pre>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {content.hero.name}
          </p>
          <p>{content.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
