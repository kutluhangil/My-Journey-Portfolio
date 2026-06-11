import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { AVAILABLE_FOR_WORK, profile } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/ui-hotel";

type Status = "idle" | "sending" | "ok" | "error";

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
  });
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (data: InsertMessage) => {
    setStatus("sending");
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!accessKey) {
        setStatus("error");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio İletişim Formu: ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full border-b border-cream/20 bg-transparent py-3 font-light text-cream transition-colors outline-none placeholder:text-cream/25 focus:border-brass";

  return (
    <section id="contact" className="scroll-mt-20 border-t border-cream/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader
          num="10"
          label="The Guest Book"
          title={
            <>
              The front desk
              <br />
              never <em className="wonk text-brass italic">closes</em>.
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="max-w-md leading-relaxed font-light text-dim">
              Hiring, collaborating, or just passing through the lobby — leave a note. I read
              everything and reply fast.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-display text-2xl break-all italic underline decoration-brass/40 decoration-1 underline-offset-8 transition-colors hover:decoration-brass md:text-3xl"
            >
              {profile.email}
            </a>

            <div className="mt-12 space-y-1">
              {[
                { href: profile.linkedin, label: "LinkedIn", icon: ArrowUpRight, external: true },
                { href: profile.github, label: "GitHub", icon: ArrowUpRight, external: true },
                { href: profile.cv, label: "Curriculum Vitae — PDF", icon: ArrowDown, download: true },
                {
                  href: profile.certificate,
                  label: "GoIT Certificate — PDF",
                  icon: ArrowUpRight,
                  external: true,
                },
              ].map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  rel={row.external ? "noopener noreferrer" : undefined}
                  download={row.download}
                  className="label-mono group flex items-center justify-between border-b border-cream/10 py-4 text-[10px] transition-colors hover:border-brass/50 hover:text-brass"
                >
                  {row.label}
                  <row.icon className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-brass" />
                </a>
              ))}
            </div>

            <div className="label-mono mt-12 space-y-3 text-[9px] text-dim">
              <p className="flex items-center gap-3">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    AVAILABLE_FOR_WORK ? "pulse-soft bg-bright" : "bg-dim"
                  }`}
                />
                {AVAILABLE_FOR_WORK ? "Available for new opportunities" : "Currently unavailable"}
              </p>
              <p>Response time — usually under 24 hours</p>
              <p>Base — {profile.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label htmlFor="gb-name" className="label-mono mb-2 block text-[9px] text-dim">
                  Your name
                </label>
                <input
                  id="gb-name"
                  type="text"
                  placeholder="Jane Doe"
                  disabled={status === "sending"}
                  className={inputCls}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-2 text-xs font-light text-[#e16e5a]">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="gb-email" className="label-mono mb-2 block text-[9px] text-dim">
                  Your email
                </label>
                <input
                  id="gb-email"
                  type="email"
                  placeholder="jane@company.com"
                  disabled={status === "sending"}
                  className={inputCls}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-xs font-light text-[#e16e5a]">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="gb-message" className="label-mono mb-2 block text-[9px] text-dim">
                  Your note
                </label>
                <textarea
                  id="gb-message"
                  rows={5}
                  placeholder="Tell me about the role, the project, or your favorite lobby music…"
                  disabled={status === "sending"}
                  className={`${inputCls} resize-none`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-2 text-xs font-light text-[#e16e5a]">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="label-mono w-full cursor-pointer bg-brass py-4 text-[11px] font-medium text-ink transition-colors hover:bg-bright disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Delivering…" : "Leave a note"}
              </button>

              <div aria-live="polite">
                {status === "ok" && (
                  <p className="text-sm font-light text-bright">
                    ✦ Message received — consider yourself checked in. I’ll reply shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-light text-[#e16e5a]">
                    Something jammed at the desk. Email me directly at {profile.email}.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
