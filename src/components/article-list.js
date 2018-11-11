import React from "react"
import { StaticQuery, graphql } from "gatsby"

import ArticleListItem from "./article-list-item"
import { style } from "./article-list.module.scss"

const render = (data) => (
  <div className={ style }>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <ArticleListItem {...node} key={node.id} />
    ))}
  </div>
)

export default () => (
  <StaticQuery
    query={query}
    render={render}
  />
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      },
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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