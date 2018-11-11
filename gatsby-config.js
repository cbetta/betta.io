module.exports = {
  siteMetadata: {
    title: 'Cristiano Betta'
  },
  plugins: [
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallbackWhitelist: [],
      }
    }
  ],
}
