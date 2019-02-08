import React from 'react'

import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import { css } from 'aphrodite'
import styles from './styles'

const DescriptionRow = ({ img, text, invert }) => {
  return (
    <Grid.Row columns={2} className={css(styles.descRow)}>
      <Grid.Column style={invert && { order: 2 }}>
        <Image src={img} />
      </Grid.Column>
      <Grid.Column className="description">
        <h4>{text}</h4>
        <Button animated primary>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Grid.Column>
    </Grid.Row>
  )
}

export default DescriptionRow
