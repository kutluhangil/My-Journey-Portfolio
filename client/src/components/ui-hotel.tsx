import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.21, 0.65, 0.35, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  num,
  label,
  title,
}: {
  num: string;
  label: string;
  title: ReactNode;
}) {
  return (
    <Reveal className="mb-16 md:mb-24">
      <div className="mb-10 flex items-baseline gap-5">
        <span className="label-mono text-[11px] text-brass">Nº {num}</span>
        <span aria-hidden className="h-px flex-1 bg-cream/15" />
        <span className="label-mono text-[11px] text-dim">{label}</span>
      </div>
      <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.04] font-medium tracking-tight text-balance">
        {title}
      </h2>
    </Reveal>
  );
}

/**
 * The lobby sign. At night it's neon — glowing, one letter flickering.
 * By day it's the same sign with the power off: painted wood, honest paint.
 */
export function NeonSign({ on }: { on: boolean }) {
  const word = on ? "VACANCY" : "NO VACANCY";
  const glowText = on
    ? "0 0 7px rgba(236,202,124,.95), 0 0 20px rgba(236,202,124,.5), 0 0 48px rgba(201,165,87,.3)"
    : "0 0 7px rgba(225,110,90,.95), 0 0 20px rgba(161,67,52,.5)";
  const glowBox = on
    ? "inset 0 0 26px rgba(201,165,87,.08), 0 0 36px rgba(201,165,87,.14)"
    : "inset 0 0 26px rgba(161,67,52,.1), 0 0 36px rgba(161,67,52,.14)";

  return (
    <>
      {/* night — the neon hums */}
      <span
        className={`hidden dark:inline-block border px-6 py-3 ${on ? "border-brass/50" : "border-wine/60"}`}
        style={{ boxShadow: glowBox }}
      >
        <span
          className={`label-mono text-[13px] font-medium ${on ? "text-bright" : "text-[#e16e5a]"}`}
          style={{ textShadow: glowText }}
        >
          {word.split("").map((ch, i) => (
            <span key={i} className={i === word.length - 3 ? "neon-flicker" : undefined}>
              {ch}
            </span>
          ))}
        </span>
      </span>

      {/* day — power's off; it's just good signwriting */}
      <span
        className={`dark:hidden inline-block -rotate-1 border-2 px-6 py-3 shadow-[3px_4px_0_rgb(var(--cream)/0.15)] ${
          on ? "border-brass/80 bg-ink-2" : "border-wine/70 bg-ink-2"
        }`}
      >
        <span
          className={`label-mono text-[13px] font-semibold ${on ? "text-brass" : "text-wine"}`}
        >
          {word}
        </span>
      </span>
    </>
  );
}

export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[150] opacity-[0.07] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "160px 160px",
      }}
    />
  );
}
