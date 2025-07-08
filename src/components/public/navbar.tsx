"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CodeXml, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const LinkComponent = ({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode, onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(className, isActive ? "text-primary" : "")} onClick={onClick}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <LinkComponent href="/" className="flex items-center gap-2 font-bold text-lg">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline">Ali Alaa</span>
        </LinkComponent>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <LinkComponent key={item.href} href={item.href} className="nav-link">
              {item.label}
            </LinkComponent>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navItems.map((item) => (
              <LinkComponent
                key={item.href}
                href={item.href}
                className="text-lg w-full text-center py-2 rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </LinkComponent>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
