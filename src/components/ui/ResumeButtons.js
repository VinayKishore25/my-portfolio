"use client";
import Link from "next/link";
import { useTheme } from "@/components/context/ThemeContext";
import { useState } from "react";
import ResumeModal from "@/components/modals/ResumeModal";

const ResumeButtons = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center gap-4 mx-auto xl:mx-0">
      {/* View Resume Button opens modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-[185px] h-[50px] flex justify-center items-center bg-white text-black font-semibold rounded-lg group z-50 hover:opacity-90 transition"
      >
        View Resume
      </button>

      {/* Download Resume Button */}
      <a
        href="/Vinay_SDE.pdf"
        download
        className="relative w-[185px] h-[50px] flex justify-center items-center text-lg font-semibold rounded-lg group z-50 transition-all duration-300 hover:scale-105"
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
