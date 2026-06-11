import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { GitHubRepos } from "@/components/GitHubRepos";
import { Skills } from "@/components/Skills";
import { GitHubStats } from "@/components/GitHubStats";
import { Certificate } from "@/components/Certificate";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Marquee />
      <About />
      <Timeline />
      <Projects />
      <GitHubRepos />
      <Skills />
      <GitHubStats />
      <Certificate />
      <Testimonials />
      <FeaturedPosts />
      <Newsletter />
      <Contact />
    </main>
  );
}
