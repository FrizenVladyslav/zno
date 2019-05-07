import React from 'react'
import { shallow } from 'enzyme'
import ConfirmModal from 'components/Modals/ConfirmModal'

describe('confirm modal', () => {
  const initProps = {
    icon: 'icon',
    message: 'message',
    open: true,
    onClose: jest.fn(),
    onSuccess: jest.fn(),
    title: 'title',
  }
  const confirmModal = shallow(<ConfirmModal {...initProps} />)

  describe('confirm modal is open', () => {
    it('render properly', () => {
      expect(confirmModal).toMatchSnapshot()
    })
  })

  describe('when clicking close button', () => {
    beforeEach(() => {
      confirmModal
        .find('Button')
        .first()
        .simulate('click')
    })

    it('call the props.onClose', () => {
      expect(initProps.onClose).toBeCalledTimes(1)
    })
  })

  describe('when clicking success button', () => {
    beforeEach(() => {
      confirmModal
        .find('Button')
        .last()
        .simulate('click')
    })

    it('call the props.onSuccess', () => {
      expect(initProps.onSuccess).toBeCalledTimes(1)
    })
  })
})
