import { ArrowUpRight, Github, Star,Play } from "lucide-react";
import { useState, } from "react";
import { Reveal } from "./Reveal";
import { Section, SpotlightCard } from "./Section";
import { content, Project } from "@/content/portfolio";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const media = activeProject?.media?.[mediaIndex];

  return (
    <Section id="projects" index="01" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {content.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            
            {/* CLICK WRAPPER */}
            <div
              onClick={() => {
                setActiveProject(p);
                setMediaIndex(0);
              }}
              className="cursor-pointer"
            >
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6">

                  {/* TITLE */}
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>

                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/10 px-2 py-0.5 text-[11px] text-amber">
                        <Star className="h-3 w-3" />
                        featured
                      </span>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {p.description}
                  </p>

                  {/* TAGS */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-teal/30 bg-teal/10 px-2 py-0.5 text-[11px] text-teal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex items-center gap-4 text-sm">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-coral hover:opacity-80"
                      >
                        Live <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                     {/* WATCH DEMO  */}
          {p.media?.some(m => m.type === "video") && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(p);
                setMediaIndex(
                  p.media?.findIndex(m => m.type === "video") ?? 0
                );
              }}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          )}

                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    
                  </div>

                </div>
              </SpotlightCard>
            </div>

          </Reveal>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

          <div className="relative w-[100%] max-w-5xl rounded-lg bg-black p-2">

            {/* CLOSE */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute right-3 top-2 text-xl text-white"
            >
              ✕
            </button>

            {/* MEDIA */}
            <div className="flex justify-center">
              {media?.type === "image" ? (
                <img
                  src={media.src}
                  className="max-h-[70vh] object-contain"
                  alt="project"
                />
              ) : media?.type === "video" ? (
                <video controls autoPlay className="max-h-[70vh]">
                  <source src={media.src} type="video/mp4" />
                </video>
              ) : (
                <p className="text-white">No media available</p>
              )}
              
            </div>

             
            {/* LEFT */}
            <button
              onClick={() =>
                setMediaIndex((prev) =>
                  prev === 0
                    ? (activeProject.media?.length ?? 1) - 1
                    : prev - 1
                )
              }
              className="absolute left-3 top-1/2 text-3xl text-white"
            >
              
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                setMediaIndex((prev) =>
                  prev === (activeProject.media?.length ?? 1) - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-3 top-1/2 text-3xl text-white"
            >
              
            </button>

          </div>
        </div>
      )}
    </Section>
  );
}