import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MdNorthEast } from "react-icons/md";

const HeaderStyles = styled.div`
  -webkit-text-decoration: #ff2e88 solid underline;
  text-decoration: #ff2e88 solid underline;
  -webkit-text-underline-position: under;
  text-underline-position: under;
`;

const ExternalLink = styled(MdNorthEast)`
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const Header = () => (
  <Link to="/">
    <HeaderStyles>
      <p>
        Home
        <ExternalLink />
      </p>
    </HeaderStyles>
  </Link>
);
