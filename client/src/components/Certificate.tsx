import { ArrowDown, ArrowUpRight, Award } from "lucide-react";
import { profile } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

export function Certificate() {
  return (
    <section id="certificate" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="07"
          label="The Credentials"
          title={
            <>
              Framed &amp; hung
              <br />
              behind the <em className="wonk text-brass italic">desk</em>.
            </>
          }
        />

        <div className="grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* the framed certificate */}
          <Reveal className="mx-auto w-full max-w-md">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-3 translate-y-3 rotate-[-1.5deg] border border-cream/10"
              />
              <a
                href={profile.certificate}
                target="_blank"
                rel="noreferrer"
                className="group relative block rotate-[1.2deg] border border-brass/40 bg-ink-2 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-700 hover:rotate-0 md:p-10"
              >
                <span className="label-mono mb-6 block text-[8px] text-dim">
                  Certificate of completion
                </span>
                <Award className="mx-auto mb-6 h-12 w-12 text-brass" />
                <span className="block font-display text-3xl font-medium tracking-tight">
                  Full Stack Developer
                </span>
                <span className="label-mono mt-3 block text-[9px] text-brass">
                  Issued by GoIT — 700+ hours
                </span>
                <span className="label-mono mt-8 inline-block border border-bright/50 px-4 py-2 text-[9px] text-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View full size →
                </span>
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed font-light text-cream/75">
                Successfully completed 700+ hours of intensive training, mastering both frontend
                and backend development. The curriculum included HTML5, CSS3, JavaScript (ES6+),
                React, Node.js, MongoDB, TypeScript, and REST APIs, focusing on real-world
                projects and team collaboration.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.certificate}
                download
                className="label-mono inline-flex items-center gap-2 bg-brass px-7 py-4 text-[10px] font-medium text-ink transition-colors hover:bg-bright"
              >
                <ArrowDown className="h-3.5 w-3.5" /> Download PDF
              </a>
              <a
                href={profile.certificate}
                target="_blank"
                rel="noreferrer"
                className="label-mono inline-flex items-center gap-2 border border-cream/30 px-7 py-4 text-[10px] transition-colors hover:border-cream hover:bg-cream/5"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Open file
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
