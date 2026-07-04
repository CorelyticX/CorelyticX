"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { motion } from "motion/react";
import { Cloud } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_60%)]" />

      <SiteContainer className="relative">
        <SectionHeader
          label="Technology"
          title="Built on proven foundations"
          description="We choose tools for longevity, not hype. Every stack decision is intentional."
          align="center"
        />

        <div className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 md:gap-8">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                animate={{
                  y: [0, -8, 0],
                }}
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
                whileHover={{ scale: 1.15, y: -12 }}
                className="group relative flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] md:h-20 md:w-20">
                  <Icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: tech.color }} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/30 transition-colors group-hover:text-white/60">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
};

export default TechStack;
