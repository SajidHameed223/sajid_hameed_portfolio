"use client";
import { useState, useEffect } from "react";
import { X, Briefcase } from "lucide-react";

const TIMELINE = [
  {
    year: "2026",
    month: "January",
    title: "Software Engineer — Inwork Global",
    desc: "Joined Inwork Global as Software Engineer M1. Leading frontend development with React.js and Next.js while also working on backend systems with Socket.io and scalable cloud deployments.",
  },
  {
    year: "2025",
    month: "August",
    title: "Promoted to Software Engineer (M1)",
    desc: "Led frontend development for Resource Planning system and coordinated multiple feature deliveries.",
  },
  {
    year: "2024",
    month: "March",
    title: "Junior Frontend Developer",
    desc: "Built responsive web applications with React.js and Tailwind CSS in collaboration with backend and design teams.",
  },
  {
    year: "2023",
    month: "June",
    title: "Freelance Web Developer",
    desc: "Delivered custom web apps using Next.js, TypeScript and REST APIs for multiple clients.",
  },
];

export default function TimelineModal() {
  const [open, setOpen] = useState(false);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ESC close */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer bg-gradient-to-l from-orange-400 to-yellow-400 text-white font-bold text-sm shadow-[0_0_25px_rgba(251,146,60,0.5)] hover:shadow-[0_0_35px_rgba(251,146,60,0.7)] hover:scale-105 transition-all"
      >
        <Briefcase className="w-4 h-4" />
        Timeline
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex justify-center pt-24 px-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[80vh] bg-[#1e1e24] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(251,146,60,0.2)] flex flex-col overflow-hidden animate-scaleIn"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-white/10 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-white font-mono mb-2">
                  Professional Timeline
                </h2>
                <p className="text-gray-400 text-sm font-mono">
                  Career journey and growth milestones.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500/20 hover:border-orange-400/40 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 custom-scroll">
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-20 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-400 via-yellow-400 to-orange-400/20 rounded-full" />

                <div className="flex flex-col gap-10">
                  {TIMELINE.map((item, i) => (
                    <div key={i} className="relative flex gap-6">
                      {/* Year Column */}
                      <div className="w-16 text-right">
                        <span className="text-orange-400 font-bold text-xl font-mono">
                          {item.year}
                        </span>
                      </div>

                      {/* Dot positioned exactly on the line */}
                      <div className="relative w-8 flex justify-center">
                        <div className="absolute top-2 -left-[14px] w-4 h-4 rounded-full bg-orange-400 border-4 border-white shadow-[0_0_15px_rgba(251,146,60,0.9)]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <p className="text-gray-500 text-xs font-mono mb-1">
                          {item.month}
                        </p>
                        <h3 className="text-white font-bold text-base font-mono mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-mono leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-8 bg-gradient-to-t from-[#1e1e24] to-transparent pointer-events-none" />
          </div>

          {/* Animations + Scrollbar */}
          <style jsx>{`
            .custom-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scroll::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #fb923c, #facc15);
              border-radius: 9999px;
            }
            .custom-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }
            .animate-scaleIn {
              animation: scaleIn 0.25s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
