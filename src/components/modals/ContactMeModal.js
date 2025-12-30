"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/features/ContactForm";
import Socials from "@/components/ui/Socials";
import { HiXMark } from "react-icons/hi2";
import ReactDOM from "react-dom";

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.98 },
};

const ContactMeModal = ({ isOpen, onClose }) => {
  // ensure portal target exists client-side
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed left-0 top-0 inset-0 z-[60] bg-primary/60 backdrop-blur-md flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl max-h-[92vh] mx-4 overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-primary text-white"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button (top-right) */}
            <div
              onClick={onClose}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClose();
              }}
              aria-label="Close contact modal"
              className="absolute top-4 right-4 text-white/80 hover:text-white transition text-2xl p-2 sm:p-3 rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-center"
            >
              <HiXMark className="pointer-events-none" />
            </div>

            {/* Contact Form (compact) */}
            <div className="px-3 sm:px-6 py-4">
              <ContactForm compact />
            </div>

            {/* Socials */}
            <div className="px-6 pb-8 flex justify-center">
              <Socials className="flex items-center gap-x-6 text-2xl" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactMeModal;
