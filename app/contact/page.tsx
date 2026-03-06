"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  RotateCcw,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-200 text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-[#1a1a20] border border-orange-500/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300"
      />
    </div>
  );
};

const TextAreaField = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-200 text-sm font-medium">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-[#1a1a20] border border-orange-500/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300 resize-none"
      />
    </div>
  );
};

const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="group flex items-start gap-4 p-5 rounded-2xl bg-[#23232a]/50 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-gray-200 font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

const SocialButton = ({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
    >
      <Icon size={20} />
    </a>
  );
};

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#1C1C22] text-gray-400 font-sans selection:bg-orange-500/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-col">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Let's
            </span>{" "}
            <span className="text-gray-200">Connect</span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Right Side - Contact Info first on small screens Card*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
              Contact <span className="text-orange-400">Information</span>
            </h3>

            {/* Profile Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#23232a] to-[#1a1a20] border border-orange-500/10 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500/50">
                  <Image
                    src="/profile_image.png"
                    alt="Sajid Hameed"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">
                    Sajid Hameed
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    <span className="text-orange-400 text-xs font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <SocialButton
                  icon={Linkedin}
                  href="https://linkedin.com"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={Github}
                  href="https://github.com"
                  label="GitHub"
                />
                <SocialButton
                  icon={Mail}
                  href="mailto:sajid@example.com"
                  label="Email"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed py-2">
                My inbox is always open. Whether you have a project or just want
                to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactCard
                icon={Phone}
                title="Phone"
                value="(+91) 8910171611"
                href="tel:+918910171611"
              />
              <ContactCard
                icon={Mail}
                title="Email"
                value="dipakmourya1508@gmail.com"
                href="mailto:dipakmourya1508@gmail.com"
              />
              <ContactCard icon={MapPin} title="Location" value="India" />
            </div>
          </motion.div>

          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Outer Glow Container */}
            <div className="relative p-8 rounded-3xl bg-[#1a1a20] shadow-[0_0_30px_rgba(255,140,0,0.5)]">
              {/* Inner Form Card */}
              <div className="p-8 md:p-10 rounded-3xl bg-[#23232a] border border-orange-500/10">
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-2">
                    Let's <span className="text-orange-400">Work Together</span>
                  </h3>

                  {/* Scrolling Text */}
                  <div className="relative w-full overflow-hidden h-8 mb-6">
                    <div className="flex w-max animate-form-marquee whitespace-nowrap text-gray-400 text-lg">
                      Hi, I'm Dipak Mourya! Fill out the form below to
                      collaborate on web development, UI/UX design, or
                      consultancy. Let's create something amazing together!
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="First Name"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(value) =>
                        setFormData({ ...formData, firstName: value })
                      }
                      required
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(value) =>
                        setFormData({ ...formData, lastName: value })
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(value) =>
                        setFormData({ ...formData, email: value })
                      }
                      required
                    />
                    <InputField
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 8910171611"
                      value={formData.phone}
                      onChange={(value) =>
                        setFormData({ ...formData, phone: value })
                      }
                    />
                  </div>

                  <TextAreaField
                    label="Your Message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(value) =>
                      setFormData({ ...formData, message: value })
                    }
                    required
                  />

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      type="submit"
                      className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                    >
                      Send
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold hover:bg-orange-500/30 transition-all duration-300"
                    >
                      Reset
                      <RotateCcw
                        size={18}
                        className="group-hover:-rotate-180 transition-transform duration-500"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
