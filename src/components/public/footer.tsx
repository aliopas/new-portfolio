import Link from "next/link";
import { CodeXml, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GlowingButton } from "./glowing-button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-headline">Ali Alaa</span>
          </Link>
          <p className="max-w-md">
            A passionate Full-Stack Developer creating modern and responsive web applications.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Github />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-xl font-semibold text-white">Subscribe to my Newsletter</h3>
          <p>Get updates on my latest projects and articles. No spam, I promise.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 flex-grow" 
            />
            <GlowingButton type="submit" className="px-5 py-2.5" wrapperClassName="w-full sm:w-auto">
              Subscribe
            </GlowingButton>
          </form>
        </div>
      </div>
       <div className="container mx-auto px-4 mt-12 text-center text-sm border-t border-slate-800 pt-8">
          <p>© {new Date().getFullYear()} Ali Alaa. All rights reserved.</p>
        </div>
    </footer>
  );
}
