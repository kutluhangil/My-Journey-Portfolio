import { ArrowUpRight } from "lucide-react";
import { itinerary } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

export function Timeline() {
  return (
    <section id="itinerary" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="02"
          label="The Itinerary"
          title={
            <>
              Check‑ins &amp;
              <br />
              check‑<em className="wonk text-brass italic">outs</em>.
            </>
          }
        />

        <div className="relative">
          <span
            aria-hidden
            className="absolute top-1 bottom-1 left-[3px] w-px bg-cream/[0.12] md:left-[219px]"
          />

          <ol className="space-y-14">
            {itinerary.map((stop) => (
              <li key={`${stop.years}-${stop.place}`}>
                <Reveal>
                  <div className="relative grid gap-3 pl-8 md:grid-cols-[180px_80px_1fr] md:gap-0 md:pl-0">
                    <span className="label-mono pt-1.5 text-[10px] text-dim md:text-right">
                      {stop.years}
                    </span>

                    <span aria-hidden className="relative hidden md:block">
                      <span
                        className={`absolute top-2 left-[36px] h-2 w-2 rotate-45 border bg-ink ${
                          stop.kind === "work" ? "border-brass" : "border-cream/40"
                        }`}
                      />
                    </span>
                    <span
                      aria-hidden
                      className={`absolute left-0 mt-2 h-2 w-2 rotate-45 border bg-ink md:hidden ${
                        stop.kind === "work" ? "border-brass" : "border-cream/40"
                      }`}
                    />

                    <div className="max-w-2xl">
                      <div className="mb-2 flex flex-wrap items-center gap-4">
                        <h3 className="font-display text-2xl font-medium tracking-tight">
                          {stop.place}
                        </h3>
                        <span
                          className={`label-mono border px-2 py-1 text-[8px] ${
                            stop.kind === "work"
                              ? "border-brass/50 text-brass"
                              : "border-cream/25 text-dim"
                          }`}
                        >
                          {stop.kind === "work" ? "Work" : "Study"}
                        </span>
                      </div>
                      <p className="text-sm text-cream/80">{stop.title}</p>
                      {stop.note && (
                        <p className="mt-3 text-sm leading-relaxed font-light text-dim">
                          {stop.note}
                        </p>
                      )}
                      {stop.link && (
                        <a
                          href={stop.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="label-mono mt-4 inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[9px] transition-colors hover:border-brass hover:text-brass"
                        >
                          {stop.link.label} <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
