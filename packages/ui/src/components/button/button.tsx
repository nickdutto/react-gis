import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@react-gis/ui/lib/utils";

import { buttonVariants } from "./variants";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
