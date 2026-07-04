"use client";

import CountUp from "@/components/CountUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { motion } from "motion/react";

const metrics = [
  { value: 120, suffix: "+", label: "Projects delivered", sublabel: "Across 15 countries" },
  { value: 98, suffix: "%", label: "Client satisfaction", sublabel: "Measured post-launch" },
  { value: 3.2, suffix: "x", label: "Average ROI", sublabel: "Within first 12 months" },
  { value: 14, suffix: " days", label: "Time to first release", sublabel: "From kickoff to staging" },
];

const ClientMetrics = () => {
  return (
    <section
      id="metrics"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32"
      aria-labelledby="metrics-heading"
    >
      <FloatingOrbs />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Impact"
          title="Numbers that speak"
          description="Outcomes we measure — and stand behind."
          align="center"
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group text-center"
            >
              <p className="font-mono text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                <CountUp to={metric.value} duration={2.5} />
                <span className="text-purple-400">{metric.suffix}</span>
              </p>
              <p className="mt-3 text-sm font-medium text-white/70 md:text-base">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-white/35">{metric.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMetrics;
