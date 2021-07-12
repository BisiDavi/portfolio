import Head from 'next/head';
import ThemeProvider from '../context/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>O. David | A full stack Javascript engineer </title>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
                />
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
