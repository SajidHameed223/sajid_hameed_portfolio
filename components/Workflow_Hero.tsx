"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, CheckCircle2, Rocket } from "lucide-react";

// --- Types ---
interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Data ---
const processSteps: ProcessStep[] = [
  {
    id: "1",
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Understanding your goals, audience, and requirements to craft a tailored roadmap for success.",
    icon: Sparkles,
  },
  {
    id: "2",
    number: "02",
    title: "Development & Architecture",
    description:
      "Building scalable applications with modern technologies, writing clean maintainable code, and implementing best practices.",
    icon: Code2,
  },
  {
    id: "3",
    number: "03",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing across multiple scenarios to ensure reliability, performance, and bug-free functionality.",
    icon: CheckCircle2,
  },
  {
    id: "4",
    number: "04",
    title: "Launch & Support",
    description:
      "Seamless deployment, performance optimization, and ongoing support to ensure lasting impact.",
    icon: Rocket,
  },
];

// --- Components ---

const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col "
    >
      {/* Card Content */}
      <div className="group relative flex flex-col p-8 bg-[#1C1C22] border border-orange-500/30 rounded-3xl hover:border-orange-500 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] h-full">
        {/* Header with Icon and Number */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon Container */}
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-200/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-lg">
            <step.icon size={28} strokeWidth={1.5} />
          </div>

          {/* Step Number */}
          <span className="text-5xl font-bold text-zinc-600 select-none">
            {step.number}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-300 mb-4 group-hover:text-orange-400 transition-colors leading-tight">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {step.description}
        </p>

        {/* Decorative gradient blob on hover */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Connecting Line (except for last item) */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-1/8 -right-8 w-8 -translate-y-1/2">
          <div className="border-t-2 border-dashed border-zinc-700/60 w-full" />
        </div>
      )}
    </motion.div>
  );
};

export default function HowIWork() {
  return (
    <div className="min-h-screen bg-[#1C1C22] text-gray-400 font-sans selection:bg-orange-500/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
          >
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Work
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400"
          >
            A proven, structured approach that ensures every project delivers
            maximum value.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
