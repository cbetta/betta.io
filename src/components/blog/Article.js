import React from "react"

import rehypeReact from "rehype-react"

import Message from "../elements/Message"
import Icon from "./Icon"

import { style } from "./Article.module.scss"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    'message': Message 
  },
}).Compiler

const Article = ({ frontmatter, timeToRead, htmlAst }) => (
  <div className={ style }>
    <h1>
      <Icon type={ frontmatter.icon } />
      {frontmatter.title}
      <small>
        { timeToRead } minute read
      </small>
    </h1>
    <div>{ renderAst(htmlAst) }</div>
  </div>
)

export default Article