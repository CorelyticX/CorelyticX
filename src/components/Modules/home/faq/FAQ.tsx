"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We specialize in SaaS platforms, AI-powered products, internal business systems, and API infrastructure. If it requires serious engineering, we're interested.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "MVPs ship in 6–8 weeks. Full platforms typically run 3–6 months. We work in two-week sprints with weekly staging releases so you see progress continuously.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We've helped founders go from idea to funded product. We offer flexible engagement models — from fixed-scope MVPs to ongoing retainer partnerships.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "TypeScript-first: Next.js, React, Node.js, PostgreSQL, AWS. We adapt to your existing stack when needed, but we have strong opinions about what works at scale.",
  },
  {
    question: "How do you handle communication?",
    answer:
      "Daily async updates, weekly sync calls, and full access to our project board. We integrate into your Slack and standups — not a separate black box.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer post-launch support, monitoring, and iteration sprints. Most clients transition to a retainer for ongoing feature development and infrastructure maintenance.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-white/[0.06]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-purple-300"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-white md:text-lg">{faq.question}</span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-purple-500/40 bg-purple-500/10 text-purple-400"
              : "border-white/10 bg-white/5 text-white/40"
          )}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-white/45 md:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#030014] py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Common questions"
          description="Everything you need to know before we start building."
          align="center"
        />

        <div className="mt-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
