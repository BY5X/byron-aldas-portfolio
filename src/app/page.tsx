import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <About />
          <Timeline />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
