import { PropsWithChildren, useEffect, useState, useContext } from "react";
import dynamic from "next/dynamic";

import Sidebar from "@/components/sidebar";
import Banner from "@/components/banner";
import { ThemeContext } from "context/themeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import WhatsAppChatWidget from "@/components/whatsapp";
import styles from "@/styles/styles.module.css";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
  const [savedThemeState, setSavedThemeState] = useState(null);
  const { dark } = useContext(ThemeContext);
  const { getValue } = useLocalStorage();

  useEffect(() => {
    const savedTheme = Boolean(getValue("theme"));
    if (savedTheme !== undefined && savedTheme !== null) {
      return setSavedThemeState(savedTheme);
    }
  }, [getValue]);

  const theme =
    savedThemeState !== null && savedThemeState !== undefined
      ? savedThemeState
      : dark;

  const themeState = theme ? styles.darkMode : styles.lightMode;

  return (
    <main className={`pagelayout ${themeState}`}>
      <div className="page-grid">
        <div className={`Header-grid ${styles.headerGrid}`}>
          <Header themeState={theme} />
          <Banner />
        </div>
        <div className={`sidebar-grid ${styles.sidebar}`}>
          <Sidebar />
        </div>
        {children}
        <div className="whatsapp">
          <WhatsAppChatWidget />
        </div>
        <Footer />
      </div>

      <style jsx>
        {`
          .pagelayout {
            height: 100%;
            width: 100%;
          }
          .page-grid {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            position: relative;
          }

          .sidebar-grid {
            position: fixed;
            left: 0;
            top: 250px;
            z-index: 100;
            width: 50px;
          }
          .footer-grid {
            align-self: center;
            border-top: 1px solid gray;
            padding-top: 15px;
            width: 100%;
          }
          .whatsapp {
            position: fixed;
            bottom: 30px;
            right: 0px;
          }
          @media (max-width: 500px) {
            .sidebar-grid {
              top: 100px;
            }
          }
        `}
      </style>
    </main>
  );
}
