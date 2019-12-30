import React from 'react'

import style from './Table.module.scss'

const Table = ({
  children
}) => (
  <div className={ style.wrapper }>
    <table>
      { children }
    </table>
  </div>
)

export default Table