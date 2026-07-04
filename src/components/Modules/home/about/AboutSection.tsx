"use client";

import BlurText from "@/components/BlurText";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Compass,
  Layers,
  Rocket,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const stats = [
  { value: 120, suffix: "+", label: "Products shipped" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 14, suffix: " days", label: "Avg. sprint velocity" },
  { value: 40, suffix: "+", label: "Engineers & designers" },
];

const timeline = [
  {
    phase: "01",
    title: "Discover",
    description: "We map constraints, users, and the outcome that actually matters.",
    icon: Compass,
  },
  {
    phase: "02",
    title: "Architect",
    description: "Systems designed for scale — not slide decks.",
    icon: Layers,
  },
  {
    phase: "03",
    title: "Build",
    description: "Weekly releases. Real code. Zero theatre.",
    icon: Workflow,
  },
  {
    phase: "04",
    title: "Launch & evolve",
    description: "We stay through growth, pivots, and the hard second act.",
    icon: Rocket,
  },
];

const pillars = [
  {
    icon: Target,
    title: "Who we are",
    body: "A product engineering studio obsessed with clarity, performance, and long-term maintainability.",
  },
  {
    icon: Sparkles,
    title: "Why we exist",
    body: "Most teams have vision. Few have the infrastructure to execute it without friction. We close that gap.",
  },
  {
    icon: Rocket,
    title: "Our mission",
    body: "Ship software that compounds — for users, revenue, and the teams who run it.",
  },
];

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.06]"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />
      <p className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
        <CountUp to={value} duration={2.5} separator="," />
        <span className="text-purple-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/45">{label}</p>
    </motion.div>
  );
}

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-10"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-purple-500/20">
          <Icon className="h-5 w-5 text-purple-300" />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-purple-500/40 to-transparent min-h-[60px]" />
        )}
      </div>
      <div className="pb-12 md:pb-16">
        <span className="font-mono text-xs text-purple-400/70">{item.phase}</span>
        <h4 className="mt-1 text-xl font-semibold text-white md:text-2xl">{item.title}</h4>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/45 md:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <FloatingOrbs />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="About CorelyticX"
          title="Built for teams who ship."
          description="We are not an agency. We are the engineering partner you wish you had from day one."
        />

        <div className="mb-20 md:mb-28">
          <ScrollReveal
            containerClassName="!my-0 max-w-5xl"
            textClassName="!text-[clamp(1.75rem,5vw,3.5rem)] !font-medium !leading-[1.15] !tracking-tight !text-white/90"
            enableBlur
            blurStrength={6}
          >
            Precision engineering for products that define categories — not just fill roadmaps.
          </ScrollReveal>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/25 hover:shadow-[0_0_60px_-20px_rgba(99,102,241,0.3)]"
              >
                <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45 md:text-base">
                  {pillar.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <BlurText
              text="How we work"
              delay={60}
              className="mb-10 text-3xl font-bold tracking-tighter text-white md:text-4xl"
            />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <TimelineItem
                  key={item.phase}
                  item={item}
                  index={i}
                  isLast={i === timeline.length - 1}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-transparent p-10 backdrop-blur-2xl md:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
              <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-purple-400/80">
                Philosophy
              </p>
              <blockquote className="relative mt-6 text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
                &ldquo;We don&apos;t build features. We build{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  leverage
                </span>
                .&rdquo;
              </blockquote>
              <p className="relative mt-8 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                Every line of code should reduce complexity for someone — your user,
                your ops team, or your future self at 2am.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
