import React from 'react'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #0B0E20;
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle/>
      {children}
    </React.Fragment>
  )
}