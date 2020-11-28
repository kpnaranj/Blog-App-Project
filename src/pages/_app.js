import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <NextNprogress />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
