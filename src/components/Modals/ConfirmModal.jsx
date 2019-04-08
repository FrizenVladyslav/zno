import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'

const ConfirmModal = props => {
  return (
    <Modal open={props.open} basic size="small" onClose={props.onClose}>
      <Header icon={props.icon || 'archive'} content={props.title} />
      <Modal.Content>
        <p>{props.message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={props.onClose}>
          <Icon name="remove" /> Скасувати
        </Button>
        <Button
          color="green"
          inverted
          onClick={props.onSuccess || props.onClose}
        >
          <Icon name="checkmark" /> Підтвердити
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default ConfirmModal
