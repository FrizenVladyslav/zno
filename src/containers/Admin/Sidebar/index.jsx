import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Menu } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from './styles'
import Logo from 'components/Logo'

class Sidebar extends Component {
  render() {
    return (
      <Menu vertical className={css(styles.sidebar)}>
        <Menu.Item className={css(styles.logo)}>
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Керування</Menu.Header>
          <Menu.Menu>
            <Menu.Item name="Предмети" />
            <Menu.Item name="Користувачі" />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Sidebar)
