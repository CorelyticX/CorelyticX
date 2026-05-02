"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'var(--background)',
  menuColor = 'var(--foreground)',
  buttonBgColor = 'var(--foreground)',
  buttonTextColor = 'var(--background)'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return 60 + contentHeight + 16;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.4, 
      ease, 
      stagger: 0.08 
    }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => { tl?.kill(); };
  }, [items]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-[99] box-border ${className}`}>
      <nav 
        ref={navRef} 
        className="relative block w-full h-[60px] p-0 border-b border-white/10 backdrop-blur-md overflow-hidden animate-in fade-in duration-500 will-change-[height]"
        style={{ backgroundColor: baseColor }}
      >
        {/* Top Bar */}
        <div className="mx-auto w-full max-w-7xl h-[60px] flex items-center justify-between px-3 sm:px-4 md:px-6 z-10 relative">
          <div 
            className="flex flex-col gap-[6px] cursor-pointer md:order-none order-2 group"
            onClick={toggleMenu}
            style={{ color: menuColor }}
          >
            <div className={`w-5 h-0.5 sm:w-6 sm:h-[2px] bg-current transition-all duration-300 ${isHamburgerOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`w-5 h-0.5 sm:w-6 sm:h-[2px] bg-current transition-all duration-300 ${isHamburgerOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 sm:w-6 sm:h-[2px] bg-current transition-all duration-300 ${isHamburgerOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:order-1">
            <img src={logo} alt={logoAlt} className="h-6 sm:h-7 md:h-8 w-auto brightness-0 invert-0 dark:invert" />
          </div>

          <button
            className="hidden md:block h-9 sm:h-10 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        {/* Content/Cards Area */}
        <div 
          className={`card-nav-content mx-auto w-full max-w-7xl absolute left-0 right-0 top-[60px] p-3 sm:p-4 md:p-6 flex flex-col md:flex-row md:items-stretch gap-2 sm:gap-3 md:gap-4 transition-[visibility] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="flex-1 min-w-0 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 min-h-[140px] sm:min-h-[160px] md:h-auto border border-white/5 shadow-2xl transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">{item.label}</div>
              <div className="mt-auto flex flex-col gap-2 text-xs sm:text-sm md:text-base">
                {item.links.map((lnk, i) => (
                  <a 
                    key={i} 
                    href={lnk.href} 
                    className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-all hover:translate-x-1"
                  >
                    <GoArrowUpRight className="text-base sm:text-lg" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
