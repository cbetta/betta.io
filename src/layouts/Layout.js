import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Head from './Head'
import Menu from './Menu'

import style from "./Layout.module.scss"

import 'typeface-roboto'

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

const Layout = ({ children }) => (
  <div className={style.content}>
    <Menu />
    <div className={style.body}>
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