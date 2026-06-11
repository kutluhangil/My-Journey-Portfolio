import { stats } from "@/data/content";
import { Reveal } from "@/components/ui-hotel";

/** The ledger row — four figures that summarize the stay so far. */
export function Statistics() {
  return (
    <Reveal className="mt-24">
      <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink p-8 md:p-10">
            <div className="font-display text-5xl font-medium text-brass italic md:text-6xl">
              {stat.value}
            </div>
            <div className="label-mono mt-4 text-[9px] leading-[1.8] text-dim">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
