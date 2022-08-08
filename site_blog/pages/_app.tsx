import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import "prism-themes/themes/prism-one-dark.css"

export default function Site({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
