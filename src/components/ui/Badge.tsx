import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "border border-border text-muted-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
