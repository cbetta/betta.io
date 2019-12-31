import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts/Layout"
import List from "../components/blog/List"
import Bio from "../components/blog/Bio"

export default ({ data }) => (
  <Layout>
    { console.log(data)}
    <Bio bio={data.bio} image={data.image} />
    <List articles={data.articles.nodes} />
  </Layout>
)


export const query = graphql`
  query {
    bio: biosYaml {
      title
      description
    }
    image: file(relativePath: { eq: "cbetta.jpg" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
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