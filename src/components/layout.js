import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.scss"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

let render = children => {
  return data => (
    <div className={style.this}>
      <Link to={`/`}>
        <h3>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`}>
        About
      </Link>
      {children}
    </div>
  )
}

export default ({ children }) => (
  <React.Fragment>
    <StaticQuery
      query={query}
      render={render(children)}
    />
  </React.Fragment>
)