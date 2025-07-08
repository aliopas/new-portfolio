import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Github } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full group">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          data-ai-hint={project.aiHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-snug">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Globe className="mr-2 h-4 w-4" />
              Live
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
