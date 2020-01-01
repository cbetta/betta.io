import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Article from '../components/blog/Article'

export default ({ data: { site, article }, path }) => (
  <Layout>
    <Helmet>
      <title>{article.frontmatter.title}</title>

      <meta name="description" content={ article.excerpt } />
      <meta name="keywords" content={ article.frontmatter.tags } />
      <meta name="image" content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />
      <meta name="twitter:title" content={article.frontmatter.title} />
      <meta name="twitter:description" content={article.excerpt}  />
      <meta name="twitter:site" content='@cbetta'  /> 

      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${path}`} />
      <meta property="og:title" content={article.frontmatter.title} />
      <meta property="og:description" content={article.excerpt} />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />
      <meta property="og:image:url" content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />
      <meta property="og:image:secure_url" content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="314" />
      <meta property="og:locale" content="en_us" /> 
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
    article: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        icon
        tags
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`