import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'


const Blogposts = ({ data }) => {
  return(
    <Layout pageTitle="Markdown Blogposts">
      <ul>
        {
          data.allMarkdownRemark.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={"/blogposts/"+node.frontmatter.slug}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted on: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
    </Layout>

  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        id
      }
    }
  }
`

export default Blogposts