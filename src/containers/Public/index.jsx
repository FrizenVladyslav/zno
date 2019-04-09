import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Footer from 'components/Footer'
import Auth from './Auth'
import Lection from './Lection'
import Lessons from './Lessons'
import Home from './Home'

class Public extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Auth} />
          <Route path="/lections/:id" component={Lection} exact />
          <Route
            path="/lessons/:lessonId?/:sectionId?"
            component={Lessons}
            exact
          />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Public
