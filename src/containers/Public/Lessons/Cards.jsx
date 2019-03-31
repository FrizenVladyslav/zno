import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import { css } from 'aphrodite'
import Placeholder from 'components/Placeholder'

import styles from './styles'

const Cards = ({ sections, activeLesson }) => {
  return !sections ? (
    <Placeholder paragraphs={[3, 4]} />
  ) : (
    <Card.Group className={css(styles.cardGroup)}>
      {sections.map(section => (
        <Card
          key={section._id}
          as={Link}
          to={`/lessons/${activeLesson}/${section._id}`}
        >
          <Card.Content header={section.title} />
          <Card.Content extra>
            <Icon name="tag" />
            Кількість лекцій - {section.lectionsCount}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}

export default Cards
