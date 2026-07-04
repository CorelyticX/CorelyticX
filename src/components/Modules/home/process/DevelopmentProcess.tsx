"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & alignment",
    duration: "Week 1",
    details: [
      "Stakeholder interviews & user research",
      "Technical audit & constraint mapping",
      "Success metrics definition",
    ],
  },
  {
    number: "02",
    title: "Architecture & design",
    duration: "Week 2–3",
    details: [
      "System architecture & data modeling",
      "UI/UX prototypes & design system",
      "Sprint planning & milestone mapping",
    ],
  },
  {
    number: "03",
    title: "Iterative development",
    duration: "Week 4–12",
    details: [
      "Weekly releases to staging",
      "Continuous QA & performance testing",
      "Real-time progress in your tools",
    ],
  },
  {
    number: "04",
    title: "Launch & handoff",
    duration: "Week 13+",
    details: [
      "Production deployment & monitoring",
      "Documentation & team training",
      "Post-launch support & iteration",
    ],
  },
];

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative bg-[#030014] py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <SiteContainer>
        <SectionHeader
          label="Process"
          title="How we deliver"
          description="A proven rhythm that keeps projects on track without sacrificing quality."
        />

        <div ref={containerRef} className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {steps.map((step, i) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "group flex shrink-0 items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                  activeStep === i
                    ? "border-purple-500/40 bg-purple-500/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                )}
                aria-pressed={activeStep === i}
              >
                <span
                  className={cn(
                    "font-mono text-sm transition-colors",
                    activeStep === i ? "text-purple-400" : "text-white/30"
                  )}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{step.title}</p>
                  <p className="text-xs text-white/35">{step.duration}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-transparent p-8 backdrop-blur-xl md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_50%)]" />
            <div className="relative">
              <span className="font-mono text-xs text-purple-400/70">
                {steps[activeStep].number} · {steps[activeStep].duration}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {steps[activeStep].title}
              </h3>
              <ul className="mt-8 space-y-4">
                {steps[activeStep].details.map((detail, i) => (
                  <motion.li
                    key={detail}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span className="text-sm md:text-base">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
};

export default DevelopmentProcess;
