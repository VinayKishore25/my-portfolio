"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ContactForm from "@/components/features/ContactForm";
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiSparkles,
  HiArrowUpRight,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "vinaykishore2512@gmail.com",
      href: "mailto:vinaykishore2512@gmail.com",
      color: "group-hover:text-accent group-hover:bg-accent/10",
    },
    {
      icon: <HiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8309958747",
      href: "tel:+918309958747",
      color: "group-hover:text-green-400 group-hover:bg-green-400/10",
    },
    {
      icon: <HiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null,
      color: "group-hover:text-blue-400 group-hover:bg-blue-400/10",
    },
  ];

  const socials = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/VinayKishore25",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/vinaykishore2512",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com/vinaykishore25",
      label: "Twitter",
    },
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <HiSparkles className="w-4 h-4" />
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Together
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 transition-all ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-white font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                      <HiArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div
                        className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 transition-all ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-semibold">
                  Available for Work
                </span>
              </div>
              <p className="text-white/50 text-sm">
                Currently accepting new projects and collaboration
                opportunities.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-purple-500/20 to-accent/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative p-6 md:p-8 lg:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <ContactForm />
              </div>
            </div>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Remote Work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Global Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
