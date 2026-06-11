import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="03"
          label="Case Studies"
          title={
            <>
              Selected work,
              <br />
              documented <em className="wonk text-brass italic">properly</em>.
            </>
          }
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <button
                  onClick={() => setSelected(project)}
                  aria-label={`Open ${project.title} case study`}
                  data-testid={`card-project-${index}`}
                  className={`group relative block w-full cursor-pointer border border-cream/[0.12] bg-ink-2 p-2.5 text-left transition-colors duration-500 hover:border-brass/60 lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.cover}
                      alt={`${project.title} cover`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="absolute inset-2.5 flex items-center justify-center bg-ink/65 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                    <span className="label-mono border border-bright/60 px-5 py-3 text-[10px] text-bright">
                      Open case file →
                    </span>
                  </span>
                </button>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="label-mono text-[10px] text-brass">
                    Case Nº {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="label-mono mt-3 text-[9px] text-dim">{project.subtitle}</p>
                  <p className="mt-6 leading-relaxed font-light text-cream/70">{project.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono border border-cream/20 px-2.5 py-1 text-[8px] text-cream/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-7">
                    <button
                      onClick={() => setSelected(project)}
                      className="label-mono cursor-pointer border-b border-brass pb-1 text-[10px] text-brass transition-colors hover:text-bright"
                    >
                      Read case study
                    </button>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono inline-flex items-center gap-1.5 text-[10px] text-dim transition-colors hover:text-cream"
                      >
                        Live <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono inline-flex items-center gap-1.5 text-[10px] text-dim transition-colors hover:text-cream"
                      >
                        Code <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* The Notice Board — live LinkedIn feed */}
        <Reveal className="mt-28">
          <div className="rule-double pt-12">
            <div className="mb-10 flex items-baseline gap-5">
              <span className="label-mono text-[11px] text-brass">✦</span>
              <span className="label-mono text-[11px] text-dim">The Notice Board — LinkedIn</span>
              <span aria-hidden className="h-px flex-1 bg-cream/15" />
            </div>
            <h3 className="mb-3 font-display text-3xl font-medium tracking-tight">
              Latest posts from the desk
            </h3>
            <p className="mb-10 text-sm font-light text-dim">
              Updates, learnings, and project highlights from my LinkedIn.
            </p>
            <div className="elfsight-app-f03bc397-e161-4707-925a-5655ca21777d" data-elfsight-app-lazy></div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
