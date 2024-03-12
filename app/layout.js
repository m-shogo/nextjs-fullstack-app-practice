import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Zen_Kaku_Gothic_New,Montserrat } from "next/font/google";

const zen_Kaku_Gothic_New = Zen_Kaku_Gothic_New({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-zen_Kaku_Gothic_New",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="jp" className={`${zen_Kaku_Gothic_New.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
