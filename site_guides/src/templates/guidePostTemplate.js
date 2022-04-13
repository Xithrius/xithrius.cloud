import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { MdEast, MdWest } from "react-icons/md";

const LinkStyles = styled.div`
  text-decoration: underline;
  text-decoration-color: #ff2e88;
`;

const guideTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {next === false ? null : (
        <>
          {next && (
            <LinkStyles>
              <Link to={next.fields.slug}>
                <p>
                  {next.frontmatter.title}
                  <MdEast />
                </p>
              </Link>
            </LinkStyles>
          )}
        </>
      )}
      {previous === false ? null : (
        <>
          {previous && (
            <LinkStyles>
              <Link to={previous.fields.slug}>
                <p>
                  <MdWest />
                  {previous.frontmatter.title}
                </p>
              </Link>
            </LinkStyles>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

export default guideTemplate;
