const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent)

  if (node.internal.type === `MarkdownRemark` && parent.sourceInstanceName === 'galleries') {
    let name = parent.name
    
    createNodeField({
      node,
      name: `slug`,
      value: `/galleries/${name}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await query(graphql)  
  
  data.posts.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Gallery.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const query = async (graphql) => graphql(`{
  posts: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "content/galleries/" }
    }
  ) {
    nodes {
      fields {
        slug
      }
    }
  }
}`)
