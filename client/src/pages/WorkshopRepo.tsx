import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import {
  ArrowLeft,
  ArrowUpRight,
  CircleDot,
  GitCommitHorizontal,
  Github,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/ui-hotel";

/**
 * /workshop/:name — the full case file for one repository.
 * Repo metadata, the complete README (rendered), language mix and
 * the latest commits, all pulled live from the GitHub API.
 */

const GITHUB_USERNAME = "kutluhangil";

interface RepoDetail {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  pushed_at: string;
  default_branch: string;
  topics?: string[];
  archived: boolean;
}

interface Commit {
  sha: string;
  html_url: string;
  commit: { message: string; author: { name: string; date: string } | null };
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

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

function b64ToUtf8(b64: string) {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder("utf-8").decode(bytes);
}

// markdown elements, dressed in the hotel's typography
const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 font-display text-3xl font-medium tracking-tight first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 border-b border-cream/10 pb-2 font-display text-2xl font-medium tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 font-display text-xl font-medium tracking-tight">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="label-mono mt-6 mb-3 text-[11px] text-brass">{children}</h4>
  ),
  p: ({ children }) => <p className="my-4 leading-relaxed font-light text-cream/75">{children}</p>,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bright"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="my-4 space-y-2 pl-1">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-5 text-cream/75">{children}</ol>,
  li: ({ children }) => (
    <li className="flex gap-3 font-light text-cream/75 [ol_&]:list-item [ol_&]:pl-1">
      <span aria-hidden className="mt-[7px] hidden h-1 w-1 flex-shrink-0 rounded-full bg-brass/70 [ul_&]:block" />
      <span className="min-w-0">{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-cream">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return <code className="font-mono text-[13px] text-cream/85">{children}</code>;
    }
    return (
      <code className="border border-cream/10 bg-cream/5 px-1.5 py-0.5 font-mono text-[0.85em] text-brass">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="custom-scrollbar my-5 overflow-x-auto border border-cream/10 bg-ink-2 p-5 leading-relaxed">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-5 border-l-2 border-brass/50 pl-5 text-cream/70 italic">{children}</blockquote>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt ?? ""} loading="lazy" className="my-5 inline-block max-w-full border border-cream/10" />
  ),
  hr: () => <hr className="my-8 border-cream/10" />,
  table: ({ children }) => (
    <div className="custom-scrollbar my-5 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="label-mono border border-cream/12 px-3 py-2 text-left text-[9px] text-brass">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-cream/12 px-3 py-2 font-light text-cream/75">{children}</td>
  ),
};

export default function WorkshopRepo() {
  const params = useParams();
  const name = params.name ?? "";

  const repoQ = useQuery({
    queryKey: ["repo-detail", name],
    queryFn: async (): Promise<RepoDetail> => {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`);
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return res.json();
    },
    retry: 1,
  });

  const readmeQ = useQuery({
    queryKey: ["repo-readme-full", name],
    queryFn: async (): Promise<string> => {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}/readme`);
      if (res.status === 404) return "";
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const json = (await res.json()) as { content?: string };
      return json.content ? b64ToUtf8(json.content) : "";
    },
    retry: 0,
  });

  const langQ = useQuery({
    queryKey: ["repo-langs", name],
    queryFn: async (): Promise<Record<string, number>> => {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}/languages`);
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return res.json();
    },
    staleTime: Infinity,
    retry: 0,
  });

  const commitsQ = useQuery({
    queryKey: ["repo-commits", name],
    queryFn: async (): Promise<Commit[]> => {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${name}/commits?per_page=8`
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return res.json();
    },
    retry: 0,
  });

  const repo = repoQ.data;
  const langEntries = langQ.data ? Object.entries(langQ.data) : [];
  const langTotal = langEntries.reduce((s, [, b]) => s + b, 0);

  return (
    <div className="mx-auto min-h-screen max-w-[1100px] px-6 pt-36 pb-28 md:px-10">
      <Reveal>
        <Link
          href="/workshop"
          className="label-mono inline-flex items-center gap-2 text-[10px] text-dim transition-colors hover:text-brass"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to the workshop
        </Link>
      </Reveal>

      {repoQ.isError && (
        <p className="label-mono py-24 text-center text-[10px] leading-[2.2] text-dim">
          No such room on the register.{" "}
          <Link href="/workshop" className="border-b border-brass/50 pb-0.5 text-brass">
            Return to the workshop
          </Link>
          .
        </p>
      )}

      {repo && (
        <>
          <Reveal>
            <div className="mt-8 mb-10 flex items-baseline gap-5">
              <span className="label-mono text-[11px] text-brass">Case file</span>
              <span aria-hidden className="h-px flex-1 bg-cream/15" />
              {repo.archived && <span className="label-mono text-[10px] text-wine">archived</span>}
            </div>
            <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] font-medium tracking-tight break-all">
              {repo.name}
            </h1>
            {repo.description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-dim">
                {repo.description}
              </p>
            )}

            {/* desk ledger — stars / forks / issues */}
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { icon: Star, value: repo.stargazers_count, label: "stars" },
                { icon: GitCommitHorizontal, value: repo.forks_count, label: "forks" },
                { icon: CircleDot, value: repo.open_issues_count, label: "open issues" },
              ].map((m) => (
                <span key={m.label} className="flex items-baseline gap-2.5">
                  <m.icon className="h-3.5 w-3.5 translate-y-0.5 text-brass" />
                  <span className="font-display text-2xl font-medium text-brass italic">{m.value}</span>
                  <span className="label-mono text-[8px] text-dim">{m.label}</span>
                </span>
              ))}
            </div>

            {repo.topics && repo.topics.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="label-mono border border-brass/40 px-2.5 py-1 text-[8px] text-brass"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-7">
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
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-[7fr_4fr] lg:gap-20">
            {/* README */}
            <Reveal className="min-w-0">
              <h2 className="label-mono mb-7 text-[10px] text-dim">The README, in full</h2>
              {readmeQ.isLoading && (
                <p className="label-mono text-[10px] text-dim">Reading the README…</p>
              )}
              {readmeQ.data === "" && !readmeQ.isLoading && (
                <p className="label-mono text-[10px] text-dim">No README on file for this repository.</p>
              )}
              {readmeQ.data && (
                <div className="min-w-0 break-words">
                  <Markdown remarkPlugins={[remarkGfm]} components={mdComponents} skipHtml>
                    {readmeQ.data}
                  </Markdown>
                </div>
              )}
            </Reveal>

            {/* sidebar — languages + commits */}
            <div className="space-y-14">
              {langTotal > 0 && (
                <Reveal>
                  <h2 className="label-mono mb-5 text-[10px] text-dim">Language mix</h2>
                  <div className="flex h-1.5 w-full overflow-hidden">
                    {langEntries.map(([lang, bytes]) => (
                      <span
                        key={lang}
                        style={{ width: `${(bytes / langTotal) * 100}%`, background: langColor(lang) }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {langEntries.map(([lang, bytes]) => (
                      <span key={lang} className="label-mono flex items-center gap-2 text-[8px] text-dim">
                        <span
                          aria-hidden
                          className="inline-block h-2 w-2 rounded-full"
                          style={{ background: langColor(lang) }}
                        />
                        {lang} {((bytes / langTotal) * 100).toFixed(1)}%
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}

              {commitsQ.data && commitsQ.data.length > 0 && (
                <Reveal delay={0.1}>
                  <h2 className="label-mono mb-5 text-[10px] text-dim">Recent service log</h2>
                  <ol className="space-y-5 border-l border-cream/10 pl-5">
                    {commitsQ.data.map((c) => (
                      <li key={c.sha} className="relative">
                        <span
                          aria-hidden
                          className="absolute top-1.5 left-[-21.5px] h-2 w-2 rotate-45 border border-brass bg-ink"
                        />
                        <a
                          href={c.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <p className="text-sm leading-snug font-light text-cream/80 transition-colors group-hover:text-brass">
                            {c.commit.message.split("\n")[0]}
                          </p>
                          <p className="label-mono mt-1.5 text-[8px] text-dim">
                            {c.sha.slice(0, 7)}
                            {c.commit.author && ` · ${fmtDate(c.commit.author.date)}`}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ol>
                  <div className="label-mono mt-5 text-[9px] text-dim">
                    Checked in {fmtDate(repo.created_at)} · last serviced {fmtDate(repo.pushed_at)}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
