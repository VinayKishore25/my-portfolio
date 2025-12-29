"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker (ensure client-side)
// Use legacy worker to avoid dynamic import issues across environments
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/legacy/build/pdf.worker.min.js`;

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

const ResumeModal = ({ isOpen, onClose, file = "/Vinay_SDE.pdf" }) => {
  const [mounted, setMounted] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [loadError, setLoadError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const w = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(Math.max(320, Math.floor(w - 24))); // padding safety
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

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
            ref={containerRef}
            className="relative w-full max-w-4xl max-h-[92vh] mx-4 overflow-y-auto rounded-2xl border border-white/10 bg-primary text-white"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close control */}
            <div
              onClick={onClose}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClose();
              }}
              aria-label="Close resume modal"
              className="absolute top-4 right-4 text-white/80 hover:text-white transition text-2xl p-2 sm:p-3 rounded-full hover:bg-white/10 cursor-pointer flex items-center justify-center"
            >
              <HiXMark className="pointer-events-none" />
            </div>

            {/* PDF Viewer */}
            <div className="px-3 sm:px-6 py-4">
              <Document
                file={file}
                onLoadSuccess={onLoadSuccess}
                onLoadError={(err) =>
                  setLoadError(err?.message || "Failed to load PDF")
                }
                error={<div className="text-red-300">Failed to load PDF.</div>}
                loading={<div className="text-white/80">Loading PDF…</div>}
              >
                {numPages &&
                  Array.from({ length: numPages }, (_, i) => (
                    <div key={i} className="mb-6 last:mb-0 flex justify-center">
                      <Page
                        pageNumber={i + 1}
                        width={containerWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  ))}
              </Document>
              {loadError && (
                <div className="mt-4 text-sm text-red-300">{loadError}</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ResumeModal;
