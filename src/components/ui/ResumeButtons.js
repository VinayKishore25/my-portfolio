"use client";
import Link from "next/link";
import { useTheme } from "@/components/context/ThemeContext";
import { useState } from "react";
import ResumeModal from "@/components/modals/ResumeModal";

const ResumeButtons = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md mx-auto xl:mx-0">
      {/* View Resume Button opens modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full sm:w-44 h-12 flex justify-center items-center bg-white text-black font-semibold rounded-lg shadow hover:shadow-md hover:opacity-95 transition"
      >
        View Resume
      </button>

      {/* Download Resume Button */}
      <a
        href="/Vinay_SDE.pdf"
        download
        className="w-full sm:w-44 h-12 flex justify-center items-center text-sm sm:text-base font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
        style={{ backgroundColor: theme.accent, color: theme.primary }}
      >
        Download Resume
      </a>

      {/* Modal */}
      <ResumeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        file="/Vinay_SDE.pdf"
      />
    </div>
  );
};

export default ResumeButtons;
