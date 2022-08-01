import { AppProps } from "next/app";
import "../styles/index.css"
import { ThemeProvider } from "next-themes";

export default function Site({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
