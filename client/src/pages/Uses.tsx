import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui-hotel";

// ✏️ Ekipmanlarını buraya ekle/güncelle
const gear = [
  {
    category: "Hardware",
    sub: "the desk itself",
    items: [
      { name: "MacBook Pro", note: "Primary development machine" },
      { name: "External Monitor", note: "For extended workspace" },
      { name: "Mechanical Keyboard", note: "Daily driver for coding" },
      { name: "Mouse", note: "Precision pointing device" },
    ],
  },
  {
    category: "Development",
    sub: "tools of the trade",
    items: [
      { name: "VS Code", note: "Primary code editor", url: "https://code.visualstudio.com" },
      { name: "GitHub", note: "Version control & collaboration", url: "https://github.com" },
      { name: "Figma", note: "UI design & prototyping", url: "https://figma.com" },
      { name: "Terminal (Zsh)", note: "With Oh My Zsh" },
    ],
  },
  {
    category: "Tools & Apps",
    sub: "always within reach",
    items: [
      { name: "Postman", note: "API testing & documentation", url: "https://postman.com" },
      { name: "Chrome DevTools", note: "Debugging & performance profiling" },
      { name: "Notion", note: "Notes, planning & documentation", url: "https://notion.so" },
      { name: "Vercel", note: "Deployment & hosting", url: "https://vercel.com" },
    ],
  },
  {
    category: "Tech Stack",
    sub: "the house blend",
    items: [
      { name: "React + TypeScript", note: "Frontend framework of choice" },
      { name: "Node.js + Express", note: "Backend runtime & framework" },
      { name: "MongoDB & PostgreSQL", note: "Database solutions" },
      { name: "Tailwind CSS", note: "Utility-first styling" },
    ],
  },
];

export default function Uses() {
  return (
    <div className="mx-auto min-h-screen max-w-[1100px] px-6 pt-36 pb-28 md:px-10">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-5">
          <span className="label-mono text-[11px] text-brass">Nº 12</span>
          <span aria-hidden className="h-px flex-1 bg-cream/15" />
          <span className="label-mono text-[11px] text-dim">The Equipment List</span>
        </div>
        <h1 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.02] font-medium tracking-tight">
          <em className="wonk text-brass italic">Uses</em>.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed font-light text-dim">
          The hardware, software, and tools I use daily to build digital products.
        </p>
        <p className="label-mono mt-4 text-[9px] text-dim/60">
          ✏️ This page will be updated as my setup evolves. Equipment photos coming soon.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {gear.map((section) => (
            <div key={section.category} className="bg-ink p-8 md:p-10">
              <h3 className="font-display text-2xl font-medium text-brass italic">
                {section.category}
              </h3>
              <p className="label-mono mt-2 mb-8 text-[8px] text-dim">{section.sub}</p>
              <ul className="space-y-6">
                {section.items.map((item) => (
                  <li key={item.name} className="group flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                      <span aria-hidden className="pt-1 text-[10px] text-brass/70">✦</span>
                      <div>
                        <p className="text-lg font-light text-cream/85 transition-colors group-hover:text-brass">
                          {item.name}
                        </p>
                        {item.note && (
                          <p className="mt-1 text-sm font-light text-dim">{item.note}</p>
                        )}
                      </div>
                    </div>
                    {"url" in item && item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.name}`}
                        className="mt-1.5 flex-shrink-0 text-dim/50 transition-colors hover:text-brass"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="label-mono mt-14 border border-dashed border-cream/20 p-8 text-center text-[9px] leading-[2] text-dim">
          📸 Equipment photos coming soon — I'll be adding real images of my setup here.
        </p>
      </Reveal>
    </div>
  );
}
