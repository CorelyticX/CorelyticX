"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Truck,
} from "lucide-react";

const industries = [
  {
    name: "Fintech",
    description: "Payment rails, compliance, and real-time financial infrastructure.",
    icon: Landmark,
    span: "md:col-span-2",
    gradient: "from-indigo-600/25 to-purple-600/10",
  },
  {
    name: "Healthcare",
    description: "HIPAA-ready platforms for patient data and clinical workflows.",
    icon: HeartPulse,
    span: "md:col-span-1",
    gradient: "from-emerald-600/20 to-teal-600/10",
  },
  {
    name: "E-commerce",
    description: "High-conversion storefronts and inventory management at scale.",
    icon: ShoppingBag,
    span: "md:col-span-1",
    gradient: "from-purple-600/25 to-fuchsia-600/10",
  },
  {
    name: "Enterprise",
    description: "Internal tools, ERP integrations, and workflow automation.",
    icon: Building2,
    span: "md:col-span-1",
    gradient: "from-blue-600/20 to-indigo-600/10",
  },
  {
    name: "Logistics",
    description: "Fleet tracking, route optimization, and supply chain visibility.",
    icon: Truck,
    span: "md:col-span-1",
    gradient: "from-amber-600/20 to-orange-600/10",
  },
  {
    name: "EdTech",
    description: "Learning platforms with analytics, assessments, and engagement tools.",
    icon: GraduationCap,
    span: "md:col-span-2",
    gradient: "from-violet-600/25 to-indigo-600/10",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="relative bg-[#030014] py-24 md:py-32"
      aria-labelledby="industries-heading"
    >
      <SiteContainer>
        <SectionHeader
          label="Industries"
          title="Where we create impact"
          description="Deep domain expertise across sectors that demand precision and compliance."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/20",
                  industry.span
                )}
              >
                <BorderBeam size={160} duration={12} delay={i * 2} />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80",
                    industry.gradient
                  )}
                />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">
                    {industry.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
};

export default Industries;
