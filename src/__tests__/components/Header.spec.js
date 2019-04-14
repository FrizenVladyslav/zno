import React from 'react'
import { shallow } from 'enzyme'
import { Header } from 'components/Header'
import { StyleSheetTestUtils } from 'aphrodite'

describe('header', () => {
  afterEach(() => {
    return new Promise(resolve => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
      return process.nextTick(resolve)
    })
  })

  const initUser = {
    _id: 'id',
    nick: 'nick',
  }

  describe('if user unlogin', () => {
    const header = shallow(<Header user={{}} />)
    it('renders properly', () => {
      expect(header).toMatchSnapshot()
    })

    it('menu have 2 items', () => {
      expect(header.find('MenuItem')).toHaveLength(2)
    })

    it('menu have login', () => {
      expect(
        header
          .find('MenuItem')
          .last()
          .props().children
      ).toBe('Увійти')
    })
  })

  describe('if user login', () => {
    const header = shallow(<Header user={initUser} />)
    it('renders properly', () => {
      expect(header).toMatchSnapshot()
    })

    it('menu have 2 items', () => {
      expect(header.find('MenuItem')).toHaveLength(2)
    })

    it('menu have logout', () => {
      expect(
        header
          .find('MenuItem')
          .last()
          .props().children
      ).toBe(initUser.nick)
    })
  })

  describe('if user admin', () => {
    const header = shallow(<Header user={{ ...initUser, role: 'admin' }} />)
    it('renders properly', () => {
      expect(header).toMatchSnapshot()
    })

    it('menu have 3 items', () => {
      expect(header.find('MenuItem')).toHaveLength(3)
    })
  })
})
