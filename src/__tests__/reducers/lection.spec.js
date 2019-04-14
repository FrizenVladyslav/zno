import clone from 'lodash/clone'
import reducer, { actionTypes } from 'reducers/lection'

describe('lection reducer', () => {
  const initState = {
    lections: [],
    lection: null,
  }
  const initStateWithContent = {
    lections: [{ _id: 1, lessonId: 1, title: 'lection' }],
    lection: { _id: 'id', content: 'content' },
  }

  it(actionTypes.ADD, () => {
    const action = {
      type: actionTypes.ADD,
      payload: { test: true },
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      lections: [...initState.lections, action.payload],
    })
  })

  it(actionTypes.EDIT, () => {
    const action = {
      type: actionTypes.EDIT,
      payload: { id: 1, lection: 'lection edited' },
    }
    const { id, title } = action.payload
    const lections = clone(initStateWithContent.lections)

    lections[lections.findIndex(({ _id }) => _id === id)].title = title

    expect(reducer(initStateWithContent, action)).toEqual({
      ...initStateWithContent,
      lections,
    })
  })

  it(actionTypes.GET, () => {
    const action = {
      type: actionTypes.GET,
      payload: [1, 2, 3],
    }

    expect(reducer(initStateWithContent, action)).toEqual({
      ...initStateWithContent,
      lection: action.payload,
    })
  })

  it(actionTypes.SET, () => {
    const action = {
      type: actionTypes.SET,
      payload: [1, 2, 3],
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      lections: action.payload,
    })
  })

  it(actionTypes.UNSET, () => {
    const action = { type: actionTypes.UNSET }

    expect(reducer(initStateWithContent, action)).toEqual({
      lections: null,
      lection: null,
    })
  })
})
