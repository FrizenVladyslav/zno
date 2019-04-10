import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { EditorState } from 'draft-js'
import { Step, Button, Divider } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { css } from 'aphrodite'
import {
  convertHtmlToDraft,
  convertDraftToHtml,
  getEditorLength,
} from 'utils/wysiwygEditor'
import Loader from 'components/Loader'
import Editor from './Editor'

import * as lectionActions from 'actions/lection'

import styles from './styles'

class Lection extends Component {
  state = {
    loading: true,
    content: EditorState.createEmpty(),
    fixed: false,
  }

  componentDidMount = () => {
    this.getLectionInfo()
  }

  getLectionInfo = async () => {
    let newState = { loading: false }

    try {
      const { content } = await lectionActions.getById(
        this.props.match.params.id
      )
      if (content) newState.content = convertHtmlToDraft(content)
    } catch (e) {
      toast.error(e.message || e)
    } finally {
      this.setState(newState)
    }
  }

  handleEditLection = async (draft = true) => {
    try {
      if (!draft && !getEditorLength(this.state.content)) {
        throw new Error('Наповніть лекцію контентом')
      } else {
        await lectionActions.edit(this.props.match.params.id, {
          ...this.props.lection,
          draft,
          content: convertDraftToHtml(this.state.content),
        })
        this.getLectionInfo()
      }
    } catch (e) {
      toast.info(e.message || e)
    }
  }

  get steps() {
    const { lection } = this.props

    return [
      {
        key: 'info',
        icon: 'student',
        title: lection.lesson.title,
        description: lection.section.title,
      },
      {
        key: 'status',
        icon: 'book',
        active: lection.draft,
        completed: !lection.draft,
        title: lection.title,
        description: lection.draft ? 'У чорновику' : 'Опубліковано',
        style: { maxWidth: 600 },
      },
    ]
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loader height="40vh" />
        ) : (
          <>
            <Step.Group items={this.steps} />
            <Button.Group floated="right" className={css(styles.buttonGroup)}>
              <Button
                content="В чернетку"
                onClick={() => this.handleEditLection()}
              />
              <Button.Or text="або" />
              <Button
                positive
                content="Опублікувати"
                onClick={() => this.handleEditLection(false)}
              />
            </Button.Group>
            <Divider />
            <Editor
              content={this.state.content}
              onChange={content => this.setState({ content })}
            />
          </>
        )}
      </>
    )
  }
}

export default withRouter(
  // @ts-ignore
  connect(({ lection }) => ({
    lection: lection.lection,
  }))(Lection)
)
