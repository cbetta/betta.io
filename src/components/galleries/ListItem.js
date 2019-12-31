import React from "react"
import Link from "../Link"

import style from "./ListItem.module.scss"
import Icon from "../blog/Icon"

export default ({ fields, frontmatter, excerpt }) => {
  
  return (
    <Link 
      to={fields.slug} 
      className={style.this} 
    >
      <Icon type={ frontmatter.icon } />
      <header>
        <span>
          { frontmatter.title }
        </span>
      </header>
      <p></p>
      <p>{ excerpt }</p>
    </Link>
  )
}