import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Github, Mail,Linkedin } from "lucide-react";
import { content } from "@/content/portfolio";
import profile from "../../assets/hero.jpg"
import { TechOrbit } from "./tech";
function useTypewriter(text: string, speed = 38, enabled = true) {
  const [out, setOut] = useState(enabled ? "" : text);
  useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, enabled]);
  return out;
}

export function Hero() {
  const reduce = useReducedMotion();
  const { hero } = content;
  const typed = useTypewriter(hero.headline, 34, !reduce);
  const done = typed === hero.headline;
  const ref = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);
  const angleRef = useRef(0);
  const iconIndexRef = useRef(0);
  const lastSwapRef = useRef(0);
  const rafRef = useRef(0);

  const N = 5;
  const CX = 210, CY = 340, R = 190;
  const START_DEG = 210, END_DEG = 330;
  const SWAP_INTERVAL = 2200;

  useEffect(() => {
    const frame = (ts: number) => {
      angleRef.current += 0.012;

      if (ts - lastSwapRef.current > SWAP_INTERVAL) {
        iconIndexRef.current++;
        lastSwapRef.current = ts;
      }

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const spread = (END_DEG - START_DEG) / (N - 1);
        const baseDeg = START_DEG + i * spread;
        const rad = (baseDeg + angleRef.current * (180 / Math.PI)) * Math.PI / 180;
        const x = CX + R * Math.cos(rad);
        const y = CY + R * Math.sin(rad);
        node.style.left = `${x}px`;
        node.style.top  = `${y}px`;
      });

      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-grid px-5 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--coral)" }}
      />
      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
       
           <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            Available for hire
          </motion.p>

          <p className="mb-3 font-mono text-sm text-teal">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-coral to-amber bg-clip-text font-semibold text-transparent">
              {hero.name}
            </span>
          </p>

          <h1 className="text-balance break-words text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                        {typed}
            <span
              className={`ml-1 inline-block w-[3px] translate-y-1 bg-coral align-middle ${
                done ? "animate-pulse" : ""
              }`}
              style={{ height: "0.9em" }}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Mail className="h-4 w-4" />
              {hero.primaryCta.label}
            </a>
            <a
              href={content.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={content.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal"
            >
              <Linkedin className="h-4 w-4" />
              Linked In
            </a>
          </motion.div>
        </div>

        {/* Decorative code snippet */}
       {/* <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glow-amber rounded-xl border border-border bg-card/80 font-mono text-[13px] leading-relaxed shadow-2xl backdrop-blur"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-teal" />
            <span className="ml-2 text-xs text-muted-foreground">
              experience.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-foreground/90">
            <code>{hero.codeSnippet}</code>
          </pre>
        </motion.div>*/}
        {/* RIGHT SIDE (CHARACTER AREA) */}

 
  <TechOrbit/>
 
    
      
      </div>

     

    </section>
  );
}
