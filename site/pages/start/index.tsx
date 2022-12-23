import Head from "next/head";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import ThemeSwitch from "lib/components/themeswitch";
import TopLeftNavigation from "lib/components/top-left-nav";

const LINKS = [
  {
    key: "c",
    url: "dash.cloudflare.com",
  },
  {
    key: "g",
    url: "github.com",
  },
  {
    key: "n",
    url: "notion.so",
  },
  {
    key: "o",
    url: "overleaf.com",
  },
  {
    key: "w",
    url: "wolframalpha.com",
  },
  {
    key: "x",
    url: "xithrius.cloud",
  },
];

export default function Start() {
  const router = useRouter();

  useEffect(() => {
    const keyRouter = (e: KeyboardEvent) => {
      LINKS.forEach((link) => {
        if (e.key === link.key) {
          router.push(`https://${link.url}`);
        }
      });
    };

    window.addEventListener("keypress", keyRouter);

    return () => {
      window.removeEventListener("keypress", keyRouter);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center subpixel-antialiased">
        <table className="table-auto">
          <tbody>
            {LINKS.map((link) => (
              <tr
                key={link.key}
                className="transform text-2xl duration-300 ease-in-out hover:translate-x-5"
              >
                <td className="px-4">{link.key}</td>
                <td>
                  <BsArrowRight />
                </td>
                <td className="px-4 text-start hover:underline hover:underline-offset-8">
                  <a href={`https://${link.url}`}>{link.url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ThemeSwitch />
        <TopLeftNavigation href="/">xithrius.cloud</TopLeftNavigation>
      </main>
    </>
  );
}
