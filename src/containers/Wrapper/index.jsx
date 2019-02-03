import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { ToastContainer } from 'react-toastify'

import Home from '../Public'
import store from 'store'
import history from 'utils/history'

class Wrapper extends Component {
  static hello() {
    console.log('hello')
  }

  render() {
    return (
      <Provider store={store}>
        <>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            pauseOnHover
            toastClassName="toast-container"
          />
          <Router history={history}>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </>
      </Provider>
    )
  }
}

export default Wrapper
