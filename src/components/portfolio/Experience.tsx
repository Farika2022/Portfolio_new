import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { content } from "@/content/portfolio";

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="relative pl-8">
        {/* amber connector that draws in on scroll */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute left-[5px] top-1 bottom-1 w-px origin-top bg-gradient-to-b from-amber via-amber/50 to-transparent"
        />
        <div className="space-y-10">
          {content.experience.map((item, i) => (
            <Reveal key={item.role + item.org} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-coral shadow-[0_0_0_4px_color-mix(in_oklab,var(--coral)_20%,transparent)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {item.role}{" "}
                    <span className="text-muted-foreground">· {item.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
