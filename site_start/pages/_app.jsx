import "../styles/globals.css";

import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";

function Site({ Component, pageProps }) {
  const router = useRouter();

  useHotkeys("g", () => router.push("https://www.github.com"), {
    enableOnTags: ["INPUT"],
  });

  return <Component {...pageProps} />;
}

export default Site;
