import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MdNorthEast } from "react-icons/md";

const HeaderStyles = styled.div`
  text-decoration: underline;
  text-decoration-color: #ff2e88;
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
