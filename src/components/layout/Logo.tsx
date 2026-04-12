import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Hexagon className="h-8 w-8 text-primary fill-primary/10" strokeWidth={2} />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-primary">
          K
        </span>
      </div>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight">
          Keystone<span className="text-primary">OS</span>
        </span>
      )}
    </div>
  );
}
