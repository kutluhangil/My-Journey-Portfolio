import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

/**
 * The Workshop — every public repo, pulled live from the GitHub API
 * on each visit. Push a new repo and it appears here; no deploy needed.
 */

const GITHUB_USERNAME = "kutluhangil";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
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
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  Vue: "#41b883",
  PHP: "#4F5D95",
};

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

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-2 md:p-8"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-medium tracking-tight break-all transition-colors group-hover:text-brass">
          {repo.name}
        </h3>
        <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-dim transition-colors group-hover:text-brass" />
      </div>

      <p className="flex-1 text-sm leading-relaxed font-light text-dim">
        {repo.description ?? "No description on file — yet."}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="label-mono border border-cream/15 px-2 py-0.5 text-[7px] text-cream/55"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="label-mono mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-cream/10 pt-5 text-[8px] text-dim">
        {repo.language && (
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: LANGUAGE_COLORS[repo.language] ?? "rgb(var(--brass))" }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="text-brass/80">✦ {repo.stargazers_count}</span>
        )}
        {repo.archived && <span className="text-wine">archived</span>}
        <span className="ml-auto">
          Last serviced —{" "}
          {new Date(repo.pushed_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </a>
  );
}

export function GitHubRepos() {
  const { data: repos, isLoading, isError } = useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: fetchRepos,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return (
    <section id="workshop" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="04"
          label="The Workshop"
          title={
            <>
              Fresh from the workshop,
              <br />
              <em className="wonk text-brass italic">every</em> visit.
            </>
          }
        />

        {isLoading && (
          <p className="label-mono py-16 text-center text-[10px] text-dim">
            Fetching the latest from GitHub…
          </p>
        )}

        {isError && (
          <p className="label-mono py-16 text-center text-[10px] leading-[2.2] text-dim">
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
            <Reveal>
              <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="label-mono mt-12 text-center text-[9px] text-dim">
                Pulled live from GitHub on every visit — what you see is what's shipped ✦{" "}
                {repos.length} repositories
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
