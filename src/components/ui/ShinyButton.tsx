"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

export function ShinyButton({
  children,
  className,
  showArrow = true,
  variant = "primary",
  ...props
}: ShinyButtonProps) {
  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-purple-500/30",
    ghost: "bg-transparent text-white/70 hover:text-white",
  };

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
