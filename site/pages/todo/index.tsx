import Head from "next/head";
import { BsCheck2 } from "react-icons/bs";

import ThemeSwitch from "../components/themeswitch";

const TODO = [
  {
    desc: "Survive 2022",
  },
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
    url: "https://github.com/Xithrius/xithrius.cloud/blob/main/docker-compose.yml#L23-L36",
    done: true,
  },
  {
    desc: "Create an one-for-all package manager",
    url: "https://github.com/Xithrius/nitride",
  },
  {
    desc: "Discord bot for graphing",
    url: "https://github.com/Xithrius/Xythrion",
  },
  {
    desc: "Fullstack calendar application",
  },
  {
    desc: "IRC in wasm",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>todo.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center text-[1rem] subpixel-antialiased">
        <table className="table-auto border-collapse">
          <thead className="font-bold">
            <tr className="border-b-2 border-b-[#3c4445]">
              <td className="border-r-2 border-r-[#3c4445] px-4 pb-2 pt-4 text-right">
                <b>Goal</b>
              </td>
              <td className="px-4 pb-2 pt-4">
                <b>Status</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {TODO.map((link) => (
              <tr className="stripe" key={link.desc}>
                <td className="border-r-2 border-r-[#3c4445] px-4 py-3 text-right ">
                  {link.url ? (
                    <a
                      href={link.url}
                      className="text-[#4280b3] underline decoration-[#4280b3] underline-offset-4"
                    >
                      {link.desc}
                    </a>
                  ) : (
                    link.desc
                  )}
                </td>
                <td className="px-4 py-3">{link.done ? <BsCheck2 /> : undefined}</td>
              </tr>
            ))}
            {/* Empty row for padding */}
            <tr>
              <td className="border-r-2 border-r-[#3c4445] px-4 py-2 text-right"></td>
            </tr>
          </tbody>
        </table>
        <div className="absolute right-8 top-8 flex justify-center">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
