import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#F5F7FF] text-[#111521] hover:bg-white",
        outline:
          "border border-white/80 bg-transparent text-white hover:bg-white hover:text-[#111521]",
        secondary:
          "bg-[#77A6D0] text-white hover:bg-[#5d95c8]",
        ghost:
          "bg-transparent text-white hover:bg-white/10",
        link:
          "text-[#77A6D0] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-5 text-xs",
        default: "h-12 px-8 text-[14px]",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };