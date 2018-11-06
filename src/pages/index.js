import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import * as Icons from '@material-ui/icons' 

const Icon = ({ type }) => {
  let Component = Icons[type]
  if (Component === undefined) { Component = Icons['Code'] }
  return <Component />
}

export default ({ data }) => (
  <Layout>
    <h1>{ data.site.siteMetadata.title }</h1>
    <List>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ListItem key={node.id} button component={Link} to={node.fields.slug}>
          <ListItemIcon>
            <Icon type={ node.frontmatter.icon } />
          </ListItemIcon>
          <ListItemText 
            primary={node.frontmatter.title}
            secondary={node.frontmatter.date} />
          
        </ListItem>
      ))}
    </List>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      },
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
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
  }
`