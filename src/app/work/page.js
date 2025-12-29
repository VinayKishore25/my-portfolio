// Components
"use client";
import Bulb from "../../../components/Bulb";
import WorkDetails from "../../../components/workDetails";
import React, { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-12">
          {/* Text */}
          <div className="text-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-6"
            >
              My <span className="text-accent">Portfolio</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-2xl mx-auto text-white/70 leading-relaxed"
            >
              Explore my collection of projects showcasing technical expertise,
              creativity, and problem-solving skills across various technologies
              and domains.
            </motion.p>
          </div>

          {/* Projects */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <WorkDetails />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
