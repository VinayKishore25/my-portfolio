import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ResumeButtons = () => {
  return (
    <div className="flex justify-center gap-4 mx-auto xl:mx-0">
      {/* View Resume Button */}
      <Link
        href="https://drive.google.com/file/d/1ZxScVEp2M9r3CRGHniHHokE8l7KWCQ9w/view"
        className="relative w-[185px] h-[50px] flex justify-center items-center bg-white text-black font-semibold rounded-lg group z-50"
      >
        View Resume
      </Link>

      {/* Download Resume Button */}
      <a
        href="\resume.pdf"
        download
        className="relative w-[185px] h-[50px] flex justify-center items-center bg-accent/90 text-white text-lg font-semibold rounded-lg group z-50"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButtons;
