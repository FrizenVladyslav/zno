// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Button, Item, Icon, Label } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from '../styles'

const LectionsItems = ({ lection, lectionInfo }) => {
  const { lesson, section } = lectionInfo

  return (
    <Segment color="teal">
      <Label color="orange" ribbon>
        {section.title}
      </Label>
      <Button primary floated="right" as={Link} to={`/lections/${lection._id}`}>
        Перейти
        <Icon name="right chevron" />
      </Button>
      <Item className={css(styles.item)}>
        <Item.Header as={Link} to={`/lections/${lection._id}`}>
          {lection.title}
        </Item.Header>
        <Item.Meta>{lesson.title}</Item.Meta>
      </Item>
    </Segment>
  )
}

export default LectionsItems
