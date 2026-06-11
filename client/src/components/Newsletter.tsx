import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/ui-hotel";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      if (!accessKey) {
        toast({
          title: "Configuration Error",
          description: "Web3Forms Access Key is missing. Please configure it in your Vercel Environment Variables.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Yeni Bülten Aboneliği: ${email}`,
          from_name: "Portfolio Newsletter System",
          email: email,
          message: `${email} ismimli kullanıcı, proje ve blog güncellemeleri için bülteninize abone oldu.`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubscribed(true);
        setEmail("");
        toast({
          title: "Successfully Subscribed!",
          description: "You will be notified about new articles and projects.",
        });
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        toast({
          title: "Failed to subscribe",
          description: "Something went wrong on the server. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-t border-cream/10 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <Reveal>
          <span className="label-mono text-[10px] text-brass">The Dispatch ✦ stay updated</span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            Mail, delivered to
            <br />
            your <em className="wonk text-brass italic">room</em>.
          </h2>
          <p className="mt-6 text-sm leading-relaxed font-light text-dim">
            Get notified when I publish new articles about development, design, and building in
            public. No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              data-testid="input-email"
              className="flex-1 border-b border-cream/20 bg-transparent py-3.5 text-center font-light text-cream transition-colors outline-none placeholder:text-cream/25 focus:border-brass sm:text-left"
            />
            <button
              type="submit"
              disabled={isSubmitting || subscribed}
              data-testid="button-subscribe"
              className="label-mono inline-flex items-center justify-center gap-2 bg-brass px-8 py-4 text-[10px] font-medium text-ink transition-colors hover:bg-bright disabled:cursor-not-allowed disabled:opacity-60"
            >
              {subscribed ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Subscribed
                </>
              ) : (
                <>
                  {isSubmitting ? "Delivering…" : "Subscribe"} <ArrowUpRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
