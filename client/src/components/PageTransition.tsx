import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE } from "@/components/ui-hotel";

/**
 * Room-to-room transition: the old page checks out (lifts, fades),
 * the new one checks in through a soft vertical reveal — with a brass
 * sweep line passing like a porter's cart.
 */

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, clipPath: "inset(0 0 8% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, y: -18, transition: { duration: 0.3, ease: "easeIn" } }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}

      {/* brass sweep on entry */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 top-0 z-[120] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgb(var(--brass) / 0.9), transparent)",
          boxShadow: "0 0 18px 2px rgb(var(--brass) / 0.35)",
        }}
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "100%", opacity: 0 }}
        transition={{ duration: 0.65, ease: "easeIn" }}
      />
    </motion.div>
  );
}
