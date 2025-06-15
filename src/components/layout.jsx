import * as React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import Footer from './footer'
import {
  gridContainer
} from '../styles/layout.module.css'

const Layout = ({children }) => {
  return (
    <div className={gridContainer}>
      <Header/>

      {children}

      <Footer/>
    </div>
  )
}

export default Layout