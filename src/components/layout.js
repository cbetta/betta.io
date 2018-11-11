import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.scss"
import { Helmet } from "react-helmet";
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

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

let render = children => {
  return data => (
    <React.Fragment>
       <Helmet
        defaultTitle={ data.site.siteMetadata.title }
        titleTemplate={ `%s - ${ data.site.siteMetadata.title }`}>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <meta name="description" content={ data.site.siteMetadata.description } />
        <html lang='en-US' />
      </Helmet>
      <div className={style.this}>
        <div className={style.body}>
          <div>
            <Link to="/">{ data.site.siteMetadata.name }</Link>
          </div>

          <div>
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={render(children)}
  />
)