import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { Grid, Container } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'

import styles from './styles'
import Sidebar from './Sidebar'
import Lessons from './Lessons'

const Admin = props => {
  return (
    <Grid>
      <Grid.Column computer={3}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column computer={13}>
        <Container fluid>
          <Switch>
            <Redirect from="/admin" to="/admin/lessons" exact />
            <Route path="/admin/lessons" component={Lessons} exact />
          </Switch>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default Admin
