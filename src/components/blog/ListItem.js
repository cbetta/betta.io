import React from "react"
import { Link } from "gatsby"

import style from "./ListItem.module.scss"
import Icon from "./Icon"

export default ({ timeToRead, fields, frontmatter }) => (
  <Link to={ fields.slug } className={style.this}>
    <Icon type={ frontmatter.icon } />
    <header>
      <h2>
        { frontmatter.title }
      </h2>
      <small>
        { frontmatter.date  } - { timeToRead } minute read
      </small>
    </header>
  </Link>
)