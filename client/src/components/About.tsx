import { ArrowUpRight } from "lucide-react";
import { profile, story } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";
import { Statistics } from "@/components/Statistics";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="01"
          label="The Story"
          title={
            <>
              Eight years of service,
              <br />
              <em className="wonk text-brass italic">recompiled</em>.
            </>
          }
        />

        <div className="grid items-start gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-md">
            <div className="relative">
              {/* echo frame behind the portrait, slightly off-register */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 rotate-[1.5deg] border border-cream/10"
              />
              <figure className="relative -rotate-[1.5deg] border border-brass/40 bg-ink-2 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-700 hover:rotate-0 dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img
                  src="/images/profile-avatar.jpg"
                  alt="Portrait of Kutluhan Gül"
                  className="aspect-[4/5] w-full object-cover sepia-[0.18] transition-[filter] duration-700 hover:sepia-0"
                />
                <figcaption className="label-mono flex items-center justify-between pt-3 text-[9px] text-dim">
                  <span>Gül, Kutluhan</span>
                  <span className="text-brass/80">Reg. Nº 2024</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed font-light text-cream/75">
                {story.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-brass"
                        : undefined
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { href: profile.github, label: "GitHub" },
                { href: profile.linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, label: "Email" },
                { href: profile.cv, label: "Online Resume" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
                >
                  {link.label} <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </Reveal>
          </div>
        </div>

        <Statistics />
      </div>
    </section>
  );
}
