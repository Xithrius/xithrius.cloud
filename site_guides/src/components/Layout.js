import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <AppStyles>
      <Header />
      {children}
    </AppStyles>
  );
};
