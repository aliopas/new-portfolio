import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/public/project-card";
import { getProjects } from "@/services/projects";
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "@/components/public/glowing-button";

export default async function Home() {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Ali Alaa: Full-Stack Developer
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-xl text-foreground/80 mb-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
