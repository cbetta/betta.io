import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Article from '../components/blog/Article'

export default ({ data: { markdownRemark: article } }) => (
  <Layout>
    <Helmet>
      <title>{article.frontmatter.title}</title>
      <meta name="description" content={ article.excerpt } />
    </Helmet>
    <Article {...article} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        icon
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`