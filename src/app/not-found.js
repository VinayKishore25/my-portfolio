"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiHome, HiArrowLeft } from "react-icons/hi2";
import { FaGhost, FaRocket, FaSatellite } from "react-icons/fa";

// Floating particle component
const FloatingParticle = ({ delay, duration, size, left, top }) => (
  <motion.div
    className="absolute rounded-full bg-accent/20"
    style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Glitch text effect
const GlitchText = ({ children }) => {
  return (
    <div className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-accent/50 z-0"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-cyan-400/50 z-0"
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  );
};

// Animated stars background
const Stars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  // Random glitch effect
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 4 + Math.random() * 8,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/30 to-primary" />

      {/* Stars background */}
      <Stars />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} {...p} />
      ))}

      {/* Spotlight effect following mouse */}
      {mounted && (
        <div
          className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, var(--color-accent) 0%, transparent 70%)`,
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
      )}

      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-80 h-80"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <FaSatellite className="text-accent/40 text-3xl absolute -top-4 left-1/2 -translate-x-1/2" />
        </motion.div>
        <motion.div
          className="absolute w-[500px] h-[500px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <FaRocket className="text-purple-400/30 text-2xl absolute -top-4 left-1/2 -translate-x-1/2 rotate-45" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Animated 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <motion.h1
            className={`text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 select-none ${
              glitchActive ? "animate-pulse" : ""
            }`}
            animate={glitchActive ? { x: [-2, 2, -2, 0] } : {}}
            transition={{ duration: 0.1 }}
          >
            <GlitchText>404</GlitchText>
          </motion.h1>

          {/* Ghost floating animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGhost className="text-5xl sm:text-7xl text-accent/50 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Oops! <span className="text-accent">Lost in Space</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-2 max-w-lg mx-auto">
            The page you're looking for has drifted into the cosmic void.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Don't worry, even the best explorers get lost sometimes.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-full overflow-hidden flex items-center gap-3 shadow-lg shadow-accent/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(var(--color-accent-rgb), 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <HiHome className="text-xl relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full flex items-center gap-3 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <p className="text-white/40 text-sm mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Work", path: "/work" },
            ].map((link, index) => (
              <Link key={link.path} href={link.path}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 inline-block cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Animated footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-white/20 text-xs sm:text-sm"
        >
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center justify-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
            <span>Error Code: 404 | Page Not Found</span>
            <span className="inline-block w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-32 sm:h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 border-r-2 border-b-2 border-accent/30 rounded-br-3xl"
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.05) 2px,
            rgba(255,255,255,0.05) 4px
          )`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)`,
        }}
      />
    </div>
  );
}
