import { graphql, Link } from "gatsby";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import SEO from "react-seo-component";
import { Layout } from "../components/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default function Home() {
  const { description, title, image, siteUrl, siteLanguage, siteLocale } =
    useSiteMetadata();

  return (
    <div className={styles.container}>
      <Head>
        <title>guides.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <SEO
            title={title}
            description={description || `nothin'`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
          />
          <IndexWrapper>
            {data.allMdx.nodes.map(({ id, _, frontmatter, fields }) =>
              frontmatter.published ? null : (
                <PostWrapper key={id}>
                  <Link to={fields.slug}>
                    <h1>{frontmatter.title}</h1>
                  </Link>
                  <p>{frontmatter.date}</p>
                  <p>{frontmatter.description}</p>
                </PostWrapper>
              )
            )}
          </IndexWrapper>
        </Layout>
      </main>
    </div>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;
