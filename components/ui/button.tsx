import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", ...props }, ref) => {
  // We will use inline styles or css variables for dynamic colors later,
  // but for now let's stick to standard Tailwind classes and assume "primary" uses the tenant color.
  // Actually, to support dynamic tenant colors, we might need style={{ backgroundColor: ... }} in the implementation usage
  // or use CSS variables variables.
  // For this MVP, I'll allow passing a style or just generic classes.

  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"

  const variants = {
    primary: "bg-black text-white hover:bg-black/90", // Default fallback, will be overridden by style
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  return <button className={cn(baseStyles, variants[variant], className)} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button }
