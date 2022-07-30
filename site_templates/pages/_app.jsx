import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function Site({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
