import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost