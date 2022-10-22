import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function Site({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
