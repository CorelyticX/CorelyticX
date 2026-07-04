"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute -inset-[10px] opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
            repeating-linear-gradient(100deg, #6366f1 10%, #a855f7 15%, #6366f1 20%, #818cf8 25%, #6366f1 30%)
          `,
          backgroundSize: "300% 200%",
          backgroundPosition: "50% 50%",
          filter: "blur(10px)",
          animation: "aurora 60s linear infinite",
        }}
      />
      {showRadialGradient && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,50,255,0.15),transparent_50%)]" />
      )}
    </div>
  );
}
