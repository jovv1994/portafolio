import * as React from 'react'
import Chip from '../components/chip.jsx';
//import Layout from "../components/layout";
import Track from "../components/track";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #0B0E20;
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export default function Index() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Track />
      <Chip />
    </MainContainer>
  )
}

export const Head = () => <title>Home Page</title>