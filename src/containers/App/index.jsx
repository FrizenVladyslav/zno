import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import Admin from '../Admin'
import Public from '../Public'
import AppLoading from 'components/Loader'
import PrivateRoute from 'components/PrivateRouter'

import history from 'utils/history'
import store from 'utils/store'
import * as userActions from 'actions/user'

class App extends Component {
  state = {
    initialized: false,
  }

  componentDidMount = () => {
    this.loadUser()
  }

  loadUser = async () => {
    try {
      await userActions.getUserInfo()
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ initialized: true })
    }
  }

  render = () => {
    return (
      <Provider store={store}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          pauseOnHover
          toastClassName="toast-container"
        />
        {this.state.initialized ? (
          <Router history={history}>
            <Switch>
              <PrivateRoute roles={['admin']} path="/admin" component={Admin} />
              <Route path="/" component={Public} />
            </Switch>
          </Router>
        ) : (
          <AppLoading />
        )}
      </Provider>
    )
  }
}

export default App
