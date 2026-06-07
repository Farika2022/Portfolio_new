import { User } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ContributionGraph } from "./ContributionGraph";
import { content } from "@/content/portfolio";

export function About() {
  const { about } = content;
  return (
    <Section id="about" index="04" title="About">
      <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/60 p-2 shadow-lg">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
              {about.photo ? (
                <img
                  src={about.photo}
                  alt={`Portrait of ${content.hero.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber/15 via-card to-coral/15 text-center">
                  <User className="h-12 w-12 text-muted-foreground/50" />
                  <p className="px-4 font-mono text-xs text-muted-foreground">
                    Add your photo in
                    <br />
                    src/content/portfolio.ts
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-foreground" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <p className="mb-3 font-mono text-xs text-muted-foreground">
                ~/ contributions
              </p>
              <ContributionGraph />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
