import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Article from '../components/blog/Article'

export default ({ data: { site, markdownRemark: article }, path }) => (
  <Layout>
    <Helmet>
      <title>{article.frontmatter.title}</title>
      <meta name="description" content={ article.excerpt } />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />
    </Helmet>
    <Article {...article} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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