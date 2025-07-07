import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  wrapperClassName?: string
}

export function GlowingButton({ children, asChild = false, wrapperClassName, ...props }: GlowingButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <div className={cn("relative group inline-block", wrapperClassName)}>
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary via-cyan-400 to-accent
          rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200
          animate-borderGlow"
      ></div>
      <Comp
        className={cn("relative px-6 py-3 bg-gray-900 text-gray-100 rounded-lg font-semibold z-10 w-full h-full flex items-center justify-center gap-2", props.className)}
        {...props}
      >
        {children}
      </Comp>
    </div>
  )
}
