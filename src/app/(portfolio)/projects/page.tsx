import ProjectCard from "@/components/public/project-card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          My Work
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
          Here's a selection of projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </section>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
