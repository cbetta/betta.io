import React from "react"

import ArticleListItem from "./article-list-item"
import { style } from "./article-list.module.scss"

export default ({ data }) => (
  <div className={ style }>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <ArticleListItem {...node} key={node.id} />
    ))}
  </div>
)