import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";

import Layout from "../layouts/layout"
import Icon from "../components/icon"

import { style } from "./article.module.scss"

export default ({ data: { markdownRemark: article } }) => (
  <Layout>
    <Helmet>
      <title>{article.frontmatter.title}</title>
      <meta name="description" content={ article.excerpt } />
    </Helmet>
    <Article {...article} />
  </Layout>
)

const Article = ({ frontmatter, timeToRead, html }) => (
  <div className={ style }>
    <h1>
      <Icon type={ frontmatter.icon } />
      {frontmatter.title}
      <small>
        { timeToRead } minute read
      </small>
    </h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

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