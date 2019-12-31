import React from "react"

import { Helmet } from "react-helmet"

const Head = ({ site: { siteMetadata} }) => (
  <Helmet
    defaultTitle={ siteMetadata.title }
    titleTemplate={ `%s - ${ siteMetadata.title }`}>
    <meta name="description" content={ siteMetadata.description } />
    <html lang='en-US' />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
  </Helmet>
)

export default Head