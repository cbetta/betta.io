import React from "react"
import style from "./article-list-item.module.scss"
import { Link } from "gatsby"
import * as Icons from 'react-icons/fi' 

const Icon = ({ type }) => {
  let Component = Icons[`Fi${type}`]
  if (Component === undefined) { Component = Icons['FiCode'] }
  return <Component />
}

export default ({ id, fields, frontmatter }) => (
  <Link to={ fields.slug } className={style.this}>
    <Icon type={ frontmatter.icon } />
    <header>
      <h2>
        { frontmatter.title }
      </h2>
      <small>
        { frontmatter.date  }
      </small>
    </header>
  </Link>
)