// @ts-nocheck
import React from 'react'
import { shallow } from 'enzyme'
import InputModal from 'components/Modals/InputModal'

describe('input modal', () => {
  const initProps = {
    onClose: jest.fn(),
    onSuccess: jest.fn(),
    open: true,
  }

  describe('render with props', () => {
    const initInputProps = {
      defaultValue: 'defaultValue',
      label: 'label',
      placeholder: 'placeholder',
    }
    const props = Object.assign(initProps, initInputProps, { title: 'title' })
    const inputModal = shallow(<InputModal {...props} />)

    it('renders properly', () => {
      expect(inputModal).toMatchSnapshot()
    })

    it('opened input modal correct rendered with props', () => {
      const expectedInputProps = {
        ...initInputProps,
        label: { tag: true, content: initInputProps.label },
      }
      const { label, placeholder, defaultValue } = inputModal
        .find('Input')
        .props()

      expect({ label, placeholder, defaultValue }).toEqual(expectedInputProps)
      expect(inputModal.find('ModalHeader').props().children).toBe(props.title)
    })
  })

  describe('when click the cancel button', () => {
    const inputModal = shallow(<InputModal {...initProps} />)

    beforeEach(() => {
      inputModal
        .find('Button')
        .first()
        .simulate('click')
    })

    it('call the props.onClose', () => {
      expect(initProps.onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('when click the success button', () => {
    const inputModal = shallow(<InputModal {...initProps} />)

    beforeEach(() => {
      inputModal
        .find('Button')
        .last()
        .simulate('click')
    })

    it('call the props.onSuccess', () => {
      expect(initProps.onSuccess).toBeCalledTimes(1)
    })
  })
})
