import Head from "next/head";
import Footer from "./components/footer";
import LinkItem from "./components/links";

const items = ["Projects", "Templates", "Blog", "Start"];

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
          {items.map((element) => (
            <LinkItem
              href={`https://${element.toLowerCase()}.xithrius.cloud`}
              key={element}
              item={element}
              tailwind="hover:-translate-y-1 mx-5"
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
