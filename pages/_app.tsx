import "../styles/globals.css";
import "../styles/Login.css";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Gavneet Added
import "../styles/sidebar.module.css";
import "../styles/weekly.module.css";
import "../styles/NewForYou.module.css";
import "../styles/currently.module.css";
import type { NextPage } from "next";
//Gavneet Added
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
