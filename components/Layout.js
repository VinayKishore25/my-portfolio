// Fonts
import { Sora } from "next/font/google"

// Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// Components
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'
import Circles from "./Circles"

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <Circles />
      {children}
    </div>
  );
};

export default Layout;
