import type React from "react";
import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function TextGradient({
  children,
  className,
  from = "#00c2ff",
  to = "#ff5733",
}: TextGradientProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {children}
    </span>
  );
}
