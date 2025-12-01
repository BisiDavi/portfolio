import { PropsWithChildren, useEffect, useState, useContext } from "react";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/sidebar";
import Banner from "@/components/banner";
import { ThemeContext } from "context/themeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import WhatsAppChatWidget from "@/components/whatsapp";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/styles.module.css";

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

    const theme = savedThemeState !== null && savedThemeState !== undefined ? savedThemeState : dark;

    const themeState = theme ? styles.darkMode : styles.lightMode;

    return (
        <>
            <Head>
                <title>Olubisi David: A Fullstack developer</title>
                <meta
                    name="description"
                    content="I'm a result oriented software engineer and a team player with 4+ years of experience, skilled in developing software applications using frontend (React.js, javascript) and backend (Node.js, Express.js) technologies, likewise updating existing programs with excellent communication and problem-solving skills to facilitate project success."
                    key="desc"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="application-name" content="Olubisi David" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://www.olubisi.pro/" />
                <meta
                    property="og:title"
                    content="A Fullstack developer with building fast, reliable and scalable software applications | Olubisi David"
                />
                <meta property="og:type" content="website" />
                <meta
                    name="og:description"
                    content="I'm a result oriented software engineer and a team player with 4+ years of experience, skilled in developing software applications using frontend (React.js, JavaScript) and backend (Node.js, Express.js) technologies, likewise updating existing programs with excellent communication and problem-solving skills to facilitate project success."
                    key="og_desc"
                />
                <meta property="og:image" content="https://res.cloudinary.com/verrb-inc/image/upload/v1685927927/olubisi_logo_xsu6ao.png" />
                <meta property="og:image:alt" content="Olubisi David, A full stack developer." />

                {/* <!-- Twitter Meta Tags --> */}
                <meta
                    name="twitter:card"
                    content="https://res.cloudinary.com/dbacm1pbt/image/upload/v1675341626/getthisgreen/gethisgreen_pen_xm2qot.webp"
                />
                <meta property="twitter:domain" content="https://www.olubisi.pro/" />
                <meta property="twitter:url" content="https://www.olubisi.pro/" />
                <meta
                    name="twitter:title"
                    content="A Fullstack Typscript developer with building fast, reliable and
          scalable software applications | Olubisi David"
                />
                <meta
                    name="twitter:description"
                    content="I'm a result oriented software engineer and a team player with 4+ years of experience, skilled in developing software applications using frontend(React.js, JavaScript) and backend (Node.js, Express.js) technologies, likewise updating existing programs with excellent communication and problem-solving skills to facilitate project success."
                />
                <meta name="twitter:image" content="https://res.cloudinary.com/verrb-inc/image/upload/v1685927927/olubisi_logo_xsu6ao.png" />
            </Head>
            <div className={`pagelayout ${themeState}`}>
                <div className="page-grid">
                    <div className={`Header-grid ${styles.headerGrid}`}>
                        <Header themeState={theme} />
                        <Banner />
                    </div>
                    <aside className={`sidebar-grid ${styles.sidebar}`}>
                        <Sidebar />
                    </aside>
                    <ToastContainer />
                    <main>{children}</main>
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
            </div>
        </>
    );
}
