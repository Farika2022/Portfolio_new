import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { content } from "@/content/portfolio";

export function Contact() {
  const { contact } = content;
  return (
    <Section id="contact" index="06" title="Contact">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card/50 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {contact.heading}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            {contact.blurb}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="absolute" />
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {contact.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-teal transition-opacity hover:opacity-80"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
