import React from 'react'
import {
  Tab,
  Segment,
  Divider,
  Grid,
  Icon,
  Header as SemanticHeader,
} from 'semantic-ui-react'
import { css } from 'aphrodite'
import Header from 'components/Header'
import Login from './Login'
import Register from './Register'

import styles from './styles'

const panes = [
  {
    menuItem: 'Увійти',
    render: () => (
      <Tab.Pane attached={false}>
        <Login />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Зареєструватися',
    render: () => (
      <Tab.Pane attached={false}>
        <Register />
      </Tab.Pane>
    ),
  },
]

const Auth = () => (
  <>
    <Header />
    <Grid container centered>
      <Grid.Column computer={10} tablet={12} mobile={16}>
        <Segment>
          <Segment raised>
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical className={css(styles.divider)}>
                Або
              </Divider>
              <Grid.Row verticalAlign="middle" only="computer">
                <Grid.Column>
                  <SemanticHeader icon color="blue">
                    <Icon name="sign-in alternate" />
                    Увійди
                  </SemanticHeader>
                </Grid.Column>
                <Grid.Column>
                  <SemanticHeader icon>
                    <Icon name="paste" />
                    Зареєструйся
                  </SemanticHeader>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Segment>
      </Grid.Column>
    </Grid>
  </>
)

export default Auth
