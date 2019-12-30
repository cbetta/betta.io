import React, { useState } from "react"
import { DiscussionEmbed } from 'disqus-react';

import Icon from "./Icon"
import { MdChevronRight } from 'react-icons/md' 

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
        <Icon type={ frontmatter.icon } />
        <h1>
          {frontmatter.title}
          <small>
            { frontmatter.date } - { timeToRead } minute read
          </small>
        </h1>
      </header>
      <div className={style.content}>{ render(htmlAst) }</div>
      <Disqus>
        <DiscussionEmbed 
          shortname='bettacoding' 
          config={disqusConfig}
        />
      </Disqus>
    </div>
  )
}

const Disqus = ({
  children
}) => {
  const [show, setShow] = useState(false)

  return (
    <button 
      className={style.comments}
      data-show={show} 
      onClick={() => setShow(true)}>
        <span>{ children }</span>
        <span><MdChevronRight />Show comments</span>
    </button>
  )
}

export default Article