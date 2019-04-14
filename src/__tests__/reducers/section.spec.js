import clone from 'lodash/clone'
import reducer, { actionTypes } from 'reducers/section'

describe('section reducer', () => {
  const initState = {
    sections: [],
  }

  it(actionTypes.ADD, () => {
    const action = {
      type: actionTypes.ADD,
      payload: { test: true },
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      sections: [...initState.sections, action.payload],
    })
  })

  it(actionTypes.EDIT, () => {
    const initState = {
      sections: [{ _id: 1, lessonId: 1, title: 'section' }],
    }
    const action = {
      type: actionTypes.EDIT,
      payload: { id: 1, section: 'section edited' },
    }
    const { id, title } = action.payload
    const sections = clone(initState.sections)

    sections[sections.findIndex(({ _id }) => _id === id)].title = title

    expect(reducer(initState, action)).toEqual({
      ...initState,
      sections,
    })
  })

  it(actionTypes.SET, () => {
    const action = {
      type: actionTypes.SET,
      payload: [1, 2, 3],
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      sections: action.payload,
    })
  })

  it(actionTypes.UNSET, () => {
    const state = { sections: [{ _id: 1, lessonId: 1, title: 'section' }] }
    const action = { type: actionTypes.UNSET }

    expect(reducer(state, action)).toEqual({ sections: null })
  })
})
