import React from "react"
import * as FIIcons from 'react-icons/fi' 
import * as FAIcons from 'react-icons/fa' 

export default ({ type }) => {
  let Component = FIIcons[`Fi${type}`] || FAIcons[`Fa${type}`]
  if (Component === undefined) { Component = FIIcons['FiCode'] }
  return <Component />
}
