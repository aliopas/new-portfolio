import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean,
  wrapperClassName?: string
}

const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, asChild = false, wrapperClassName, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <div className={cn("relative group inline-block", wrapperClassName)}>
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-borderGlow"
        ></div>
        <Comp
          className={cn(
            "relative flex items-center justify-center gap-2 px-6 py-3 bg-card text-card-foreground rounded-lg font-semibold w-full",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </div>
    )
  }
)
GlowingButton.displayName = "GlowingButton"

export { GlowingButton }
