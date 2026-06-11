import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

/**
 * DayNightCycle — the sky does the work.
 *
 * To night: the sun drops below the horizon, the sky burns amber then goes
 *           ink-dark, stars come out, and the night lobby fades in.
 * To day:   the sun climbs out of the horizon glow, the sky washes to
 *           morning linen, and the terrace opens.
 *
 * The theme class swaps mid-sequence, fully covered by the sky.
 */

type Target = "dark" | "light" | null;

const DayNightContext = createContext<{
  toggleTheme: () => void;
  cycling: boolean;
}>({ toggleTheme: () => {}, cycling: false });

export const useDayNight = () => useContext(DayNightContext);

const STARS = [
  { top: "18%", left: "22%", d: 0.0 },
  { top: "12%", left: "58%", d: 0.12 },
  { top: "26%", left: "74%", d: 0.05 },
  { top: "8%", left: "38%", d: 0.18 },
  { top: "30%", left: "12%", d: 0.22 },
  { top: "16%", left: "86%", d: 0.09 },
  { top: "34%", left: "46%", d: 0.15 },
  { top: "22%", left: "64%", d: 0.25 },
];

function SunsetSky() {
  return (
    <>
      {/* sky: amber dusk deepening to ink */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        style={{
          background:
            "linear-gradient(to bottom, #100d08 0%, #2b1a0e 38%, #8a4d26 68%, #c9824a 82%, #ecca7c 100%)",
        }}
        animate={{ filter: ["brightness(1.1)", "brightness(0.45)"] }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      {/* the sun, going down for the night */}
      <motion.div
        className="absolute left-1/2 h-28 w-28 -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, #f7dfa0 0%, #ecca7c 55%, rgba(236,202,124,0) 75%)",
          boxShadow: "0 0 80px 30px rgba(236,202,124,0.5)",
        }}
        initial={{ bottom: "30%", opacity: 1 }}
        animate={{ bottom: "-18%", opacity: 0.85 }}
        transition={{ duration: 1.05, ease: [0.45, 0, 0.85, 0.6] }}
      />
      {/* stars switching on */}
      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-[10px] text-[#ecca7c]"
          style={{ top: s.top, left: s.left, textShadow: "0 0 8px rgba(236,202,124,0.8)" }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0, 1], scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45 + s.d, ease: "easeOut" }}
        >
          ✦
        </motion.span>
      ))}
      {/* crescent moon rising */}
      <motion.div
        className="absolute right-[18%] h-12 w-12 rounded-full"
        style={{ boxShadow: "inset -9px 4px 0 0 #ecdab0" }}
        initial={{ top: "60%", opacity: 0, rotate: -30 }}
        animate={{ top: "16%", opacity: 1, rotate: 0 }}
        transition={{ duration: 1.0, delay: 0.35, ease: [0.21, 0.65, 0.35, 1] }}
      />
      <motion.p
        className="label-mono absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-[#ecca7c]/80"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Sunset — the night shift begins ✦
      </motion.p>
    </>
  );
}

function SunriseSky() {
  return (
    <>
      {/* sky: night washing out to morning linen */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2e3742 0%, #6d6457 30%, #c9905a 62%, #f0d9a0 80%, #f6ecd4 100%)",
        }}
        animate={{ filter: ["brightness(0.5)", "brightness(1.15)"] }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      {/* the sun, reporting for the day shift */}
      <motion.div
        className="absolute left-1/2 h-32 w-32 -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, #fff7df 0%, #f7dfa0 55%, rgba(247,223,160,0) 75%)",
          boxShadow: "0 0 100px 40px rgba(247,223,160,0.65)",
        }}
        initial={{ bottom: "-18%" }}
        animate={{ bottom: "34%" }}
        transition={{ duration: 1.15, ease: [0.21, 0.65, 0.35, 1] }}
      />
      {/* morning birds */}
      {[
        { top: "24%", left: "30%", d: 0.55 },
        { top: "19%", left: "40%", d: 0.7 },
        { top: "28%", left: "62%", d: 0.62 },
      ].map((b, i) => (
        <motion.span
          key={i}
          className="absolute font-display text-sm text-[#3d3225]/70"
          style={{ top: b.top, left: b.left }}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: b.d, duration: 0.5 }}
        >
          ⌒⌒
        </motion.span>
      ))}
      <motion.p
        className="label-mono absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-[#5a452b]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Sunrise — the terrace is open ✦
      </motion.p>
    </>
  );
}

export function DayNightProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [target, setTarget] = useState<Target>(null);
  const busy = useRef(false);

  const toggleTheme = useCallback(() => {
    if (busy.current) return;
    const next = resolvedTheme === "dark" ? "light" : "dark";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(next);
      return;
    }

    busy.current = true;
    setTarget(next);

    // swap the theme at full cover, then let the sky clear
    setTimeout(() => setTheme(next), 800);
    setTimeout(() => {
      setTarget(null);
      busy.current = false;
    }, 1500);
  }, [resolvedTheme, setTheme]);

  return (
    <DayNightContext.Provider value={{ toggleTheme, cycling: target !== null }}>
      {children}

      <AnimatePresence>
        {target !== null && (
          <motion.div
            key={target}
            className="fixed inset-0 z-[300] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {target === "dark" ? <SunsetSky /> : <SunriseSky />}
          </motion.div>
        )}
      </AnimatePresence>
    </DayNightContext.Provider>
  );
}
