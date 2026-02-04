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
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export default function Layout({ children }) {
  return (
    <GridContainer>
      <GlobalStyle />
      {children}
    </GridContainer>
  )
}