import Head from "next/head";
import { GrCheckmark } from "react-icons/io";

const TODO = [
  {
    desc: "A year-long contribution streak",
  },
  {
    desc: "Create a website with multiple subdomains",
    url: "https://github.com/Xithrius/xithrius.cloud",
    done: true,
  },
  {
    desc: "Complete one of the years for Advent of Code",
  },
  {
    desc: "Twitch TUI",
    url: "https://github.com/Xithrius/twitch-tui",
    done: true,
  },
  {
    desc: "Timezone Tracker",
    url: "https://github.com/Xithrius/timezone-tracker",
    done: true,
  },
  {
    desc: "Git diff statistics crate",
  },
  {
    desc: "Markdown table generator",
    url: "https://github.com/Xithrius/markdown-table-rs",
    done: true,
  },
  {
    desc: "Discord bot for graphing",
    url: "https://github.com/Xithrius/Xythrion-legacy",
    done: true,
  },
  {
    desc: "Make guides/blogs on website",
    url: "https://github.com/Xithrius/xithrius.cloud/tree/main/site_blog",
    done: true,
  },
  {
    desc: "Control fan with ESP32 module, temp/humidity sensor",
  },
  {
    desc: "Create home server",
    url: "https://github.com/Xithrius/titan.xithrius.cloud",
    done: true,
  },
  {
    desc: "Gitea with woodpecker-ci, gitea-awesome",
  },
  {
    desc: "Create own polybar theme/config",
    url: "https://github.com/Xithrius/dotfiles/tree/main/.config/polybar",
    done: true,
  },
  {
    desc: "Rust TUI template repository",
    url: "https://github.com/Xithrius/rust-tui-project-template",
    done: true,
  },
  {
    desc: "Website counting towards Y3K",
  },
  {
    desc: "Daily weather by some means of notification",
  },
  {
    desc: "Get CD working on a VPS",
    done: true,
  },
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
            {TODO.map((link) => (
              <tr key={link.desc}>
                <td className="px-4 py-2 text-right outline outline-1">
                  {link.url ? (
                    <a
                      href={`https://${link.url}`}
                      className="text-[#96b8e8] underline decoration-[#96b8e8] underline-offset-4"
                    >
                      {link.desc}
                    </a>
                  ) : (
                    link.desc
                  )}
                </td>
                <td>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
