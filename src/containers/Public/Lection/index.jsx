import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Grid, Container, Breadcrumb, Divider } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { css } from 'aphrodite'
import LessonsSidebar from 'components/LessonsSidebar'
import Loader from 'components/Loader'
import Header from 'components/Header'

import * as lectionActions from 'actions/lection'
import * as lessonActions from 'actions/lesson'

import styles from './styles'

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
    const { lection, lessons } = this.props

    return (
      <>
        <Header />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Container fluid>
            <Grid>
              <Grid.Column
                computer={13}
                mobile={16}
                className={css(styles.content)}
              >
                <Breadcrumb>
                  <Breadcrumb.Section
                    as={Link}
                    link
                    to={`/lessons/${lection.lesson._id}/${lection.section._id}`}
                  >
                    {lection.section.title}
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider icon="right arrow" />
                  <Breadcrumb.Section active>
                    {lection.title}
                  </Breadcrumb.Section>
                </Breadcrumb>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: lection.content }} />
              </Grid.Column>
              <Grid.Column computer={3} mobile={16}>
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
