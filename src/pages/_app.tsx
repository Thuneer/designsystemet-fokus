import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../tokens.css";
import { ConfigurationContext } from "@/contexts/ConfigurationContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [configuration, setConfiguration] = useState({
    theme: "lightmode",
    colorTheme: "digdir",
    fokus: "transparent",
    device: "desktop",
    paneState: true,
  });
  const value = { configuration, setConfiguration };
  return (
    <ConfigurationContext.Provider value={value}>
      <Component {...pageProps} />;
    </ConfigurationContext.Provider>
  );
}
