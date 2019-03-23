import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { Grid, Container } from 'semantic-ui-react'
import { css } from 'aphrodite/no-important'
import Lection from './Lection'
import Lessons from './Lessons'
import Sidebar from './Sidebar'

import styles from './styles'

const Admin = props => {
  return (
    <Grid className={css(styles.container)}>
      <Grid.Column computer={2}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column computer={14}>
        <Container fluid className={css(styles.container)}>
          <Switch>
            <Redirect from="/admin" to="/admin/lessons" exact />
            <Route path="/admin/lessons" component={Lessons} exact />
            <Route path="/admin/edit-lection/:id" component={Lection} exact />
          </Switch>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default Admin
