import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { featuredPosts } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

export function FeaturedPosts() {
  return (
    <section className="border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="08"
          label="The Reading Room"
          title={
            <>
              Notes from
              <br />
              the <em className="wonk text-brass italic">lobby desk</em>.
            </>
          }
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {featuredPosts.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.1}>
              <article className="group flex h-full flex-col border-t-2 border-cream/60 pt-6">
                <div className="mb-5 flex items-center gap-4">
                  <span className="label-mono border border-brass/40 px-2.5 py-1 text-[8px] text-brass">
                    {post.category}
                  </span>
                  <span className="label-mono text-[9px] text-dim">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-2xl leading-snug font-medium tracking-tight transition-colors group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mb-7 flex-1 text-sm leading-relaxed font-light text-dim">
                  {post.excerpt}
                </p>
                <Link
                  href="/blog"
                  className="label-mono inline-flex w-fit items-center gap-2 border-b border-cream/20 pb-1 text-[9px] transition-colors hover:border-brass hover:text-brass"
                >
                  Read more <ArrowUpRight className="h-3 w-3" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Link
            href="/blog"
            className="label-mono inline-flex items-center gap-2 border border-cream/30 px-7 py-4 text-[10px] transition-colors hover:border-brass hover:text-brass"
          >
            Browse all notes <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
