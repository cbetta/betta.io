import React from 'react'
import { MdHome } from 'react-icons/md' 
import { Link } from "gatsby"

import style from './Menu.module.scss'

const Menu = ({ path }) => (
  <div className={style.menu} data-path={path}>
    <div>
      <Link to='/' className={style.home} activeClassName={style.homeActive} title='Home'>
        <MdHome />
      </Link>
      <span>Cristiano Betta</span>
    </div>
  </div>
)

export default Menu