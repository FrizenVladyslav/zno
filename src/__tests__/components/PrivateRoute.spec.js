import React from 'react'
import { shallow } from 'enzyme'
import { PrivateRoute } from 'components/PrivateRouter'

describe('private route', () => {
  describe('access closed', () => {
    const initProps = {
      roles: ['admin'],
      role: 'user',
    }
    const privateRoute = shallow(<PrivateRoute {...initProps} />)
    it('render properly', () => {
      expect(privateRoute).toMatchSnapshot()
    })

    it('render redirect', () => {
      expect(privateRoute.text()).toBe('<Redirect />')
    })

    describe('redirect with props', () => {
      const privateRoute = shallow(
        <PrivateRoute {...initProps} redirectTo="/path" />
      )

      it('redirect path correct', () => {
        expect(privateRoute.props().to).toBe('/path')
      })
    })
  })

  describe('access successful', () => {
    const initProps = {
      roles: ['admin'],
      role: 'admin',
    }
    const privateRoute = shallow(<PrivateRoute {...initProps} />)

    it('render route', () => {
      expect(privateRoute.text()).toBe('<Route />')
    })
  })
})
