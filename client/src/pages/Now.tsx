import { BookOpen, Code2, Headphones, MapPin, Target } from "lucide-react";
import { Reveal } from "@/components/ui-hotel";

const nowItems = [
  {
    icon: Code2,
    label: "Building",
    content: "Actively working on my portfolio at kutluhangul.com and deepening my full-stack skills with the GoIT Full Stack Developer program. Currently exploring Node.js, MongoDB, and REST API design patterns.",
  },
  {
    icon: Target,
    label: "Focus",
    content: "Job hunting. Looking for my first professional developer role — open to full-time positions, junior roles, and freelance collaborations. If you need a motivated developer who ships, let's talk.",
  },
  {
    icon: BookOpen,
    label: "Reading",
    content: "\"The Pragmatic Programmer\" by David Thomas & Andrew Hunt. Slowly working through \"Clean Code\" in parallel. Both are reshaping how I think about code quality.",
  },
  {
    icon: Headphones,
    label: "Listening",
    content: "A mix of ambient electronic and post-rock for deep coding sessions. Lately hooked on Ólafur Arnalds and 65daysofstatic. Lo-fi hip-hop for lighter work.",
  },
  {
    icon: MapPin,
    label: "Location",
    content: "Based in Istanbul, Turkey. Open to remote work globally and on-site opportunities in Turkey.",
  },
];

// Son güncelleme tarihi — manuel güncelle
const LAST_UPDATED = "April 2026";

export default function Now() {
  return (
    <div className="mx-auto min-h-screen max-w-[860px] px-6 pt-36 pb-28 md:px-10">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-5">
          <span className="label-mono text-[11px] text-brass">Nº 11</span>
          <span aria-hidden className="h-px flex-1 bg-cream/15" />
          <span className="label-mono text-[11px] text-dim">The Day's Programme</span>
        </div>
        <h1 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.02] font-medium tracking-tight">
          <em className="wonk text-brass italic">Now</em>.
        </h1>
        <p className="label-mono mt-6 text-[10px] text-dim">
          Last updated — <span className="text-brass">{LAST_UPDATED}</span>
        </p>
      </Reveal>

      <div className="rule-double mt-14 space-y-0 pt-2">
        {nowItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.label} delay={idx * 0.07}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-6 border-b border-cream/10 py-10 last:border-0">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center border border-brass/40 text-brass">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="label-mono mb-3 text-[10px] text-brass">{item.label}</p>
                  <p className="text-lg leading-relaxed font-light text-cream/80">
                    {item.content}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="rule-double mt-16 pt-10">
          <h2 className="label-mono mb-4 text-[10px] text-dim">About this page</h2>
          <p className="max-w-xl leading-relaxed font-light text-cream/60">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-brass/40 underline-offset-4 transition-colors hover:decoration-brass"
            >
              Derek Sivers
            </a>
            , this is a &ldquo;Now&rdquo; page. It tells you what I&apos;m focused on at this point
            in my life. It&apos;s a great way to stay accountable and share my current trajectory.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
