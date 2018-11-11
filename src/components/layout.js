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
      <div className={style.body}>
        <div>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>

        <div>
          {children}
        </div>
      </div>
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