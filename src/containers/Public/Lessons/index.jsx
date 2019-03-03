import React from 'react'
import { Grid, GridColumn, Segment, Message } from 'semantic-ui-react'

import Header from 'components/Header'
import LessonsSidebar from 'components/LessonsSidebar'
import Item from './Item'

const Subjects = () => {
  return (
    <div>
      <Header />
      <Grid>
        <Grid.Column width={3}>
          <LessonsSidebar />
        </Grid.Column>
        <GridColumn width={12}>
          <Message info>
            <Message.Header>Was this what you wanted?</Message.Header>
            <p>Did you know it's been a while?</p>
          </Message>
          <Segment>
            <Item />
          </Segment>
        </GridColumn>
      </Grid>
    </div>
  )
}

export default Subjects
