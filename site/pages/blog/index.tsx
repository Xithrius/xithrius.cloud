import Container from "lib/components/container";
import MorePosts from "lib/components/more-posts";
import HeroPost from "lib/components/hero-post";
import Intro from "lib/components/intro";
import Layout from "lib/components/layout";
import { getAllPosts } from "lib/api";
import Post from "lib/interfaces/post";
import Head from "next/head";
import ThemeSwitch from "lib/components/themeswitch";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>blog.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Container>
          <Intro />
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-5xl">
            Most recent post
          </h2>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
      <div className="absolute right-8 top-8 flex justify-center">
        <ThemeSwitch />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
