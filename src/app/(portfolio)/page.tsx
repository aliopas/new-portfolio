import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/public/project-card";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "@/components/public/glowing-button";
import NewsletterSubscription from "@/components/public/newsletter-subscription";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          Ali Alaa: Full-Stack Developer
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
          Crafting modern, responsive, and high-performance web applications.
          Welcome to my digital space.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <GlowingButton href="/projects">
              My Projects <ArrowRight />
          </GlowingButton>
           <GlowingButton href="/contact">
              Contact Me
          </GlowingButton>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="w-11/12 lg:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
