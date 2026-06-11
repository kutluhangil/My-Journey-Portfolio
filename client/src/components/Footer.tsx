import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="rule-double pt-10" />
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div>
            <span className="font-display text-lg italic">
              K.Gül <span className="text-brass not-italic">✦</span>
            </span>
            <p className="label-mono mt-2 text-[8px] text-dim">From front desk to front‑end</p>
          </div>

          <p className="label-mono text-[8px] leading-[2] text-dim md:text-center">
            © {new Date().getFullYear()} Kutluhan Gül
            <br />
            Built by hand. No template.
          </p>

          <div className="label-mono flex gap-7 text-[9px] md:justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-brass">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
