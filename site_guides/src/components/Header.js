import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MdNorthEast } from "react-icons/md";

const HeaderStyles = styled.div`
  text-decoration: underline;
  text-decoration-color: #ff2e88;
`;

export const Header = () => (
  <Link to="/">
    <HeaderStyles>
      <p>
        Home
        <MdNorthEast />
      </p>
    </HeaderStyles>
  </Link>
);
