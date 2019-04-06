import React from "react"

import ArticleListItem from "./article-list-item"
import { style } from "./article-list.module.scss"

export default ({ data: { allMarkdownRemark: { edges }} }) => (
  <div className={ style }>
    { edges.map(({ node }) => (
      <ArticleListItem {...node} key={node.id} />
    ))}
  </div>
)