import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ articles, title }) => (
  <div className={ style }>
    <header><span>{ title || "Blog" }</span></header>

    { articles.map(article => (
      <ListItem {...article} key={article.id} />
    ))}
  </div>
)