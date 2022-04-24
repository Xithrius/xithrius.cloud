import { graphql, Link } from "gatsby";
import React from "react";
import SEO from "react-seo-component";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Main = ({ data }) => {
  const { description, title, image, siteUrl, siteLanguage, siteLocale } =
    useSiteMetadata();
  return (
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
  );
};

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

export default Main;
