import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "border-2 shadow-[4px_4px_0_0_black] cursor-pointer inline-block font-semibold text-center no-underline select-none transition-all hover:bg-main-hover active:shadow-[2px_2px_0_0_black] active:translate-x-[2px] active:translate-y-[2px]",
  {
    variants: {
      variant: {
        default:
          "flex items-center justify-center bg-main-color border-black text-black",
        destructive:
        "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
        "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
        "text-main-green hover:text-main-green-dark shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),0_-2px_0_rgb(0,170,100)_inset] hover:shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),0_-2px_0_rgb(0,100,65)_inset]  bg-neutral-300  dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md has-[>svg]:px-3 px-4 md:px-6",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
        md: "h-8 rounded-md gap-2 px-4 has-[>svg]:px-3 text-md",
        lg: "h-11 rounded-md px-4 has-[>svg]:px-4 text-lg min-w-[120px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
