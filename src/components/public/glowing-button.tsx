import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  wrapperClassName?: string;
}

export function GlowingButton({
  children,
  href,
  type = 'button',
  onClick,
  wrapperClassName,
}: GlowingButtonProps) {
  const commonClasses =
    'relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90';

  const glowClasses =
    "before:absolute before:inset-0 before:-z-10 before:rounded-[--radius] before:bg-primary/50 before:opacity-50 before:blur-lg before:transition-all before:duration-300 hover:before:opacity-75 hover:before:scale-105";

  const buttonContent = (
    <div className={cn('relative', wrapperClassName)}>
      {href ? (
        <Link href={href} className={cn(commonClasses, glowClasses)}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={cn(commonClasses, glowClasses)}
        >
          {children}
        </button>
      )}
    </div>
  );

  return buttonContent;
}
