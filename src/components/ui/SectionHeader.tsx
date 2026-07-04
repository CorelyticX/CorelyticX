"use client";

import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <span className="mb-4 block font-mono text-xs uppercase tracking-[0.25em] text-purple-400/80">
        {label}
      </span>
      <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <GradientText
          colors={["#818cf8", "#a855f7", "#6366f1", "#c084fc"]}
          animationSpeed={6}
          className="!mx-0 !max-w-none !rounded-none !p-0"
        >
          {title}
        </GradientText>
      </h2>
      {description && (
        <BlurText
          text={description}
          delay={40}
          animateBy="words"
          className="mt-6 text-base font-light leading-relaxed text-white/50 md:text-lg lg:text-xl"
        />
      )}
    </div>
  );
}
