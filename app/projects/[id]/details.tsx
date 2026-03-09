"use client";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
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
import Loader from "@/components/Loader";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // ✅ Memoize images array to avoid recreation on every render
  const images = useMemo(
    () => (project ? [project.image, ...project.gallery] : []),
    [project],
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (img: string) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (loading) return <Loader />;
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

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

        {/* Carousel */}
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-orange-500/10">
            <div className="relative w-full h-75 md:h-112.5 lg:h-125">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`project image ${currentIndex + 1}`}
                    fill
                    className="object-cover cursor-zoom-in"
                    // ✅ Only the main image click opens the modal
                    onClick={() => openModal(images[currentIndex])}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-orange-500/80 transition"
              >
                <ChevronLeft size={22} className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-orange-500/80 transition"
              >
                <ChevronRight size={22} className="text-white" />
              </button>
            </div>
          </div>

          {/* Thumbnails — only change slide, don't open modal */}
          <div className="flex gap-4 overflow-x-auto pb-1">
            {images.map((img, index) => (
              <div
                key={index}
                // ✅ Thumbnails ONLY update the carousel index
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                  currentIndex === index
                    ? "border-orange-500"
                    : "border-black/5 dark:border-orange-500/10"
                }`}
              >
                <Image
                  src={img}
                  alt={`thumbnail ${index + 1}`}
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

        {/* Category */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Industry/Category
          </h2>
          <p className="text-muted">{project.category}</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Key Features
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-muted">
                <CheckCircle2
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl === "/" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl border-2 border-primary text-orange-400 hover:text-orange-300 hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 bg-orange-500 rounded-xl text-white hover:text-foreground hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transition"
            >
              <Github size={18} /> Source Code
            </a>
          )}
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-white hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>

      {/* ✅ AnimatePresence wraps modal for proper mount/unmount animation */}
      <AnimatePresence>
        {isModalOpen && modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              // ✅ Fixed: explicit height so the image can size itself correctly
              className="relative w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImage}
                alt="Full Project Image"
                fill
                className="object-contain"
              />
              <motion.button
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-900/60 border border-white/10 flex items-center justify-center text-gray-200 hover:text-white hover:bg-orange-500/60 transition-all"
                onClick={closeModal}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
