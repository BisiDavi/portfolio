import Head from 'next/head';
import ThemeProvider from '../context/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>O. David | A full stack Javascript engineer </title>
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
