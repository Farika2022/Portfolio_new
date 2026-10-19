import { ArrowUpRight, Mail,Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { content } from "@/content/portfolio";

export function Contact() {
  const { contact,hero } = content;
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card/50 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {contact.heading}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            {contact.blurb}
          </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-coral-foreground transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.phoneCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-coral px-7 py-3.5 text-sm font-semibold text-coral transition-colors hover:bg-coral hover:text-coral-foreground"
            >
              <Phone className="h-4 w-4" />
              {hero.phoneCta.label}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{contact.email}</p>
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
