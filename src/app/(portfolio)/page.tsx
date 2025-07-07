import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/public/project-card";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          Ali Alaa: Full-Stack Developer
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
          Crafting modern, responsive, and high-performance web applications.
          Welcome to my digital space.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/projects" className="btn-gradient group">
            <span className="flex items-center gap-2">
              My Projects <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      <section className="mt-20 md:mt-32">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
