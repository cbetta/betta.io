import React from "react"

import Icon from "./Icon"
import Disqus from "./Disqus"

import { render } from '../../utils/rehype-render'
import style from "./Article.module.scss"

const Article = ({ 
  id,
  frontmatter, 
  timeToRead,
  htmlAst,
  fields
}) => {
  const disqusConfig = {
    url: `https://betta.io${fields.slug}`,
    identifier: id,
    title: frontmatter.title
  }
  
  return (
    <div className={ style.article }>
      <header>
        <h1>
          {frontmatter.title}
          <small>
            <Icon type={ frontmatter.icon } />
            <span className={style.date}>{ frontmatter.date }</span>
            <span className={style.ttr}>{ timeToRead } minute read</span>
          </small>
        </h1>
      </header>
      <div className={style.content}>{ render(htmlAst) }</div>
      <Disqus config={disqusConfig} />
    </div>
  )
}

export default Article