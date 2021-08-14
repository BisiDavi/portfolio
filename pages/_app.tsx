import Head from "next/head";
import ThemeProvider from "../context/themeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>O. David | A full stack Javascript engineer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Olubisi David - A Full stack JavaScript web developer."
        />
        <meta
          name="keywords"
          content="e-commerce,company site,cms,javascript, developer, web developer, hire web developer"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
