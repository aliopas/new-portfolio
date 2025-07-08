import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glowingButtonVariants = cva(
  "relative group inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg p-px font-medium text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof glowingButtonVariants> {
  href?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}

const GlowingButton = ({
  href,
  size,
  className,
  wrapperClassName,
  children,
  ...props
}: GlowingButtonProps) => {
  const buttonContent = (
    <>
      <span className="absolute inset-[-1000%] animate-borderGlow bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl transition-all group-hover:bg-background/80">
        {children}
      </span>
    </>
  );

  const finalClassName = cn(glowingButtonVariants({ size }), className);

  if (href) {
    return (
      <Link href={href} className={cn(finalClassName, wrapperClassName)}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={cn(finalClassName, wrapperClassName)} {...props}>
      {buttonContent}
    </button>
  );
};

export { GlowingButton };
