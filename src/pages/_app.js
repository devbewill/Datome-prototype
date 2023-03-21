import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { themeVars, GlobalStyles } from "../styles/ThemeConfig";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeVars}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
