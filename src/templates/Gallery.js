import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Gallery from '../components/galleries/Gallery'

export default ({ data: { site, gallery }, path }) => (
  <Layout>
    <Helmet>
      <title>{gallery.frontmatter.title}</title>
      <meta name="description" content={ gallery.excerpt } />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`${site.siteMetadata.siteUrl}${path}twitter-card.jpg`} /> */}
    </Helmet>
    <Gallery {...gallery} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    gallery: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        icon
      }
    }
  }
`