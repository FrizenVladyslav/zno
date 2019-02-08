import React from 'react'

import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'
import styles from './styles'

const Logo = props => {
  return (
    <Link to="/" className={css(styles.logo)}>
      <Icon name="student" size="huge" />
      <h2>Краще за всіх</h2>
    </Link>
  )
}

export default Logo
