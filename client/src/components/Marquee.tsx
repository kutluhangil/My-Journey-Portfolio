import { marqueeSkills } from "@/data/content";

export function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-cream/10 bg-ink-2/60 py-5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
            {marqueeSkills.map((skill) => (
              <span key={`${half}-${skill}`} className="flex items-center">
                <span className="label-mono px-7 text-[11px] text-cream/55">{skill}</span>
                <span className="text-[10px] text-brass/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
