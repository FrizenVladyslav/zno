import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { ToastContainer } from 'react-toastify'

import Admin from '../Admin'
import Lesson from './Lesson'
import Lessons from './Lessons'
import Home from './Home'

import store from 'utils/store'
import history from 'utils/history'

class Wrapper extends Component {
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
              <Route path="/" component={Home} exact />
              <Route path="/admin" component={Admin} />
              <Route path="/lessons" component={Lessons} exact />
              <Route path="/lessons/:id" component={Lesson} />
            </Switch>
          </Router>
        </>
      </Provider>
    )
  }
}

export default Wrapper
