import * as React from 'react'
import Chip from '../components/chip.jsx'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Chip/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage