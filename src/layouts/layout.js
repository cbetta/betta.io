import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.scss"
import { Helmet } from "react-helmet"

import 'typeface-lato'

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={(data => (
      <>
        <Head { ...data }/>
        <Layout { ...data }>
          { children }
        </Layout>
      </>
    ))}
  />
)

const Head = ({ site: { siteMetadata} }) => (
  <Helmet
    defaultTitle={ siteMetadata.title }
    titleTemplate={ `%s - ${ siteMetadata.title }`}>
    <meta name="description" content={ siteMetadata.description } />
    <html lang='en-US' />
    <link rel="preconnect" href="https://www.google-analytics.com" />
  </Helmet>
)


const Layout = ({ site: { siteMetadata}, children }) => (
  <div className={style.this}>
    <div className={style.body}>
      <div>
        <Link to="/">{ siteMetadata.name }</Link>
      </div>
      <div>
        {children}
      </div>
    </div>
  </div>
)


const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        description, 
        name
      }
    }
  }
`;