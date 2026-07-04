"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingOrbsProps {
  className?: string;
}

export function FloatingOrbs({ className }: FloatingOrbsProps) {
  const orbs = [
    { size: 300, x: "10%", y: "20%", color: "rgba(99,102,241,0.15)", delay: 0 },
    { size: 200, x: "80%", y: "60%", color: "rgba(168,85,247,0.12)", delay: 2 },
    { size: 150, x: "60%", y: "10%", color: "rgba(129,140,248,0.1)", delay: 4 },
    { size: 250, x: "30%", y: "70%", color: "rgba(139,92,246,0.08)", delay: 1 },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
