import * as React from 'react'
import * as gridContainer from '../components/index.module.css'

const IndexPage = () => {
  return (
    <div className={gridContainer} pageTitle="Home Page">
      <p className={gridContainer}>I'm making this by following the Gatsby Tutorial.</p>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage