import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import Auth from './Auth'
import Lesson from './Lesson'
import Lessons from './Lessons'
import Home from './Home'

class Public extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Auth} />
        <Route path="/lessons" component={Lessons} exact />
        <Route path="/lessons/:id" component={Lesson} />
      </Switch>
    )
  }
}

export default Public
