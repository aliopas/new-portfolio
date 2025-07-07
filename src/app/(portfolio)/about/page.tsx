import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", 
  "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Tailwind CSS", "Figma"
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 flex flex-col items-center">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
            <Image
              src="https://placehold.co/256x256.png"
              alt="Ali Alaa"
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <h1 className="font-headline text-4xl font-bold mt-6">Ali Alaa</h1>
          <p className="text-foreground/80 text-lg">Full-Stack Developer</p>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground/90 space-y-4">
              <p>
                I am a passionate and results-driven Full-Stack Developer with a knack for building beautiful, functional, and scalable web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
              </p>
              <p>
                My journey in web development started with a deep curiosity for how things work on the internet, which has evolved into a career where I continuously learn and adapt to new technologies. I thrive in collaborative environments and am always eager to take on new challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-base px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
