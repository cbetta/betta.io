import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { MdMenu } from 'react-icons/md' 

import Head from './Head'

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
    <div className={style.body}>
      <div>
          <Link to='/'>
            <MdMenu />
          </Link>
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