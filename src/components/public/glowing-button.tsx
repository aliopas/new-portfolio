import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends ButtonProps {
  href?: string;
  wrapperClassName?: string;
}

export function GlowingButton({
  children,
  href,
  className,
  wrapperClassName,
  ...props
}: GlowingButtonProps) {
  const button = (
    <Button
      size="lg"
      className={cn(
        "relative overflow-hidden group-hover:scale-105 transition-transform",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "shadow-lg shadow-primary/30 hover:shadow-primary/40",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-borderGlow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Button>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group", wrapperClassName)}>
        {button}
      </Link>
    );
  }

  return <div className={cn("group", wrapperClassName)}>{button}</div>;
}
