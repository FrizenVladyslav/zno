import clone from 'lodash/clone'
import reducer, { actionTypes } from 'reducers/lesson'

const initState = {
  lessons: [],
}

describe(actionTypes.ADD, () => {
  it('add lesson', () => {
    const action = {
      type: actionTypes.ADD,
      payload: { test: true },
    }
    expect(reducer(initState, action)).toEqual({
      ...initState,
      lessons: [...initState.lessons, action.payload],
    })
  })

  it(actionTypes.EDIT, () => {
    const initState = {
      lessons: [{ _id: 1, title: 'lesson' }],
    }
    const action = {
      type: actionTypes.EDIT,
      payload: { id: 1, lesson: 'lesson edited' },
    }
    const { id, title } = action.payload
    const lessons = clone(initState.lessons)
    lessons[lessons.findIndex(({ _id }) => _id === id)].title = title

    expect(reducer(initState, action)).toEqual({
      ...initState,
      lessons,
    })
  })

  it(actionTypes.SET, () => {
    const action = {
      type: actionTypes.SET,
      payload: [1, 2, 3],
    }

    expect(reducer(initState, action)).toEqual({
      ...initState,
      lessons: action.payload,
    })
  })
})
