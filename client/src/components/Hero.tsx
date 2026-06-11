import { motion } from "framer-motion";
import { AVAILABLE_FOR_WORK, profile } from "@/data/content";
import { NeonSign, EASE } from "@/components/ui-hotel";

function MaskedLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* night: amber lamp-light pooling behind the sign · day: open sunshine */}
      <div
        aria-hidden
        className="absolute top-[12%] left-1/2 hidden h-[420px] w-[680px] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(201 165 87 / 0.13), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-[6%] left-1/2 h-[460px] w-[760px] max-w-full -translate-x-1/2 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(255 247 220 / 0.9), transparent 65%)",
        }}
      />

      <div
        aria-hidden
        className="label-mono absolute left-8 top-1/2 hidden -translate-y-1/2 text-[9px] text-cream/25 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Full Stack Developer ✦ Türkiye → Remote
      </div>
      <div
        aria-hidden
        className="label-mono absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-180 text-[9px] text-cream/25 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        From front desk to front-end ✦ Est. 2024
      </div>

      <div className="relative z-10 mt-14 flex max-w-6xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="label-mono mb-10 text-[10px] text-dim"
        >
          The portfolio of Kutluhan Gül
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="mb-12 flex flex-col items-center gap-3"
        >
          <NeonSign on={AVAILABLE_FOR_WORK} />
          <span className="label-mono text-[9px] text-dim">
            {AVAILABLE_FOR_WORK
              ? "Available for new opportunities"
              : "Currently checked in elsewhere"}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3.1rem,10.5vw,8.5rem)] leading-[0.95] font-medium tracking-[-0.02em]">
          <MaskedLine delay={0.5}>From front desk</MaskedLine>
          <MaskedLine delay={0.65}>
            to <em className="wonk text-brass italic">front‑end</em>.
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed font-light text-dim"
        >
          Eight years of five-star service, two and a half years inside Amazon’s
          marketplace machinery — now shipping web applications with the same
          standard of care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="/#projects"
            className="label-mono bg-brass px-9 py-4 text-[11px] font-medium text-ink transition-colors hover:bg-bright"
          >
            View case studies
          </a>
          <a
            href={profile.cv}
            download
            className="label-mono border border-cream/30 px-9 py-4 text-[11px] transition-colors hover:border-cream hover:bg-cream/5"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 md:flex"
      >
        <span className="label-mono text-[9px] text-cream/35">
          <span className="dark:hidden">The terrace is this way</span>
          <span className="hidden dark:inline">The lobby is this way</span>
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-cream/45 to-transparent" />
      </motion.div>
    </section>
  );
}
