import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
                <div className="relative aspect-video">
                    <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.aiHint}
                        fill
                        className="object-cover"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
                 <div className="flex gap-2">
                    {project.githubUrl && (
                        <Button asChild variant="ghost" size="icon">
                             <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button asChild variant="ghost" size="icon">
                             <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink />
                                <span className="sr-only">Live Demo</span>
                            </Link>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
