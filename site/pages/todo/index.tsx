import Head from "next/head";
import { BsCheck2 } from "react-icons/bs";
import ThemeSwitch from "lib/components/themeswitch";
import TopLeftNavigation from "lib/components/top-left-nav";
import Container from "lib/components/container";
import todo from "lib/constants/todo_listing";
import Stamp from "lib/components/stamp";

interface todoItem {
  desc: string;
  url?: string;
  done?: boolean;
}

interface todoProps {
  year: string;
  items: Array<todoItem>;
}

const TodoList = ({ year, items }: todoProps) => (
  <div>
    <div className="mb-5 flex justify-center text-3xl">{year}</div>
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
        {items.map((link) => (
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
        <tr>
          <td className="border-r-2 border-r-[#3c4445] px-4 py-2 text-right"></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container>
        <main className="flex w-screen flex-col flex-wrap items-center justify-center gap-10 p-10 text-[1rem]">
          {todo
            .map((e) => {
              return <TodoList key={e.year} year={e.year} items={e.items} />;
            })
            .reverse()}
          <ThemeSwitch />
          <TopLeftNavigation href="/">
            <Stamp />
          </TopLeftNavigation>
        </main>
      </Container>
    </>
  );
}
