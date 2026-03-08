"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Server,
  Palette,
  Layers,
  Shield,
  ArrowUpRight,
  Brain,
  Sparkles,
} from "lucide-react";
import Loader from "@/components/Loader";

// --- Types ---
interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

// --- Data ---
const services: ServiceItem[] = [
  {
    id: "1",
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Building scalable, production-ready web applications from frontend to backend with clean architecture, secure APIs, and optimized performance.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "2",
    number: "02",
    title: "Frontend Engineering",
    description:
      "Developing responsive, interactive, and high-performance user interfaces using modern frameworks like React and Next.js with a strong focus on UX and accessibility.",
    icon: Code2,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "3",
    number: "03",
    title: "Backend & API Development",
    description:
      "Designing secure, scalable backend systems with REST/GraphQL APIs, database optimization, authentication, and efficient server-side logic.",
    icon: Server,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: "4",
    number: "04",
    title: "Machine Learning Solutions",
    description:
      "Building intelligent systems using machine learning for prediction, classification, recommendation, and data-driven decision-making.",
    icon: Brain,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: "5",
    number: "05",
    title: "Generative AI Applications",
    description:
      "Creating AI-powered applications using LLMs and generative models for chatbots, content generation, automation, and intelligent workflows.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: "6",
    number: "06",
    title: "Deployment & Cloud Integration",
    description:
      "Managing deployments, cloud hosting, CI/CD pipelines, domain configuration, and scalable infrastructure for reliable production environments.",
    icon: Shield,
    gradient: "from-teal-500 to-cyan-400",
  },
];

// --- Components ---

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-8 rounded-3xl bg-card border border-black/5 dark:border-orange-500/10 hover:border-orange-500/30 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] transition-all duration-300 h-full"
    >
      {/* Header with Number and Icon */}
      <div className="flex items-start justify-between mb-6">
        {/* Number */}
        <span className="text-5xl font-bold text-muted/30 group-hover:text-orange-500/30 transition-colors duration-300 select-none">
          {service.number}
        </span>

        {/* Icon with Gradient Background */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
        >
          <service.icon size={28} strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-orange-400 transition-colors leading-tight">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      {/* Footer Link */}
      <div className="pt-4 border-t border-black/5 dark:border-orange-500/10">
        <button className="group/btn flex items-center gap-2 text-sm font-medium text-muted hover:text-orange-400 transition-colors">
          <Link href="/contact" className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-black/10 dark:bg-gray-600 group-hover/btn:w-12 group-hover/btn:bg-orange-500 transition-all duration-300" />
            Get in Touch
            <ArrowUpRight
              size={16}
              className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300"
            />
          </Link>
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function SolutionsIProvide() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // show loader for 1s
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="min-h-screen bg-background text-muted font-sans selection:bg-orange-500/30 py-20 px-6 md:px-20 mt-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-foreground">Solutions</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              I Provide
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to meet your unique business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

