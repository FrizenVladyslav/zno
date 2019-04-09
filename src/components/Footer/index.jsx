import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'
import Logo from '../Logo'

import styles from './styles'

const Footer = props => {
  return (
    <Segment placeholder className={css(styles.footer)}>
      <Container>
        <div>
          <Logo style={{ alignSelf: 'flex-end' }} />
          <p>&copy; Всі права захищені)</p>
        </div>
        <ul>
          <li>Предмети:</li>
          {props.lessons &&
            props.lessons.map(lesson => (
              <li key={lesson._id}>
                <Link to={`/lessons/${lesson._id}`}>{lesson.title}</Link>
              </li>
            ))}
        </ul>
        <ul>
          <li>Інші посилання:</li>
          <li>
            <Link to="/login">Увійти</Link>
          </li>
          <li>
            <Link to="/lessons">Зайняття</Link>
          </li>
        </ul>
      </Container>
    </Segment>
  )
}

// @ts-ignore
export default connect(({ lesson }) => ({ lessons: lesson.lessons }))(Footer)
