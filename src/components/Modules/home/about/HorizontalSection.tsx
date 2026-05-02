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
          <div className="h-screen w-screen flex items-center justify-center relative px-4 sm:px-6 md:px-10 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
            <div className="max-w-4xl text-center z-10">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-2 sm:mb-3 md:mb-4 text-white">
                CorelyticX
              </h2>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/70 font-light mb-3 sm:mb-4 md:mb-6 px-2">
                We build digital systems that help businesses grow, scale, and automate.
              </p>
              <p className="text-purple-500 font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest">
                From idea → product → real-world impact.
              </p>
            </div>
          </div>

          {/* Panel 2: About */}
          <div className="h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 bg-[#050505]">
            <div className="max-w-4xl border-l-2 border-purple-500 pl-4 sm:pl-6 md:pl-8 lg:pl-12 py-6 sm:py-8 md:py-10 lg:py-12">
              <span className="text-purple-500 font-mono mb-4 sm:mb-6 md:mb-8 block tracking-widest uppercase text-xs sm:text-sm">01 // The Studio</span>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-white tracking-tight">
                CorelyticX is a product-focused web development studio building <span className="text-white/40">scalable SaaS applications</span> and modern digital platforms.
              </p>
            </div>
          </div>

          {/* Panel 3: Impact (List Focus) */}
          <div className="h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 impact-trigger">
            <div className="max-w-5xl w-full">
               <span className="text-purple-500 font-mono mb-6 sm:mb-8 md:mb-10 lg:mb-12 block tracking-widest uppercase text-xs sm:text-sm">02 // Business Impact</span>
               <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 text-white">Turn Vision into Value.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {[
                    "Turn ideas into real products",
                    "Build scalable SaaS platforms",
                    "Improve business workflows",
                    "Fast, conversion-focused apps",
                    "Clean, maintainable systems"
                  ].map((text, i) => (
                    <div key={i} className="impact-item group p-4 sm:p-5 md:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 sm:gap-4">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Panel 4: Philosophy */}
          <div className="h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 bg-[#050505] philosophy-trigger">
            <div className="text-center philosophy-text max-w-4xl">
               <h4 className="text-xs sm:text-sm md:text-base font-mono text-purple-500 mb-4 sm:mb-6 md:mb-8 uppercase tracking-[0.2em]">Our Philosophy</h4>
               <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-tight mb-4 sm:mb-6 md:mb-8">
                We don't build websites.
               </h2>
               <div className="h-0.5 sm:h-1 w-32 sm:w-40 md:w-48 bg-purple-500/50 mx-auto mb-6 sm:mb-8" />
               <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed italic px-2">
                 "We build systems that improve how businesses operate. <span className="text-white">Simple. Scalable. Reliable.</span>"
               </p>
            </div>
          </div>

          {/* Panel 5: CTA */}
          <div className="h-screen w-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 bg-purple-600">
             <div className="max-w-4xl text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-8 sm:mb-10 md:mb-12 px-2">
                  Ready to upgrade your business?
                </h2>
                <button className="group relative px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 bg-black rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95">
                  <span className="relative z-10 text-white text-sm sm:text-base md:text-lg lg:text-2xl font-bold">Start a Project</span>
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