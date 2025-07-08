import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  wrapperClassName?: string;
}

export function GlowingButton({ children, href, type = 'button', onClick, wrapperClassName }: GlowingButtonProps) {
  const classes = cn(
    "relative group inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
    wrapperClassName
  );

  const content = (
    <>
      <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur transition-opacity duration-300 group-hover:opacity-100 animate-borderGlow" />
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
