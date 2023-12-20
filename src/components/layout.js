import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import {
  gridContainer,
  gridMain,
  gridFooter,
  heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={gridContainer}>
      <Header/>

      <div className={gridMain}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </div>

      <div className={gridFooter}>
        <p>Footer</p>
      </div>
    </div>
  )
}

export default Layout