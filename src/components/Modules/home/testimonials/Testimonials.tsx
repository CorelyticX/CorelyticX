"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CorelyticX shipped our MVP in six weeks. The architecture they chose still scales effortlessly two years later.",
    author: "Sarah Chen",
    role: "CEO, Nexus Analytics",
  },
  {
    quote:
      "They embedded with our team like co-founders. No agency vibes — just exceptional engineering.",
    author: "Marcus Webb",
    role: "CTO, VaultPay",
  },
  {
    quote:
      "We replaced twelve legacy systems with one platform. The ROI was visible within the first quarter.",
    author: "Elena Rodriguez",
    role: "VP Operations, FlowOps",
  },
  {
    quote:
      "Performance went from acceptable to exceptional. Our users noticed immediately.",
    author: "James Park",
    role: "Product Lead, Streamline",
  },
  {
    quote:
      "Transparent, fast, and obsessively quality-focused. The only dev partner we've kept long-term.",
    author: "Amira Hassan",
    role: "Founder, DataPulse",
  },
  {
    quote:
      "They didn't just build what we asked for — they challenged our assumptions and made the product better.",
    author: "David Okonkwo",
    role: "Head of Product, Ledgerly",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <article className="mx-3 w-[340px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl md:w-[400px] md:p-8">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-purple-400 text-purple-400" />
        ))}
      </div>
      <blockquote className="text-sm leading-relaxed text-white/70 md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-white/[0.06] pt-4">
        <p className="text-sm font-medium text-white">{testimonial.author}</p>
        <p className="text-xs text-white/40">{testimonial.role}</p>
      </footer>
    </article>
  );
}

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <SiteContainer>
        <SectionHeader
          label="Testimonials"
          title="Trusted by builders"
          description="What founders and engineering leaders say after working with us."
          align="center"
        />
      </SiteContainer>

      <InfiniteMarquee speed="slow" className="mt-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} testimonial={t} />
        ))}
      </InfiniteMarquee>

      <InfiniteMarquee speed="slow" reverse className="mt-6">
        {[...testimonials].reverse().map((t) => (
          <TestimonialCard key={`rev-${t.author}`} testimonial={t} />
        ))}
      </InfiniteMarquee>
    </section>
  );
};

export default Testimonials;
