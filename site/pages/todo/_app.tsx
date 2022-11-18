import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function SiteTodo({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
