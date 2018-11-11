import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={ post.excerpt } />
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`