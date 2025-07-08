import { Input } from "@/components/ui/input";
import { GlowingButton } from "./glowing-button";

export default function NewsletterSubscription() {
    return (
        <div className="max-w-md">
            <h3 className="font-headline text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to my newsletter for the latest updates on my projects and blog posts.</p>
            <form className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Enter your email" className="bg-background" />
                <GlowingButton type="submit" wrapperClassName="sm:w-auto w-full">
                    Subscribe
                </GlowingButton>
            </form>
        </div>
    )
}
