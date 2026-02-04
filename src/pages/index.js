import * as React from 'react'
import Chip from '../components/chip.jsx';
import Layout from "../components/layout";
import Track from "../components/track";

export default function Index() {
  return (
    <Layout>
      <Chip $styleTop="solid" $styleLeft="solid" $justifyDirection="right" $alignDirection="end"/>
      <Chip $styleTop="solid" $styleRight="solid" $justifyDirection="left" $alignDirection="end"/>
      <Chip $styleBottom="solid" $styleLeft="solid" $justifyDirection="right" $alignDirection="start"/>
      <Chip $styleBottom="solid" $styleRight="solid" $justifyDirection="left" $alignDirection="start"/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>