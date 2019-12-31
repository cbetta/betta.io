import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ talks, title }) => (
  <div className={ style }>
    <header><span>{ title || "Talks" }</span></header>

    { talks.map(talk => (
      <ListItem {...talk} key={talk.id} />
    ))}
  </div>
)