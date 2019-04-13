import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { css } from 'aphrodite'
import Logo from '../Logo'
import ConfirmModal from '../Modals/ConfirmModal'

import * as userActions from 'actions/user'

import styles from './styles'

const Header = props => {
  const [modal, triggerModal] = useState(false)

  return (
    <>
      <Menu stackable className={css(styles.menu)}>
        <Menu.Header>
          <Logo />
        </Menu.Header>
        <Menu.Menu position="right">
          {props.user.role === 'admin' && (
            <Menu.Item name="admin" link as={NavLink} to="/admin">
              Адміністрування
            </Menu.Item>
          )}
          <Menu.Item name="lessons" link as={NavLink} to="/lessons">
            Предмети
          </Menu.Item>
          {!!props.user._id ? (
            <Menu.Item link onClick={() => triggerModal(true)}>
              {props.user.nick}
            </Menu.Item>
          ) : (
            <Menu.Item as={NavLink} link name="sign-in" to="/login">
              Увійти
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
      <ConfirmModal
        icon="sign-out"
        message="Ви дійсно бажаєте вийти?"
        open={modal}
        onClose={() => triggerModal(false)}
        onSuccess={userActions.signOut}
        title="Вийти"
      />
    </>
  )
}

// @ts-ignore
export default connect(({ user }) => ({ user }))(Header)
