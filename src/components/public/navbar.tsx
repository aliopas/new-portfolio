"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CodeXml, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LinkComponent = ({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "nav-link",
          isActive && "text-primary",
          className
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline">Ali Alaa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <LinkComponent key={item.href} href={item.href}>
              {item.label}
            </LinkComponent>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-md">
            <nav className="flex flex-col items-center gap-4 p-4">
            {navItems.map((item) => (
                <LinkComponent key={item.href} href={item.href}>
                {item.label}
                </LinkComponent>
            ))}
            </nav>
        </div>
      )}
    </header>
  );
}
