import React from "react"

import FaIcon from '../blog/Icon'

import { style } from './Icon.module.scss'

const Check = ({ type, color }) => (
  <span class={ style } data-color={ color}>
    <FaIcon type={ type } />
  </span>
)

export default Check