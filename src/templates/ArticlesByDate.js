import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import List from '../components/blog/List'

export default ({ data, pageContext: { slug } }) => (
  <Layout>
    <Helmet>
      <title>{ slug.replace('/blog/', 'Blog Posts for ') }</title>
    </Helmet>
    <List articles={data.articles.nodes}
      title={slug.replace('/blog/', '')} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    articles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
        fields:{slug:{regex: $slug}}
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