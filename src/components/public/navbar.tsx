"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CodeXml, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const NavLinks = ({ className }: { className?: string }) => (
        <nav className={cn("flex items-center gap-6", className)}>
            {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "nav-link",
                            isActive ? "text-primary font-semibold" : ""
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">Portfolio Pro</span>
                </Link>

                <div className="hidden md:flex items-center gap-4">
                    <NavLinks />
                    <ThemeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 border-b p-4">
                     <NavLinks className="flex-col items-start gap-4" />
                </div>
            )}
        </header>
    );
}
