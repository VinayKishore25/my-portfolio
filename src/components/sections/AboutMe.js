"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const AboutMe = () => {
  const stats = [
    { label: "Hours Coded", value: "1,300+", color: "text-blue-400" },
    { label: "Projects Shipped", value: "42+", color: "text-accent" },
    { label: "LeetCode Solved", value: "246+", color: "text-green-400" },
  ];

  const navButtons = [
    "Skills",
    "Projects",
    "Resume",
    "Experience",
    "Feed",
    "AI Companion",
  ];

  return (
    <section className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* 1. Background Decor: Giant Text Watermark */}
      <div className="absolute top-20 right-0 text-[200px] font-bold text-white/[0.02] leading-none select-none pointer-events-none z-0 hidden xl:block">
        ABOUT
      </div>

      {/* 2. Abstract Red Line Decor */}
      <div className="absolute left-0 top-1/2 w-24 h-1 bg-accent transform -translate-y-1/2 hidden xl:block"></div>

      <div className="container mx-auto px-4 z-10 h-full">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
          {/* --- LEFT SIDE: IMAGE & HUD STATS --- */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="flex-1 w-full max-w-[600px] xl:max-w-none relative"
          >
            {/* The Image Frame */}
            <div className="relative z-10 group">
              {/* Decorative border frame offset behind */}
              <div className="absolute -inset-4 border-2 border-white/10 rounded-xl z-0 group-hover:border-accent/50 transition-colors duration-500"></div>

              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/5] md:aspect-square xl:aspect-[4/5] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                <img
                  src="/IMG_4997.jpg"
                  alt="Vinay Kishore"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              </div>

              {/* HUD STATS (Floating on Image Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end border-t border-white/10 bg-black/40 backdrop-blur-md">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span
                      className={`text-2xl md:text-3xl font-bold font-mono ${
                        stat.color === "text-accent"
                          ? "text-[#F13024]"
                          : stat.color
                      }`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT & NAVIGATION --- */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-start text-left"
          >
            <h2 className="h2 text-accent text-lg font-bold tracking-[0.2em] uppercase mb-2">
              // The Developer
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Vinay <br />
              <span className="text-white/40">Kishore.</span>
            </h1>

            <div className="h-1 w-20 bg-accent mb-8"></div>

            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
              I am a{" "}
              <span className="text-white font-semibold">
                Artificial Intelligence and Machine Learning Student{" "}
              </span>{" "}
              at Aditya University '26, bridging the gap between complex backend
              logic and intuitive frontend design.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-xl font-light">
              My passion lies in <strong>Artificial Intelligence</strong> and{" "}
              <strong>Full Stack Development</strong>. Whether it's crushing
              LeetCode problems or deploying scalable applications, I build
              digital experiences that matter.
            </p>

            {/* Navigation Pills */}
            <div className="w-full">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6 opacity-60">
                Explore My World
              </h3>

              <div className="flex flex-wrap gap-4">
                {navButtons.map((btn, index) => (
                  <button
                    key={index}
                    className="group relative px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:border-accent transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 text-white text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                      {btn}
                    </span>
                    {/* Hover Fill Effect */}
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
