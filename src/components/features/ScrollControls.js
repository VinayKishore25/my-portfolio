"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

const ScrollControls = () => {
  const [visible, setVisible] = useState(true); // show on initial landing
  const [isAtTop, setIsAtTop] = useState(true);

  // motion value for scroll progress (0 - 1)
  const progressMV = useMotionValue(0);
  const progressWidth = useTransform(
    progressMV,
    (v) => `${Math.round(v * 100)}%`
  );

  // SVG ring config
  const R = 20;
  const C = 2 * Math.PI * R; // circumference
  const dashOffset = useTransform(progressMV, (v) => C * (1 - v));

  // Text bounce timing
  const bounceTransition = {
    y: {
      duration: 0.9,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        docHeight > 0 ? Math.min(1, Math.max(0, scrolled / docHeight)) : 0;
      progressMV.set(pct);

      // visible on top (to show "Move down") or when scrolled past threshold (to show "Move to top")
      const atTop = scrolled <= 50;
      setIsAtTop(atTop);
      setVisible(atTop || scrolled > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [progressMV]);

  const handleClick = () => {
    if (isAtTop) {
      // scroll down to AboutMe section
      const target = document.getElementById("about-me");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: scroll down by viewport height
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
    } else {
      // scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        initial={{ width: 0 }}
        style={{ width: progressWidth }}
        transition={{ ease: "easeOut", duration: 0.12 }}
        className="fixed top-0 left-0 h-1 bg-accent z-50"
        aria-hidden="true"
      />

      {/* Floating Scroll control with SVG ring and animated label */}
      <div
        className={`fixed right-4 bottom-20 xl:right-6 xl:bottom-8 z-50 transition-transform duration-300 flex items-center gap-2 xl:gap-3 ${
          visible
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!visible}
      >
        {/* Animated label - hidden on mobile */}
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="hidden xl:flex text-sm text-white/90 font-medium select-none items-center gap-3"
        >
          <motion.span
            className="inline-block text-white/80"
            animate={{ y: [0, -6, 0] }}
            transition={bounceTransition}
          >
            {isAtTop ? "Move down" : "Move to top"}
          </motion.span>
        </motion.span>

        {/* button wrapper with SVG ring */}
        <div className="relative w-14 h-14">
          {/* SVG ring (track) */}
          <svg
            className="absolute inset-0 -z-10"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="28"
              cy="28"
              r={R}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="4"
            />
            <motion.circle
              cx="28"
              cy="28"
              r={R}
              stroke="var(--color-accent, #F13024)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={C}
              style={{ strokeDashoffset: dashOffset }}
              transform="rotate(-90 28 28)"
            />
          </svg>

          {/* Button */}
          <button
            onClick={handleClick}
            className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-10"
            aria-label={isAtTop ? "Move down" : "Move to top"}
          >
            <FaChevronUp className={isAtTop ? "rotate-180" : ""} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScrollControls;
