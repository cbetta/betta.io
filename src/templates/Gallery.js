import React from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Gallery from '../components/galleries/Gallery'

export default ({ data: { site, gallery } }) => (
  <Layout>
    <Helmet>
      <title>{gallery.frontmatter.title}</title>
      
      <meta name="description" content={ gallery.excerpt } />
      <meta name="description" content={ gallery.frontmatter.tags } />
      <meta name="image" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/twitter-card.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/twitter-card.jpg`} />
      <meta name="twitter:title" content={`${gallery.frontmatter.title} - Cristiano Betta`} />
      <meta name="twitter:description" content={gallery.excerpt}  />
      <meta name="twitter:site" content='@cbetta'  /> 

      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/`} />
      <meta property="og:title" content={`${gallery.frontmatter.title} - Cristiano Betta`} />
      <meta property="og:description" content={gallery.excerpt} />
      <meta property="og:image" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/twitter-card.jpg`} />
      <meta property="og:image:url" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/twitter-card.jpg`} />
      <meta property="og:image:secure_url" content={`${site.siteMetadata.siteUrl}${gallery.fields.slug}/twitter-card.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="314" />
      <meta property="og:locale" content="en_us" /> 
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
        tags
      }
    }
  }
`