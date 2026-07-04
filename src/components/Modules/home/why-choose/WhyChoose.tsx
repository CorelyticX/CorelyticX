"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Gauge, Shield, Zap, Users, Clock, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Velocity without debt",
    description: "Ship in weeks, not quarters. Our architecture choices keep you fast at scale.",
  },
  {
    icon: Shield,
    title: "Production-grade from day one",
    description: "Auth, observability, CI/CD, and security baked in — not bolted on later.",
  },
  {
    icon: Gauge,
    title: "Performance obsessed",
    description: "Sub-second loads, optimized queries, and interfaces that feel instant.",
  },
  {
    icon: Users,
    title: "Embedded partnership",
    description: "We work inside your Slack, standups, and roadmap — not from a black box.",
  },
  {
    icon: Clock,
    title: "Predictable delivery",
    description: "Fixed sprints, transparent progress, and no surprise scope creep.",
  },
  {
    icon: Layers,
    title: "Full-stack depth",
    description: "Frontend craft meets backend rigor. One team, zero handoff friction.",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Why CorelyticX"
          title="The difference is in the details"
          description="We compete on craft, not credentials. Here's what sets our work apart."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.4)]"
              >
                <BorderBeam size={180} duration={10} delay={i * 1.5} />
                <div className="mb-5 inline-flex rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
