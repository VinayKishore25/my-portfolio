"use client";
import React, { useState } from "react";
import { useTheme } from "@/components/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaTimes } from "react-icons/fa";

const ThemeToggle = () => {
  const { themes, currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        onClick={togglePanel}
        className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-xl transition-all duration-300 border-2 border-current text-accent hover:bg-accent hover:text-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPalette size={20} />
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-primary/95 backdrop-blur-sm border-l border-white/10 z-40 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Choose Theme</h3>
              <button
                onClick={togglePanel}
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  onClick={() => changeTheme(key)}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    currentTheme === key
                      ? "border-accent bg-accent/20"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{theme.name}</span>
                    <div className="flex space-x-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.secondary }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                      />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <p className="text-white/60 text-sm">
                Click on any theme to instantly change the color scheme of the
                portfolio.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePanel}
            className="fixed inset-0 bg-black/50 z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
