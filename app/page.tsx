import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Tools } from "@/components/portfolio/tools";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <Hero />
      <About />
      <Tools />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
