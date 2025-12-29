"use client";

import { useState, useEffect, useRef } from "react";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
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

// Full-screen Confetti Overlay - Similar to loader with blur background
const ConfettiOverlay = ({ isVisible, confettiRef }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[70]">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-4 border border-white/20">
        <div className="relative">
          <BsCheckCircle className="text-green-500 text-6xl animate-bounce" />
          <div className="absolute inset-0 bg-green-400 rounded-full opacity-30 animate-ping"></div>
        </div>

        <div className="text-center">
          <div className="text-green-400 font-bold text-2xl mb-2 tracking-wide">
            🎉 Message Sent! 🎉
          </div>
          <div className="text-white text-lg leading-relaxed">
            Thank you for reaching out!
            <br />
            I'll get back to you soon.
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <span className="text-yellow-400 text-xl animate-pulse">✨</span>
          <span className="text-yellow-300 text-lg animate-pulse delay-200">
            ⭐
          </span>
          <span className="text-yellow-400 text-xl animate-pulse delay-400">
            ✨
          </span>
        </div>
      </div>

      {/* Confetti container - full screen */}
      <div ref={confettiRef} className="fixed inset-0 pointer-events-none">
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

      // Auto-hide timer for 5 seconds
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const createConfetti = () => {
    const colors = [
      "#4CAF50",
      "#2196F3",
      "#FF9800",
      "#E91E63",
      "#9C27B0",
      "#FFC107",
      "#00BCD4",
      "#FF5722",
    ];
    const confettiContainer = confettiRef.current;

    if (!confettiContainer) return;

    // Get screen dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Create confetti from bottom-left corner
    for (let i = 0; i < 30; i++) {
      createConfettiPiece(confettiContainer, colors, 0, screenHeight, "left");
    }

    // Create confetti from bottom-right corner
    for (let i = 0; i < 30; i++) {
      createConfettiPiece(
        confettiContainer,
        colors,
        screenWidth,
        screenHeight,
        "right"
      );
    }
  };

  const createConfettiPiece = (container, colors, startX, startY, corner) => {
    const confetti = document.createElement("div");
    const size = Math.random() * 12 + 8; // 8-20px
    const shape = Math.random() > 0.5 ? "circle" : "square";

    confetti.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      top: ${startY}px;
      left: ${startX}px;
      pointer-events: none;
      border-radius: ${shape === "circle" ? "50%" : "0"};
      z-index: 60;
      transform-origin: center;
    `;
    container.appendChild(confetti);

    // Calculate explosion direction based on corner
    let xDirection, yDirection;
    if (corner === "left") {
      xDirection = Math.random() * 0.8 + 0.2; // 0.2 to 1 (mostly right)
      yDirection = -(Math.random() * 0.8 + 0.2); // -0.2 to -1 (upward)
    } else {
      xDirection = -(Math.random() * 0.8 + 0.2); // -0.2 to -1 (mostly left)
      yDirection = -(Math.random() * 0.8 + 0.2); // -0.2 to -1 (upward)
    }

    const velocity = Math.random() * 600 + 400; // 400-1000px
    const xEnd = xDirection * velocity;
    const yEnd = yDirection * velocity;

    // Main explosion animation
    gsap.to(confetti, {
      x: xEnd,
      y: yEnd,
      rotation: Math.random() * 1440 + 720, // 2-4 full rotations
      scale: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 3 + 2.5, // 2.5-5.5s
      ease: "power2.out",
      onComplete: () => {
        confetti.remove();
      },
    });

    // Add gravity effect (falling down after initial explosion)
    gsap.to(confetti, {
      y: `+=${Math.random() * 400 + 300}`, // Additional fall
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 1.5 + 0.5, // Start falling after some time
      ease: "power1.in",
    });

    // Fade out towards the end
    gsap.to(confetti, {
      opacity: 0,
      duration: 1,
      delay: Math.random() * 2 + 3, // Start fading after 3-5 seconds
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
