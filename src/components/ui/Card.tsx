import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
