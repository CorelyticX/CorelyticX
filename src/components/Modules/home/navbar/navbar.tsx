"use client";

import { Logo } from "./Logo";
import Magnet from "@/components/Magnet";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[99] w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.08] bg-[#030014]/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#030014]/40 backdrop-blur-md"
      )}
    >
      <SiteContainer as="div" className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Link
          href="#hero"
          className="relative z-[101] shrink-0 transition-opacity hover:opacity-80"
          aria-label="CorelyticX home"
          onClick={closeMobile}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Magnet magnetStrength={5} padding={60}>
            <ShinyButton
              showArrow={false}
              className="!px-6 !py-2.5 !text-sm"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a project
            </ShinyButton>
          </Magnet>
        </div>

        <button
          type="button"
          className="relative z-[101] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </SiteContainer>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#030014]/95 backdrop-blur-xl lg:hidden"
          >
            <SiteContainer className="flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 pt-3 border-t border-white/[0.06]"
              >
                <ShinyButton
                  showArrow={false}
                  className="w-full justify-center"
                  onClick={() => {
                    closeMobile();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start a project
                </ShinyButton>
              </motion.div>
            </SiteContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
