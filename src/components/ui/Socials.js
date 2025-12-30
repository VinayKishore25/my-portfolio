// Links
import Link from "next/link";

// Icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Socials = ({ className = "flex items-center gap-x-5 text-lg" }) => {
  return (
    <div className={className}>
      <Link
        href={"https://www.linkedin.com/in/vinaykishore2512/"}
        className="hover:text-accent transition-all duration-300 "
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"https://github.com/VinayKishore25"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        href={"https://www.instagram.com/vinaykishore25/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100057351378173"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://x.com/VinayKishore25"}
        className="hover:text-accent transition-all duration-300 "
      >
        <FaXTwitter />
      </Link>
      <Link
        href={"https://www.youtube.com/@vinaykishore648"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
