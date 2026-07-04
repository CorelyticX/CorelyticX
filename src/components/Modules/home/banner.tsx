"use client";

import Beams from "@/components/Modules/home/bannar/Beams";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import Magnet from "@/components/Magnet";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <>
      <ScrollProgress />
      <section
        id="hero"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030014]"
        aria-label="Hero"
      >
        <AuroraBackground />
        <AnimatedGrid />

        <div className="absolute inset-0 opacity-60">
          <Beams
            beamWidth={2}
            beamHeight={25}
            beamNumber={18}
            lightColor="#8b5cf6"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.25}
            rotation={25}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              Engineering studio · 2026
            </span>
          </motion.div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
            <BlurText
              text="Software that moves at the speed of ambition."
              delay={80}
              animateBy="words"
              className="justify-center text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/45 md:text-lg lg:text-xl"
          >
            CorelyticX designs and ships production-grade platforms for teams
            who refuse to compromise on craft, velocity, or scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Magnet magnetStrength={4} padding={80}>
              <ShinyButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Start a project
              </ShinyButton>
            </Magnet>
            <Magnet magnetStrength={6} padding={80}>
              <ShinyButton
                variant="secondary"
                showArrow={false}
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View our work
              </ShinyButton>
            </Magnet>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-20"
          >
            <GradientText
              colors={["#6366f1", "#a855f7", "#818cf8"]}
              animationSpeed={10}
              className="font-mono text-xs uppercase tracking-[0.3em] text-white/30"
            >
              Trusted by founders & product teams
            </GradientText>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>
    </>
  );
};

export default Banner;
