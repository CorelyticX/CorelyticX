"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackProps {
  children: React.ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  baseScale?: number;
}

export const ScrollStackItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="scroll-stack-card sticky top-[10vh] border border-white/10 shadow-2xl overflow-hidden rounded-[32px] bg-[#0a0a0a]">
      {children}
    </div>
  );
};

const ScrollStack: React.FC<ScrollStackProps> = ({ 
  children, 
  itemDistance = 80, 
  itemScale = 0.05,
  baseScale = 0.95
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
      
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        if (isLast) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 10%",
          endTrigger: containerRef.current,
          end: "bottom 10%",
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: baseScale - (cards.length - 1 - index) * itemScale,
            opacity: 1 - (cards.length - 1 - index) * 0.1,
            filter: "blur(2px)",
            ease: "none",
          })
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [baseScale, itemScale]);

  return (
    <div ref={containerRef} className="scroll-stack-container relative flex flex-col gap-[20vh] px-4 md:px-20 pb-[20vh]">
      {children}
    </div>
  );
};

export default ScrollStack;
