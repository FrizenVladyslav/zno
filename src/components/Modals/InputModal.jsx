import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Input } from 'semantic-ui-react'

const InputModal = props => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Modal size="mini" open={props.open} onClose={props.onClose}>
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
        <Input
          defaultValue={props.defaultValue || ''}
          label={{ tag: !!props.label, content: props.label }}
          labelPosition="right"
          placeholder={props.placeholder}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={props.onClose}
          content="Cкасувати"
          icon="close"
        />
        <Button
          positive
          icon="checkmark"
          content="Підтвердити"
          onClick={() => props.onSuccess(inputValue)}
        />
      </Modal.Actions>
    </Modal>
  )
}

InputModal.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
}

export default InputModal
