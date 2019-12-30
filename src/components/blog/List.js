import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ articles }) => (
  <div className={ style }>
    <header><span>Highlights from the blog</span></header>

    { articles.map(article => (
      <ListItem {...article} key={article.id} />
    ))}
  </div>
)