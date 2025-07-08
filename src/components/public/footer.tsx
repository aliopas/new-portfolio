import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CodeXml, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <CodeXml className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">Portfolio Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Crafting modern, responsive, and high-performance web applications.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold font-headline">Navigate</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-3 space-y-4">
                <h4 className="font-semibold font-headline">Subscribe to my Newsletter</h4>
                <p className="text-sm text-muted-foreground">Get weekly updates on new projects and articles.</p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-background"
                    />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ali Alaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
