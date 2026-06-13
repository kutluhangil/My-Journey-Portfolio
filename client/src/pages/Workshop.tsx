import { useMemo, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, FileText, Github, Plus, Search, Star, X } from "lucide-react";
import { Reveal, EASE } from "@/components/ui-hotel";
import { Logbook } from "@/components/Logbook";

/**
 * The Workshop — every public repo, pulled live from the GitHub API
 * on each visit. Push a new repo and it appears here; no deploy needed.
 * Search / filter by language / sort up top; each row expands into a
 * case file: README excerpt, language mix, topics, dates and links.
 */

const GITHUB_USERNAME = "kutluhangil";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  created_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
}

type SortKey = "recent" | "stars" | "name";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "recent", label: "Recently serviced" },
  { key: "stars", label: "Most starred" },
  { key: "name", label: "A — Z" },
];

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#9d6dc1",
  SCSS: "#c6538c",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  Vue: "#41b883",
  PHP: "#4F5D95",
  Dockerfile: "#384d54",
};

const langColor = (lang: string) => LANGUAGE_COLORS[lang] ?? "rgb(var(--brass))";

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`
  );
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data: Repo[] = await res.json();
  return data.filter((r) => !r.fork);
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

/** Decode GitHub's base64 (with embedded newlines) as UTF-8. */
function b64ToUtf8(b64: string) {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder("utf-8").decode(bytes);
}

/** Strip markdown/badges down to a readable plain-text excerpt. */
function readmeExcerpt(md: string, maxChars = 540) {
  let t = md;
  t = t.replace(/<!--[\s\S]*?-->/g, ""); // html comments
  t = t.replace(/```[\s\S]*?```/g, ""); // fenced code
  t = t.replace(/`([^`]+)`/g, "$1"); // inline code
  t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, ""); // images
  t = t.replace(/<img[^>]*>/gi, ""); // html images
  t = t.replace(/<[^>]+>/g, ""); // other html tags
  t = t.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1"); // links -> text
  t = t.replace(/^\s*#{1,6}\s+/gm, ""); // heading markers
  t = t.replace(/^\s*[-*+]\s+/gm, "• "); // bullets
  t = t.replace(/[*_>#]/g, ""); // leftover emphasis/quote markers
  t = t.replace(/\|/g, " "); // table pipes
  t = t.replace(/^\s*:?[-=]{3,}:?\s*$/gm, ""); // rules / table dividers

  const paragraphs = t
    .split(/\n{2,}/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  let out = "";
  for (const p of paragraphs) {
    if (out.length + p.length > maxChars && out.length > 0) break;
    out += (out ? "\n\n" : "") + p;
    if (out.length >= maxChars) break;
  }
  if (out.length > maxChars) out = out.slice(0, maxChars).replace(/\s+\S*$/, "") + "…";
  return out.trim();
}

/** README excerpt — fetched on first expand only. */
function ReadmePreview({ repoName }: { repoName: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repo-readme", repoName],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`
      );
      if (res.status === 404) return "";
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const json = (await res.json()) as { content?: string };
      return json.content ? readmeExcerpt(b64ToUtf8(json.content)) : "";
    },
    staleTime: Infinity,
    retry: 0,
  });

  if (isLoading) {
    return <p className="label-mono text-[9px] text-dim">Reading the README…</p>;
  }
  if (isError || !data) return null;

  return (
    <div>
      <p className="label-mono mb-3 text-[9px] text-dim">From the README</p>
      <div className="space-y-3 border-l-2 border-brass/40 pl-5 text-sm leading-relaxed font-light text-cream/70">
        {data.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

/** Per-repo language mix, fetched on first expand only. */
function LanguagesBar({ repoName }: { repoName: string }) {
  const { data } = useQuery({
    queryKey: ["repo-langs", repoName],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return (await res.json()) as Record<string, number>;
    },
    staleTime: Infinity,
    retry: 0,
  });

  if (!data) return null;
  const entries = Object.entries(data);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);
  if (!total) return null;

  return (
    <div>
      <p className="label-mono mb-3 text-[9px] text-dim">Language mix</p>
      <div className="flex h-1.5 w-full overflow-hidden">
        {entries.map(([lang, bytes]) => (
          <span
            key={lang}
            style={{ width: `${(bytes / total) * 100}%`, background: langColor(lang) }}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {entries.map(([lang, bytes]) => (
          <span key={lang} className="label-mono flex items-center gap-2 text-[8px] text-dim">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: langColor(lang) }}
            />
            {lang} {((bytes / total) * 100).toFixed(1)}%
          </span>
        ))}
      </div>
    </div>
  );
}

function RepoRow({ repo }: { repo: Repo }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-cream/10">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full cursor-pointer items-center gap-5 py-6 text-left transition-colors hover:bg-cream/[0.03] md:gap-8"
      >
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
            open
              ? "rotate-45 border-brass text-brass"
              : "border-cream/25 text-dim group-hover:border-brass/60 group-hover:text-brass"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate font-display text-xl font-medium tracking-tight transition-colors group-hover:text-brass md:text-2xl">
            {repo.name}
          </span>
          <span className="label-mono mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[8px] text-dim">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: langColor(repo.language) }}
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="text-brass/80">✦ {repo.stargazers_count}</span>
            )}
            {repo.archived && <span className="text-wine">archived</span>}
          </span>
        </span>

        <span className="label-mono hidden flex-shrink-0 text-[9px] text-dim sm:block">
          Last serviced — {fmtDate(repo.pushed_at)}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mb-6 ml-0 space-y-7 border border-cream/10 bg-ink-2 p-7 md:ml-16 md:p-9">
              <p className="max-w-2xl leading-relaxed font-light text-cream/75">
                {repo.description ?? "No description on file — yet."}
              </p>

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="label-mono border border-brass/40 px-2.5 py-1 text-[8px] text-brass"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <ReadmePreview repoName={repo.name} />

              <LanguagesBar repoName={repo.name} />

              <div className="label-mono flex flex-wrap gap-x-8 gap-y-2 text-[9px] text-dim">
                <span>Checked in — {fmtDate(repo.created_at)}</span>
                <span>Last serviced — {fmtDate(repo.pushed_at)}</span>
              </div>

              <div className="flex flex-wrap gap-7 border-t border-cream/10 pt-6">
                <Link
                  href={`/workshop/${repo.name}`}
                  className="label-mono inline-flex items-center gap-2 border-b border-brass pb-1 text-[10px] text-brass transition-colors hover:text-bright"
                >
                  <FileText className="h-3.5 w-3.5" /> Open full case file
                </Link>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
                >
                  <Github className="h-3.5 w-3.5" /> View on GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
                  >
                    Live site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Workshop() {
  const { data: repos, isLoading, isError } = useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: fetchRepos,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("recent");

  // Manager's picks — top 3 by a simple blend of stars, freshness and polish
  const featured = useMemo(() => {
    if (!repos || repos.length < 4) return [];
    const now = Date.now();
    const score = (r: Repo) => {
      const ageDays = (now - +new Date(r.pushed_at)) / 86_400_000;
      const freshness = Math.max(0, 30 - ageDays / 12); // recent pushes rank up
      return (
        r.stargazers_count * 6 +
        freshness +
        (r.description ? 4 : 0) +
        (r.homepage ? 4 : 0) +
        (r.topics?.length ?? 0)
      );
    };
    return [...repos].sort((a, b) => score(b) - score(a)).slice(0, 3);
  }, [repos]);

  // languages present across the register, by frequency
  const languages = useMemo(() => {
    if (!repos) return [];
    const counts = new Map<string, number>();
    for (const r of repos) {
      if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([l]) => l);
  }, [repos]);

  const visible = useMemo(() => {
    if (!repos) return [];
    const q = search.trim().toLowerCase();
    const filtered = repos.filter((r) => {
      if (lang !== "All" && r.language !== lang) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        (r.description?.toLowerCase().includes(q) ?? false) ||
        (r.topics?.some((t) => t.toLowerCase().includes(q)) ?? false)
      );
    });
    const sorted = [...filtered];
    if (sort === "recent") {
      sorted.sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at));
    } else if (sort === "stars") {
      sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [repos, search, lang, sort]);

  const hasFilters = search.trim() !== "" || lang !== "All";

  return (
    <div className="mx-auto min-h-screen max-w-[1000px] px-6 pt-36 pb-28 md:px-10">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-5">
          <span className="label-mono text-[11px] text-brass">Nº 13</span>
          <span aria-hidden className="h-px flex-1 bg-cream/15" />
          <span className="label-mono text-[11px] text-dim">The Workshop</span>
        </div>
        <h1 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.02] font-medium tracking-tight">
          Fresh from the workshop,
          <br />
          <em className="wonk text-brass italic">every</em> visit.
        </h1>
      </Reveal>

      {/* provenance bar — this is GitHub, live */}
      <Reveal delay={0.1}>
        <div className="rule-double mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:border-brass">
                <Github className="h-4 w-4" />
              </span>
              <span>
                <span className="label-mono block text-[10px] text-cream transition-colors group-hover:text-brass">
                  github.com/{GITHUB_USERNAME}
                </span>
                <span className="label-mono mt-1 block text-[8px] text-dim">
                  Every public repository, straight from the source
                </span>
              </span>
            </a>
            <span className="label-mono flex items-center gap-2.5 border border-brass/30 px-3.5 py-2 text-[8px] text-dim">
              <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-bright" />
              Live — synced on every visit
            </span>
          </div>
        </div>
      </Reveal>

      {/* manager's picks — auto-selected highlights */}
      {featured.length > 0 && (
        <Reveal delay={0.12}>
          <div className="mt-16">
            <div className="mb-6 flex items-baseline gap-5">
              <Star className="h-3.5 w-3.5 translate-y-0.5 text-brass" />
              <span className="label-mono text-[11px] text-dim">Manager's Picks</span>
              <span aria-hidden className="h-px flex-1 bg-cream/15" />
            </div>
            <div className="grid gap-px border border-cream/10 bg-cream/10 md:grid-cols-3">
              {featured.map((repo) => (
                <Link
                  key={repo.id}
                  href={`/workshop/${repo.name}`}
                  className="group flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-2"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="label-mono text-[8px] text-brass">Recommended</span>
                    {repo.stargazers_count > 0 && (
                      <span className="label-mono text-[8px] text-brass/80">✦ {repo.stargazers_count}</span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight break-all transition-colors group-hover:text-brass">
                    {repo.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed font-light text-dim">
                    {repo.description ?? "No description on file — yet."}
                  </p>
                  <div className="label-mono mt-6 flex items-center justify-between border-t border-cream/10 pt-4 text-[8px] text-dim">
                    <span className="flex items-center gap-1.5">
                      {repo.language && (
                        <span
                          aria-hidden
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ background: langColor(repo.language) }}
                        />
                      )}
                      {repo.language ?? "—"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-brass transition-colors group-hover:text-bright">
                      Case file <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* the front desk — search, filter, sort */}
      {repos && repos.length > 0 && (
        <Reveal delay={0.15}>
          <div className="mt-14 space-y-6">
            {/* search */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search the register — name, description, topic…"
                className="w-full border-b border-cream/20 bg-transparent py-3 pr-8 pl-7 font-light text-cream transition-colors outline-none placeholder:text-cream/30 focus:border-brass"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-dim transition-colors hover:text-brass"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6">
              {/* language filter */}
              <div className="min-w-0">
                <p className="label-mono mb-3 text-[8px] text-dim">Filter by language</p>
                <div className="flex flex-wrap gap-2">
                  {["All", ...languages].map((l) => {
                    const active = lang === l;
                    return (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`label-mono inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[8px] transition-colors ${
                          active
                            ? "border-brass bg-brass/10 text-brass"
                            : "border-cream/15 text-dim hover:border-brass/50 hover:text-cream"
                        }`}
                      >
                        {l !== "All" && (
                          <span
                            aria-hidden
                            className="inline-block h-1.5 w-1.5 rounded-full"
                            style={{ background: langColor(l) }}
                          />
                        )}
                        {l}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* sort */}
              <div className="shrink-0">
                <p className="label-mono mb-3 text-[8px] text-dim">Sort</p>
                <div className="flex flex-wrap gap-2">
                  {SORTS.map((s) => {
                    const active = sort === s.key;
                    return (
                      <button
                        key={s.key}
                        onClick={() => setSort(s.key)}
                        className={`label-mono border px-2.5 py-1.5 text-[8px] transition-colors ${
                          active
                            ? "border-brass bg-brass/10 text-brass"
                            : "border-cream/15 text-dim hover:border-brass/50 hover:text-cream"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      <div className="mt-10">
        {isLoading && (
          <p className="label-mono py-20 text-center text-[10px] text-dim">
            Fetching the latest from GitHub…
          </p>
        )}

        {isError && (
          <p className="label-mono py-20 text-center text-[10px] leading-[2.2] text-dim">
            GitHub is napping at the desk — try again in a minute, or{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-brass/50 pb-0.5 text-brass"
            >
              browse the repositories directly
            </a>
            .
          </p>
        )}

        {repos && (
          <>
            {visible.length > 0 ? (
              <ul className="border-t border-cream/10">
                {visible.map((repo) => (
                  <RepoRow key={repo.id} repo={repo} />
                ))}
              </ul>
            ) : (
              <p className="label-mono py-20 text-center text-[10px] leading-[2.2] text-dim">
                No repositories match that request.
                {hasFilters && (
                  <>
                    {" "}
                    <button
                      onClick={() => {
                        setSearch("");
                        setLang("All");
                      }}
                      className="border-b border-brass/50 pb-0.5 text-brass"
                    >
                      Clear the filters
                    </button>
                    .
                  </>
                )}
              </p>
            )}

            <p className="label-mono mt-12 text-center text-[9px] text-dim">
              {hasFilters
                ? `Showing ${visible.length} of ${repos.length} repositories`
                : `${repos.length} repositories on the register`}{" "}
              ✦ tap a row to open its case file
            </p>
          </>
        )}
      </div>

      {/* a year of activity, logged like an occupancy register */}
      {repos && <Logbook />}
    </div>
  );
}
