"use client";

import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './ScrollStack.css';

const services = [
  {
    number: "01",
    title: "Product Development",
    description: "We turn ideas into real, scalable digital products ready for users and growth.",
    tags: ["MVP → Full product build", "SaaS platforms", "Startup ideas"],
    color: "from-blue-600/20 to-cyan-500/20",
    border: "border-blue-500/30"
  },
  {
    number: "02",
    title: "Full-Stack Web Apps",
    description: "Fast, secure, and scalable web apps built for real-world usage and high performance.",
    tags: ["Admin dashboards", "Business platforms", "Custom systems"],
    color: "from-purple-600/20 to-pink-500/20",
    border: "border-purple-500/30"
  },
  {
    number: "03",
    title: "Backend & API Systems",
    description: "Strong backend architecture that powers your entire product with reliability.",
    tags: ["REST APIs", "Authentication", "Database design"],
    color: "from-emerald-600/20 to-teal-500/20",
    border: "border-emerald-500/30"
  },
  {
    number: "04",
    title: "UI Engineering",
    description: "Clean, modern interfaces focused on user experience and brand conversion.",
    tags: ["SaaS UI design", "Landing pages", "Responsive apps"],
    color: "from-orange-600/20 to-yellow-500/20",
    border: "border-orange-500/30"
  },
  {
    number: "05",
    title: "Business Automation",
    description: "We help reduce manual work and improve operational efficiency through logic.",
    tags: ["Workflow automation", "Internal tools", "Process optimization"],
    color: "from-indigo-600/20 to-blue-500/20",
    border: "border-indigo-500/30"
  }
];

const Services = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <span className="text-purple-500 font-mono tracking-widest uppercase text-xs sm:text-sm md:text-base">
          🧭 CorelyticX — Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tighter mt-3 sm:mt-4 md:mt-6">
          What We Build
        </h2>
        <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-purple-500 my-4 sm:my-5 md:my-6" />
        <p className="text-white/50 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl font-light leading-relaxed">
          End-to-end digital systems designed to grow your business from idea to real-world impact.
        </p>
      </div>

      {/* Scroll Stack Implementation */}
      <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full">
        <ScrollStack 
          itemDistance={80} 
          itemScale={0.05} 
          itemStackDistance={20}
          baseScale={0.9}
        >
          {services.map((service, index) => (
            <ScrollStackItem key={index}>
              <div className={`w-full h-full bg-gradient-to-br ${service.color} backdrop-blur-xl border ${service.border} p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between group`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                  <div className="min-w-0">
                    <span className="text-purple-500 font-mono text-sm sm:text-base md:text-lg lg:text-xl">{service.number}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-2 sm:mt-3 md:mt-4 group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-white/10 flex-shrink-0 items-center justify-center text-white/20 text-2xl md:text-3xl group-hover:border-purple-500 group-hover:text-purple-500 transition-all">
                    ↗
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8">
                  <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs sm:text-sm md:text-base font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Services;