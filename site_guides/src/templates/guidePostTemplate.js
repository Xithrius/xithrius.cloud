import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { MdEast, MdWest } from "react-icons/md";

const RightArrow = styled(MdEast)`
  vertical-align: middle;
  margin-left: 5px;
`;

const LeftArrow = styled(MdWest)`
  vertical-align: middle;
  margin-right: 5px;
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
            <Link to={next.fields.slug}>
              <p>
                {next.frontmatter.title}
                <RightArrow />
              </p>
            </Link>
          )}
        </>
      )}
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>
                <LeftArrow />
                {previous.frontmatter.title}
              </p>
            </Link>
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
