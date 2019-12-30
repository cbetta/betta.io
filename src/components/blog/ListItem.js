import React from "react"
import { Link } from "gatsby"

import style from "./ListItem.module.scss"
import Icon from "./Icon"

export default ({ timeToRead, fields, frontmatter }) => (
  <Link to={ fields.slug } className={style.this} title={frontmatter.title}>
    <Icon type={ frontmatter.icon } />
    <header>
      <span>
        { frontmatter.title }
      </span>
      <small>
        <span>{ frontmatter.date  }</span>
        <span>{ timeToRead } minute read</span>
      </small>
    </header>
  </Link>
)