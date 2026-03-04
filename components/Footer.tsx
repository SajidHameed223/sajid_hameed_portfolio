"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1C1C22] border-t border-orange-500/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Section - Logo and Cookie Settings */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center border border-orange-400 shadow-[0_0_25px_rgba(250,204,21,0.8)]">
                <span className="text-white font-bold text-sm font-mono">
                  &lt;/&gt;
                </span>
              </div>
              <span className="text-orange-400 font-bold text-lg tracking-[0.2em] uppercase font-mono">
                SAJID
              </span>
            </motion.div>
          </div>

          {/* Center Section - Copyright and Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p className="text-gray-300 text-sm">
              Copyright © {currentYear}{" "}
              <span className="text-orange-400 font-medium">Sajid Hameed</span>
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300">
              <Mail size={16} />
              <a 
                href="mailto:hameedsajid027@gmail.com" 
                className="text-sm hover:underline"
              >
                hameedsajid027@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300">
              <Phone size={16} />
              <a 
                href="tel:+923097301377" 
                className="text-sm hover:underline"
              >
                +92 309 7301377
              </a>
            </div>
          </motion.div>

          {/* Right Section - Social Links */}
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
                className="w-10 h-10 rounded-full bg-zinc-800/50 border border-orange-500/20 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
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