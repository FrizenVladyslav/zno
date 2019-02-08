import React from 'react'

import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import styles from './styles'
import Logo from 'components/Logo'

const NavMenu = props => {
  return (
    <div className={css(styles.navMenu)}>
      <div className="header-logo">
        <Logo />
      </div>
      <ul>
        <li>
          <Link to="lessons">Предмети</Link>
        </li>
        <li>
          <Link to="rewiew">Відгуки</Link>
        </li>
        <li>
          <Link to="about-us">Про нас</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
