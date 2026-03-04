"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Code2,
  Layers,
  Cpu,
  Terminal,
} from "lucide-react";
// import { clsx, type ClassValue } from 'clsx';

// --- Components ---

/**
 * AnimatedCounter: A reusable component to animate numbers counting up
 */
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Ease out quart
        const ease = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(ease * value));

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

/**
 * StatCard: The top row cards showing metrics
 */
const StatCard = ({
  value,
  label,
  suffix = "+",
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-[#1C1C22]/50 border border-gray-800 rounded-2xl hover:border-orange-500/30 transition-colors group"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
        <AnimatedCounter value={value} suffix={suffix} />
      </h3>
      <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
};

/**
 * InfoCard: The left sidebar cards (Job, Education, Status)
 */
const InfoCard = ({
  icon: Icon,
  title,
  subtitle,
  className = "",
  highlight = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  className?: string;
  highlight?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-2xl p-5 flex items-center gap-4 
        transition-all duration-300 cursor-default
        ${
          highlight
            ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-900/20"
            : "bg-[#1C1C22] border border-orange-500 hover:border-orange-600 text-gray-400"
        }
        ${className}
      `}
    >
      <div
        className={`
          p-3 rounded-xl
          ${highlight ? "bg-white/20" : "bg-[#1C1C22] text-orange-500"}
        `}
      >
        <Icon size={24} />
      </div>

      <div>
        <h4
          className={`font-bold text-lg leading-tight ${
            highlight ? "text-white" : "text-gray-400"
          }`}
        >
          {title}
        </h4>
        <p
          className={`text-sm ${
            highlight ? "text-orange-100" : "text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      </div>

      {highlight && (
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
      )}
    </motion.div>
  );
};

export default function AtAGlance() {
  return (
    <div className="min-h-screen bg-[#1C1C22] text-gray-400 selection:bg-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-start"
        >
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2 block">
            About Me
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            At a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Glance
            </span>
          </h1>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard value={1} label="Years Experience" />
          <StatCard value={5} label="Projects Delivered" />
          <StatCard value={15} label="Technical Skills" />
          <StatCard value={250} label="LeetCode Solved" />
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="space-y-6">
          <InfoCard
            icon={Briefcase}
            title="Software Engineer"
            subtitle="Full Stack Developer"
            highlight={true}
          />
          <InfoCard
            icon={GraduationCap}
            title="BS • Software Engineering"
            subtitle="University of Agriculture Faisalabad"
          />
          <InfoCard
            icon={Calendar}
            title="Open to Work"
            subtitle="Freelance & Full-time"
          />
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C1C22] border border-orange-400 rounded-2xl p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-orange-500 mb-6">
              <MapPin size={18} />
              <span className="font-medium tracking-wide">Based in Pakistan</span>
            </div>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I am a passionate Software Developer with hands-on experience in
                real-time projects, focused on building scalable and efficient
                solutions.
              </p>
              <p>
                I combine technical expertise with strategic thinking to deliver
                impactful digital solutions and bridge technology with business.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
