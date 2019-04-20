import React from "react"

import Icon from "./Icon"

import { render } from '../../utils/rehype-render'
import { style } from "./Article.module.scss"

const Article = ({ frontmatter, timeToRead, htmlAst }) => (
  <div className={ style }>
    <h1>
      <Icon type={ frontmatter.icon } />
      {frontmatter.title}
      <small>
        { timeToRead } minute read
      </small>
    </h1>
    <div>{ render(htmlAst) }</div>
  </div>
)

export default Article