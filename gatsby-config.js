module.exports = {
  siteMetadata: {
    siteUrl: 'https://new.betta.io',
    title: 'Cristiano Betta, Developer Advocate at Box and Developer Experience enthousiast',
    name: 'Cristiano Betta',
    description: "I'm a Senior Developer Advocate at Box, and a Developer Experience enthousiast. In the past I've helped companies to improve their developer onboarding, documentation, and tooling. My current role is to help grow the Box Platform into international markets"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
              linkImagesToOriginal: true,
              showCaptions: true,
              sizeByPixelDensity: true,
              withWebp: true
            },
          },
          "gatsby-remark-copy-linked-files"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#333`,
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Cristiano Betta",
        short_name: "Betta",
        start_url: "/",
        background_color: "#333",
        theme_color: "#333",
        display: "minimal-ui",
        icon: "src/images/icon.jpg",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-2925354-7`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {
                    fileAbsolutePath: { regex: "/blog/" }
                  }
                ) {
                  edges {
                    node {
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
              }
            `,
            output: `/atom.xml`,
            setup: ({
              query: {
                site: { siteMetadata },
              },
            }) => {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                feed_url: siteMetadata.siteUrl + `/atom.xml`,
                site_url: siteMetadata.siteUrl,
                generator: `GatsbyJS`,
              }
            },
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(({ node }) => {
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                  author: site.siteMetadata.name,
                }
              }),
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-subfont`,
    `gatsby-plugin-sass`,
  ],
}
