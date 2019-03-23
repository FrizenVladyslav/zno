import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import clone from 'lodash/clone'
import history from 'utils/history'
import InputModal from 'components/Modals/InputModal'
import List from '../List'

import * as lectionActions from 'actions/lection'
import * as lessonActions from 'actions/lesson'
import * as sectionActions from 'actions/section'

const initModal = {
  label: '',
  value: '',
  title: '',
  open: false,
  onSuccess: null,
}

class Lessons extends Component {
  state = {
    modal: clone(initModal),
  }

  componentDidMount = () => {
    this.getLessons()
  }

  getLessons = async () => {
    try {
      lessonActions.get()
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  handleCreateLection = async title => {
    const { lesson, section } = this.state

    try {
      await lectionActions.add({
        title,
        lessonId: lesson._id,
        sectionId: section._id,
      })
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleCreateLesson = async title => {
    try {
      await lessonActions.add(title)
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleCreateSection = async title => {
    try {
      await sectionActions.add(title, this.state.lesson._id)
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleChangeModal = (title, onSuccess, label, value = '', id) => {
    this.setState({
      modal: { open: true, label, value, title, onSuccess, id },
    })
  }

  handleEditeLection = async title => {
    const { id } = this.state.modal

    try {
      await lectionActions.edit({ id, title })
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleEditeLesson = async title => {
    const { id } = this.state.modal

    try {
      await lessonActions.edit(id, title)
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleEditeSection = async title => {
    const { id } = this.state.modal

    try {
      await sectionActions.edit(id, title)
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState({ modal: clone(initModal) })
    }
  }

  handleSelectLesson = async lesson => {
    try {
      await sectionActions.get(lesson._id)
      this.setState({ lesson })
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  handleSelectSection = async section => {
    try {
      await lectionActions.get({ section: section._id })
      this.setState({ section })
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  render() {
    const { modal } = this.state

    return (
      <Grid columns={3}>
        <List
          title="Предмети"
          list={this.props.lessons}
          onAdd={() =>
            this.handleChangeModal(
              'Створити предмет',
              this.handleCreateLesson,
              'Новий предмет'
            )
          }
          onEdit={item =>
            this.handleChangeModal(
              'Редагувати предмет',
              this.handleEditeLesson,
              item.title,
              item.title,
              item._id
            )
          }
          onSelect={this.handleSelectLesson}
        />
        <List
          title="Розділи"
          list={this.props.sections}
          disabledAddButton={!this.state.lesson}
          onAdd={() =>
            this.handleChangeModal(
              'Створити розділ',
              this.handleCreateSection,
              this.state.lesson.title
            )
          }
          onEdit={item =>
            this.handleChangeModal(
              'Редагувати розділ',
              this.handleEditeSection,
              this.state.lesson.title,
              item.title,
              item._id
            )
          }
          onSelect={this.handleSelectSection}
        />
        <List
          title="Лекції"
          list={this.props.lections}
          disabledAddButton={!this.state.section}
          onAdd={() =>
            this.handleChangeModal(
              'Створити лекцію',
              this.handleCreateLection,
              this.state.section.title
            )
          }
          onEdit={item =>
            this.handleChangeModal(
              'Редагувати лекцію',
              this.handleEditeLection,
              this.state.section.title,
              item.title,
              item._id
            )
          }
          onSelect={item => history.push(`/admin/edit-lection/${item._id}`)}
        />
        <InputModal
          defaultValue={modal.value}
          label={modal.label}
          open={modal.open}
          placeholder="Назва"
          title={modal.title}
          onClose={() => this.setState({ modal: clone(initModal) })}
          onSuccess={modal.onSuccess}
        />
      </Grid>
    )
  }
}

export default connect(state => ({
  // @ts-ignore
  lessons: state.lesson.lessons,
  // @ts-ignore
  sections: state.section.sections,
  // @ts-ignore
  lections: state.lection.lections,
}))(Lessons)
