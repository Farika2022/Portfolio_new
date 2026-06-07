import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { content } from "@/content/portfolio";

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <div className="flex gap-4 rounded-xl border border-border bg-card/40 p-5">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {e.period}
                </p>
                {e.detail && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {e.detail}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
