import ProjectCard from "@/components/public/project-card";
import { getProjects } from "@/services/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          My Work
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 mb-12">
          Here's a selection of projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
