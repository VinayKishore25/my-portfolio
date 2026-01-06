"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ContactForm from "@/components/features/ContactForm";
import { socialLinks } from "@/data/social-links";
import dynamic from "next/dynamic";

// Dynamically import Globe to avoid SSR issues with Three.js
const Globe = dynamic(() => import("@/components/ui/globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-primary/30 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col gap-y-8">
          {/* Header Section */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center pt-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
              Available Worldwide
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="max-w-xl mx-auto text-white/60 text-base leading-relaxed">
              Whether you're across the street or across the globe, I'm ready to
              bring your ideas to life.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
            {/* Left Column - Globe & Info */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-6"
            >
              {/* Globe Section */}
              <div className="relative">
                <div className="relative h-[350px] md:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
                  {/* Globe container */}
                  <div className="absolute inset-0">
                    <Globe />
                  </div>

                  {/* Overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50" />
                      <div>
                        <p className="text-white font-medium text-sm">
                          Based in India
                        </p>
                        <p className="text-white/50 text-xs">
                          Working with clients globally
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm"
                  >
                    <span className="text-green-400 text-xs font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Available for hire
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <motion.a
                  href="mailto:vinaykishore2512@gmail.com"
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl transition-all duration-300"
                >
                  <div className="text-accent text-xl mb-2 group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-accent transition-colors">
                    vinaykishore2512@gmail.com
                  </p>
                </motion.a>

                <motion.a
                  href="tel:+918309958747"
                  variants={fadeIn("up", 0.35)}
                  initial="hidden"
                  animate="show"
                  className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl transition-all duration-300"
                >
                  <div className="text-accent text-xl mb-2 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-white text-sm font-medium group-hover:text-accent transition-colors">
                    +91 8309958747
                  </p>
                </motion.a>

                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="text-accent text-xl mb-2">📍</div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-white text-sm font-medium">
                    Andhra Pradesh, India
                  </p>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={fadeIn("up", 0.45)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
              >
                <p className="text-white/40 text-xs uppercase tracking-wide mb-4">
                  Connect on Social
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-11 h-11 bg-white/5 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-accent"
                      aria-label={social.name}
                    >
                      <span className="text-lg text-white/70 group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {social.name}
                      </span>
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
              exit="hidden"
              className="xl:sticky xl:top-24"
            >
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Send a Message
                  </h3>
                  <p className="text-white/50 text-sm">
                    Fill out the form below and I'll get back to you within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Response time indicator */}
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                className="mt-4 flex items-center justify-center gap-6 text-white/40 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">⚡</span>
                  <span>Fast response</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-base">🌍</span>
                  <span>Work remotely</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-base">💼</span>
                  <span>Open to opportunities</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
