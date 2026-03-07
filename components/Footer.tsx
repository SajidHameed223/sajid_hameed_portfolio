"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/SajidHameed223", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sajid-hameed-9616a7266/", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-black/5 dark:border-orange-500/20 py-10 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo Section */}

          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center border border-orange-400 shadow-[0_0_25px_rgba(250,204,21,0.8)]">
                <span className="text-white font-heading font-bold text-sm">
                  &lt;/&gt;
                </span>
              </div>

              <span className="font-heading text-orange-400 font-bold text-lg tracking-[0.2em] uppercase">
                SAJID
              </span>
            </motion.div>
          </div>

          {/* Center Section */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p className="text-muted text-sm">
              Copyright © {currentYear}{" "}
              <span className="text-orange-400 font-medium">
                Sajid Hameed
              </span>
            </p>

            <div className="flex items-center gap-2 text-muted hover:text-orange-400 transition-colors duration-300">
              <Mail size={16} />
              <a
                href="mailto:hameedsajid027@gmail.com"
                className="font-heading text-sm hover:underline"
              >
                hameedsajid027@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 text-muted hover:text-orange-400 transition-colors duration-300">
              <Phone size={16} />
              <a
                href="tel:+923097301377"
                className="font-heading text-sm hover:underline"
              >
                +92 309 7301377
              </a>
            </div>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-zinc-800/50 border border-black/5 dark:border-orange-500/20 flex items-center justify-center text-muted hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
}