import Head from "next/head";
import LinkElem from "lib/components/links";
import ThemeSwitch from "lib/components/themeswitch";
import { SiGitea, SiGithub, SiTwitch, SiYoutube } from "react-icons/si";

const sitePages = ["Projects", "ToDo", "Blog", "Start"];
const socialLinks = [
  { href: "https://github.com/Xithrius", elem: <SiGithub /> },
  { href: "https://git.xithrius.cloud/", elem: <SiGitea /> },
  { href: "https://twitch.tv/Xithrius", elem: <SiTwitch /> },
  { href: "https://www.youtube.com/@Xithrius", elem: <SiYoutube /> },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center font-['Turret_Road']">
        <h1 className="m-0 text-[10vw] leading-[1.15]">Xithrius</h1>
        <p className="text-[3vw]">Rustacean, Pythonista, Triager.</p>
        <div className="mt-4 flex w-3/5 justify-center border-t border-solid border-current py-5 font-['Montserrat'] text-[1.3vw]">
          {sitePages.map((element) => (
            <LinkElem
              key={element}
              href={`/${element.toLowerCase()}`}
              elem={element}
              className="mx-5 hover:-translate-y-1"
            />
          ))}
          <ThemeSwitch />
        </div>
      </main>
      <div className="absolute inset-x-0 bottom-0 h-24 w-full border-t border-current">
        <div className="mt-8 flex items-center justify-center">
          {socialLinks.map((item) => (
            <div key={item.href} className="mx-5 scale-[2] hover:-translate-y-1">
              <LinkElem {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
