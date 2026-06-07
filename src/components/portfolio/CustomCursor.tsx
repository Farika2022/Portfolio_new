import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, .cursor-hover'),
      );
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [reduce]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full"
      style={{
        backgroundColor: "var(--coral)",
        mixBlendMode: "normal",
      }}
      animate={{
        x: pos.x - (hovering ? 16 : 5),
        y: pos.y - (hovering ? 16 : 5),
        width: hovering ? 32 : 10,
        height: hovering ? 32 : 10,
        opacity: hovering ? 0.35 : 1,
      }}
      transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.4 }}
    />
  );
}
