import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <Typography component="h1" variant="h3" gutterBottom>{post.frontmatter.title}</Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`