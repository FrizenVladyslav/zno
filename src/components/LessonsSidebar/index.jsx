import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from './styles'

const Sidebar = () => {
  return (
    <Menu vertical className={css(styles.sidebar)}>
      <Menu.Item header>Предмет</Menu.Item>
      <Menu.Item name="Українська мова" />
    </Menu>
  )
}

export default Sidebar
