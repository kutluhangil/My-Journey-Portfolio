import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence } from "framer-motion";
import { ConciergeBell } from "lucide-react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import { Navigation } from "@/components/Navigation";

// Secondary routes are split out of the initial bundle.
const Blog = lazy(() => import("./pages/Blog"));
const Now = lazy(() => import("./pages/Now"));
const Uses = lazy(() => import("./pages/Uses"));
const Workshop = lazy(() => import("./pages/Workshop"));
const WorkshopRepo = lazy(() => import("./pages/WorkshopRepo"));
const NotFound = lazy(() => import("@/pages/not-found"));
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { DayNightProvider } from "@/components/DayNightCycle";
import { Grain } from "@/components/ui-hotel";

function Router() {
  const [location] = useLocation();

  // start each route at the top — unless it's a hash anchor into a section
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location}>
            <Suspense fallback={<div className="min-h-svh" aria-hidden />}>
              <Switch location={location}>
                <Route path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/now" component={Now} />
                <Route path="/uses" component={Uses} />
                <Route path="/workshop" component={Workshop} />
                <Route path="/workshop/:name" component={WorkshopRepo} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />

      {/* concierge bell — rings on hover, summons the guest book */}
      <a
        href="/#contact"
        aria-label="Ring for service — go to contact"
        className="bell-hover group fixed right-6 bottom-6 z-30 hidden items-center md:flex"
      >
        <span className="label-mono mr-3 text-[8px] whitespace-nowrap text-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ring for service
        </span>
        <span className="block rounded-full border border-brass/40 bg-ink/80 p-4 backdrop-blur transition-colors duration-300 group-hover:border-brass">
          <ConciergeBell className="bell-icon h-5 w-5 text-brass" />
        </span>
      </a>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DayNightProvider>
          <Grain />
          <Toaster />
          <Router />
        </DayNightProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
