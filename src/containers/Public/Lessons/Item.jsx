import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Button, Item, Icon } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from './styles'

const LessonIntem = props => {
  return (
    <Segment color="teal">
      <Button primary floated="right">
        Перейти
        <Icon name="right chevron" />
      </Button>
      <Item className={css(styles.item)}>
        <Item.Header as={Link} to="/lessons/1">
          Watchmenas'd'asdlasdlas'dlsdjsipajdsapjdasd sadjpasokd[oaskd[as]]
        </Item.Header>
        <Item.Meta>Meta</Item.Meta>
      </Item>
    </Segment>
  )
}

export default LessonIntem
