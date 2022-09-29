import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";

const TODO = [
  {
    desc: "Twitch TUI",
    link: "https://github.com/Xithrius/twitch-tui",
    done: true,
    maintained: true,
  },
  {
    desc: "Timezone Tracker",
    link: "https://github.com/Xithrius/timezone-tracker",
    done: true,
    maintained: true,
  },
  {
    desc: "Git diff statistics crate",
  },
  {
    desc: "Markdown table generator",
    link: "https://github.com/Xithrius/markdown-table-rs",
    done: true,
    maintained: true,
  },
  {
    desc: "Discord bot for graphing",
    link: "https://github.com/Xithrius/Xythrion-legacy",
    done: true,
    maintained: false,
  },
  {
    desc: "Make guides/blogs on website",
    link: "https://github.com/Xithrius/xithrius.cloud/tree/main/site_blog",
    done: true,
    maintained: true,
  },
  {
    desc: "Control fan with ESP32 module, temp/humidity sensor",
  },
  {
    desc: "Create home server",
    link: "https://github.com/Xithrius/titan.xithrius.cloud",
    done: true,
    maintained: true,
  },
  {
    desc: "Gitea with woodpecker-ci, gitea-awesome",
  },
  {
    desc: "Create own polybar theme/config",
    link: "https://github.com/Xithrius/dotfiles/tree/main/.config/polybar",
    done: true,
    maintained: true,
  },
  {

  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>todo.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center text-[2vh] subpixel-antialiased">
        <table className="table-auto">
          <tbody>
            {LINKS.map((link) => (
              <tr key={link.key} className="duration-300 transform hover:translate-x-5 ease-in-out">
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
