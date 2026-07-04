"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function InfiniteMarquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  reverse = false,
}: InfiniteMarqueeProps) {
  const speedMap = { slow: "60s", normal: "40s", fast: "25s" };

  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-6",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          )}
          style={{ animationDuration: speedMap[speed] }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
