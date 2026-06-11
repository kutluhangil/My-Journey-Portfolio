import { amenities } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

export function Skills() {
  return (
    <section id="amenities" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="05"
          label="Amenities"
          title={
            <>
              Every stay <em className="wonk text-brass italic">includes</em>.
            </>
          }
        />

        <Reveal>
          <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((group) => (
              <div key={group.heading} className="bg-ink p-8 md:p-9">
                <h3 className="font-display text-2xl font-medium text-brass italic">
                  {group.heading}
                </h3>
                <p className="label-mono mt-2 mb-7 text-[8px] text-dim">{group.sub}</p>
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-light text-cream/75">
                      <span aria-hidden className="pt-0.5 text-[10px] text-brass/70">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="label-mono mt-12 text-center text-[9px] text-dim">
            Room service for side projects — available on request
          </p>
        </Reveal>
      </div>
    </section>
  );
}
