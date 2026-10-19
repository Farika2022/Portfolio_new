import { Linkedin, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SpotlightCard } from "./Section";
import { content } from "@/content/portfolio";

export function Testimonials() {
  return (
    <Section id="testimonials" title="What people say">
      <div className="grid gap-5 md:grid-cols-3">
        {content.testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <SpotlightCard className="h-full">
              <figure className="flex h-full flex-col p-6">
                <Quote className="mb-4 h-5 w-5 text-coral" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                  {t.link && (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-teal hover:opacity-80"
                    >
                      <Linkedin className="h-3 w-3" />
                      See on LinkedIn
                    </a>
                  )}
                </figcaption>
              </figure>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
