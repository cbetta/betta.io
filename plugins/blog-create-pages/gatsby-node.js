const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent)

  if (node.internal.type === `MarkdownRemark` && parent.sourceInstanceName === 'blog') {
    let name = parent.name.replace(/\d\d\d\d-\d\d-\d\d-/, '')
    let date = new Date(node.frontmatter.date).toISOString().substr(0,10).replace(/-/g, "/")
    
    createNodeField({
      node,
      name: `slug`,
      value: `/blog/${date}/${name}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await query(graphql)  
  
  data.posts.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Article.js`),
      context: {
        slug: node.fields.slug,
      },
    })


    // also create all index pages
    const parts = node.fields.slug.replace('/blog/', '').split('/')
    parts.pop()

    let newSlug = '/blog/'
    parts.forEach(part => {
      newSlug += `${part}/`

      createPage({
        path: newSlug,
        component: path.resolve(`./src/templates/ArticlesByDate.js`),
        context: {
          slug: newSlug,
        },
      })
    })
  })
}

const query = async (graphql) => graphql(`{
  posts: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "content/blog/" }
    }
  ) {
    nodes {
      fields {
        slug
      }
    }
  }
}`)
