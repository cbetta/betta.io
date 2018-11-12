import React from "react"
import * as Icons from 'react-icons/fi' 

export default ({ type }) => {
  let Component = Icons[`Fi${type}`]
  if (Component === undefined) { Component = Icons['FiCode'] }
  return <Component />
}
