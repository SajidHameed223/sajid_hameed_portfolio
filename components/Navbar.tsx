"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  FolderGit2,
  BadgeCheck,
  NotebookText,
  ContactRound,
  Briefcase,
  X,
  Menu,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About Me", icon: User, href: "/about" },
  { label: "Projects", icon: FolderGit2, href: "/projects" },
  { label: "Services", icon: BadgeCheck, href: "/services" },
  { label: "Contact", icon: ContactRound, href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-3 bg-[#1C1C22] fixed top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center border border-orange-400 shadow-[0_0_25px_rgba(250,204,21,0.8)]">
            <span className="text-white font-bold text-sm font-mono">
              &lt;/&gt;
            </span>
          </div>
          <span className="text-orange-400 font-bold text-lg tracking-[0.2em] uppercase font-mono ">
            SAJID
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-3 py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href}>
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active === label
                      ? "bg-gradient-to-l from-orange-500 to-yellow-400 text-white shadow-[0_0_15px_rgba(250,204,21,0.7)]"
                      : "text-gray-300 hover:text-orange-400 hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              </Link>
            ))}
          </div>
          <button className="relative px-5 py-2 rounded-md bg-gray-300 text-gray-700 font-bold text-sm hover:bg-orange-100 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] cursor-pointer">
            Hire Me
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 flex justify-center items-center border border-orange-400 rounded-full bg-orange-600 shadow-[0_0_20px_rgba(250,204,21,0.8)]"
        >
          <Menu className="text-white w-5 h-5" />
        </button>
      </nav>

      {/* Mobile Full-Screen Panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1a1a20] flex flex-col px-6 py-6 md:hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white text-2xl font-bold">Navigation</h2>
              <div className="w-16 h-0.5 bg-gradient-to-l from-orange-500 to-yellow-400 mt-1 rounded-full" />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-[#2a2a32] border border-white/10 flex items-center justify-center text-white hover:bg-orange-600 transition-all shadow-[0_0_25px_rgba(250,204,21,0.8)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActive(label);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-4 px-3 py-3 rounded-xl font-semibold text-base transition-all duration-200 w-full ${
                  active === label
                    ? "bg-gradient-to-l from-orange-500 to-yellow-400 text-white shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{label}</span>
                {active === label && (
                  <span className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}

            {/* Hire Me */}
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 px-5 py-3 rounded-xl font-semibold text-base text-gray-300 hover:bg-white/5 transition-all w-full"
            >
              <Briefcase className="w-5 h-5 flex-shrink-0" />
              <span>Hire Me</span>
            </button>
          </div>
          <div className="w-full h-[4px] bg-gradient-to-l from-transparent via-orange-500 to-transparent" />
        </div>
      )}
    </>
  );
}
