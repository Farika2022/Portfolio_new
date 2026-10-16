import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as content } from "./router-CCyhioLY.mjs";

import { u as useReducedMotion, m as motion, a as useInView, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, a as Mail, P as Phone, G as Github, L as Linkedin, S as Star, A as ArrowUpRight, b as Play, c as GraduationCap, d as Moon, e as Sun } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/vercel__analytics.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ThemeContext = reactExports.createContext(null);
const STORAGE_KEY = "portfolio-theme";
function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
    const initial = stored ?? "dark";
    setThemeState(initial);
    applyTheme(initial);
  }, []);
  const setTheme = (t) => {
    setThemeState(t);
    applyTheme(t);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, t);
    }
  };
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggleTheme, setTheme }, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = reactExports.useState(false);
  const [pos, setPos] = reactExports.useState({ x: -100, y: -100 });
  const [hovering, setHovering] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-active");
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, .cursor-hover')
      );
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [reduce]);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed left-0 top-0 z-[100] rounded-full",
      style: {
        backgroundColor: "var(--coral)",
        mixBlendMode: "normal"
      },
      animate: {
        x: pos.x - (hovering ? 16 : 5),
        y: pos.y - (hovering ? 16 : 5),
        width: hovering ? 32 : 10,
        height: hovering ? 32 : 10,
        opacity: hovering ? 0.35 : 1
      },
      transition: { type: "spring", stiffness: 600, damping: 35, mass: 0.4 }
    }
  );
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleTheme,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      className: "relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:border-coral hover:text-coral",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { rotate: -90, opacity: 0, scale: 0.5 },
          animate: { rotate: 0, opacity: 1, scale: 1 },
          exit: { rotate: 90, opacity: 0, scale: 0.5 },
          transition: { duration: 0.25 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" })
        },
        "moon"
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { rotate: 90, opacity: 0, scale: 0.5 },
          animate: { rotate: 0, opacity: 1, scale: 1 },
          exit: { rotate: -90, opacity: 0, scale: 0.5 },
          transition: { duration: 0.25 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" })
        },
        "sun"
      ) })
    }
  );
}
const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#top",
              className: "font-mono text-sm font-semibold tracking-tight",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "~/" }),
                content.hero.name.toLowerCase()
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-6 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": open ? "Close menu" : "Open menu",
                "aria-expanded": open,
                onClick: () => setOpen((v) => !v),
                className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-coral hover:text-coral md:hidden",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `overflow-hidden border-border transition-all duration-300 md:hidden ${open ? "max-h-80 border-t" : "max-h-0"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-5xl flex-col gap-1 px-5 py-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                children: l.label
              },
              l.href
            )) })
          }
        )
      ]
    }
  );
}
const profile = "/assets/hero-CUQyY9q6.jpg";
const ALL_ICONS = [
  { label: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "TS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "Gen AI", img: null }
];
const N = 5;
const CX = 210, CY = 340, R = 190;
const START_DEG = 210, END_DEG = 330;
const SWAP_INTERVAL = 2200;
function GenAiIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "40", height: "40", viewBox: "0 0 30 30", fill: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "15", cy: "15", r: "12", stroke: "rgba(251,146,60,0.9)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 15c0-3.3 2.7-6 6-6s6 2.7 6 6", stroke: "rgba(251,146,60,0.9)", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "15", cy: "18", r: "2.5", fill: "rgba(251,146,60,0.9)" })
  ] });
}
function TechOrbit() {
  const nodesRef = reactExports.useRef([]);
  const angleRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(0);
  const lastSwapRef = reactExports.useRef(0);
  const startIndexRef = reactExports.useRef(0);
  const [startIndex, setStartIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const frame = (ts) => {
      angleRef.current += 0.012;
      if (lastSwapRef.current === 0) lastSwapRef.current = ts;
      if (ts - lastSwapRef.current > SWAP_INTERVAL) {
        startIndexRef.current = (startIndexRef.current + 1) % ALL_ICONS.length;
        setStartIndex(startIndexRef.current);
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
        node.style.top = `${y}px`;
      });
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  const visibleIcons = Array.from(
    { length: N },
    (_, i) => ALL_ICONS[(startIndex + i) % ALL_ICONS.length]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: 450, height: 500, margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 w-full h-full pointer-events-none",
        viewBox: "0 0 420 500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "210", cy: "340", r: "190", fill: "none", stroke: "rgba(251,146,60,0.12)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "210", cy: "340", r: "140", fill: "none", stroke: "rgba(255,255,255,0.05)", strokeWidth: "1" })
        ]
      }
    ),
    visibleIcons.map((ic, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: (el) => {
          nodesRef.current[i] = el;
        },
        className: "absolute z-10 flex flex-col items-center justify-center",
        style: { transform: "translate(-50%, -50%)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center gap-1 rounded-xl",
            style: {
              width: 68,
              height: 68,
              background: "rgba(20,12,4,0.88)",
              border: "1px solid rgba(251,146,60,0.28)"
            },
            children: [
              ic.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ic.img, alt: ic.label, style: { width: 30, height: 30, objectFit: "contain" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GenAiIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-white/75", children: ic.label })
            ]
          }
        )
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute overflow-hidden rounded-full",
        style: {
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 260,
          height: 260,
          border: "3px solid rgba(251,146,60,0.5)",
          boxShadow: "0 0 40px rgba(251,146,60,0.12)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile, alt: "Profile", className: "w-full h-full object-cover object-top" })
      }
    )
  ] });
}
function useTypewriter(text, speed = 38, enabled = true) {
  const [out, setOut] = reactExports.useState(enabled ? "" : text);
  reactExports.useEffect(() => {
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
function Hero() {
  const reduce = useReducedMotion();
  const { hero } = content;
  const typed = useTypewriter(hero.headline, 34, !reduce);
  const done = typed === hero.headline;
  const ref = reactExports.useRef(null);
  const nodesRef = reactExports.useRef([]);
  const angleRef = reactExports.useRef(0);
  const iconIndexRef = reactExports.useRef(0);
  const lastSwapRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(0);
  const N2 = 5;
  const CX2 = 210, CY2 = 340, R2 = 190;
  const START_DEG2 = 210, END_DEG2 = 330;
  const SWAP_INTERVAL2 = 2200;
  reactExports.useEffect(() => {
    const frame = (ts) => {
      angleRef.current += 0.012;
      if (ts - lastSwapRef.current > SWAP_INTERVAL2) {
        iconIndexRef.current++;
        lastSwapRef.current = ts;
      }
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const spread = (END_DEG2 - START_DEG2) / (N2 - 1);
        const baseDeg = START_DEG2 + i * spread;
        const rad = (baseDeg + angleRef.current * (180 / Math.PI)) * Math.PI / 180;
        const x = CX2 + R2 * Math.cos(rad);
        const y = CY2 + R2 * Math.sin(rad);
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
      });
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      ref,
      className: "relative flex min-h-screen items-center overflow-hidden bg-grid px-5 pt-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl",
            style: { background: "var(--coral)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-teal" }),
                  "Available for hire"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 font-mono text-sm text-teal", children: [
              "Hi, I'm",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-coral to-amber bg-clip-text font-semibold text-transparent", children: hero.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance break-words text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl", children: [
              typed,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `ml-1 inline-block w-[3px] translate-y-1 bg-coral align-middle ${done ? "animate-pulse" : ""}`,
                  style: { height: "0.9em" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.6, duration: 0.6 },
                className: "mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
                children: hero.subline
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.75, duration: 0.5 },
                className: "mt-8 flex flex-wrap items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: hero.primaryCta.href,
                      className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                        hero.primaryCta.label
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: hero.phoneCta.href,
                      className: "inline-flex items-center gap-2 rounded-full border border-coral px-6 py-3 text-sm font-semibold text-coral transition-colors hover:bg-coral hover:text-coral-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                        hero.phoneCta.label
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-sm text-muted-foreground", children: hero.proofLine }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.75, duration: 0.5 },
                className: "mt-8 flex flex-wrap items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: content.github.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                        "GitHub"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: content.linkedin.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
                        "Linked In"
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TechOrbit, {})
        ] })
      ]
    }
  );
}
function Reveal({ children, delay = 0, y = 18, className }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: reduce ? { opacity: 0 } : { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function Section({
  id,
  index,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "mx-auto max-w-5xl scroll-mt-20 px-5 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-baseline gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-coral", children: index }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight sm:text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" })
    ] }) }),
    children
  ] });
}
function SpotlightCard({
  children,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  const [active, setActive] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      onMouseMove: (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      },
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false),
      className: `group relative overflow-hidden rounded-xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-coral/50 ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
            style: {
              opacity: active ? 1 : 0,
              background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--coral) 16%, transparent), transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children })
      ]
    }
  );
}
function Projects() {
  const [activeProject, setActiveProject] = reactExports.useState(null);
  const [mediaIndex, setMediaIndex] = reactExports.useState(0);
  const media = activeProject?.media?.[mediaIndex];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "projects", index: "01", title: "Projects", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: content.projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => {
          if (!p.media?.length) return;
          setActiveProject(p);
          setMediaIndex(0);
        },
        className: p.media?.length ? "cursor-pointer" : "",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpotlightCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: p.title }),
            p.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/10 px-2 py-0.5 text-[11px] text-amber", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3" }),
              "featured"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex-1 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: p.description }),
            p.problem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wide text-coral", children: "Problem" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: p.problem })
            ] }),
            p.solution && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wide text-coral", children: "Solution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: p.solution })
            ] }),
            p.result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wide text-teal", children: "Result" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: p.result })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-md border border-teal/30 bg-teal/10 px-2 py-0.5 text-[11px] text-teal",
              children: t
            },
            t
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
            p.link && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: p.link,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-1 text-coral hover:opacity-80",
                children: [
                  "Live ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                ]
              }
            ),
            p.media?.some((m) => m.type === "video") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveProject(p);
                  setMediaIndex(
                    p.media?.findIndex((m) => m.type === "video") ?? 0
                  );
                },
                className: "inline-flex items-center gap-1 text-muted-foreground hover:text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                  "Watch Demo"
                ]
              }
            ),
            p.repo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: p.repo,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-1 text-muted-foreground hover:text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                  " Code"
                ]
              }
            )
          ] })
        ] }) })
      }
    ) }, p.title)) }),
    activeProject && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[100%] max-w-5xl rounded-lg bg-black p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveProject(null),
          className: "absolute right-3 top-2 text-xl text-white",
          children: "✕"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: media?.type === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: media.src,
          className: "max-h-[70vh] object-contain",
          alt: "project"
        }
      ) : media?.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, autoPlay: true, className: "max-h-[70vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: media.src, type: "video/mp4" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "No media available" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setMediaIndex(
            (prev) => prev === 0 ? (activeProject.media?.length ?? 1) - 1 : prev - 1
          ),
          className: "absolute left-3 top-1/2 text-3xl text-white"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setMediaIndex(
            (prev) => prev === (activeProject.media?.length ?? 1) - 1 ? 0 : prev + 1
          ),
          className: "absolute right-3 top-1/2 text-3xl text-white"
        }
      )
    ] }) })
  ] });
}
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "skills", index: "02", title: "Tech stack", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-3", children: content.skills.map((group, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: gi * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-xl border border-border bg-card/50 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-mono text-sm text-amber", children: group.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: group.skills.map((s, si) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-1", children: [1, 2, 3].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: {
            delay: gi * 0.08 + si * 0.04 + d * 0.05,
            type: "spring",
            stiffness: 400,
            damping: 18
          },
          className: `h-2 w-2 rounded-full ${d <= s.level ? "bg-coral" : "bg-muted-foreground/25"}`
        },
        d
      )) })
    ] }) }, s.name)) })
  ] }) }, group.category)) }) });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", index: "03", title: "Experience", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        "aria-hidden": true,
        initial: { scaleY: 0 },
        whileInView: { scaleY: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.9, ease: "easeInOut" },
        className: "absolute left-[5px] top-1 bottom-1 w-px origin-top bg-gradient-to-b from-amber via-amber/50 to-transparent"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: content.experience.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-coral shadow-[0_0_0_4px_color-mix(in_oklab,var(--coral)_20%,transparent)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold", children: [
          item.role,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            item.org
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: item.period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1.5 text-sm text-muted-foreground", children: item.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" }),
        pt
      ] }, pt)) })
    ] }) }, item.role + item.org)) })
  ] }) });
}
const WEEKS = 30;
const DAYS = 7;
function ContributionGraph() {
  const cells = reactExports.useMemo(() => {
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
  const levelColor = (l) => {
    if (l === 0) return "color-mix(in oklab, var(--muted-foreground) 18%, transparent)";
    if (l === 1) return "color-mix(in oklab, var(--teal) 35%, transparent)";
    if (l === 2) return "color-mix(in oklab, var(--teal) 60%, transparent)";
    if (l === 3) return "var(--teal)";
    return "var(--coral)";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: content.github.url,
      target: "_blank",
      rel: "noreferrer",
      className: "block w-full overflow-x-auto rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-teal/40",
      "aria-label": "GitHub contribution graph",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid w-max grid-flow-col gap-1",
            style: { gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` },
            children: cells.map((lvl, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.4 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i % WEEKS * 0.01, duration: 0.2 },
                className: "h-[11px] w-[11px] rounded-[3px]",
                style: { backgroundColor: levelColor(lvl) }
              },
              i
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-muted-foreground", children: [
          "less",
          [0, 1, 2, 3, 4].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "h-[10px] w-[10px] rounded-[2px]",
              style: { backgroundColor: levelColor(l) }
            },
            l
          )),
          "more"
        ] })
      ]
    }
  );
}
function About() {
  const { about } = content;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "about", index: "04", title: "About", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[260px_1fr] md:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-secondary/60 p-2 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] w-full overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: about.photo,
        alt: `Portrait of ${content.hero.name}`,
        className: "h-full w-full object-cover"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-[15px] leading-relaxed text-muted-foreground", children: about.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: i === 0 ? "text-foreground" : "", children: p }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs text-muted-foreground", children: "~/ contributions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContributionGraph, {})
      ] }) })
    ] })
  ] }) });
}
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "education", index: "05", title: "Education", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: content.education.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-xl border border-border bg-card/40 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: e.degree }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: e.school }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-xs text-muted-foreground", children: e.period }),
      e.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.detail })
    ] })
  ] }) }, e.degree)) }) });
}
function Contact() {
  const { contact } = content;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", index: "06", title: "Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/50 p-8 text-center sm:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold tracking-tight sm:text-3xl", children: contact.heading }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground", children: contact.blurb }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `mailto:${contact.email}`,
        className: "group mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          contact.email
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3", children: contact.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: l.href,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-1 text-sm font-medium text-teal transition-opacity hover:opacity-80",
        children: [
          l.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ]
      },
      l.href
    )) })
  ] }) }) });
}
function Footer() {
  const reduce = useReducedMotion();
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const answer = content.footer.whoami;
  const full = `$ whoami
→ ${answer}`;
  const [typed, setTyped] = reactExports.useState("");
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border px-5 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "mx-auto max-w-md rounded-lg border border-border bg-card/70 font-mono text-sm shadow-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-teal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: "bash" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "whitespace-pre-wrap p-4 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal", children: typed.split("\n")[0] }),
            typed.includes("\n") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "\n",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: typed.split("\n")[1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block w-2 animate-pulse bg-foreground/70", children: " " })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        content.hero.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: content.footer.note })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "overflow-x-clip", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
