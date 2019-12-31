import React from "react"

import Icon from "../blog/Icon"

import { render } from '../../utils/rehype-render'
import style from "./Gallery.module.scss"
import { Link } from "gatsby"

const Gallery = ({ 
  frontmatter, 
  htmlAst
}) => {
  return (
    <div className={ style.gallery }>
      <header>
        <h1>
          {frontmatter.title}
          <small>
            <Icon type={ frontmatter.icon } />
            <Link className={style.galleries} to="/galleries">Galleries</Link>
          </small>
        </h1>
      </header>
      <div className={style.content}>{ render(htmlAst) }</div>
    </div>
  )
}

export default Gallery