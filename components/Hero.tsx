"use client";
import {
  Briefcase,
  ArrowRight,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import Image from "next/image";
import TimelineModal from "./Timeline";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);
const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: LeetCodeIcon, label: "LeetCode", href: "https://leetcode.com" },
  { icon: Mail, label: "Gmail", href: "mailto:you@gmail.com" },
];
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1C1C22] overflow-hidden flex items-center px-6 md:px-20 pt-24 pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(156,163,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        <div className="flex-1 max-w-xl text-center md:mt-6 md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-xs font-mono">
              Available for Freelance and Full-time
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-yellow-400">
              Digital Experiences
            </span>
          </h1>
          <h4 className="text-lg md:text-xl text-gray-300 mb-6 font-mono">
            Solving problems, building web solutions, and bringing ideas to
            life.
          </h4>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-mono">
            I am <strong className="text-white">Sajid Hameed</strong> a Software
            Engineer who combines web development skills with creative problem
            solving to deliver scalable and elegant solutions.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap mb-8">
            <TimelineModal />

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-orange-400 hover:text-orange-400 hover:scale-105 transition-all">
              Lets Talk
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-px w-8 bg-gray-600/70" />
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-gray-600/50 bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400/60 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <div className="h-px w-8 bg-gray-600/70" />
          </div>
        </div>

        <div className="relative flex-shrink-0 flex items-center justify-center mt-10 md:mt-0">
          <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-br from-orange-500/30 to-yellow-400/20 blur-[40px]" />
          <div
            className="absolute w-[350px] h-[350px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-orange-400/40"
            style={{ animation: "spinSlow 20s linear infinite" }}
          />
          <div
            className="absolute w-[325px] h-[325px] md:w-[385px] md:h-[385px] rounded-full border border-dashed border-yellow-400/30"
            style={{ animation: "spinSlow 14s linear infinite reverse" }}
          />
          <div className="absolute w-[305px] h-[305px] md:w-[355px] md:h-[355px] rounded-full border border-orange-400/20 shadow-[0_0_40px_rgba(251,146,60,0.25)]" />
          <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-2 border-orange-400/50 shadow-[0_0_50px_rgba(251,146,60,0.4),0_0_80px_rgba(234,179,8,0.15)]">
            <Image
              src="/profile_image.png"
              alt="Sajid Hameed"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-l from-transparent via-orange-400 to-transparent opacity-50" />
      <style>{`@keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
