const siteMetadata = require('./site-metadata.json')

const FileSystem = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `./content/blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `galleries`,
      path: `./content/galleries`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./content/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `./content/data/`,
    },
  },
]

const Styling = [
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  },
  `gatsby-plugin-sass`
]

const Images = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`
]

const Markdown = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      gfm: true,
      commonmark: true,
      plugins: [
        'gatsby-remark-autolink-headers',
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 600,
            withWebp: true,
            tracedSVG: true,
            quality: 50
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        "gatsby-remark-copy-linked-files",
        {
          resolve: `gatsby-remark-social-cards`,
          options: {
            title: {
              style: "bold",
              color: "black",
              size: 48
            },
            meta: {
              parts: [
                "Cristiano Betta",
                " - ",
                { field: "date", format: "mmmm dS, yyyy"},
              ],
              color: 'black',
              size: 32
            },
            xMargin: 30,
            yMargin: 30,
            background: "#fefefe"
          }
        }
      ],
    },
  },
  `gatsby-plugin-catch-links`,
]

const Blog = [
  'blog-create-pages',
  `gatsby-plugin-twitter`
]

const Feed = [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `{
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }`,
      feeds: [
        {
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                nodes {
                  excerpt
                  html
                  frontmatter {
                    title
                    date
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          `,
          output: `/atom.xml`,
          title: "Cristiano Betta",
          match: "^/blog/",
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.nodes.map(node => {
              return Object.assign({}, node.frontmatter, {
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              })
            })
          }
        },
      ],
    },
  }
]

const PWA = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Cristiano Betta",
      short_name: "Betta",
      start_url: "/",
      background_color: "#FAFAFA",
      theme_color: "#FAFAFA",
      display: "standalone",
      icon: "content/images/icon.png",
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
        navigateFallbackWhitelist: [],
    }
  }
]

const SEO = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-2925354-7`,
    },
  }
]

const Optimizations = [ 
  {
    resolve: `gatsby-plugin-netlify-cache`,
    options: {
      cachePublic: true
    }
  },
  `gatsby-plugin-netlify`,
  `gatsby-plugin-force-trailing-slashes`,
]

const Data = [
  `gatsby-transformer-yaml`
]

const Galleries = [
  'galleries-create-pages',
]

module.exports = {
  siteMetadata,
  plugins: [
    ...FileSystem,
    ...Styling,
    ...Images,
    ...Markdown,
    ...Blog,
    ...Galleries,
    ...Data,
    ...Feed,
    ...PWA,
    ...SEO,
    ...Optimizations,
  ],
}
