import React, { useState, useEffect } from "react"
import { DiscussionEmbed } from 'disqus-react'

import { MdChevronRight } from 'react-icons/md' 

import style from "./Disqus.module.scss"

const Disqus = ({
  config
}) => {
  const [show, setShow] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setLoaded(true), [])

  return (
    <button 
      className={style.disqus}
      data-show={show} 
      data-loaded={loaded}
      onClick={() => setShow(true)}>
        <span>
          <DiscussionEmbed 
            shortname='bettacoding' 
            config={config}
          />
        </span>
        <span><MdChevronRight />Show comments</span>
    </button>
  )
}

export default Disqus