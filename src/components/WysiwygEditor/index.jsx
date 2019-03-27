import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import { getLengthOfSelectedText } from 'utils/wysiwygEditor'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class WysiwygEditor extends Component {
  handleBeforeInput = () => {
    if (
      this.props.maxLength &&
      this.props.editorLength >= this.props.maxLength
    ) {
      return 'handled'
    }
  }

  handleReturn = (e, state) => {
    let editorBox = document.querySelector('.DraftEditor-root')

    if (this.props.editorState.isSelectionAtEndOfContent()) {
      setImmediate(() => editorBox.scroll(100000000, 10000000))
    }
    if (
      this.props.maxLength &&
      this.props.editorLength >= this.props.maxLength
    ) {
      return 'handled'
    }

    return 'not-handled'
  }

  handlePastedText = (pastedText, html, editorState) => {
    const { maxLength } = this.props
    const currentContent = editorState.getCurrentContent()
    const currentContentLength = currentContent.getPlainText('').length
    const selectedTextLength = getLengthOfSelectedText(editorState)
    let editorBox = document.querySelector('.DraftEditor-root')

    if (
      maxLength &&
      currentContentLength + pastedText.length - selectedTextLength > maxLength
    ) {
      return 'handled'
    }

    if (editorState.isSelectionAtEndOfContent()) {
      setImmediate(() => editorBox.scroll(100000000, 10000000))
    }

    return 'not-handled'
  }

  render() {
    const { editorLength, ...rest } = this.props

    return (
      <Editor
        handleBeforeInput={this.handleBeforeInput}
        // @ts-ignore
        handlePastedText={this.handlePastedText}
        handleReturn={this.handleReturn}
        {...rest}
      />
    )
  }
}

WysiwygEditor.propTypes = {
  editorState: PropTypes.any.isRequired,
  editorLength: PropTypes.number,
  editorClassName: PropTypes.string,
  maxLength: PropTypes.number,
  onEditorStateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  toolbar: PropTypes.object,
}

export default WysiwygEditor
