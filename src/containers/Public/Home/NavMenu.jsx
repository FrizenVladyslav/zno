import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import Logo from 'components/Logo'

import styles from './styles'

const NavMenu = props => {
  return (
    <div className={css(styles.navMenu)}>
      <div className="header-logo">
        <Logo />
      </div>
      <ul>
        <li>
          <Link to="/lessons">Предмети</Link>
        </li>
        <li>
          <Link to="/login">Увійти</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
