import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
  if (!appId || !serverUrl) {
    throw Error(
      "No Moralis configuration. Populate NEXT_PUBLIC_MORALIS_SERVER_URL and NEXT_PUBLIC_MORALIS_APP_ID in .env.local"
    );
  }
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
