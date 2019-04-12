import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { css } from 'aphrodite'
import Logo from 'components/Logo'

import styles from './styles'

const Sidebar = props => {
  const activeLink = props.location.pathname.split('/')[2]

  return (
    <Menu vertical className={css(styles.sidebar)}>
      <Menu.Item className={css(styles.logo)}>
        <Logo />
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Керування</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            active={activeLink === 'lessons'}
            as={Link}
            name="Предмети"
            to="/admin/lessons"
          />
          <Menu.Item
            active={activeLink === 'users'}
            as={Link}
            name="Користувачі"
            to="/admin/users"
          />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(Sidebar)
