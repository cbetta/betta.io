import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.scss"
import { Helmet } from "react-helmet";

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
        <meta name="description" content={ data.site.siteMetadata.description } />
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