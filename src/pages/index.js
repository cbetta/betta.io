import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts/layout"
import ArticleList from "../components/article-list"

export default ({ data }) => (
  <Layout>
    <ArticleList data={data} />
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
      }
    ) 
    {
      edges {
        node {
          id
          timeToRead
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