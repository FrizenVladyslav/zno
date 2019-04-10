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
    this.getInfo()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (
        prevProps.match.params.lessonId !== this.props.match.params.lessonId
      ) {
        lectionActions.unset()
      }
      this.getInfo()
    }
  }

  getInfo = async () => {
    const { params } = this.props.match

    try {
      await Promise.all([
        lessonActions.get(),
        params.lessonId && sectionActions.get(params.lessonId),
        params.sectionId && lectionActions.get({ section: params.sectionId }),
      ])
    } catch (e) {
      toast.error(e.message || e)
    }
  }

  get parentsInfo() {
    const {
      match: { params },
      lessons,
      sections,
    } = this.props
    let lesson =
      params.lessonId && lessons.find(({ _id }) => _id === params.lessonId)
    let section =
      sections && sections.find(({ _id }) => _id === params.sectionId)

    return {
      lesson,
      section,
    }
  }

  handleCreateLection = async title => {
    const { lesson, section } = this.parentsInfo

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
      await sectionActions.add(title, this.parentsInfo.lesson._id)
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
    const lection = this.props.lections.find(({ _id }) => _id === id)

    try {
      await lectionActions.edit(id, { ...lection, title })
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
          onSelect={({ _id }) => history.push(`/admin/lessons/${_id}`)}
        />
        <List
          title="Розділи"
          list={this.props.sections}
          disabledAddButton={!this.parentsInfo.lesson}
          onAdd={() =>
            this.handleChangeModal(
              'Створити розділ',
              this.handleCreateSection,
              this.parentsInfo.lesson.title
            )
          }
          onEdit={item =>
            this.handleChangeModal(
              'Редагувати розділ',
              this.handleEditeSection,
              this.parentsInfo.lesson.title,
              item.title,
              item._id
            )
          }
          onSelect={({ _id }) =>
            history.push(`/admin/lessons/${this.parentsInfo.lesson._id}/${_id}`)
          }
        />
        <List
          title="Лекції"
          list={this.props.lections}
          disabledAddButton={!this.parentsInfo.section}
          onAdd={() =>
            this.handleChangeModal(
              'Створити лекцію',
              this.handleCreateLection,
              this.parentsInfo.section.title
            )
          }
          onEdit={item =>
            this.handleChangeModal(
              'Редагувати лекцію',
              this.handleEditeLection,
              this.parentsInfo.section.title,
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

// @ts-ignore
export default connect(({ lesson, section, lection }) => ({
  lessons: lesson.lessons,
  sections: section.sections,
  lections: lection.lections,
}))(Lessons)
