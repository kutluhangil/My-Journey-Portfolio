import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const githubUsername = "kutluhangil";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading || !stats) return null;

  const metrics = [
    { value: stats.public_repos, label: "public repositories" },
    { value: stats.followers, label: "followers" },
    { value: stats.following, label: "following" },
  ];

  return (
    <section className="border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="05"
          label="The Registry"
          title={
            <>
              Signed in at <em className="wonk text-brass italic">GitHub</em>.
            </>
          }
        />

        <Reveal>
          <div className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-ink p-8 md:p-10">
                <div className="font-display text-5xl font-medium text-brass italic md:text-6xl">
                  {metric.value}
                </div>
                <div className="label-mono mt-4 text-[9px] leading-[1.8] text-dim">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 text-center">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-2 border-b border-cream/20 pb-1 text-[10px] transition-colors hover:border-brass hover:text-brass"
          >
            Visit the profile <ArrowUpRight className="h-3 w-3" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
