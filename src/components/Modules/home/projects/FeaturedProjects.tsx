"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Nexus Analytics",
    category: "SaaS Platform",
    description: "Real-time data pipeline processing 2M+ events daily with sub-50ms query latency.",
    metrics: ["2M+ events/day", "99.99% uptime", "40% cost reduction"],
    gradient: "from-indigo-600/40 via-purple-600/30 to-violet-800/20",
  },
  {
    name: "VaultPay",
    category: "Fintech",
    description: "PCI-compliant payment infrastructure with multi-currency support across 30+ markets.",
    metrics: ["$50M+ processed", "30 markets", "SOC 2 certified"],
    gradient: "from-purple-600/40 via-fuchsia-600/30 to-pink-800/20",
  },
  {
    name: "FlowOps",
    category: "Internal Tools",
    description: "Workflow automation platform that replaced 12 legacy systems for a logistics enterprise.",
    metrics: ["12 systems replaced", "60% time saved", "200+ users"],
    gradient: "from-violet-600/40 via-indigo-600/30 to-blue-800/20",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#030014] py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <SiteContainer>
        <SectionHeader
          label="Selected work"
          title="Featured projects"
          description="A glimpse into the systems we've engineered for ambitious teams."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] transition-all duration-500 hover:scale-[1.02] hover:border-white/[0.12]"
            >
              <BorderBeam size={200} duration={14} delay={i * 3} />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex min-h-[420px] flex-col justify-between p-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/50"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all duration-300 group-hover:text-white">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
};

export default FeaturedProjects;
