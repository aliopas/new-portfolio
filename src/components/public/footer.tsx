import Link from "next/link";
import { Github, Linkedin, Twitter, CodeXml } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GlowingButton } from "./glowing-button";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
             <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                <CodeXml className="h-6 w-6 text-primary" />
                <span className="font-headline">Portfolio</span>
             </Link>
            <p className="text-foreground/80">
              Full-Stack Developer crafting modern web solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-foreground/80 hover:text-primary"><Github /></Link>
              <Link href="#" className="text-foreground/80 hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-foreground/80 hover:text-primary"><Twitter /></Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl font-semibold mb-4">Subscribe to My Newsletter</h3>
            <p className="text-foreground/80 mb-4">
              Get updates on my latest projects, articles, and tech discoveries.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
               <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-borderGlow"></div>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="relative w-full z-10 bg-gray-900 text-gray-100 border-transparent"
                />
              </div>
              <GlowingButton type="submit">
                Subscribe
              </GlowingButton>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ali Alaa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
