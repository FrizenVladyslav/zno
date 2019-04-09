import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router'
import { toast } from 'react-toastify'
import { Grid, Segment, Message } from 'semantic-ui-react'
import isEqual from 'lodash/isEqual'
import Header from 'components/Header'
import LessonsSidebar from 'components/LessonsSidebar'
import Cards from './Cards'
import Lections from './Lections'

import * as lessonActions from 'actions/lesson'
import * as sectionActions from 'actions/section'

class Lessons extends Component {
  state = {
    loading: true,
  }

  componentDidMount = () => {
    this.loadLessons()
  }

  componentDidUpdate = prevProps => {
    if (!isEqual(this.props.match.params, prevProps.match.params)) {
      this.setState({ loading: true }, () => {
        sectionActions.unset()
        this.loadLessons()
      })
    }
  }

  loadLessons = async () => {
    const { lessons, match } = this.props
    try {
      await Promise.all([
        !lessons && lessonActions.get(),
        match.params.lessonId && sectionActions.get(match.params.lessonId),
      ])
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { lessons, sections, match } = this.props

    return (
      <div>
        <Header />
        <Grid>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <LessonsSidebar
              activeLesson={match.params.lessonId}
              lessons={lessons}
              secondary
            />
          </Grid.Column>
          <Grid.Column computer={12} tablet={12} mobile={16}>
            {!match.params.lessonId && lessons && (
              <Redirect
                from="/lessons"
                to={`/lessons/${lessons[0]._id}`}
                exact
              />
            )}
            <Segment loading={this.state.loading} style={{ minHeight: '40vh' }}>
              {!match.sectionId && (
                <Message info>
                  <Message.Header>Оберіть розділ</Message.Header>
                  <p>Оберіть розділ, який цікавить Вас по данному предмету</p>
                </Message>
              )}
              <Switch>
                <Route
                  path="/lessons/:lessonId?"
                  exact
                  render={() => (
                    <Cards
                      sections={sections}
                      activeLesson={match.params.lessonId}
                    />
                  )}
                />
                <Route
                  path="/lessons/:lessonId/:sectionId"
                  exact
                  component={Lections}
                />
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(
  // @ts-ignore
  connect(({ lesson, section }) => ({
    lessons: lesson.lessons,
    sections: section.sections,
  }))(Lessons)
)
