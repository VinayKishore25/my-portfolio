// Navigation Data
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiBookOpen,
  HiRss,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "skills", path: "/skills", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "blogs",
    path: "/blogs",
    icon: <HiBookOpen />,
  },
  {
    name: "feed",
    path: "/feed",
    icon: <HiRss />,
  },
];
