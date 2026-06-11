import { testimonials } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

export function Testimonials() {
  return (
    <section className="border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="08"
          label="The Guest Reviews"
          title={
            <>
              Five stars,
              <br />
              would <em className="wonk text-brass italic">collaborate</em> again.
            </>
          }
        />

        <div className="grid gap-px border border-cream/10 bg-cream/10 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 0.1} className="h-full">
              <figure className="flex h-full flex-col bg-ink p-8 md:p-10">
                <span aria-hidden className="mb-6 text-sm tracking-[0.3em] text-brass">
                  ✦✦✦✦✦
                </span>
                <blockquote className="flex-1 leading-relaxed font-light text-cream/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-cream/10 pt-6">
                  <p className="font-display text-lg font-medium italic">{t.author}</p>
                  <p className="label-mono mt-2 text-[8px] text-dim">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
