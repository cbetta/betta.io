import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";

import Layout from "../components/layout"
import Icon from "../components/icon"

import { style } from "./article.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={ post.excerpt } />
      </Helmet>
      <div className={ style }>
        <h1>
          <Icon type={ post.frontmatter.icon } />
          {post.frontmatter.title}
          <small>
            { post.timeToRead } minute read
          </small>
        </h1>
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
      timeToRead
      frontmatter {
        title
        icon
      }
    }
  }
`