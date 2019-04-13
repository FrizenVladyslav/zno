// @ts-nocheck
import configureStore from 'redux-mock-store'
import { actionTypes } from 'reducers/lesson'

const storeMock = configureStore()
const store = storeMock()

describe('LessonActions', () => {
  afterEach(() => {
    store.clearActions()
  })

  it('add lesson action', () => {
    store.dispatch({ type: actionTypes.ADD, payload: { title: 1 } })
    expect(store.getActions()).toMatchSnapshot()
  })

  it('get lessons action', () => {
    store.dispatch({ type: actionTypes.SET, payload: [1, 2, 3] })
    expect(store.getActions()).toMatchSnapshot()
  })
})
