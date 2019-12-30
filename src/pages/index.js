import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts/Layout"
import List from "../components/blog/List"
import Bio from "../components/blog/Bio"

export default ({ data }) => (
  <Layout>
    <Bio bio={data.bio} />
    <List articles={data.articles.nodes} />
  </Layout>
)


export const query = graphql`
  query {
    bio: biosYaml {
      title
      description
    }
    articles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
      }
    ) 
    {
      nodes {
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
`