import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const placeholderPosts = [
  {
    id: 1,
    title: "Understanding Server Components in Next.js 14",
    excerpt: "A deep dive into how server components work, their benefits, and how to use them effectively in your projects.",
    tags: ["Next.js", "React", "Web Dev"],
    image: "https://placehold.co/600x400.png",
    aiHint: "abstract code"
  },
  {
    id: 2,
    title: "The Art of State Management in Modern Front-End",
    excerpt: "Exploring different state management libraries like Redux, Zustand, and Jotai, and when to use each.",
    tags: ["State Management", "React"],
    image: "https://placehold.co/600x400.png",
    aiHint: "data flow"
  },
  {
    id: 3,
    title: "Building a Design System with Tailwind CSS and ShadCN/UI",
    excerpt: "A practical guide to creating a reusable and maintainable design system for your applications.",
    tags: ["TailwindCSS", "UI/UX", "Design"],
    image: "https://placehold.co/600x400.png",
    aiHint: "color palette"
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          My Blog (Demo)
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
          This is a demonstration of what a blog section would look like. The content is currently static.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden group">
            <div className="relative aspect-video">
              <Image 
                src={post.image} 
                alt={post.title}
                data-ai-hint={post.aiHint} 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl leading-snug">{post.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
               <Link href="#" className="flex items-center text-primary font-semibold">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
