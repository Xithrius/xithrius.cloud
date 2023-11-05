import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "lib/components/themeswitch";
import TopLeftNavigation from "lib/components/top-left-nav";
import Container from "lib/components/container";
import Stamp from "lib/components/stamp";

const githubProjects = [
  "twitch-tui",
  "Xythrion",
  "Ordis",
  "xithrius.cloud",
  "titan.xithrius.cloud",
  "competitive-programming",
  "nitroxide",
  "timezone-tracker",
  "gradient-skins",
];

const githubTemplates = [
  "rust-binary-project-template",
  "nextjs-fastapi-auth-template",
  "python-project-template",
];

interface InfoProps {
  name: string;
  link: string;
  image: string;
}

function getGitHubInfo(name: string): InfoProps {
  const link = `https://github.com/Xithrius/${name}`;
  const image = `https://opengraph.githubassets.com/f46d3d21c0c43e565e27e314eb51c91b17f78342c1c4de976401d50a39d1a674/Xithrius/${name}`;

  return { name, link, image };
}

export async function getStaticProps() {
  return {
    props: {
      projects: githubProjects.map((name) => getGitHubInfo(name)),
      templates: githubTemplates.map((name) => getGitHubInfo(name)),
    },
    revalidate: 3600,
  };
}

interface HomeProps {
  projects: Array<InfoProps>;
  templates: Array<InfoProps>;
}

export default function Home({ projects, templates }: HomeProps) {
  return (
    <>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container>
        <div className="flex h-24 w-full items-center justify-center text-5xl underline decoration-solid decoration-1 underline-offset-8">
          Project Repositories
        </div>
        <div className="flex w-screen flex-wrap content-start items-center justify-center gap-10 p-10">
          {projects.map((element) => (
            <Link href={element.link} key={element.name}>
              <Image
                src={element.image}
                alt={element.name}
                width={400}
                height={200}
                className="cursor-pointer rounded-md ring-current ring-offset-2 hover:ring-2"
              />
            </Link>
          ))}
        </div>
        <div className="flex h-24 w-full items-center justify-center text-5xl underline decoration-solid decoration-1 underline-offset-8">
          Template Repositories
        </div>
        <div className="flex w-screen flex-wrap content-start items-center justify-center gap-10 p-10">
          {templates.map((element) => (
            <Link href={element.link} key={element.name}>
              <Image
                src={element.image}
                alt={element.name}
                width={400}
                height={200}
                className="cursor-pointer rounded-md ring-current ring-offset-2 hover:ring-2"
              />
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <TopLeftNavigation href="/">
          <Stamp />
        </TopLeftNavigation>
      </Container>
    </>
  );
}
