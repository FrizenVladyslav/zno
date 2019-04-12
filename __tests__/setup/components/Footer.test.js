import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import Footer from 'components/Footer'

describe('<Footer />', () => {
  describe('render()', () => {
    test('render the component', () => {
      const wrapper = shallow(<Footer />)
      const component = wrapper.dive()

      expect(toJson(component)).toMatchJson()
    })
  })
})