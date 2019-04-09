import React from 'react'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import { css } from 'aphrodite'

import styles from './styles'

const DescriptionBlock = props => {
  return (
    <Grid centered>
      <Grid.Row columns={2} className={css(styles.descRow)}>
        <Grid.Column
          style={props.invert && { order: 2 }}
          computer={8}
          mobile={16}
          tablet={12}
        >
          <Image src={props.img} />
        </Grid.Column>
        <Grid.Column
          className="description"
          computer={8}
          mobile={16}
          tablet={12}
        >
          <h4>{props.text}</h4>
          <Button animated primary onClick={props.onClick}>
            <Button.Content visible>Перейти</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DescriptionBlock
