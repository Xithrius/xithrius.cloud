import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "lib/components/container";
import PostBody from "lib/components/post-body";
import PostHeader from "lib/components/post-header";
import Layout from "lib/components/layout";
import { getPostBySlug, getAllPosts } from "lib/api";
import PostTitle from "lib/components/post-title";
import markdownToHtml from "lib/markdownToHtml";
import type PostType from "lib/interfaces/post";
import ThemeSwitch from "lib/components/themeswitch";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout preview={preview}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="min-w-0 mx-4">
                <PostHeader title={post.title} date={post.date} />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
      </Layout>
      <ThemeSwitch />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
