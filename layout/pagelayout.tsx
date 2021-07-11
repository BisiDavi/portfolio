import { PropsWithChildren, useContext } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@components/sidebar';
import Banner from '@components/banner';
import { ThemeContext } from 'context/themeContext';
import styles from '@styles/styles.module.css';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
    const { dark } = useContext(ThemeContext);
    const themeState = dark ? styles.darkMode : styles.lightMode;
    return (
        <main className={`pagelayout ${themeState}`}>
            <div className='page-grid'>
                <div className={`Header-grid ${styles.headerGrid}`}>
                    <Header />
                    <Banner />
                </div>
                <div className={`sidebar-grid ${styles.sidebar}`}>
                    <Sidebar />
                </div>
                {children}
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
                        top: 400px;
                        z-index: 10;
                        width: 50px;
                    }
                    .footer-grid {
                        align-self: center;
                        border-top: 1px solid gray;
                        padding-top: 15px;
                        width: 100%;
                    }
                `}
            </style>
        </main>
    );
}
