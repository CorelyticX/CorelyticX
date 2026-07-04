"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "SaaS Platforms",
    description: "Multi-tenant architecture, billing, auth, and dashboards — production-ready from sprint one.",
    icon: Cloud,
    gradient: "from-indigo-600/30 via-purple-600/20 to-violet-600/10",
    glow: "group-hover:shadow-[0_0_80px_-20px_rgba(99,102,241,0.5)]",
    span: "md:col-span-2 md:row-span-2",
    size: "large",
  },
  {
    title: "AI Solutions",
    description: "LLM pipelines, RAG systems, and intelligent automation embedded in your product.",
    icon: Bot,
    gradient: "from-purple-600/30 via-fuchsia-600/20 to-pink-600/10",
    glow: "group-hover:shadow-[0_0_60px_-20px_rgba(168,85,247,0.5)]",
    span: "md:col-span-1",
    size: "medium",
  },
  {
    title: "Custom Web Applications",
    description: "Pixel-perfect interfaces with sub-100ms interactions and obsessive performance.",
    icon: Globe,
    gradient: "from-violet-600/30 via-indigo-600/20 to-blue-600/10",
    glow: "group-hover:shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)]",
    span: "md:col-span-1",
    size: "medium",
  },
  {
    title: "Internal Business Systems",
    description: "CRM, ERP, and ops tools that replace spreadsheets and manual chaos.",
    icon: Cpu,
    gradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/10",
    glow: "group-hover:shadow-[0_0_60px_-20px_rgba(59,130,246,0.4)]",
    span: "md:col-span-1",
    size: "medium",
  },
  {
    title: "Automation Tools",
    description: "Workflow engines that eliminate repetitive work across your organization.",
    icon: Workflow,
    gradient: "from-emerald-600/20 via-teal-600/15 to-cyan-600/10",
    glow: "group-hover:shadow-[0_0_60px_-20px_rgba(20,184,166,0.35)]",
    span: "md:col-span-1",
    size: "medium",
  },
  {
    title: "API Development",
    description: "REST, GraphQL, and event-driven APIs built for reliability and developer experience.",
    icon: Code2,
    gradient: "from-amber-600/20 via-orange-600/15 to-red-600/10",
    glow: "group-hover:shadow-[0_0_60px_-20px_rgba(245,158,11,0.35)]",
    span: "md:col-span-2",
    size: "large",
  },
];

function BentoCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const isLarge = service.size === "large";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/[0.12]",
        service.glow,
        service.span,
        isLarge ? "min-h-[320px] p-8 md:p-10" : "min-h-[240px] p-6 md:p-8"
      )}
    >
      <BorderBeam size={250} duration={12} delay={index * 2} />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
          service.gradient
        )}
      />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-500/20" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <motion.div
            className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/30"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon
              className={cn(
                "text-purple-300",
                isLarge ? "h-10 w-10" : "h-7 w-7"
              )}
            />
          </motion.div>
          <h3
            className={cn(
              "font-bold tracking-tight text-white",
              isLarge ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {service.title}
          </h3>
        </div>
        <p
          className={cn(
            "mt-4 leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70",
            isLarge ? "max-w-lg text-base md:text-lg" : "text-sm md:text-base"
          )}
        >
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

const WhatWeBuild = () => {
  return (
    <section
      id="work"
      className="relative bg-[#030014] py-24 md:py-32 lg:py-40"
      aria-labelledby="work-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Capabilities"
          title="What we build"
          description="End-to-end systems engineered for growth — from architecture to the last animation frame."
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {services.map((service, index) => (
            <BentoCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
