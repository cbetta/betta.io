import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={ node.fields.slug }>
          <div>
            {/* { node.frontmatter.icon } */}
            {node.frontmatter.title}
            {/* {node.frontmatter.date}  */}
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      },
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            icon
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`