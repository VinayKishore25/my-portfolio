// Fonts
import { Sora } from "next/font/google";

// Font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Components
import Header from "./Header";
import FooterControls from "./FooterControls";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-primary text-white ${sora.variable} font-sora relative`}
    >
      <Header />
      <ThemeToggle />
      {children}
      {/* Mobile Footer Controls */}
      <FooterControls />
    </div>
  );
};

export default Layout;
