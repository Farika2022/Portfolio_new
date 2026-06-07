import { useEffect, useRef, useState } from "react";
import profile from "../../assets/hero.jpg";

const ALL_ICONS = [
  { label: "HTML",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "JS",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "TS",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "React",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Git",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "Gen AI", img: null },
];

const N = 5;
const CX = 210, CY = 340, R = 190;
const START_DEG = 210, END_DEG = 330;
const SWAP_INTERVAL = 2200;

function GenAiIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" stroke="rgba(251,146,60,0.9)" strokeWidth="1.5" />
      <path d="M9 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="rgba(251,146,60,0.9)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15" cy="18" r="2.5" fill="rgba(251,146,60,0.9)" />
    </svg>
  );
}

export function TechOrbit() {
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);
  const rafRef = useRef(0);
  const lastSwapRef = useRef(0);        // <-- fixed: ref survives re-renders
  const startIndexRef = useRef(0);      // <-- fixed: ref so frame() always reads latest

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const frame = (ts: number) => {
      angleRef.current += 0.012;

      // Initialise lastSwap on first frame
      if (lastSwapRef.current === 0) lastSwapRef.current = ts;

      if (ts - lastSwapRef.current > SWAP_INTERVAL) {
        startIndexRef.current = (startIndexRef.current + 1) % ALL_ICONS.length;
        setStartIndex(startIndexRef.current);   // trigger re-render with new icons
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
  }, []); // runs once only — no stale closure issues

  const visibleIcons = Array.from({ length: N }, (_, i) =>
    ALL_ICONS[(startIndex + i) % ALL_ICONS.length]
  );

  return (
    <div className="relative" style={{ width: 450, height: 500, margin: "0 auto" }}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 420 500"
      >
        <circle cx="210" cy="340" r="190" fill="none" stroke="rgba(251,146,60,0.12)" strokeWidth="1" />
        <circle cx="210" cy="340" r="140" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </svg>

      {visibleIcons.map((ic, i) => (
        <div
          key={i}
          ref={(el) => { nodesRef.current[i] = el; }}
          className="absolute z-10 flex flex-col items-center justify-center"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div
            className="flex flex-col items-center justify-center gap-1 rounded-xl"
            style={{
              width: 68,
              height: 68,
              background: "rgba(20,12,4,0.88)",
              border: "1px solid rgba(251,146,60,0.28)",
            }}
          >
            {ic.img ? (
              <img src={ic.img} alt={ic.label} style={{ width: 30, height: 30, objectFit: "contain" }} />
            ) : (
              <GenAiIcon />
            )}
            <span className="font-mono text-[10px] text-white/75">{ic.label}</span>
          </div>
        </div>
      ))}

      <div
        className="absolute overflow-hidden rounded-full"
        style={{
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          width: 260,
          height: 260,
          border: "3px solid rgba(251,146,60,0.5)",
          boxShadow: "0 0 40px rgba(251,146,60,0.12)",
        }}
      >
        <img src={profile} alt="Profile" className="w-full h-full object-cover object-top" />
      </div>

    
    </div>
  );
}
