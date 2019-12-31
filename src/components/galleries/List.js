import React from "react"

import ListItem from "./ListItem"
import style from "./List.module.scss"
import { Link } from "gatsby"

export default ({ galleries, title }) => (
  <div className={ style.list }>
    <header><span>{ title || "Developer Experience Design Patterns" }</span></header>

    <div className={style.description}>
      <p>
        As part of my series of <Link to='/blog/categories/developer-experience/'>Developer Experience</Link> I've started
        to take a lot of screenshots of different parts of a developer experience UI. I've decided to collect some of these
        across the different products focussing on specific elements.
      </p>

      <p>
        I hope this allows you to see how different products have tackled the same problems
        in their own ways.
      </p>
    </div>

    { galleries.map(gallery => (
      <ListItem {...gallery} key={gallery.id} />
    ))}
  </div>
)