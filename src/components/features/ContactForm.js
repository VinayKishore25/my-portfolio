"use client";

import { useState, useEffect, useRef } from "react";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { gsap } from "gsap";

// Enhanced centered loader
const CenteredLoader = () => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[70]">
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-4 border border-white/20">
      <svg className="animate-spin h-12 w-12 text-accent" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        />
      </svg>
      <p className="text-white font-medium text-lg">Sending your message...</p>
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-0"></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150"></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  </div>
);

// Premium Confetti Overlay with elegant animations
const ConfettiOverlay = ({ isVisible, confettiRef }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[70]">
      {/* Premium Success Card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center gap-6 border border-white/20 shadow-2xl max-w-md"
      >
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent via-purple-500 to-accent opacity-20 blur-xl animate-pulse"></div>

        {/* Success Icon with Premium Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative"
        >
          {/* Outer glow rings */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-400 rounded-full blur-2xl"
          ></motion.div>

          {/* Icon container */}
          <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-full shadow-lg shadow-green-500/50">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BsCheckCircle className="text-white text-5xl drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Sparkle particles around icon */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 60, 0],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 60, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
              style={{ marginLeft: "-4px", marginTop: "-4px" }}
            />
          ))}
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-3 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Message Sent Successfully!
            </h3>
            <div className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                className="text-2xl"
              >
                🎉
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 0.2,
                }}
                className="text-2xl"
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -20, 20, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 0.4,
                }}
                className="text-2xl"
              >
                🎊
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-lg leading-relaxed max-w-sm"
          >
            Thank you for reaching out! I've received your message and will get
            back to you as soon as possible.
          </motion.p>

          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-purple-500/20 border border-accent/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-accent text-sm font-medium">
              Estimated Response Time: 24-48 hours
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-accent/10 rounded-full blur-2xl"
        />
      </motion.div>

      {/* Premium Confetti container - full screen */}
      <div
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-[60]"
      >
        {/* Confetti particles will be added here by GSAP */}
      </div>
    </div>
  );
};

const ContactForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const successRef = useRef(null);
  const confettiRef = useRef(null);

  // GSAP Success Animation
  useEffect(() => {
    if (status === "success" && confettiRef.current) {
      // Start confetti animation immediately
      createConfetti();

      // Auto-hide timer for 6 seconds to appreciate the premium animation
      const timer = setTimeout(() => setStatus(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const createConfetti = () => {
    const colors = [
      "#10b981", // emerald-500
      "#34d399", // emerald-400
      "#6ee7b7", // emerald-300
      "#f59e0b", // amber-500
      "#fbbf24", // amber-400
      "#a855f7", // purple-500
      "#c084fc", // purple-400
      "#ec4899", // pink-500
      "#f472b6", // pink-400
      "#3b82f6", // blue-500
      "#60a5fa", // blue-400
    ];
    const confettiContainer = confettiRef.current;

    if (!confettiContainer) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    // Create premium burst from center
    for (let i = 0; i < 80; i++) {
      createPremiumConfetti(
        confettiContainer,
        colors,
        centerX,
        centerY,
        "burst"
      );
    }

    // Create elegant floating ribbons
    for (let i = 0; i < 20; i++) {
      createRibbonConfetti(confettiContainer, colors, centerX, centerY);
    }

    // Create shimmering stars
    for (let i = 0; i < 30; i++) {
      createStarConfetti(confettiContainer, centerX, centerY);
    }
  };

  const createPremiumConfetti = (container, colors, startX, startY, type) => {
    const confetti = document.createElement("div");
    const size = Math.random() * 14 + 10; // 10-24px
    const shapes = ["circle", "square", "diamond"];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    let borderRadius = "0";
    let transform = "rotate(0deg)";

    if (shape === "circle") {
      borderRadius = "50%";
    } else if (shape === "diamond") {
      borderRadius = "2px";
      transform = "rotate(45deg)";
    } else {
      borderRadius = "3px";
    }

    confetti.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(135deg, ${color}, ${color}dd);
      top: ${startY}px;
      left: ${startX}px;
      pointer-events: none;
      border-radius: ${borderRadius};
      z-index: 60;
      box-shadow: 0 0 10px ${color}88;
      transform: ${transform};
    `;
    container.appendChild(confetti);

    // Random explosion angle
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 600 + 300;
    const xEnd = Math.cos(angle) * velocity;
    const yEnd = Math.sin(angle) * velocity;

    // Main explosion with rotation
    gsap.to(confetti, {
      x: xEnd,
      y: yEnd,
      rotation: Math.random() * 1800 + 720,
      scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.3 + 0.2],
      duration: Math.random() * 3 + 2,
      ease: "power3.out",
      onComplete: () => confetti.remove(),
    });

    // Gravity effect
    gsap.to(confetti, {
      y: `+=${Math.random() * 500 + 400}`,
      duration: Math.random() * 2.5 + 2,
      delay: 0.5,
      ease: "power2.in",
    });

    // Fade out elegantly
    gsap.to(confetti, {
      opacity: 0,
      duration: 1.5,
      delay: Math.random() * 2 + 2.5,
      ease: "power2.inOut",
    });
  };

  const createRibbonConfetti = (container, colors, startX, startY) => {
    const ribbon = document.createElement("div");
    const width = Math.random() * 30 + 15;
    const height = Math.random() * 6 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    ribbon.style.cssText = `
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      background: linear-gradient(90deg, ${color}, ${color}cc, ${color});
      top: ${startY}px;
      left: ${startX}px;
      pointer-events: none;
      border-radius: 2px;
      z-index: 60;
      box-shadow: 0 0 15px ${color}66;
    `;
    container.appendChild(ribbon);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 500 + 350;
    const xEnd = Math.cos(angle) * velocity;
    const yEnd = Math.sin(angle) * velocity;

    gsap.to(ribbon, {
      x: xEnd,
      y: yEnd,
      rotation: Math.random() * 2160 + 1080,
      scaleX: [1, 1.5, 0.8, 0.3],
      scaleY: [1, 0.8, 1.2, 0.5],
      duration: Math.random() * 3.5 + 2.5,
      ease: "power3.out",
      onComplete: () => ribbon.remove(),
    });

    gsap.to(ribbon, {
      y: `+=${Math.random() * 600 + 300}`,
      duration: Math.random() * 3 + 2,
      delay: 0.8,
      ease: "power1.in",
    });

    gsap.to(ribbon, {
      opacity: 0,
      duration: 2,
      delay: Math.random() * 2 + 3,
      ease: "power2.in",
    });
  };

  const createStarConfetti = (container, startX, startY) => {
    const star = document.createElement("div");
    const size = Math.random() * 8 + 6;

    star.innerHTML = "✨";
    star.style.cssText = `
      position: absolute;
      font-size: ${size * 2}px;
      top: ${startY}px;
      left: ${startX}px;
      pointer-events: none;
      z-index: 60;
      filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.8));
    `;
    container.appendChild(star);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 450 + 250;
    const xEnd = Math.cos(angle) * velocity;
    const yEnd = Math.sin(angle) * velocity;

    gsap.to(star, {
      x: xEnd,
      y: yEnd,
      rotation: Math.random() * 720 + 360,
      scale: [1, 1.5, 0],
      duration: Math.random() * 3 + 2,
      ease: "power2.out",
      onComplete: () => star.remove(),
    });

    gsap.to(star, {
      opacity: [1, 1, 0],
      duration: 2.5,
      ease: "power2.in",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      className={`${
        compact ? "py-6 bg-transparent" : "py-16 bg-primary/30"
      } h-full relative`}
    >
      {/* Centered Loader Overlay */}
      {status === "loading" && <CenteredLoader />}

      {/* Full-screen Confetti Overlay */}
      {status === "success" && (
        <ConfettiOverlay
          isVisible={status === "success"}
          confettiRef={confettiRef}
        />
      )}

      <div className="container mx-auto text-center flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[700px] relative">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex-1 flex flex-col ${
              compact ? "gap-4" : "gap-6"
            } w-full mx-auto`}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0 w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea ${compact ? "min-h-[120px]" : ""}`}
              required
            ></textarea>
            <button
              type="submit"
              className="button rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
              disabled={status === "loading"}
            >
              <span
                className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ${
                  status === "loading" ? "opacity-60" : ""
                }`}
              >
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex flex-col items-center gap-3 bg-red-500/10 border border-red-400/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <svg
                  fill="none"
                  className="w-8 h-8 text-red-400"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="currentColor"
                    opacity="0.1"
                  />
                  <path
                    d="M15 9l-6 6m0-6l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-red-400 font-semibold text-lg">
                  Oops! Something went wrong.
                </div>
                <div className="text-red-300 text-center">
                  Please try again or contact me directly.
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
