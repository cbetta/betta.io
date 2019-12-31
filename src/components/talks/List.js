import React from "react"

import ListItem from "./ListItem"
import { style } from "./List.module.scss"

export default ({ talks, title }) => (
  <div className={ style }>
    <header><span>{ title || "Talks" }</span></header>

  <div>
    <p>
      I've had the honor to have spoken at the events below. I love to
      talk about Developer Experience and Developer Relations, and I'm
      fascinated with the boundary where technology and culture meet. 
    </p>

  </div>
    { talks.map(talk => (
      <ListItem {...talk} key={talk.id} />
    ))}
  </div>
)