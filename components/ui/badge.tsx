import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "teal" | "mint" | "amber" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-charcoal text-clinical border border-slate-700",
    teal: "bg-teal/20 text-teal border border-teal/40 font-mono",
    mint: "bg-mint/20 text-mint border border-mint/40 font-mono",
    amber: "bg-amber/20 text-amber border border-amber/40 font-mono",
    outline: "border border-slate-700 text-mutedslate bg-transparent",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
