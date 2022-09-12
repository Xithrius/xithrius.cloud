import Head from "next/head";
import Link from "next/link";

const githubTemplates = [
  "rust-binary-project-template",
  "rust-library-project-template",
  "rust-aoc-template",
  "rust-tui-project-template",
  "nextjs-project-template-for-github",
  "nextjs-project-template",
  "cpp-project-template",
  "c-project-template",
  "python-project-template",
  "general-project-template",
];

function getGitHubInfo(name) {
  const link = `https://github.com/Xithrius/${name}`;
  const image = `https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/Xithrius/${name}`;

  return { name, link, image };
}

export async function getStaticProps() {
  return {
    props: {
      GithubInfo: githubTemplates.map((templateName) =>
        getGitHubInfo(templateName),
      ),
    },
    revalidate: 3600,
  };
}

export default function Home({ GithubInfo }) {
  return (
    <>
      <Head>
        <title>templates.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex h-24 w-full items-center justify-center border-b text-5xl">
        Template Repositories
      </div>
      <div className="flex h-screen w-screen flex-wrap content-start items-center justify-center gap-10 p-10">
        {GithubInfo.map((element) => (
          <Link href={element.link} key={element.name}>
            <img
              src={element.image}
              alt={element.name}
              className="h-[200px] w-[400px] cursor-pointer rounded-md ring-current ring-offset-2 hover:ring-2"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
