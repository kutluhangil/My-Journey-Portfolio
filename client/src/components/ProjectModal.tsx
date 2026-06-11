import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/data/content";
import { EASE } from "@/components/ui-hotel";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.97 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative grid max-h-[88vh] w-full max-w-6xl overflow-hidden border border-cream/15 bg-ink-2 shadow-[0_50px_140px_rgba(0,0,0,0.35)] dark:shadow-[0_50px_140px_rgba(0,0,0,0.65)] lg:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          data-testid="button-close-modal"
          className="absolute top-4 right-4 z-10 rounded-full border border-cream/20 bg-ink/70 p-2.5 backdrop-blur transition-colors hover:border-brass hover:text-brass"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="custom-scrollbar relative h-[34vh] overflow-y-auto border-b border-cream/10 bg-ink lg:h-auto lg:max-h-[88vh] lg:border-r lg:border-b-0">
          <div className="label-mono sticky top-0 z-[1] border-b border-cream/10 bg-ink/85 px-5 py-2.5 text-[8px] text-dim backdrop-blur">
            Room view — scroll to tour the app
          </div>
          {project.shots.map((shot, i) => (
            <img
              key={shot}
              src={shot}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              className="block w-full"
            />
          ))}
        </div>

        <div className="custom-scrollbar overflow-y-auto p-8 md:p-12 lg:max-h-[88vh]">
          <span className="label-mono text-[9px] text-dim">{project.subtitle}</span>
          <h3 className="mt-3 mb-6 font-display text-4xl font-medium tracking-tight md:text-5xl">
            {project.title}
          </h3>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="label-mono border border-brass/40 px-2.5 py-1 text-[8px] text-brass"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-5 leading-relaxed font-light text-cream/75">
            {project.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <h4 className="label-mono mt-10 mb-5 text-[10px] text-dim">Highlights</h4>
          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-light text-cream/75">
                <span aria-hidden className="pt-0.5 text-[10px] text-brass/70">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>

          {project.role && (
            <div className="mt-10 border-l-2 border-brass pl-5">
              <h4 className="label-mono mb-3 text-[10px] text-brass">My part at the desk</h4>
              <p className="text-sm leading-relaxed font-light text-cream/75">{project.role}</p>
            </div>
          )}

          <h4 className="label-mono mt-10 mb-5 text-[10px] text-dim">Built with</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="label-mono border border-cream/15 bg-ink px-2.5 py-1 text-[8px] text-cream/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-cream/10 pt-8">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> GitHub repo
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
