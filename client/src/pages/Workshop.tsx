import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { Reveal, EASE } from "@/components/ui-hotel";

/**
 * The Workshop — every public repo, pulled live from the GitHub API
 * on each visit. Push a new repo and it appears here; no deploy needed.
 * Rows expand into a full case card: description, language mix, topics.
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
  return data
    .filter((r) => !r.fork)
    .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at));
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

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
            open ? "rotate-45 border-brass text-brass" : "border-cream/25 text-dim group-hover:border-brass/60 group-hover:text-brass"
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

              <LanguagesBar repoName={repo.name} />

              <div className="label-mono flex flex-wrap gap-x-8 gap-y-2 text-[9px] text-dim">
                <span>Checked in — {fmtDate(repo.created_at)}</span>
                <span>Last serviced — {fmtDate(repo.pushed_at)}</span>
              </div>

              <div className="flex flex-wrap gap-7 border-t border-cream/10 pt-6">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2 border-b border-brass pb-1 text-[10px] text-brass transition-colors hover:text-bright"
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

      <div className="mt-12">
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
            <ul className="border-t border-cream/10">
              {repos.map((repo) => (
                <RepoRow key={repo.id} repo={repo} />
              ))}
            </ul>
            <p className="label-mono mt-12 text-center text-[9px] text-dim">
              {repos.length} repositories on the register ✦ tap a row to open its case file
            </p>
          </>
        )}
      </div>
    </div>
  );
}
