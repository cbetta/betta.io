import React from "react"

import { style } from './Message.module.scss'

const Message = ({ children }) => (
  <div className={ style }>
    { children }
  </div>
)

export default Message