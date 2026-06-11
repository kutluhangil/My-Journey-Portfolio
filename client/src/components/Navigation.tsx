import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, MoonStar } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { useDayNight } from "@/components/DayNightCycle";

/** The light switch by the lobby door — runs the whole sun. */
function DayNightToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const { toggleTheme, cycling } = useDayNight();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={`h-9 w-24 ${className}`} />;

  const isNight = resolvedTheme === "dark";
  return (
    <button
      onClick={toggleTheme}
      disabled={cycling}
      aria-label={isNight ? "Switch to day" : "Switch to night"}
      className={`group flex items-center gap-2.5 border border-cream/25 px-3.5 py-2 transition-colors duration-300 hover:border-brass hover:text-brass ${className}`}
    >
      {isNight ? <Sun className="h-3.5 w-3.5 text-brass" /> : <MoonStar className="h-3.5 w-3.5 text-brass" />}
      <span className="label-mono text-[9px]">
        {isNight ? "Day shift" : "Night shift"}
      </span>
    </button>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls =
    "label-mono text-[10px] text-dim transition-colors hover:text-cream whitespace-nowrap";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-cream/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-6 md:h-20 md:px-10">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl italic tracking-tight whitespace-nowrap"
          >
            K.Gül <span className="text-brass not-italic">✦</span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    if (l.href === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={linkCls}
                >
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </a>
              )
            )}
            <a
              href={profile.cv}
              download
              className="label-mono whitespace-nowrap border border-brass/60 px-4 py-2 text-[10px] text-brass transition-colors hover:bg-brass hover:text-ink"
            >
              Download CV
            </a>
            <DayNightToggle />
          </nav>

          <div className="flex items-center gap-3 xl:hidden">
            <DayNightToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 text-cream"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink px-8 py-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl italic">
                K.Gül <span className="text-brass not-italic">✦</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
              {navLinks.map((l, i) => {
                const cls =
                  "py-2.5 font-display text-3xl font-medium tracking-tight transition-colors hover:text-brass md:text-4xl";
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                  >
                    {l.isRoute ? (
                      <Link href={l.href} onClick={() => setOpen(false)} className={cls}>
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} onClick={() => setOpen(false)} className={cls}>
                        {l.label}
                      </a>
                    )}
                  </motion.div>
                );
              })}
              <motion.a
                href={profile.cv}
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length + 0.1, duration: 0.5 }}
                className="label-mono mt-6 inline-block w-fit border border-brass/60 px-6 py-3 text-[11px] text-brass"
              >
                Download CV
              </motion.a>
            </nav>

            <div className="label-mono flex justify-between text-[9px] text-dim">
              <span>{profile.location}</span>
              <span>EST. 2024</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
