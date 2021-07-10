import { PropsWithChildren, useContext } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@components/sidebar';
import Banner from '@components/banner';
import { ThemeContext } from 'context/themeContext';
import styles from '@styles/theme.module.css';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
    const { dark } = useContext(ThemeContext);
    const themeState = dark ? styles.darkMode : styles.lightMode;
    return (
        <div className={`pagelayout ${themeState}`}>
            <div className='page-grid'>
                <div className={`Header-grid ${styles.headerGrid}`}>
                    <Header />
                    <Banner />
                </div>
                <div className='sidebar-grid'>
                    <Sidebar />
                </div>
                <div className='content-grid'>{children}</div>
                <div className='footer-grid'>
                    <Footer />
                </div>
            </div>

            <style jsx>
                {`
                    .pagelayout {
                        background-color: white;
                        height: 100vh;
                        overflow: hidden;
                        width: 100%;
                    }
                    .page-grid {
                        display: grid;
                        grid-template-columns: 200px 1fr;
                        grid-template-rows: 1fr 12fr 1fr;
                        height: 100vh;
                        width: 100%;
                    }

                    .Header-grid {
                        grid-column: 1/3;
                        grid-row: 1;
                    }

                    .sidebar-grid {
                        grid-column: 1/1;
                        grid-row: 2/3;
                    }
                    .content-grid {
                        grid-column: 2/3;
                        grid-row: 2/3;
                    }
                    .footer-grid {
                        grid-column: 1/3;
                        grid-row: 3/4;
                        align-self: center;
                        border-top: 1px solid gray;
                        padding-top: 15px;
                    }
                `}
            </style>
        </div>
    );
}
