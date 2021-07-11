import ThemeProvider from '../context/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
