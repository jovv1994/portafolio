import React from 'react'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #0B0E20;
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
`

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <GridContainer>
      <GlobalStyle />
      {children}
    </GridContainer>
  )
}