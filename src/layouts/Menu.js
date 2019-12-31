import React from 'react'
import { MdHome } from 'react-icons/md' 
import { Link } from "gatsby"

import style from './Menu.module.scss'

const Menu = () => (
  <div className={style.menu}>
    <Link to='/' className={style.home} activeClassName={style.homeActive} title='Home'>
      <MdHome />
    </Link>
  </div>
)

export default Menu