import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import style from "./layout.module.scss"
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
    <Grid container className={style.this}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography component={Link} variant="h6" to={`/`}>
            {data.site.siteMetadata.title}
          </Typography>
          <Typography component={Link} variant="h6" to={`/about`}>
            About
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid item>
        {children}
      </Grid>
    </Grid>
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