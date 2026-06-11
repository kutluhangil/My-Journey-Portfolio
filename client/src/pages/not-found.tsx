import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* lamplight pooling over the missing room number */}
      <div
        aria-hidden
        className="absolute top-[18%] left-1/2 h-[380px] w-[620px] max-w-full -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(var(--brass) / 0.12), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="label-mono mb-8 text-[10px] text-dim"
        >
          Room not found — was it ever on the register?
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.65, 0.35, 1] }}
          className="font-display text-[8rem] leading-none font-medium tracking-tight select-none md:text-[12rem]"
        >
          4<em className="wonk text-brass italic">0</em>4
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 mb-12 text-lg leading-relaxed font-light text-dim"
        >
          This page doesn't exist — or maybe it's still being built.{" "}
          <em className="text-cream/80">Things break, that's how we learn.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="label-mono inline-flex items-center gap-2 bg-brass px-8 py-4 text-[10px] font-medium text-ink transition-colors hover:bg-bright"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to the lobby
          </Link>
          <a
            href="/#projects"
            className="label-mono border border-cream/30 px-8 py-4 text-[10px] transition-colors hover:border-cream hover:bg-cream/5"
          >
            View case studies
          </a>
        </motion.div>
      </div>
    </div>
  );
}
