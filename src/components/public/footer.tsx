import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CodeXml, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <CodeXml className="h-7 w-7 text-primary" />
              <span className="font-headline">Ali Alaa</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer crafting modern web experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-headline font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                  <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                </ul>
              </div>
              <div>
                 <h4 className="font-headline font-semibold mb-4">Legal</h4>
                 <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                  <li><Link href="/login" className="text-sm text-muted-foreground hover:text-primary">Admin Login</Link></li>
                 </ul>
              </div>
              <div>
                <h4 className="font-headline font-semibold mb-4">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">Subscribe to get my latest content by email.</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Your email" className="bg-background" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ali Alaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
