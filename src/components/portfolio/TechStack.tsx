import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { content } from "@/content/portfolio";

export function TechStack() {
  return (
    <Section id="skills" index="02" title="Tech stack">
      <div className="grid gap-5 sm:grid-cols-3">
        {content.skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="h-full rounded-xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-mono text-sm text-amber">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((s, si) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm">{s.name}</span>
                      <span className="flex gap-1">
                        {[1, 2, 3].map((d) => (
                          <motion.span
                            key={d}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: gi * 0.08 + si * 0.04 + d * 0.05,
                              type: "spring",
                              stiffness: 400,
                              damping: 18,
                            }}
                            className={`h-2 w-2 rounded-full ${
                              d <= s.level
                                ? "bg-coral"
                                : "bg-muted-foreground/25"
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
