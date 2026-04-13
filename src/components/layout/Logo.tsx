import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export function Logo({ className, iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Hexagon className="h-8 w-8 text-primary fill-primary/10" strokeWidth={2} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-primary">
          K
        </span>
      </div>
      {!iconOnly && (
        <span className={cn("text-xl font-bold tracking-tight", light ? "text-white" : "text-foreground")}>
          Keystone<span className="text-primary">OS</span>
        </span>
      )}
    </div>
  );
}
