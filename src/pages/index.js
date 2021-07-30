import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
        alt="Mr Robot poster"
        src="../images/robot.jpg"
      />
    </Layout>
  )
}

export default IndexPage
