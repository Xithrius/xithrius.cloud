import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const projects = ["twitch-tui", "xithrius.cloud"];

function generateProjectHtml(name) {
  const link = `https://github.com/Xithrius/${name}`;
  const image = `https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/Xithrius/${name}`;

  return { link, image };
}

export async function getStaticProps() {
  return {
    props: {
      GithubInfo: projects.map((projectName) =>
        generateProjectHtml(projectName)
      ),
    },
    revalidate: 1,
  };
}

export default function Home({ GithubInfo }) {
  var items = [];

  for (let i = 0; i < GithubInfo.length; i++) {
    items.push(GithubInfo[i]);
  }

  return (
    <>
      <Head>
        <title>projects.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="p-10 flex flex-wrap h-screen w-screen content-start justify-center items-center gap-10">
        {items.map((element) => {
          <Link href={element.link}>
            <Image
              className="rounded-md"
              width="400"
              height="200"
              src={element.image}
            ></Image>
          </Link>;
        })}
      </div>
    </>
  );
}
