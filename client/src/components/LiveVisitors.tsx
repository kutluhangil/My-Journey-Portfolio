import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Presence = { online: number; views: number };

// A stable id per browser tab so each open tab counts as one guest in the lobby.
function sessionId() {
  try {
    const k = "kg_presence_id";
    let id = sessionStorage.getItem(k);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(k, id);
    }
    return id;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

export function LiveVisitors() {
  const [data, setData] = useState<Presence | null>(null);

  useEffect(() => {
    const id = sessionId();
    let alive = true;

    async function ping(first: boolean) {
      try {
        const res = await fetch(
          `/api/presence?id=${encodeURIComponent(id)}${first ? "&count=1" : ""}`,
          { cache: "no-store" }
        );
        if (!res.ok) return;
        const json = (await res.json()) as Presence;
        if (alive) setData(json);
      } catch {
        /* stay silent — the hero shouldn't break if the desk is closed */
      }
    }

    ping(true);
    const beat = setInterval(() => ping(false), 15_000);
    return () => {
      alive = false;
      clearInterval(beat);
    };
  }, []);

  // Render nothing until the front desk answers — no layout shift, no broken state.
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="label-mono mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] text-dim"
    >
      <span className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass" />
        </span>
        <span className="text-cream/70">LIVE</span>
        <span>
          {data.online} {data.online === 1 ? "guest" : "guests"} in the lobby
        </span>
      </span>

      <span className="hidden h-3 w-px bg-cream/15 sm:block" aria-hidden />

      <span>{data.views.toLocaleString()} checked in to date</span>
    </motion.div>
  );
}
