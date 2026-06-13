import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/ui-hotel";

/**
 * The Logbook — a year of contributions, the way a hotel keeps its
 * occupancy register. Data via the public github-contributions-api
 * (no token needed); rendered as a brass-tinted calendar heatmap.
 */

const GITHUB_USERNAME = "kutluhangil";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContribResponse {
  total: Record<string, number>;
  contributions: Day[];
}

// brass intensities, dimmest → brightest
const LEVEL_BG = [
  "rgb(var(--cream) / 0.06)",
  "rgb(var(--brass) / 0.30)",
  "rgb(var(--brass) / 0.52)",
  "rgb(var(--brass) / 0.76)",
  "rgb(var(--bright) / 0.95)",
];

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

async function fetchContributions(): Promise<ContribResponse> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  );
  if (!res.ok) throw new Error(`contributions API ${res.status}`);
  return res.json();
}

export function Logbook() {
  const { data, isError } = useQuery({
    queryKey: ["github-contributions", GITHUB_USERNAME],
    queryFn: fetchContributions,
    staleTime: 60 * 60 * 1000,
    retry: 1,
  });

  // group days into week columns; track month-label positions
  const { weeks, monthMarks, total } = useMemo(() => {
    if (!data) return { weeks: [] as Day[][], monthMarks: [] as { col: number; label: string }[], total: 0 };

    const days = data.contributions;
    const cols: Day[][] = [];
    let cur: Day[] = [];

    // pad first week so the grid starts on the right weekday row
    const firstDow = new Date(days[0]?.date ?? Date.now()).getDay();
    for (let i = 0; i < firstDow; i++) cur.push({ date: `pad-${i}`, count: -1, level: 0 });

    for (const d of days) {
      cur.push(d);
      if (cur.length === 7) {
        cols.push(cur);
        cur = [];
      }
    }
    if (cur.length) cols.push(cur);

    const marks: { col: number; label: string }[] = [];
    let lastMonth = -1;
    cols.forEach((week, col) => {
      const firstReal = week.find((d) => d.count >= 0);
      if (!firstReal) return;
      const m = new Date(firstReal.date).getMonth();
      if (m !== lastMonth) {
        marks.push({ col, label: MONTH_LABELS[m] });
        lastMonth = m;
      }
    });

    const yearTotal = Object.values(data.total).reduce((s, n) => s + n, 0);
    return { weeks: cols, monthMarks: marks, total: yearTotal };
  }, [data]);

  if (isError || (data && weeks.length === 0)) return null;

  return (
    <div className="mt-20 border-t border-cream/10 pt-16">
      <div>
        <Reveal>
          <div className="mb-10 flex items-baseline gap-5">
            <span className="label-mono text-[11px] text-brass">✦</span>
            <span className="label-mono text-[11px] text-dim">The Logbook</span>
            <span aria-hidden className="h-px flex-1 bg-cream/15" />
            {data && (
              <span className="label-mono text-[10px] text-dim">
                {total.toLocaleString()} contributions · 12 months
              </span>
            )}
          </div>
          <h3 className="mb-10 font-display text-2xl font-medium tracking-tight md:text-3xl">
            A year at the desk, <em className="wonk text-brass italic">logged</em>.
          </h3>
        </Reveal>

        {!data ? (
          <p className="label-mono py-10 text-[10px] text-dim">Opening the logbook…</p>
        ) : (
          <Reveal delay={0.1}>
            <div className="custom-scrollbar overflow-x-auto pb-2">
              <div className="inline-block min-w-full">
                {/* month labels */}
                <div className="mb-2 flex gap-[3px] pl-0">
                  {weeks.map((_, col) => {
                    const mark = monthMarks.find((m) => m.col === col);
                    return (
                      <span
                        key={col}
                        className="label-mono w-[11px] text-[7px] text-dim"
                        style={{ minWidth: 11 }}
                      >
                        {mark ? mark.label : ""}
                      </span>
                    );
                  })}
                </div>

                {/* the grid — 7 rows, one column per week */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, col) => (
                    <div key={col} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, row) => {
                        const d = week[row];
                        if (!d || d.count < 0) {
                          return <span key={row} className="h-[11px] w-[11px]" />;
                        }
                        return (
                          <span
                            key={row}
                            title={`${d.count} contribution${d.count === 1 ? "" : "s"} — ${d.date}`}
                            className="h-[11px] w-[11px] border border-cream/5 transition-transform hover:scale-125"
                            style={{ background: LEVEL_BG[d.level] }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* legend */}
                <div className="label-mono mt-5 flex items-center gap-2 text-[8px] text-dim">
                  <span>Quiet</span>
                  {LEVEL_BG.map((bg, i) => (
                    <span key={i} className="h-[11px] w-[11px]" style={{ background: bg }} />
                  ))}
                  <span>Busy</span>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
