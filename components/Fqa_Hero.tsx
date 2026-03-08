"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ---------------- Types ---------------- */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/* ---------------- Data ---------------- */

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is your current role?",
    answer:
      "I am currently working as a Nextjs Developer (Full Stack). I am open to freelance projects and full-time opportunities.",
  },
  {
    id: "2",
    question: "How much does it cost for a high-performing website?",
    answer:
      "The cost depends on the complexity, features, and timeline of the project. I offer flexible pricing models based on fixed projects or hourly rates. Contact me for a detailed quote tailored to your specific requirements.",
  },
  {
    id: "3",
    question: "How long will the work take from start to finish?",
    answer:
      "Timelines vary based on project scope. A simple landing page might take 1-2 days, while a complex SaaS application could take 2-3 months. I follow an agile methodology to deliver incremental updates and ensure transparency throughout the process.",
  },
  {
    id: "4",
    question: "Are you available to join as full-time?",
    answer:
      "Yes, I am currently open to full-time opportunities as well as contract-based work. I am looking for roles that allow me to leverage my technical skills while contributing to meaningful products.",
  },
];

/* ---------------- FAQ Item ---------------- */

const FAQItemCard = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(249,115,22,0.25)] ${isOpen
          ? "border-orange-500/50 bg-card shadow-lg"
          : "border-black/5 dark:border-orange-500/30 bg-card hover:border-orange-500"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between cursor-pointer p-3 md:p-4 text-left focus:outline-none"
      >
        <span
          className={`font-heading text-lg md:text-xl pr-8 transition-colors duration-300 ${isOpen ? "text-orange-400" : "text-foreground"
            }`}
        >
          {item.question}
        </span>

        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
              ? "bg-orange-500 text-white rotate-180"
              : "bg-black/5 dark:bg-zinc-800 text-muted"
            }`}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
              <p className="text-muted leading-relaxed text-base md:text-lg">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------- Main Component ---------------- */

export default function CommonQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-muted selection:bg-orange-500/30 py-10 px-6 md:px-20 transition-colors duration-300">
      <div className="mx-4">

        {/* Header */}

        <div className="mb-16 text-start">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-orange-500 text-sm tracking-[0.25em] uppercase mb-4 block"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight"
          >
            <span className="text-foreground">Common</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Questions
            </span>
          </motion.h2>
        </div>

        {/* FAQ List */}

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItemCard
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

