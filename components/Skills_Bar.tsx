"use client";
import { Sparkles } from "lucide-react";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Socket.IO",
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Git",
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full h-[80px] overflow-hidden bg-[#202020] flex items-center">
      {/* Scrolling Skills */}
      <div className="flex w-max animate-marquee">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-3 text-gray-500 font-mono text-md whitespace-nowrap flex items-center gap-1"
          >
            <Sparkles size={16} strokeWidth={2} className="text-orange-500" />
            {skill}
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-l from-transparent via-orange-400 to-transparent opacity-50" />
    </div>
  );
}