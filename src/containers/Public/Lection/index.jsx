import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Grid, Container, Breadcrumb } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import LessonsSidebar from 'components/LessonsSidebar'
import Loader from 'components/Loader'
import Header from 'components/Header'

import * as lectionActions from 'actions/lection'
import * as lessonActions from 'actions/lesson'

class Lesson extends Component {
  state = {
    loading: true,
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = async () => {
    try {
      await Promise.all([
        !this.props.lessons && lessonActions.get(),
        lectionActions.getById(this.props.match.params.id),
      ])
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { lection, lessons, match } = this.props

    return (
      <>
        <Header />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Container fluid>
            <Grid>
              <Grid.Column width={13}>
                <Breadcrumb>
                  <Breadcrumb.Section link>Home</Breadcrumb.Section>
                  <Breadcrumb.Divider icon='right chevron' />
                  <Breadcrumb.Section link>Registration</Breadcrumb.Section>
                  <Breadcrumb.Divider icon='right arrow' />
                  <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
                </Breadcrumb>
                <div />
              </Grid.Column>
              <Grid.Column width={3}>
                <LessonsSidebar
                  activeLesson={lection.lesson._id}
                  lessons={lessons}
                  tabular="right"
                />
              </Grid.Column>
            </Grid>
          </Container>
        )}
      </>
    )
  }
}

export default withRouter(
  // @ts-ignore
  connect(({ lesson, lection }) => ({
    lessons: lesson.lessons,
    lection: lection.lection,
  }))(Lesson)
)
