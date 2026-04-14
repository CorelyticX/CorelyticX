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
    <section className="bg-black py-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-purple-500 font-mono tracking-widest uppercase text-sm">
          🧭 CorelyticX — Services
        </span>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mt-4">
          What We Build
        </h2>
        <div className="h-[1px] w-24 bg-purple-500 my-6" />
        <p className="text-white/50 text-xl max-w-xl font-light">
          End-to-end digital systems designed to grow your business from idea to real-world impact.
        </p>
      </div>

      {/* Scroll Stack Implementation */}
      <div className="h-[80vh] w-full">
        <ScrollStack 
          itemDistance={80} 
          itemScale={0.05} 
          itemStackDistance={20}
          baseScale={0.9}
        >
          {services.map((service, index) => (
            <ScrollStackItem key={index}>
              <div className={`w-full h-full bg-gradient-to-br ${service.color} backdrop-blur-xl border ${service.border} p-8 md:p-12 flex flex-col justify-between group`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-purple-500 font-mono text-xl">{service.number}</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mt-2 group-hover:translate-x-2 transition-transform duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="hidden md:block w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20 text-3xl group-hover:border-purple-500 group-hover:text-purple-500 transition-all">
                    ↗
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-white/70 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm font-mono">
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