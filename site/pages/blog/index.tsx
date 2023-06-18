import Container from "lib/components/container";
import ListPosts from "lib/components/list-posts";
import Intro from "lib/components/intro";
import Layout from "lib/components/layout";
import { getAllPosts } from "lib/api";
import Post from "lib/interfaces/post";
import Head from "next/head";
import ThemeSwitch from "lib/components/themeswitch";
import TopLeftNavigation from "lib/components/top-left-nav";
import Stamp from "lib/components/stamp";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Container>
          <Intro />
          <ListPosts posts={allPosts} />
        </Container>
      </Layout>
      <ThemeSwitch />
      <TopLeftNavigation href="/">
        <Stamp />
      </TopLeftNavigation>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "coverImage"]);

  return {
    props: { allPosts },
  };
};
