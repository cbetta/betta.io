import React from "react"
import * as FIIcons from 'react-icons/fi' 

export default ({ type }) => {
  let Component = FIIcons[`Fi${type}`]
  if (Component === undefined) { Component = FIIcons['FiCode'] }
  return <Component />
}
