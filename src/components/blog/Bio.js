import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'

import style from './Bio.module.scss'

const Bio = ({
  bio,
  image
}) => (
  <div className={style.bio}>
    <Img fixed={image.childImageSharp.fixed} />
    <header><span>{ bio.title }</span></header>
    <ReactMarkdown source={ bio.description } />
  </div>
)

export default Bio
