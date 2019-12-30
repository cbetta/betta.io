import React from "react"

import ReactMarkdown from 'react-markdown'

import style from './Bio.module.scss'

const Bio = ({
  bio
}) => (
  <div className={style.bio}>
    <header><span>{ bio.title }</span></header>
    <ReactMarkdown source={ bio.description } />
  </div>
)

export default Bio
