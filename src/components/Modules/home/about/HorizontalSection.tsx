"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-400vw", // (Total panels - 1) * 100
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "4000 top", // More "distance" makes the scroll feel smoother
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      // Animation for Panel 3 List Items (Staggered fade in)
      gsap.from(".impact-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".impact-trigger",
          containerAnimation: pin, // Critical: syncs with horizontal scroll
          start: "left center",
        },
      });

      // Animation for Panel 4 (Scale up text)
      gsap.from(".philosophy-text", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".philosophy-trigger",
          containerAnimation: pin,
          start: "left center",
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[500vw] flex flex-row relative">
          
          {/* Panel 1: Hero */}
          <div className="h-screen w-screen flex items-center justify-center relative px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
            <div className="max-w-4xl text-center z-10">
              <h2 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
                CorelyticX
              </h2>
              <p className="text-2xl md:text-3xl text-white/70 font-light mb-4">
                We build digital systems that help businesses grow, scale, and automate.
              </p>
              <p className="text-purple-500 font-mono text-sm uppercase tracking-widest">
                From idea → product → real-world impact.
              </p>
            </div>
          </div>

          {/* Panel 2: About */}
          <div className="h-screen w-screen flex items-center justify-center px-10 bg-[#050505]">
            <div className="max-w-4xl border-l-2 border-purple-500 pl-12 py-8">
              <span className="text-purple-500 font-mono mb-6 block tracking-widest uppercase">01 // The Studio</span>
              <p className="text-4xl md:text-6xl font-medium leading-tight text-white tracking-tight">
                CorelyticX is a product-focused web development studio building <span className="text-white/40">scalable SaaS applications</span> and modern digital platforms.
              </p>
            </div>
          </div>

          {/* Panel 3: Impact (List Focus) */}
          <div className="h-screen w-screen flex items-center justify-center px-10 impact-trigger">
            <div className="max-w-5xl w-full">
               <span className="text-purple-500 font-mono mb-8 block tracking-widest uppercase">02 // Business Impact</span>
               <h3 className="text-5xl md:text-6xl font-bold mb-12 text-white">Turn Vision into Value.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Turn ideas into real products",
                    "Build scalable SaaS platforms",
                    "Improve business workflows",
                    "Fast, conversion-focused apps",
                    "Clean, maintainable systems"
                  ].map((text, i) => (
                    <div key={i} className="impact-item group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                      <p className="text-xl text-white/80">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Panel 4: Philosophy */}
          <div className="h-screen w-screen flex items-center justify-center px-10 bg-[#050505] philosophy-trigger">
            <div className="text-center philosophy-text">
               <h4 className="text-2xl font-mono text-purple-500 mb-6 uppercase tracking-[0.2em]">Our Philosophy</h4>
               <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
                We don’t build websites.
               </h2>
               <div className="h-[1px] w-48 bg-purple-500/50 mx-auto mb-8" />
               <p className="text-3xl md:text-4xl text-white/60 max-w-3xl mx-auto leading-relaxed italic">
                 "We build systems that improve how businesses operate. <span className="text-white">Simple. Scalable. Reliable.</span>"
               </p>
            </div>
          </div>

          {/* Panel 5: CTA */}
          <div className="h-screen w-screen flex flex-col items-center justify-center px-10 bg-purple-600">
             <div className="max-w-4xl text-center">
                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">
                  Ready to upgrade your business?
                </h2>
                <button className="group relative px-12 py-6 bg-black rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95">
                  <span className="relative z-10 text-white text-2xl font-bold">Start a Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;