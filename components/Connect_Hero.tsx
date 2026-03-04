"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function LetsConnect() {
  return (
    <div className="min-h-[60vh] bg-[#1C1C22] text-gray-400 font-sans selection:bg-orange-500/30 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#23232a] to-[#1a1a20] border border-orange-500/20 p-12 md:p-20 text-center">
          {/* Background Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-orange-400 text-sm font-sm tracking-wide">
                Available for New Projects
              </span>
            </motion.div>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-200">Let's Build Something </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Extraordinary
              </span>
            </motion.h2>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg md:text-lg max-w-2xl mb-10 leading-relaxed"
            >
              Have a project in mind? I'd love to hear about it. Let's connect
              and discuss how we can bring your vision to life.
            </motion.p>
            {/* CTA Button */}
<motion.button
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3, delay: 0.2 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-full shadow-lg shadow-orange-500/25 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] transition-all duration-100"
>
  Let's Connect
  <motion.span
    className="inline-flex text-white"
    whileHover={{ scale: 1.3, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <ArrowUpRight size={20} />
  </motion.span>
</motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
