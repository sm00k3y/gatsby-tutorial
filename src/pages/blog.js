import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const BlogPage = ({ data }) => {

  console.log(data);

  return (
    <Layout pageTitle="Blog">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}


export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`


export default BlogPage