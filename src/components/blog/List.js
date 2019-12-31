import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ articles, title }) => (
  <div className={ style }>
    <header><span>{ title || "Highlights from the blog" }</span></header>

    { articles.map(article => (
      <ListItem {...article} key={article.id} />
    ))}
  </div>
)