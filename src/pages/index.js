import * as React from 'react'
import Chip from '../components/chip.jsx';
import Layout from "../components/layout";
import Track from "../components/track";

export default function Index() {
  return (
    <Layout>
      <Chip />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>