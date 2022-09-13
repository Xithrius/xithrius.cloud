import Head from "next/head";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";

const LINKS = [
  {
    key: "g",
    url: "github.com",
  },
  {
    key: "c",
    url: "dash.cloudflare.com",
  },
  {
    key: "n",
    url: "notion.so",
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

export default function Home() {
  const router = useRouter();

  const keyRouter = (e) => {
    LINKS.forEach((link) => {
      if (e.key === link.key) {
        router.push(`https://${link.url}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keypress", keyRouter);

    return () => {
      window.removeEventListener("keypress", keyRouter);
    };
  }),
    [keyRouter];

  return (
    <>
      <Head>
        <title>start.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center text-[2vh] subpixel-antialiased">
        <table className="table-auto">
          <tbody>
            {LINKS.map((link) => (
              <tr key={link.key}>
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
      </main>
    </>
  );
}
