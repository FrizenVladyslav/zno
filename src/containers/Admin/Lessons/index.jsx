import React from 'react'
import { Grid } from 'semantic-ui-react'

import List from '../List'

const Lessons = props => {
  return (
    <Grid columns={3}>
      <List title="Предмети" />
      <List title="Розділи" />
      <List title="Лекції" />
    </Grid>
  )
}

export default Lessons
