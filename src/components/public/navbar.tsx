"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CodeXml, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Ali Alaa</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link",
                pathname === item.href && "text-foreground after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
           <ThemeToggle />
           <Button asChild variant="secondary">
            <Link href="/login">Admin Login</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-4">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" className="flex items-center space-x-2">
                        <CodeXml className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">Ali Alaa</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "text-lg font-medium",
                            pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
                </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
