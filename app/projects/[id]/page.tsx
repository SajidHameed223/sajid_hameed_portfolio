"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Github,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  const images = [project.image, ...project.gallery];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background text-muted font-sans py-20 px-6 md:px-20 mt-8">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {project.title}
          </h1>

          <p className="text-muted leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Clock size={16} /> {project.duration}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} /> {project.completedDate}
            </div>
          </div>
        </div>

        {/* 🔥 Carousel */}
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-orange-500/10 group">

            {/* Fixed Size Container */}
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={images[currentIndex]}
                    alt="project image"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-orange-500/80 transition"
              >
                <ChevronLeft size={22} className="text-white" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-orange-500/80 transition"
              >
                <ChevronRight size={22} className="text-white" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-28 h-20 rounded-xl overflow-hidden cursor-pointer border transition ${
                  currentIndex === index
                    ? "border-orange-500"
                    : "border-black/5 dark:border-orange-500/10"
                }`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Key Features
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-muted">
                <CheckCircle2 size={18} className="text-orange-400 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-muted hover:text-foreground transition"
            >
              <Github size={18} /> Source Code
            </a>
          )}
        </div>

        {/* Back Button */}
        <div className="pt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-gradient text-muted hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}