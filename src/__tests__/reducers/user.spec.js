import reducer, { actionTypes } from 'reducers/user'

describe('user reducer', () => {
  const initState = { role: 'Anon' }

  it(actionTypes.SET, () => {
    const action = {
      type: actionTypes.SET,
      payload: { role: 'user' },
    }

    expect(reducer(initState, action)).toEqual(action.payload)
  })

  it(actionTypes.UNSET, () => {
    const action = { type: actionTypes.UNSET }

    expect(reducer({ role: 'user' }, action)).toEqual(initState)
  })
})
