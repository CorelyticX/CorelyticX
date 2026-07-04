"use client";

import Magnet from "@/components/Magnet";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { SiteContainer } from "@/components/ui/SiteContainer";
import BlurText from "@/components/BlurText";
import { motion } from "motion/react";
import { Mail, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030014] py-24 md:py-32 lg:py-40"
      aria-labelledby="contact-heading"
    >
      <AuroraBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />

      <SiteContainer className="relative max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-[#030014]/80 p-10 backdrop-blur-2xl md:p-16 lg:p-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_50%)]" />

          <span className="relative font-mono text-xs uppercase tracking-[0.25em] text-purple-400/80">
            Let&apos;s build
          </span>

          <h2
            id="contact-heading"
            className="relative mt-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <BlurText
              text="Ready to ship something exceptional?"
              delay={60}
              animateBy="words"
              className="justify-center text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            />
          </h2>

          <p className="relative mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-white/45 md:text-lg">
            Tell us about your product. We&apos;ll respond within 24 hours with a
            clear path forward — no sales pitch, no fluff.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnet magnetStrength={4} padding={80}>
              <ShinyButton>
                <Mail className="h-4 w-4" />
                hi@corelyticx.com
              </ShinyButton>
            </Magnet>
            <Magnet magnetStrength={6} padding={80}>
              <ShinyButton variant="secondary" showArrow={false}>
                <Calendar className="h-4 w-4" />
                Book a call
              </ShinyButton>
            </Magnet>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
};

export default ContactCTA;
