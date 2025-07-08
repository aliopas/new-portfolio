import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  wrapperClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  [x: string]: any; 
}

export function GlowingButton({ children, href, type = 'button', wrapperClassName, ...props }: GlowingButtonProps) {
    const classes = cn(
        "button-85", 
        "inline-flex items-center justify-center gap-2 text-sm font-semibold", 
        wrapperClassName
    );

  if (href) {
    return (
      <Link href={href} {...props} className={classes}>
          {children}
      </Link>
    );
  }

  return (
    <button type={type} {...props} className={classes}>
        {children}
    </button>
  );
}
