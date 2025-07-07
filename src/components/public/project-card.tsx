import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.aiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Source
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank">
              Live Demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
