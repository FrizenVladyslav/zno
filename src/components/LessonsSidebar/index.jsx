import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from './styles'

const Sidebar = ({ lessons, activeLesson, ...rest }) => {
  return (
    <Menu vertical pointing className={css(styles.sidebar)} {...rest}>
      <Menu.Item header>Предмет</Menu.Item>
      {lessons &&
        lessons.map(lesson => (
          <Menu.Item
            as={Link}
            to={`/lessons/${lesson._id}`}
            name={lesson.title}
            key={lesson._id}
            active={activeLesson === lesson._id}
          />
        ))}
    </Menu>
  )
}

export default Sidebar
