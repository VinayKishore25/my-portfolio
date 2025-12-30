"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const greetings = [
  { lang: "English", text: "Hello" },
  { lang: "Spanish", text: "Hola" },
  { lang: "French", text: "Bonjour" },
  { lang: "German", text: "Hallo" },
  { lang: "Japanese", text: "こんにちは" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const PreLoader = ({ onLoaded }) => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Cycle through greetings every 400ms
    const greetingInterval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 400);

    // Stop the animation and signal parent after 1.5 seconds
    const loadTimeout = setTimeout(() => {
      clearInterval(greetingInterval);
      setIsAnimating(false);
      // Give a moment for the exit animation to run before calling onLoaded
      setTimeout(() => {
        onLoaded();
        setShowLoader(false);
      }, 300);
    }, 1500);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(loadTimeout);
    };
  }, [onLoaded, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-primary"
          variants={containerVariants}
          initial="hidden"
          animate={isAnimating ? "show" : "exit"}
          exit="exit"
        >
          <motion.div
            key={currentGreetingIndex}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="text-accent text-6xl font-bold"
          >
            {greetings[currentGreetingIndex].text}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
