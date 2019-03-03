import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { css } from 'aphrodite'

import styles from './styles'
import Logo from '../Logo'

const Header = () => {
  return (
    <Menu stackable className={css(styles.menu)}>
      <Menu.Header>
        <Logo />
      </Menu.Header>
      <Menu.Menu position="right">
        <Menu.Item name="features">Features</Menu.Item>
        <Menu.Item name="testimonials">Testimonials</Menu.Item>
        <Menu.Item name="sign-in" link as={NavLink} to="login">
          Sign-in
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
