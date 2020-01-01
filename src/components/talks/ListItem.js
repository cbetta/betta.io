import React, { useState, useEffect } from "react"
import Link from "../Link"

import style from "./ListItem.module.scss"
import Icon from "../blog/Icon"
import Flag from 'react-world-flags'

export default ({ url, conference, conference_url, title, country, date, icon }) => {
  
  const [expired, setExpired] = useState(true)
  
  useEffect(() => {
    const isExpired = Date.parse(date) <= Date.now()
    setExpired(isExpired)
  }, [date])

  return (
    <Link 
      to={url || conference_url} className={style.item} title={conference}
      data-expired={expired}
    >
      <Icon type={ icon } />
      <header>
        <span>
          { title }
        </span>
        <small>
          <span>{ date  }</span>
          <span>
            { conference }
            <Flag 
              code={ country.toUpperCase() }
              height='10'
            />
          </span>
          { !expired && <span>Upcoming</span>}
        </small>
      </header>
    </Link>
  )
}