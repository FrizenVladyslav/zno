import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import Footer from 'components/Footer'

const mockStore = configureStore()
let store

describe('footer', () => {
  beforeEach(() => {
    store = mockStore({})
  })
  it('footer lessons', () => {
    const lessons = []

    const footer = shallow(<Footer lessons={lessons} />)
  })
})
