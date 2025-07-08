import Link from "next/link";
import NewsletterSubscription from "./newsletter-subscription";
import { CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <NewsletterSubscription />
            </div>
            <div className="text-center md:text-right">
                <div className="flex justify-center md:justify-end items-center mb-4">
                    <CodeXml className="h-8 w-8 text-primary" />
                </div>
                 <p className="mb-4">
                    &copy; {new Date().getFullYear()} Ali Alaa. All rights reserved.
                </p>
                <Link
                    href="/login"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    Admin Login
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
