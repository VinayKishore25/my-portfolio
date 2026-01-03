// Navigation Data
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiBookOpen,
  HiRss,
  HiEnvelope,
  HiCodeBracket,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "blogs", path: "/blogs", icon: <HiBookOpen /> },
  { name: "skills", path: "/skills", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "journey",
    path: "/coding-journey",
    icon: <HiCodeBracket />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
